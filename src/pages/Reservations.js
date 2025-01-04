import React from 'react';
import BookingForm from '../components/BookingForm';
import './Reservations.css';

const Reservations = () => {
  return (
    <main className="reservations-page">
      <section className="reservations-hero">
        <h1>Reserve a Table</h1>
        <p>Join us for an unforgettable Mediterranean dining experience</p>
      </section>
      <section className="reservations-content">
        <BookingForm />
      </section>
    </main>
  );
};

export default Reservations;
