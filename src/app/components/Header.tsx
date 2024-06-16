import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/router';
import Logo from '/public/inb100-logo.png'

import Image from 'next/image';

const Header: React.FC = () => {
    const { isLoggedIn, logout } = useAuth();
    const router = useRouter();
  
    const handleLoginLogout = () => {
      if (isLoggedIn) {
        logout();
      }
      router.push('/auth/login2');
    };
  
    return (
      <AppBar position="static" sx={{ bgcolor: 'white', color: '#000' }}>
        <Toolbar>
            <Image src={Logo} alt="System Logo" height={40} onClick={() => router.push('/posts')}/>
            <Typography variant="h6" style={{ flexGrow: 1, paddingLeft:"10px" }} onClick={() => router.push('/posts')}>
                My Blog
            </Typography>
            <Button color="inherit" onClick={handleLoginLogout}>
                {isLoggedIn ? 'Logout' : 'Login'}
            </Button>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Header;
