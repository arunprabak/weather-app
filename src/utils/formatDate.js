import moment from 'moment';

export const formatDate = (time, format = 'DD-MM-YYYY') =>
  time ? moment(time).format(format) : null;

export const formatUnixTime = (time, format = 'LT') =>
  time ? moment.unix(time).format(format) : null;
