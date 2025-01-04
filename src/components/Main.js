import React, { useReducer, useEffect } from 'react';
import './Main.css';
import Specials from './Specials';
import BookingForm from './BookingForm';
import { useLocation, useNavigate } from 'react-router-dom';
import { timesReducer, initializeTimes } from '../utils/timeReducer';
import { fetchAPI, submitAPI } from '../data/api';

const Main = () => {
  const [availableTimes, dispatchTimes] = useReducer(timesReducer, []);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const initialTimes = initializeTimes();
    dispatchTimes({ type: 'UPDATE_TIMES', times: initialTimes });
  }, []);

  const updateTimes = (date) => {
    const times = fetchAPI(new Date(date));
    dispatchTimes({ type: 'UPDATE_TIMES', times: times });
  };

  const submitForm = (formData) => {
    console.log('Submitting to API:', formData);
    const success = submitAPI(formData);
    if (success) {
      console.log('Submission successful, navigating...');
      navigate('/booking-confirmed');
    } else {
      console.log('Submission failed');
      alert('Failed to submit booking. Please try again.');
    }
  };

  if (location.pathname === '/reservations') {
    return (
      <main>
        <section className="reservations-content">
          <BookingForm 
            availableTimes={availableTimes} 
            updateTimes={updateTimes}
            submitForm={submitForm}
          />
        </section>
      </main>
    );
  }

  return (
    <main>
      <Specials />
    </main>
  );
};

export default Main;