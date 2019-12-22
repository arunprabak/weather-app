import notificationTypes from './notificationTypes';

const INITIAL_STATE = {
  message: null
};

const notificationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case notificationTypes.SHOW_NOTIFICATION:
      return {
        ...state,
        message: action.payload
      };

    default:
      return state;
  }
};

export default notificationReducer;
