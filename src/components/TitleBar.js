import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const TitleBar = () => (
  <AppBar position='fixed'>
    <Toolbar className='title'>
      <Typography variant='h4'>Weather App</Typography>
    </Toolbar>
  </AppBar>
);

export default TitleBar;
