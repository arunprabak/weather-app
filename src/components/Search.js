import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { searchWeather } from '../redux/weather/weatherAction';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  }
}));

const Search = ({ searchWeather }) => {
  const classes = useStyles();
  const [location, setLocation] = useState('');

  const search = e => {
    e.preventDefault();
    searchWeather(location);
    setLocation('');
  };

  return (
    <Paper component='form' onSubmit={e => search(e)} className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder='Search weather by location'
        value={location}
        onChange={e => setLocation(e.target.value)}
      />
      <IconButton type='submit' className={classes.iconButton} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

const mapDispatchToProps = dispatch => ({
  searchWeather: location => dispatch(searchWeather(location))
});

export default connect(null, mapDispatchToProps)(Search);
