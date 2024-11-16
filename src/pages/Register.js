// src/pages/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box
} from '@mui/material';
import api from '../services/api';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'customer'
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/register', formData);
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            variant="outlined"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            type="email"
            variant="outlined"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            variant="outlined"
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Role</InputLabel>
            <Select
              value={formData.role}
              label="Role"
              onChange={(e) => setFormData({...formData, role: e.target.value})}
            >
              <MenuItem value="customer">Customer</MenuItem>
              <MenuItem value="provider">Service Provider</MenuItem>
            </Select>
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{ mt: 3 }}
          >
            Register
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Register;