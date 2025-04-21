import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import VideoCard from './components/VideoCard';

function App() {
  const [showVideos, setShowVideos] = useState(false);

  const handleWatchClick = () => {
    setShowVideos(true);
  };

  const handleBackClick = () => {
    setShowVideos(false);
  };

  const dummyVideo = {
    title: 'Baby Laugh Compilation',
    thumbnailUrl: 'https://i.ytimg.com/vi/HttF5HVYtlQ/maxresdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/HttF5HVYtlQ',
  };

  return (
    <div>
      {!showVideos ? (
        <LandingPage onWatchClick={handleWatchClick} />
      ) : (
        <VideoCard {...dummyVideo} onBackClick={handleBackClick} />
      )}
    </div>
  );
}

export default App;
