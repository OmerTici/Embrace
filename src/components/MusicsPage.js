import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './Album.css';
import './MusicsPage.css';

/* ─────────────────────────  STAR‑FIELD BACKGROUND  ────────────────────────── */
function StarField() {
  const vw = window.innerWidth;          // full viewport width
  const vh = window.innerHeight;         // height (for random Y)

  const makeShadows = count =>
    Array.from({ length: count })
      .map(() =>
        `${Math.random() * vw}px ${Math.random() * (vh * 2)}px #FFF`
      )
      .join(',');

  const small  = useMemo(() => makeShadows(700), [vw, vh]);
  const medium = useMemo(() => makeShadows(200), [vw, vh]);
  const big    = useMemo(() => makeShadows(100), [vw, vh]);

  return (
    <>
      <div id="stars"  style={{ boxShadow: small,  animationDuration: '50s'  }} />
      <div id="stars2" style={{ boxShadow: medium, animationDuration: '100s' }} />
      <div id="stars3" style={{ boxShadow: big,    animationDuration: '150s' }} />
    </>
  );
}
/* ──────────────────────────────────────────────────────────────────────────── */

export default function MusicsPage() {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  const handleGoBack = () => {
    setFadeOut(true);
    setTimeout(() => navigate(-1), 500);
  };

  /* inject cover art into vinyl labels */
  useEffect(() => {
    const albums = document.querySelectorAll('.album');
    albums.forEach(a => {
      const url = a.getAttribute('data-cover-url');
      const lbl = a.querySelector('.vinyl-cover');
      if (url && lbl) lbl.style.backgroundImage = `url('${url}')`;
    });
  }, []);

  return (
    <>
      <StarField /> {/* ⭐ starry sky sits behind everything */}
      <div className={`music-page ${fadeOut ? 'fade-out' : ''}`}>
        {/* go‑back */}
        <button className="go-back-btn" onClick={handleGoBack}>
          <span className="go-back-icon">&#8592;</span> Go&nbsp;Back
        </button>

        {/* main album linked to YouTube */}
        <a
          href="https://www.youtube.com/watch?v=ZWNk-KDQyp8&t=3187s"
          target="_blank"
          rel="noreferrer"
          className="album-link"
        >
          <div
            className="album main"
            data-cover-url="https://i.pinimg.com/736x/62/8d/34/628d345ace1c75d3577ce1e06c26b9a2.jpg"
          >
            <div className="cover">
              <img
                src="https://i.pinimg.com/736x/62/8d/34/628d345ace1c75d3577ce1e06c26b9a2.jpg"
                alt="Album Cover"
              />
            </div>
            <div className="vinyl">
              <div className="vinyl-cover" />
            </div>
          </div>
        </a>

        <h2 className="album-caption">EmbracE&nbsp;Sessions&nbsp;‑&nbsp;001&nbsp;‑</h2>

        {/* optional smaller albums (currently commented out) */}
        
        {/* <div className="small-row">
          {[
            'https://images.genius.com/3517a37f2f8ce13d2ea42bded78dd010.1000x1000x1.png',
            'https://i.scdn.co/image/ab67616d0000b27383e260c313dc1ff1f17909cf',
            'https://i.scdn.co/image/ab67616d0000b2739cf15c7323fb85b7112197d5',
          ].map(url => (
            <div key={url} className="album small" data-cover-url={url}>
              <div className="cover"><img src={url} alt="Album Cover" /></div>
              <div className="vinyl"><div className="vinyl-cover" /></div>
            </div>
          ))}
        </div> */}

      </div>
    </>
  );
}



