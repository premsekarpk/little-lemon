import React from 'react';
import './Menu.css';
import greekSalad from '../icons_assets/greek salad.jpg';
import lemonDessert from '../icons_assets/lemon dessert.jpg';
import restaurantFood from '../icons_assets/restauranfood.jpg';

const menuItems = {
  starters: [
    {
      name: "Greek Salad",
      description: "Fresh vegetables, feta cheese, olives with our house dressing",
      price: "$12.99",
      image: greekSalad
    },
    {
      name: "Bruschetta",
      description: "Grilled bread with garlic, tomatoes, olive oil and basil",
      price: "$9.99",
      image: restaurantFood
    }
  ],
  mainCourses: [
    {
      name: "Grilled Fish",
      description: "Fresh catch of the day with lemon-butter sauce",
      price: "$25.99",
      image: lemonDessert
    },
    {
      name: "Lemon Dessert",
      description: "Fresh baked lemon cake with vanilla glaze",
      price: "$10.99",
      image: lemonDessert
    }
  ],
  desserts: [
    {
      name: "Baklava",
      description: "Traditional Mediterranean dessert with honey and nuts",
      price: "$8.99",
      image: restaurantFood
    }
  ]
};

const Menu = () => {
  return (
    <div className="menu-page">
      <div className="menu-header">
        <h1>Our Menu</h1>
        <p>Experience the taste of Mediterranean cuisine</p>
      </div>

      <div className="menu-content">
        <section className="menu-section">
          <h2>Starters</h2>
          <div className="menu-items">
            {menuItems.starters.map((item, index) => (
              <div key={index} className="menu-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span className="price">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="menu-section">
          <h2>Main Courses</h2>
          <div className="menu-items">
            {menuItems.mainCourses.map((item, index) => (
              <div key={index} className="menu-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span className="price">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="menu-section">
          <h2>Desserts</h2>
          <div className="menu-items">
            {menuItems.desserts.map((item, index) => (
              <div key={index} className="menu-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span className="price">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Menu;
