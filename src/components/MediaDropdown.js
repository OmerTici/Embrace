// src/components/MediaDropdown.js
import React, { useState } from 'react';
import './MediaDropdown.css';

function MediaDropdown({ buttonClass = 'nav-btn' }) {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className="media-dropdown">
      <button className={buttonClass} onClick={toggleDropdown}>
        Media
      </button>

      {open && (
        <div className="dropdown-menu">
          <p className="dropdown-title">Find us On</p>
          <a 
            href="https://open.spotify.com/playlist/2UPknvsDOjMrCowpqqXvgi?si=4ab09afab1bc4b4e&pt=e154696b783a9b167521a6bd9c285072"
            target="_blank"
            rel="noreferrer"
            className="dropdown-item"
          >
            <i className="fa-brands fa-spotify"></i> Spotify
          </a>
          <a 
            href="https://www.instagram.com/embrace_ofc/"
            target="_blank"
            rel="noreferrer"
            className="dropdown-item"
          >
            <i className="fa-brands fa-instagram"></i> Instagram
          </a>
          <a 
            href="https://soundcloud.com/embrace-244260207"
            target="_blank"
            rel="noreferrer"
            className="dropdown-item"
          >
            <i className="fa-brands fa-soundcloud"></i> SoundCloud
          </a>
          <p className="dropdown-subtitle">Contact</p>
          <a 
            href="mailto:we@embraceverything.com"
            className="dropdown-item"
          >
            <i className="fa-solid fa-envelope"></i> Mail
          </a>
        </div>
      )}
    </div>
  );
}

export default MediaDropdown;
