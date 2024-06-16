"use client";

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { FormControlLabel, TextField, Checkbox, Button, Paper, Typography, CssBaseline, Grid, Link, Box, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '@/context/AuthContext'; 

const LoginPage= () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
  
    const { login } = useAuth();  // Use the context for login
    const router = useRouter();
  
    const handlePasswordVisibilityToggle = () => {
      setShowPassword(!showPassword);
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      if (!username || !password) {
        toast.error('Please fill in all fields.');
        return;
      }
  
      if (username === 'bliss' && password === '1234') {
        toast.success('Login successful.');
  
        if (rememberMe) {
          const expirationDate = new Date();
          expirationDate.setDate(expirationDate.getDate() + 7);
          localStorage.setItem('rememberedExpirationDate', expirationDate.toISOString());
          localStorage.setItem('rememberedUsername', username);
        }
  
        login(true);  // Log in the user
        router.push('/posts');  // Redirect to posts page
      } else {
        toast.error('Login failed. Incorrect username or password.');
      }
    };
  
    const handleRememberMeChange = () => {
      setRememberMe(!rememberMe);
    };
  
    return (
      <>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: '25%',
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography component="h3" variant="h5" color="primary.main" sx={{ marginY: '1rem', fontWeight: '700' }}>
                Welcome to the login page
              </Typography>
              <Typography component="h4" variant="h6" color="primary.light">
                Please Login
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 0 }}
              >
                <TextField
                  margin="normal"
                  required
                  InputLabelProps={{ required: false }}
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoFocus
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
                <TextField
                  margin="normal"
                  required
                  InputLabelProps={{ required: false }}
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button
                          aria-label="toggle password visibility"
                          onClick={handlePasswordVisibilityToggle}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                  value={password}
                />
                <Grid container>
                  <Grid item xs={12} sm={8}>
                    <FormControlLabel
                      control={<Checkbox value={rememberMe} color="primary" onChange={handleRememberMeChange} />}
                      label="Remember me"
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </>
    );
  };
  
  export default LoginPage;
