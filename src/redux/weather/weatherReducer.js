import weatherTypes from './weatherTypes';

const INITIAL_STATE = {
  cityWeather: null,
  groupWeather: null,
  noResults: false,
  detailWeather: [],
  hourlyWeather: null
};

const weatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case weatherTypes.SEARCH_WEATHER:
      return {
        ...state,
        cityWeather: action.payload
      };
    case weatherTypes.GROUP_WEATHER:
      return {
        ...state,
        groupWeather: action.payload
      };
    case weatherTypes.DETAIL_WEATHER:
      return {
        ...state,
        detailWeather: []
      };
    case weatherTypes.CLEAR_WEATHER:
      return {
        ...state,
        cityWeather: null
      };
    case weatherTypes.NO_WEATHER:
      return {
        ...state,
        noResults: true
      };
    case weatherTypes.HOURLY_WEATHER:
      return {
        ...state,
        hourlyWeather: action.payload
      };
    default:
      return state;
  }
};

export default weatherReducer;
