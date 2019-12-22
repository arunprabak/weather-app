import axios from 'axios';
import Weather from '../factories/Weather';

axios.defaults.baseURL = 'http://api.openweathermap.org/data/2.5';

const APPID = '9385b5723b19750e3ec01d8103a82b23';
const units = 'metric';

export const getWeather = async search => {
  const params = {
    q: search,
    APPID,
    units
  };
  const { data } = await axios.get('/weather', { params });
  return Weather.build(data);
};

export const getAllCitiesWeather = async ids => {
  const params = {
    id: ids,
    APPID,
    units
  };

  const { data } = await axios.get('/group', { params });
  return data.list.map(Weather.build);
};

export const getHourlyWeather = async id => {
  const params = {
    id,
    appid: '9385b5723b19750e3ec01d8103a82b23'
  };

  const { data } = await axios.get('forecast/hourly', {
    params
  });
  return data.list.map(Weather.build);
};
