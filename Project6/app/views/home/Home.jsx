import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

class Home extends React.Component {
  render() {
    return (
      <Container align='center'>
        <Typography variant='h2'>
          Kanban Board
        </Typography>
        <Typography variant='h5'>
          Welcome to my Final CSE 4050 Project
        </Typography>
      </Container>
    );
  }
}

export default Home;
