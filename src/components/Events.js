import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Events.css';

function Events() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGetTicket = () => {
    window.open(
      "https://dice.fm/event/92yeb9-embrace-presents-tale-of-us-dj-party-28th-mar-drom-new-york-tickets",
      "_blank"
    );
  };

  return (
    <div className="events-page">
      {/* Responsive Background Image */}
      {/* <picture className="bg-picture">
        <source 
          srcSet="/_.@2x.jpeg 2x, /_.jpeg 1x" 
          media="(min-resolution: 192dpi)" 
        />
        <img src="/_.jpeg" alt="Background" className="bg-image" />
      </picture> */}

      {/* Go Back Button */}
      <button className="go-back-btn" onClick={handleGoBack}>
        <span className="go-back-icon">&#8592;</span> Go Back
      </button>

      <h1 className="events-title">Upcoming Events</h1>

      {/* UPCOMING EVENT */}
      <div className="upcoming-event">
        <img
          src="/March28th_flyer_visual_2.png"
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

      {/* <h2 className="past-events-title">Past Events</h2>
      <div className="past-events-row">
        <div className="past-event-item">
          <img
            src="/March28th_flyer_visual_2.png"
            alt="Past Event Poster"
            className="past-poster"
          />
          <p className="past-date">Feb 15, 2023</p>
          <p className="past-location">New York, USA</p>
        </div>
      </div> */}
    </div>
  );
}

export default Events;
