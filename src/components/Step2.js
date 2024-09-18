import React from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
    button: {
      marginTop: theme.spacing(2),
    },
    container: {
      marginTop: theme.spacing(4),
    },
  }));
const Step2 = ({ nextStep, prevStep, handleChange, values }) => {
  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  const backStep = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <Container maxWidth="sm">
        <Box boxShadow={3} p={3} bgcolor="background.paper">
      <Typography variant="h4" gutterBottom>
        Address Information
      </Typography>
      <TextField
        label="Address Line 1"
        onChange={handleChange('address1')}
        value={values.address1}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Address Line 2"
        onChange={handleChange('address2')}
        value={values.address2}
        fullWidth
        margin="normal"
      />
      <TextField
        label="City"
        onChange={handleChange('city')}
        value={values.city}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="State"
        onChange={handleChange('state')}
        value={values.state}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Zip Code"
        onChange={handleChange('zip')}
        value={values.zip}
        fullWidth
        margin="normal"
        required
      />
      <Button variant="contained" onClick={backStep} style={{ marginRight: '10px' }}>
        Back
      </Button>
      <Button variant="contained" color="primary" onClick={continueStep}>
        Next
      </Button>
      </Box>
    </Container>
  );
};

export default Step2;
