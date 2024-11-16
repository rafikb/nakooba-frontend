// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import ServicesPage from './pages/ServicesPage';
import ProfilePage from './pages/ProfilePage';
import ContactPage from './pages/ContactPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import PrivateRoute from './utils/PrivateRoute';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;