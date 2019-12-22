import { combineReducers } from 'redux';
import cityReducer from './cities/cityReducer';
import weatherReducer from './weather/weatherReducer';
import notificationReducer from './notification/notificationReducer';

const rootReducer = combineReducers({
  city: cityReducer,
  weather: weatherReducer,
  notification: notificationReducer
});

export default rootReducer;
