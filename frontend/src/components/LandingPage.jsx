import React from 'react';
import './LandingPage.css';

const LandingPage = ({ onWatchClick }) => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Tiny Laugh Challenge</h1>
        <p>Try not to laugh at adorable baby giggles 😄</p>
      </header>

      <main className="landing-main">
        <section className="section">
          <h2>🎯 Project Overview</h2>
          <p>
            <strong>Tiny Laugh Challenge</strong> is a fun and simple app where users can watch videos of babies laughing and challenge themselves not to laugh. It brings joy, spreads happiness, and is built to create delightful moments.
          </p>
        </section>

    

        <button className="watch-button" onClick={onWatchClick}>
          🎬 Watch Videos
        </button>
      </main>

      <footer className="footer">
        © 2025 Tiny Laugh Challenge | Made with ❤️ by Bhanu
      </footer>
    </div>
  );
};

export default LandingPage;
