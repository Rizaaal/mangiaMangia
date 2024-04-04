import React from 'react';

function LandingPage({ setLandingPageVisible }) {
  return (
    <div>
      <h1>Benvenuto nel nostro ristorante!</h1>
      <button onClick={() => setLandingPageVisible(false)}>
        Entra nel sito
      </button>
    </div>
  );
}

export default LandingPage;
