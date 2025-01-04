import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import { timesReducer, initializeTimes } from '../../utils/timeReducer';
import { fetchAPI } from '../../utils/api';

// Mock the react-router-dom useNavigate hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
  useLocation: () => ({
    pathname: '/reservations'
  })
}));

describe('Booking Functions', () => {
  test('initializeTimes returns array of available times', () => {
    const times = initializeTimes();
    
    expect(Array.isArray(times)).toBe(true);
    expect(times.length).toBeGreaterThan(0);
    times.forEach(time => {
      expect(time).toMatch(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/);
    });
  });

  test('updateTimes returns the correct times for a given date', () => {
    const testDate = new Date('2024-03-20');
    const expectedTimes = fetchAPI(testDate);
    
    const state = [];
    const action = {
      type: 'UPDATE_TIMES',
      times: expectedTimes
    };
    
    const newTimes = timesReducer(state, action);
    
    expect(newTimes).toEqual(expectedTimes);
    expect(Array.isArray(newTimes)).toBe(true);
    expect(newTimes.length).toBeGreaterThan(0);
  });

  test('timesReducer returns same state for unknown action type', () => {
    const initialState = ['17:00', '18:00'];
    const action = { type: 'UNKNOWN_ACTION' };
    
    const newState = timesReducer(initialState, action);
    
    expect(newState).toEqual(initialState);
  });

  test('fetchAPI returns different times for different dates', () => {
    const date1 = new Date('2024-03-20');
    const date2 = new Date('2024-03-21');
    
    const times1 = fetchAPI(date1);
    const times2 = fetchAPI(date2);
    
    expect(times1).not.toEqual(times2);
  });

  test('available times are in correct format', () => {
    const times = initializeTimes();
    const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
    
    times.forEach(time => {
      expect(time).toMatch(timeFormat);
    });
  });
});
