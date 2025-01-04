import React from 'react';
import './CustomersSay.css';
import { testimonialData } from '../data/testimonials';

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <span key={index} className={index < rating ? 'star filled' : 'star'}>
          ★
        </span>
      ))}
    </div>
  );
};

const TestimonialCard = ({ name, image, rating, review }) => {
  return (
    <div className="testimonial-card">
      <img src={image} alt={name} className="testimonial-image" />
      <StarRating rating={rating} />
      <p className="testimonial-review">{review}</p>
      <h3 className="testimonial-name">{name}</h3>
    </div>
  );
};

const CustomersSay = () => {
  return (
    <section className="testimonials-section">
      <h2>What our customers say!</h2>
      <div className="testimonials-grid">
        {testimonialData.map(testimonial => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default CustomersSay;