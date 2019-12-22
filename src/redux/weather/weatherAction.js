import weatherTypes from './weatherTypes';
import { searchWeather } from '../../webService/api';

import { openLoading, closeLoading } from '../status/statusAction';
import { showNotification } from '../notification/notificationAction';

export default searchWeather = location => {
  return async dispatch => {
    dispatch(openLoading());
    try {
      const data = await searchWeather(location);
      return {
        type: weatherTypes.SEARCH_WEATHER,
        payload: data
      };
    } catch (error) {
      dispatch(showNotification(error.message));
    } finally {
      dispatch(closeLoading());
    }
  };
};

export default getDetailWeather = () => {};
