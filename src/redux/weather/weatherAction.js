import weatherTypes from './weatherTypes';
import { getWeather, getAllCitiesWeather, getHourlyWeather } from '../../webService/api';
import { showNotification } from '../notification/notificationAction';

export const searchWeather = location => {
  return async dispatch => {
    try {
      const data = await getWeather(location);
      dispatch({
        type: weatherTypes.SEARCH_WEATHER,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: weatherTypes.CLEAR_WEATHER
      });
      dispatch(showNotification(error.message));
    }
  };
};

export const getDetailWeather = ids => {
  return async dispatch => {
    try {
      const data = await getAllCitiesWeather(ids);
      dispatch({
        type: weatherTypes.GROUP_WEATHER,
        payload: data
      });
    } catch (error) {
      dispatch(showNotification(error.message));
      dispatch({
        type: weatherTypes.GROUP_WEATHER,
        payload: null
      });
    }
  };
};

export const hourlyWeather = id => {
  return async dispatch => {
    try {
      const data = await getHourlyWeather(id);
      dispatch({
        type: weatherTypes.HOURLY_WEATHER,
        payload: data
      });
    } catch (error) {
      dispatch(showNotification(error.message));
      dispatch({
        type: weatherTypes.HOURLY_WEATHER,
        payload: null
      });
    }
  };
};

export const clearWeather = () => ({
  type: weatherTypes.CLEAR_WEATHER
});
