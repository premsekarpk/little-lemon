import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ availableTimes, updateTimes, submitForm }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '2',
    occasion: 'birthday',
    seating: 'indoor',
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Update available times when date changes
    if (name === 'date') {
      updateTimes(value);
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Phone validation - accept international format and local numbers
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number format';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData); // Debug log
    
    if (validateForm()) {
      console.log('Validation passed, submitting form...');
      submitForm(formData);
    } else {
      console.log('Form validation failed:', errors);
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Reserve a Table</h2>
      
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="date">Date*</label>
          <input
            type="date"
            id="date"
            name="date"
            required
            min={new Date().toISOString().split('T')[0]}
            value={formData.date}
            onChange={handleChange}
          />
          {errors.date && <span className="error">{errors.date}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="time">Time*</label>
          <select
            id="time"
            name="time"
            required
            value={formData.time}
            onChange={handleChange}
          >
            <option value="">Select time</option>
            {availableTimes.map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
          {errors.time && <span className="error">{errors.time}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of guests*</label>
          <select
            id="guests"
            name="guests"
            required
            value={formData.guests}
            onChange={handleChange}
          >
            {[1,2,3,4,5,6,7,8].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'guest' : 'guests'}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
          >
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="date">Date Night</option>
            <option value="business">Business Meal</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="seating">Seating Preference</label>
          <select
            id="seating"
            name="seating"
            value={formData.seating}
            onChange={handleChange}
          >
            <option value="indoor">Indoor</option>
            <option value="outdoor">Outdoor</option>
            <option value="bar">Bar</option>
          </select>
        </div>
      </div>

      <div className="contact-details">
        <h3>Contact Information</h3>
        <div className="form-group">
          <label htmlFor="name">Full Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number*</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g., +92 343 349 2364"
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div className="form-group full-width">
          <label htmlFor="specialRequests">Special Requests</label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            rows="3"
            value={formData.specialRequests}
            onChange={handleChange}
          ></textarea>
        </div>
      </div>

      <button 
        type="submit" 
        className="submit-button"
        onClick={handleSubmit}
      >
        Reserve Table
      </button>
    </form>
  );
};

export default BookingForm;