import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { hourlyWeather } from '../redux/weather/weatherAction';

const DetailView = ({ match: { params }, hourlyWeather, getHourlyWeather }) => {
  useEffect(() => {
    if (params.id) {
      getHourlyWeather(params.id);
    }
  }, [params.id, getHourlyWeather]);

  return (
    <div>
      <h1>DetailView</h1>
    </div>
  );
};

const mapStateToProps = ({ weather }) => ({
  hourlyWeather: weather.hourlyWeather
});

const mapDispatchToProps = dispatch => ({
  getHourlyWeather: id => dispatch(hourlyWeather(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailView));
