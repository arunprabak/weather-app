import notificationTypes from './notificationTypes';

const INITIAL_STATE = {
  message: null,
  isOpen: false
};

const notificationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case notificationTypes.SHOW_NOTIFICATION:
      return {
        ...state,
        isOpen: true,
        message: action.payload
      };
    case notificationTypes.CLOSE_NOTIFICATION:
      return {
        ...state,
        isOpen: false,
        message: null
      };
    default:
      return state;
  }
};

export default notificationReducer;
