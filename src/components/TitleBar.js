import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const TitleBar = () => (
  <AppBar position='fixed'>
    <Toolbar className='title'>
      <Link to='/'>
        <Typography variant='h4'>Weather App</Typography>
      </Link>
    </Toolbar>
  </AppBar>
);
export default TitleBar;
