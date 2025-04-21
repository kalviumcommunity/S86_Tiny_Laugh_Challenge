const express = require('express');
const router = express.Router();
const Video = require('./Schema');


router.post('/', async (req, res) => {
  try {
    const { title, description, videoUrl, uploadedBy } = req.body;
    const newVideo = new Video({ title, description, videoUrl, uploadedBy });
    await newVideo.save();
    res.status(201).json(newVideo);
  } catch (err) {
    res.status(500).json({ error: 'Failed to upload video' });
  }
});


router.get('/', async (req, res) => {
  try {
    const videos = await Video.find().sort({ createdAt: -1 });
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch videos' });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ error: 'Video not found' });
    res.json(video);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch video' });
  }
});


router.put('/:id', async (req, res) => {
  try {
    const updatedVideo = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedVideo) return res.status(404).json({ error: 'Video not found' });
    res.json(updatedVideo);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update video' });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const deletedVideo = await Video.findByIdAndDelete(req.params.id);
    if (!deletedVideo) return res.status(404).json({ error: 'Video not found' });
    res.json({ message: 'Video deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete video' });
  }
});

module.exports = router;
