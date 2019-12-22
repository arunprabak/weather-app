import { formatUnixTime, formatDate } from '../utils/formatDate';

const _parseWeather = (weather, type) => {
  let value;
  weather.forEach(el => {
    value = el[type];
  });
  return value;
};

export default class Weather {
  static build(data) {
    return Object.assign(new Weather(), {
      id: data.id,
      name: data.name,
      country: data.sys.country,
      date: formatDate(data.dt, 'dddd, MMM DD'),
      sunrise: formatUnixTime(data.sys.sunrise),
      sunset: formatUnixTime(data.sys.sunset),
      main: _parseWeather(data.weather, 'main'),
      description: _parseWeather(data.weather, 'description'),
      icon: `http://openweathermap.org/img/wn/${_parseWeather(data.weather, 'icon')}@2x.png`
    });
  }
}
