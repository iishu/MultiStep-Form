import React from 'react';
import { Button, Container, Typography, List, ListItem, ListItemText ,Box} from '@mui/material';

const Step3 = ({ prevStep, handleSubmit, values }) => {
  const backStep = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <Container maxWidth="sm">
        <Box boxShadow={3} p={3} bgcolor="background.paper"> 
      <Typography variant="h4" gutterBottom>
        Confirmation
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Name" secondary={values.name} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Email" secondary={values.email} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Phone" secondary={values.phone} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Address Line 1" secondary={values.address1} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Address Line 2" secondary={values.address2} />
        </ListItem>
        <ListItem>
          <ListItemText primary="City" secondary={values.city} />
        </ListItem>
        <ListItem>
          <ListItemText primary="State" secondary={values.state} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Zip Code" secondary={values.zip} />
        </ListItem>
      </List>
      <Button variant="contained" onClick={backStep} style={{ marginRight: '10px' }}>
        Back
      </Button>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
      </Box>
    </Container>
  );
};

export default Step3;
