import axios from 'axios';
import Weather from '../factories/Weather';

//To avoid the cors blocking
const CORS = 'https://cors-anywhere.herokuapp.com';

axios.defaults.baseURL = `${CORS}/http://api.openweathermap.org/data/2.5`;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

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
  const URL = `${CORS}/https://samples.openweathermap.org/data/2.5/forecast/hourly?id=${id}&appid=53dd5cefb350b796eff9adbe279ebeef`;
  const { data } = await axios.get(URL);
  return Weather.buildDetail(data);
};
