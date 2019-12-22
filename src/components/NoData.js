import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  text: {
    background: '#ffffff',
    margin: '8px 0',
    padding: '8px 0'
  }
}));

const NoData = ({ message }) => {
  const classes = useStyles();
  return (
    <Typography className={classes.text} align='center' variant='h5'>
      {message}
    </Typography>
  );
};

export default NoData;
