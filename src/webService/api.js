import axios from 'axios';

const APPID = '9385b5723b19750e3ec01d8103a82b23';
axios.defaults.baseURL = 'http://api.openweathermap.org/data/2.5';

export const searchWeather = async search => {
  const params = {
    q: search,
    APPID
  };
  const { data } = axios.get(`/weather`, { params });
  return data;
};

export const getAllCitiesWeather = async ids => {
  const params = {
    id: ids
  };

  const { data } = axios.get(`/group`, { params });
  return data;
};
