import weatherTypes from './weatherTypes';

const INITIAL_STATE = {
  weather: [],
  detailWeather: []
};

const weatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case weatherTypes.SEARCH_WEATHER:
      return {
        ...state,
        weather: action.payload
      };
    case weatherTypes.GET_WEATHER:
      return {
        ...state,
        weather: []
      };
    case weatherTypes.DETAIL_WEATHER:
      return {
        ...state,
        detailWeather: []
      };
    default:
      return state;
  }
};

export default weatherReducer;
