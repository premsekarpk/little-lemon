import React from 'react';
import Logo from '../icons_assets/Logo.svg';
import { Link } from 'react-router-dom';
import './Footer.css';



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={Logo} alt="Little Lemon Logo" />
        </div>

        {/* Doormat Navigation */}
        <div className="footer-nav">
          <h3>Navigation</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>

          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <ul>
            <li>Address: 123 Town Street, Chicago</li>
            <li>Phone: (123) 456-7890</li>
            <li>Email: info@littlelemon.com</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <h3>Social Media</h3>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;