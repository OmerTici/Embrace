// src/components/Shop.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Shop.css';

function Shop() {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  const handleGoBack = () => {
    setFadeOut(true);
    // Wait for the fadeOut animation to complete before navigating back
    setTimeout(() => {
      navigate(-1);
    }, 500);
  };

  return (
    <div className={`shop-container ${fadeOut ? 'fade-out' : ''}`}>
      <button className="go-back-btn" onClick={handleGoBack}>
        <span className="go-back-icon">&#8592;</span> Go Back
      </button>
      <div className="shop-message">
        <h1>Coming Soon</h1>
        <p>Stay Tuned</p>
      </div>
    </div>
  );
}

export default Shop;
