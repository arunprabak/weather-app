import notificationTypes from './notificationTypes';

export const showNotification = message => ({
  type: notificationTypes.SHOW_NOTIFICATION,
  payload: message
});

export const closeNotification = () => ({
  type: notificationTypes.CLOSE_NOTIFICATION
});
