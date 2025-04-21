import React from 'react';
import './VideoCard.css';

const VideoCard = ({ title, thumbnailUrl, videoUrl, onBackClick }) => {
  return (
    <div className="video-card">
      <h2>{title}</h2>
      <div className="video-wrapper">
        <iframe
          width="560"
          height="315"
          src={videoUrl}
          title="Baby Laugh Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <button className="back-btn" onClick={onBackClick}>🔙 Back</button>
    </div>
  );
};

export default VideoCard;
