import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { hourlyWeather } from '../redux/weather/weatherAction';
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from '@material-ui/core';

const DetailView = ({ match: { params }, weather, getHourlyWeather }) => {
  useEffect(() => {
    if (params.id) {
      getHourlyWeather(params.id);
    }
  }, [params.id, getHourlyWeather]);

  return weather ? (
    <Box className='details-view' alignItems='center'>
      <Typography color='secondary' variant='h4' className='header'>
        {weather.name}
      </Typography>
      <div className='list-container'>
        <List className='list-detail'>
          {weather.list.map(
            ({ time, clouds, description, icon, main, temperature, wind, dt, unix }) => (
              <ListItem key={unix} className='list-item'>
                <ListItemAvatar>
                  <Avatar>
                    <img src={icon} alt={main} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  className='list-item-text'
                  primary={time}
                  secondary={dt}
                ></ListItemText>
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography component='span' className='temperature'>
                        {temperature}
                      </Typography>
                      <Typography component='span'>{description}</Typography>
                    </React.Fragment>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography component='span' variant='body2'>
                        {`Clouds:${clouds}   Wind:${wind}`}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            )
          )}
        </List>
      </div>
    </Box>
  ) : null;
};

const mapStateToProps = ({ weather }) => ({
  weather: weather.hourlyWeather
});

const mapDispatchToProps = dispatch => ({
  getHourlyWeather: id => dispatch(hourlyWeather(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailView));
