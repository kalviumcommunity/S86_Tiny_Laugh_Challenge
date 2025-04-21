import React from 'react';

const VideoCard = ({ title, description, videoUrl, thumbnailUrl, uploadedBy }) => {
  const videoId = getYouTubeID(videoUrl);

  return (
    <div className="video-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Uploaded by: {uploadedBy?.username}</p>
      {/* Embed the YouTube video directly in the card */}
      <div className="video-embed">
        <iframe
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

// Helper function to extract YouTube video ID
const getYouTubeID = (url) => {
  const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^\s&]+)/);
  return match ? match[1] : '';
};

export default VideoCard;
