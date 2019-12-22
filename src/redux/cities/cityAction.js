import cityTypes from './cityTypes';

export const addCity = id => ({
  type: cityTypes.ADD_CITY,
  payload: id
});

export const removeCity = id => ({
  type: cityTypes.REMOVE_CITY,
  payload: id
});
