import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoCard from './VideoCard';
import './VideoList.css';

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/videos');
        setVideos(response.data);
      } catch (error) {
        console.error('Failed to fetch videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="video-list">
      <h2>Watch Baby Laugh Videos</h2>
      <div className="videos-container">
        {videos.map((video) => (
          <VideoCard
            key={video._id}
            title={video.title}
            description={video.description}
            videoUrl={video.videoUrl}
            thumbnailUrl={`https://img.youtube.com/vi/${getYouTubeID(video.videoUrl)}/0.jpg`}
            uploadedBy={video.uploadedBy} // Assuming this is the user's ID
          />
        ))}
      </div>
    </div>
  );
};

const getYouTubeID = (url) => {
  const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^\s&]+)/);
  return match ? match[1] : '';
};

export default VideoList;
