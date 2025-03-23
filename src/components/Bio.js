// src/components/Bio.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Bio.css';

function Bio() {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  const handleGoBack = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate(-1);
    }, 500); // wait for fade-out animation (0.5s)
  };

  return (
    <div className={`bio-container ${fadeOut ? 'fade-out' : ''}`}>
      {/* Go Back Button at top-left */}
      <button className="go-back-btn" onClick={handleGoBack}>
        <span className="go-back-icon">&#8592;</span> Go Back
      </button>
      <br />

      {/* "About Us" heading */}
      <h1 className="bio-title">About Us</h1>

      {/* Content columns */}
      <div className="bio-text-row">
        <div className="bio-column">
          <p>
            Embrace isn’t just a brand. It’s a call to connection. It's a place where 
            every voice matters and where the essence of care, love, and empathy 
            defines who we are. We aim to create spaces, experiences, and products 
            that remind people that they are seen, valued, and welcomed—just as they 
            are. Here, there's no need to fit a mold or hide your truth. We embrace 
            the beauty in differences because that's where true unity thrives.
            <br />
            Together, let’s build a world where empathy and love lead. Let’s celebrate 
            every culture, mindset, and dream that makes us who we are.
          </p>
        </div>

        <div className="bio-column">
          <p>Let’s EmbracE.</p>
        </div>
      </div>

      {/* Bottom logo container */}
      <div className="bottom-logo-container">
        <img src="/Embrace/uhuhaha.png" alt="Floating Logo" />
        <div className="bio-links">
          <a href="mailto:we@embraceverything.com" className="bio-link" title="Email">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a
            href="https://www.instagram.com/embrace_ofc/"
            target="_blank"
            rel="noreferrer"
            className="bio-link"
            title="Instagram"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://soundcloud.com/embrace-244260207"
            target="_blank"
            rel="noreferrer"
            className="bio-link"
            title="SoundCloud"
          >
            <i className="fa-brands fa-soundcloud"></i>
          </a>
          <a
            href="https://open.spotify.com/playlist/2UPknvsDOjMrCowpqqXvgi?si=4ab09afab1bc4b4e&pt=e154696b783a9b167521a6bd9c285072"
            target="_blank"
            rel="noreferrer"
            className="bio-link"
            title="Spotify"
          >
            <i className="fa-brands fa-spotify"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Bio;
