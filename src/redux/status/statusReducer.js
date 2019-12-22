import statusTypes from './statusTypes';

const INITIAL_STATE = {
  isLoading: false
};

const statusReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case statusTypes.OPEN_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case statusTypes.CLOSE_LOADING:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default statusReducer;
