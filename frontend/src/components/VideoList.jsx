import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoCard from './VideoCard';
import AddVideo from './AddVideo'; // 
import './VideoList.css';

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/videos');
      setVideos(response.data);
    } catch (error) {
      console.error('Failed to fetch videos:', error);
    }
  };

  const handleNewVideo = (newVideo) => {
    setVideos((prevVideos) => [...prevVideos, newVideo]);
  };

  return (
    <div className="video-list">
      <h2>Watch Baby Laugh Videos</h2>

      <AddVideo onVideoAdded={handleNewVideo} />

      <div className="videos-container">
        {videos.map((video) => (
          <VideoCard
            key={video._id}
            title={video.title}
            description={video.description}
            videoUrl={video.videoUrl}
            uploadedBy={video.uploadedBy}
            thumbnailUrl={`https://img.youtube.com/vi/${getYouTubeID(video.videoUrl)}/0.jpg`}
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

