import React from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const Step1 = ({ nextStep, handleChange, values }) => {
  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Personal Information
      </Typography>
      <TextField
        label="Name"
        onChange={handleChange('name')}
        value={values.name}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Email"
        type="email"
        onChange={handleChange('email')}
        value={values.email}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Phone"
        type="tel"
        onChange={handleChange('phone')}
        value={values.phone}
        fullWidth
        margin="normal"
        required
      />
      <Button variant="contained" color="primary" onClick={continueStep}>
        Next
      </Button>
    </Container>
  );
};

export default Step1;
