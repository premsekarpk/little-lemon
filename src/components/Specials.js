import React from 'react';
import './Specials.css';
import { specialsData } from '../data/specials'

const SpecialCard = ({ title, price, description, image }) => {
  return (
    <div className="special-card">
      <img src={image} alt={title} />
      <div className="card-content">
        <div className="card-header">
          <h3>{title}</h3>
          <span className="price">${price}</span>
        </div>
        <p>{description}</p>
        <button className="order-btn">Order a delivery</button>
      </div>
    </div>
  );
};

const Specials = () => {
  return (
    <section className="specials-section">
      <div className="specials-header">
        <h2>This weeks specials!</h2>
        <button className="menu-btn">Online Menu</button>
      </div>
      <div className="specials-grid">
        {specialsData.map(special => (
          <SpecialCard key={special.id} {...special} />
        ))}
      </div>
    </section>
  );
};

export default Specials;