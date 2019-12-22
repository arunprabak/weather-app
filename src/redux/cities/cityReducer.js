import cityTypes from './cityTypes';

const cities = JSON.parse(localStorage.getItem('cities'));

const INITIAL_STATE = {
  cities
};

const cityReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cityTypes.ADD_CITY: {
      const cities = [...new Set(state.cities.concat(action.payload))];
      localStorage.setItem('cities', JSON.stringify(cities));
      return {
        ...state,
        cities
      };
    }
    case cityTypes.REMOVE_CITY: {
      const cities = state.cities.filter(id => id !== action.payload);
      localStorage.setItem('cities', JSON.stringify(cities));
      return {
        ...state,
        cities
      };
    }
    default:
      return state;
  }
};

export default cityReducer;
