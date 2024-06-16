import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Typography, Button, TextField, Divider, ListItem, ListItemText, IconButton, Box, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAuth } from '@/context/AuthContext';

const PostDetailsPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { isAdmin } = useAuth();
  const [post, setPost] = useState<any>(null);
  const [comments, setComments] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState('');

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        setPost(data);
        setNewTitle(data.title);
      };

      const fetchComments = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        const data = await response.json();
        setComments(data);
      };

      fetchPost();
      fetchComments();
    }
  }, [id]);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setPost({ ...post, title: newTitle });
    setEditMode(false);
  };

  const handleDeleteComment = (commentId: number) => {
    setComments(comments.filter(comment => comment.id !== commentId));
  };

  if (!post) return <div>Loading...</div>;

  return (
    <Container sx={{ padding: 3 }}>
      {isAdmin && (editMode ? (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
          <Button variant="outlined" sx={{ padding: 1, marginY: 1 }} onClick={handleSave}>Save New Title</Button>
        </Box>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
          <Button variant="outlined" sx={{ padding: 1, marginY: 1 }} onClick={handleEdit}>Edit Title</Button>
        </Box>
      ))}
      <Typography sx={{ paddingY: 1 }} variant="h4">{editMode ? (
        <TextField fullWidth label="Blog Title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
      ) : (
        post.title
      )}</Typography>

      <Typography sx={{ paddingY: 1 }} variant="body1">{post.body}</Typography>
      <Typography sx={{ paddingY: 1 }} variant="h5">Comments</Typography>
      
      <Box sx={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', marginBottom: '16px' }}>
        {comments.map((comment: any, index: number) => (
          <Box key={comment.id} sx={{ marginBottom: '8px' }}>
            <Grid container alignItems="center">
              <Grid item xs={10} padding={2}>
                <Typography variant="body1">{comment.body}</Typography>
              </Grid>
              {isAdmin && (
                <Grid item xs={2} textAlign="right">
                  <IconButton onClick={() => handleDeleteComment(comment.id)}>
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              )}
            </Grid>
            {index < comments.length - 1 && <Divider variant="middle" />}
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default PostDetailsPage;
