// src/pages/ServicesPage.js
import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box
} from '@mui/material';
import api from '../services/api';

function ServicesPage() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    api.get('/services')
      .then((res) => setServices(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Available Services
      </Typography>
      <Grid container spacing={3}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {service.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {service.description}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="subtitle2" color="primary">
                    Provider: {service.provider?.name}
                  </Typography>
                </Box>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Book Now
                </Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ServicesPage;