import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import ListItemDetail from './ListItemDetail';
import { getDetailWeather } from '../redux/weather/weatherAction';
import Search from './Search';
import ListView from './ListView';

const Favourite = ({ cities, groupWeather, getDetailWeather }) => {
  useEffect(() => {
    if (cities.length) {
      getDetailWeather(cities.join(','));
    }
  }, [cities, getDetailWeather]);

  return (
    <div>
      <Search />
      <ListView />
      {cities.length ? (
        <div>
          <Typography align='center' variant='h5'>
            Favourites
          </Typography>
          {groupWeather &&
            groupWeather.map(weather => (
              <ListItemDetail key={weather.id} weather={weather} isFavourite={true} />
            ))}
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = ({ city, weather }) => ({
  cities: city.cities,
  groupWeather: weather.groupWeather
});

const mapDispatchToProps = dispatch => ({
  getDetailWeather: ids => dispatch(getDetailWeather(ids))
});

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);
