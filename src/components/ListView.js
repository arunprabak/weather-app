import React from 'react';
import { connect } from 'react-redux';
import ListItemDetail from './ListItemDetail';
import NoData from './NoData';

const ListView = ({ weather, noResults }) => {
  const message = noResults ? 'No data available' : 'Search....';

  return weather ? <ListItemDetail weather={weather} /> : <NoData message={message} />;
};

const mapStateToProps = ({ weather }) => ({
  weather: weather.cityWeather,
  noResults: weather.noResults
});

export default connect(mapStateToProps)(ListView);
