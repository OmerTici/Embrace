import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Bio from './components/Bio';
import Events from './components/Events';

function App() {
  return (
    <Router>
      <div
        style={{
          margin: 0,
          padding: 0,
          minHeight: '100vh',
          background: '#000', // black background
          boxSizing: 'border-box'
        }}
      >
        <br></br>
        {/* Header row with smaller height */}
        <header style={{
          backgroundColor: '#000',
          height: '100px',          // reduced header row height
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {/* Increased logo size */}
          <img 
            src="/white_logo.png" 
            alt="Embrace Logo" 
            style={{ height: '300px', objectFit: 'contain' }} 
          />
        </header>

        {/* Main content area */}
        <main style={{ padding: '1rem' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
