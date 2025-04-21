import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import VideoList from './components/VideoList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/videos" element={<VideoList />} />
      </Routes>
    </Router>
  );
}

export default App;
