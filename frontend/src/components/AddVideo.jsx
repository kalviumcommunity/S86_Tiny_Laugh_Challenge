import React, { useState } from 'react';
import axios from 'axios';
import './VideoCard.css'; // Ensure this file exists and matches styles below

const AddVideo = ({ onVideoAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [uploadedBy, setUploadedBy] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newVideo = { title, description, videoUrl, uploadedBy };

    try {
      const response = await axios.post('http://localhost:5000/api/videos', newVideo);
      alert('Video added!');
      if (onVideoAdded) onVideoAdded(response.data);
      setTitle('');
      setDescription('');
      setVideoUrl('');
      setUploadedBy('');
    } catch (err) {
      console.error('Error adding video:', err);
      alert('Failed to add video.');
    }
  };

  return (
    <div className="add-video-container">
      <h2 className="form-title">Add a New Baby Laugh Video</h2>
      <form className="add-video-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input"
          placeholder="Video Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          className="form-input"
          placeholder="Video Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="url"
          className="form-input"
          placeholder="YouTube Video URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          required
        />
        <input
          type="text"
          className="form-input"
          placeholder="Uploaded By"
          value={uploadedBy}
          onChange={(e) => setUploadedBy(e.target.value)}
        />
        <button type="submit" className="submit-btn">Add Video</button>
      </form>
    </div>
  );
};

export default AddVideo;
