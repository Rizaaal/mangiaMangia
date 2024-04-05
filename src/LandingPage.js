//aaa
import React from 'react';
import './App.css';
import HeroScreen from './Components/HeroScreen';

function LandingPage({ setLandingPageVisible }) {
  return (
    <div className="landing-page">
      <HeroScreen />
      <hr></hr>
      <button className="hero-btn" onClick={() => setLandingPageVisible(false)}>
        Entra nel sito
      </button>
    </div>
  );
}

export default LandingPage;
