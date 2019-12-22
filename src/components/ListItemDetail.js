import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, List, ListItem, ListItemText, ListItemAvatar, Fab, Card } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import { addCity, removeCity } from '../redux/cities/cityAction';
import { clearWeather } from '../redux/weather/weatherAction';

const useStyles = makeStyles(theme => ({
  listCard: {
    margin: '8px 0',
    padding: 0,
    position: 'relative'
  },
  list: {
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    padding: 0
  }
}));

const ListItemDetail = ({
  weather,
  isFavourite = false,
  addCity,
  removeCity,
  clearWeather,
  history
}) => {
  const classes = useStyles();

  const handleFavourite = e => {
    if (isFavourite) {
      removeCity(weather.id);
    } else {
      addCity(weather.id);
      clearWeather();
    }
  };

  const openDetailPage = () => {
    history.push(`/detail/${weather.id}`);
    clearWeather();
  };

  return weather ? (
    <Card className={classes.listCard}>
      <List className={classes.list}>
        <ListItem display='flex' onClick={openDetailPage}>
          <ListItemAvatar>
            <Avatar src={weather.icon} />
          </ListItemAvatar>
          <ListItemText primary={`City: ${weather.name}`} />
          <ListItemText primary={`Country: ${weather.country}`} />
          <ListItemText primary={`Main: ${weather.main}`} />
          <ListItemText primary={`Description: ${weather.description}`} />
          <ListItemText primary={`Date: ${weather.date}`} />
          <ListItemText primary={`Sunrise: ${weather.sunrise}`} />
          <ListItemText primary={`Sunset: ${weather.sunset}`} />
        </ListItem>
        <Fab
          className='floating-btn'
          button='true'
          color='secondary'
          size='small'
          aria-label='add'
          onClick={e => handleFavourite(e)}
        >
          {isFavourite ? <RemoveIcon /> : <AddIcon />}
        </Fab>
      </List>
    </Card>
  ) : null;
};

const mapDispatchToProps = dispatch => ({
  addCity: id => dispatch(addCity(id)),
  removeCity: id => dispatch(removeCity(id)),
  clearWeather: () => dispatch(clearWeather())
});

export default withRouter(connect(null, mapDispatchToProps)(ListItemDetail));
