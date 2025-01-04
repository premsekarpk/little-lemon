import React from 'react';
import { Link } from 'react-router-dom';
import './ConfirmedBooking.css';

const ConfirmedBooking = () => {
  return (
    <main className="confirmed-booking">
      <div className="confirmation-container">
        <h1>Booking Confirmed!</h1>
        <p>Thank you for choosing Little Lemon!</p>
        <p>Your table has been successfully reserved.</p>
        <p>A confirmation email will be sent to you shortly.</p>
        <Link to="/" className="home-button">
          Return to Home
        </Link>
      </div>
    </main>
  );
};

export default ConfirmedBooking;
