const INITIAL_STATE = {
  cities: []
};

const cityReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_CITY':
      return {
        ...state,
        cities: state.cities.concat(action.payload)
      };
    default:
      return state;
  }
};

export default cityReducer;
