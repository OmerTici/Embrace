// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage';
import Bio from './components/Bio';
import Events from './components/Events';
// import MediaDropdown from './components/MediaDropdown';
import MusicsPage from './components/MusicsPage';
import './App.css';
import Shop from './components/Shop';

function MainContainer() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // For the HomePage, use the image background;
  // for other pages, use a full black background.
  const containerStyle = isHomePage
    ? {
        margin: 0,
        padding: 0,
        minHeight: '100vh',
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/aliefe2.jpeg")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }
    : {
        margin: 0,
        padding: 0,
        minHeight: '100vh',
        background: '#000',
        boxSizing: 'border-box',
        overflow: 'hidden'
      };

  // For the header, use transparent on home; solid black on other pages.
  const headerStyle = isHomePage
    ? {
        background: 'transparent',
        height: '120px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 2rem'
      }
    : {
        background: '#000',
        height: '120px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 2rem'
      };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <div className="nav-container">
          <div className="nav-group left-group">
            <Link to="/bio" className="nav-link">
              <button className="nav-btn">About Us</button>
            </Link>
            <Link to="/events" className="nav-link">
              <button className="nav-btn">Events</button>
            </Link>
          </div>
          <div className="logo">
            <img
              src="/uhuhaha.png"
              alt="Embrace Logo"
              className="logo-img"
            />
          </div>
          <div className="nav-group right-group">
            <Link to="/shop" className="nav-link">
              <button className="nav-btn">Shop</button>
            </Link>
            <Link to="/musics" className="nav-link">
              <button className="nav-btn">Music</button>
            </Link>
          </div>
        </div>
      </header>

      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/events" element={<Events />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/musics" element={<MusicsPage />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <MainContainer />
    </Router>
  );
}

export default App;
