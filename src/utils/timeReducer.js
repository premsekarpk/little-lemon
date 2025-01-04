import { fetchAPI } from '../data/api';

export const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.times;
    default:
      return state;
  }
};

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};
