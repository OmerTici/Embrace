// src/components/Events.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Events.css';

function Events() {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  const handleGoBack = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate(-1);
    }, 500);
  };

  const handleGetTicket = () => {
    window.open(
      "https://dice.fm/event/92yeb9-embrace-presents-tale-of-us-dj-party-28th-mar-drom-new-york-tickets",
      "_blank"
    );
  };

  return (
    <div className={`events-page ${fadeOut ? 'fade-out' : ''}`}>
      {/* Go Back Button */}
      <button className="go-back-btn" onClick={handleGoBack}>
        <span className="go-back-icon">&#8592;</span> Go Back
      </button>
      <br />

      <h1 className="events-title">Upcoming Events</h1>

      {/* UPCOMING EVENT */}
      <div className="upcoming-event">
        <img
          src="/Embrace/flyer_wnewdj.png"
          alt="Upcoming Event Poster"
          className="big-poster"
        />
        <div className="event-details-col">
          <p className="event-date">March 28th, 2025</p>
          <div className="event-map">
            <iframe
              title="Upcoming Event Map"
              src="https://www.google.com/maps?q=85+Avenue+A,+New+York,+NY+10009&output=embed"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
          <p className="event-location">85 Avenue A, New York, NY 10009</p>
          <button className="ticket-btn" onClick={handleGetTicket}>
            Get Ticket
          </button>
        </div>
      </div>
    </div>
  );
}

export default Events;
