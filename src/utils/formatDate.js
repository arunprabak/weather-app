import moment from 'moment';

export const formatDate = (time, format = 'DD-MM-YYYY') => moment(time).format(format);

export const formatUnixTime = (time, format = 'LT') => moment.unix(time).format(format);
