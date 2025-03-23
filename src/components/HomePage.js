import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  // Refs for each section’s video so they can be controlled independently
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const navigate = useNavigate();

  // Hover handlers for About Us
  const handleVideoMouseEnter1 = () => {
    if (videoRef1.current) {
      videoRef1.current.play();
    }
  };
  const handleVideoMouseLeave1 = () => {
    if (videoRef1.current) {
      videoRef1.current.pause();
    }
  };

  // Hover handlers for Events
  const handleVideoMouseEnter2 = () => {
    if (videoRef2.current) {
      videoRef2.current.play();
    }
  };
  const handleVideoMouseLeave2 = () => {
    if (videoRef2.current) {
      videoRef2.current.pause();
    }
  };

  // Hover handlers for Shop
  const handleVideoMouseEnter3 = () => {
    if (videoRef3.current) {
      videoRef3.current.play();
    }
  };
  const handleVideoMouseLeave3 = () => {
    if (videoRef3.current) {
      videoRef3.current.pause();
    }
  };

  // Navigation handlers
  const handleSection1Click = () => {
    navigate('/bio');
  };
  const handleSection2Click = () => {
    navigate('/events');
  };
  // const handleSection3Click = () => {
  //   alert('Shop clicked! (No navigation yet)');
  // };

  return (
    <div className="container">
      {/* Section 1: About Us */}
      <div
        className="column section1"
        onClick={handleSection1Click}
        onMouseEnter={handleVideoMouseEnter1}
        onMouseLeave={handleVideoMouseLeave1}
      >
        <video
          ref={videoRef1}
          className="column-video"
          src="/website2.mp4"
          loop
          muted
          preload="auto"
        />
        <div className="video-overlay">
          <h2>About Us</h2>
        </div>
      </div>

      {/* Section 2: Events */}
      <div
        className="column section2"
        onClick={handleSection2Click}
        onMouseEnter={handleVideoMouseEnter2}
        onMouseLeave={handleVideoMouseLeave2}
      >
        <video
          ref={videoRef2}
          className="column-video"
          src="/website1.mp4"
          loop
          muted
          preload="auto"
        />
        <div className="video-overlay">
          <h2>Events</h2>
        </div>
      </div>

      {/* Section 3: Shop */}
      <div
        className="column section3"
        // onClick={handleSection3Click}
        onMouseEnter={handleVideoMouseEnter3}
        onMouseLeave={handleVideoMouseLeave3}
      >
        <video
          ref={videoRef3}
          className="column-video"
          src="/website3.mp4"
          loop
          muted
          preload="auto"
        />
        <div className="video-overlay">
          <h2>
            Shop <br /> (Coming Soon)
          </h2>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
