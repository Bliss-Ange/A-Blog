import React, { useEffect, useState, useContext } from 'react';
import { List, ListItem, Box, Typography, Pagination, Stack, IconButton } from '@mui/material';
import Link from 'next/link';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAuth } from '@/context/AuthContext'; 

interface Post {
  id: number;
  title: string;
  body: string;
}

const placeholderImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx3g-_IIQC60T4sexLl7thdezgJ8PnIzhFT2EcV6wjKhFgP7neYx45KL3SMEXZUcGo61k&usqp=CAU';

const PostsList = () => {
  const { isLoggedIn } = useAuth(); // Custom hook to get authentication status
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const postsPerPage = 10; // Number of posts per page

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
      setTotalPages(Math.ceil(response.data.length / postsPerPage));
    };
    fetchPosts();
  }, []);

  const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const handleDeletePost = (postId: number) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  const currentPosts = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  return (
    <>
    <Typography variant="h3" component="h3" sx={{marginLeft:3, marginTop:2}}>
      All Blog Posts
    </Typography>
      <List>
        {currentPosts.map((post) => (
          <ListItem key={post.id} sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Box
              component={Link}
              href={`/posts/${post.id}`}
              sx={{
                border: '1px solid #ddd',
                borderRadius: '10px',
                padding: '16px',
                margin: '8px 0',
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                transition: 'background-color 0.3s',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: '#f1f1f1',
                },
              }}
            >
              <img src={placeholderImageUrl} alt="Placeholder Image" style={{ borderRadius: '50%', marginRight: '16px', width: '50px', height: '50px' }} />
              <div>
                <Typography variant="h6" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {post.body}
                </Typography>
              </div>
            </Box>
            {isLoggedIn && (
              <IconButton onClick={() => handleDeletePost(post.id)} sx={{ marginLeft: '16px' }}>
                <DeleteIcon />
              </IconButton>
            )}
          </ListItem>
        ))}
      </List>
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2, paddingBottom: 3 }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handleChangePage}
          color="primary"
          variant="outlined"
        />
      </Stack>
    </>
  );
};

export default PostsList;
