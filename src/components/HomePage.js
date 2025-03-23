// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import MediaDropdown from './MediaDropdown';

function HomePage() {
  return (
    <div className="homepage-container">
      {/* Desktop View: Large Logo(s) */}
      <div className="desktop-view">
        <div className="desktop-logo">
          <img src="/white_logo.png" alt="White Logo" />
        </div>
        {/* <div className="desktop-embrace-text">
          <img src="/Embrace/embrace_text.png" alt="Embrace Writing" />
        </div> */}
      </div>

      {/* Mobile View */}
      <div className="mobile-view">
        <div className="mobile-buttons">
          <Link to="/bio" className="mobile-btn">About Us</Link>
          <Link to="/events" className="mobile-btn">Events</Link>
          <Link to="/shop" className="mobile-btn">Shop</Link>
          <MediaDropdown 
            buttonClass="mobile-btn" 
            buttonStyle={{ padding: '0.5rem 3rem' }}
          />
        </div>

        <div className="mobile-logo">
          <img src="/white_logo.png" alt="White Logo" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
