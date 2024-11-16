// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('token');

  return (
    <AppBar position="static">
      <Toolbar>
        <HomeIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Nakooba
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/services">
            Services
          </Button>
          {!isLoggedIn ? (
            <>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button 
                variant="contained" 
                color="secondary" 
                component={Link} 
                to="/register"
              >
                Register
              </Button>
            </>
          ) : (
            <Button 
              color="inherit" 
              onClick={() => {
                localStorage.removeItem('token');
                navigate('/login');
              }}
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;