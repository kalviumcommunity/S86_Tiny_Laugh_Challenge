import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle button click and navigate to videos page
  const handleWatchClick = () => {
    navigate('/videos'); // Navigates to /videos endpoint
  };

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

        <button className="watch-button" onClick={handleWatchClick}>
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
