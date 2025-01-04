import React from 'react';
import './Chicago.css';
import restaurantChef from '../icons_assets/restaurant chef B.jpg';
import restaurantInterior from '../icons_assets/restaurant.jpg';

const Chicago = () => {
  return (
    <section className="chicago-section">
      <div className="chicago-content">
        <div className="chicago-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. 
            Despite the city's deep-dish pizza roots, we wanted to bring the 
            authentic Mediterranean flavors of our childhood to the heart of Chicago.
          </p>
          <p>
            Our family-owned restaurant focuses on traditional recipes served with a 
            modern twist. Using locally-sourced ingredients and family secrets, 
            we ensure each dish tells a story of our heritage while embracing 
            Chicago's diverse culinary scene.
          </p>
        </div>
        <div className="chicago-images">
          <img 
            src={restaurantChef} 
            alt="Little Lemon chef" 
            className="chef-image"
          />
          <img 
            src={restaurantInterior} 
            alt="Little Lemon restaurant interior" 
            className="restaurant-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Chicago;