// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage-container">

      {/* ▸ DESKTOP VIEW -------------------------------------------------- */}
      <div className="desktop-view">
        
        {/* EMBRACE logo */}
        <div className="desktop-logo">
          <img src="/white_logo.png" alt="White Logo" />
        </div>
      </div>

      {/* ▸ MOBILE VIEW --------------------------------------------------- */}
      <div className="mobile-view">
        <div className="mobile-buttons">
          <Link to="/bio"    className="mobile-btn">About&nbsp;Us</Link>
          <Link to="/events" className="mobile-btn">Events</Link>
          <Link to="/shop"   className="mobile-btn">Shop</Link>
          <Link to="/musics" className="mobile-btn">Music</Link>
        </div>

        <div className="mobile-logo">
          <img src="/white_logo.png" alt="White Logo" />
        </div>
      </div>

      {/* ▸ SOCIAL ICONS (fixed bottom‑center) --------------------------- */}
      <div className="social-row">
        <a
          href="https://open.spotify.com/playlist/2UPknvsDOjMrCowpqqXvgi?si=4ab09afab1bc4b4e&pt=e154696b783a9b167521a6bd9c285072"
          target="_blank" rel="noreferrer" className="social-link" aria-label="Spotify"
        >
          <i className="fa-brands fa-spotify" />
        </a>
        <a
          href="https://www.instagram.com/embrace_ofc/"
          target="_blank" rel="noreferrer" className="social-link" aria-label="Instagram"
        >
          <i className="fa-brands fa-instagram" />
        </a>
        <a
          href="https://soundcloud.com/embrace-244260207"
          target="_blank" rel="noreferrer" className="social-link" aria-label="SoundCloud"
        >
          <i className="fa-brands fa-soundcloud" />
        </a>
        <a
          href="mailto:we@embraceverything.com"
          className="social-link" aria-label="Mail"
        >
          <i className="fa-solid fa-envelope" />
        </a>
      </div>
    </div>
  );
}

export default HomePage;
