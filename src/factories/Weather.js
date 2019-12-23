import { formatUnixTime, formatDate } from '../utils/formatDate';

const _titleCase = str => {
  return str
    .split(' ')
    .map(i => i[0].toUpperCase() + i.substring(1).toLowerCase())
    .join(' ');
};

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
      id: data.id || null,
      name: data.name || null,
      country: data.sys.country || null,
      date: formatDate(data.dt, 'dddd, MMM YYYY'),
      sunrise: formatUnixTime(data.sys.sunrise),
      sunset: formatUnixTime(data.sys.sunset),
      dt: formatUnixTime(data.dt, 'DD MMM YYYY'),
      unix: data.dt,
      time: formatUnixTime(data.dt),
      temperature: `${Math.floor(data.main.temp - 273.15)}°C`,
      wind: `${data.wind.speed}m/s`,
      clouds: `${data.clouds.all}%`,
      main: _parseWeather(data.weather, 'main'),
      description: _titleCase(_parseWeather(data.weather, 'description')),
      icon: `http://openweathermap.org/img/wn/${_parseWeather(data.weather, 'icon')}@2x.png`
    });
  }

  static buildDetail(data) {
    return {
      name: data.city.name,
      list: data.list.map(Weather.build)
    };
  }
}
