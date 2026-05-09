const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const { nanoid } = require('nanoid');
require('dotenv').config();

const Url = require('./models/Url');

const app = express();
const PORT = process.env.PORT || 8001;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/short_url';

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static('public'));

// Database Connection
mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// API Endpoints

// 1. Create a short URL
app.post('/api/urls', async (req, res) => {
  try {
    const { originalUrl } = req.body;
    if (!originalUrl) {
      return res.status(400).json({ error: 'URL is required' });
    }

    let url = await Url.findOne({ originalUrl });
    if (url) {
      return res.json(url);
    }

    const shortId = nanoid(8);
    url = new Url({
      originalUrl,
      shortId
    });

    await url.save();
    res.status(201).json(url);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// 2. Get recent links
app.get('/api/urls/recent', async (req, res) => {
  try {
    const urls = await Url.find().sort({ createdAt: -1 }).limit(10);
    res.json(urls);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// 3. View click analytics
app.get('/api/urls/analytics/:shortId', async (req, res) => {
  try {
    const url = await Url.findOne({ shortId: req.params.shortId });
    if (!url) {
      return res.status(404).json({ error: 'URL not found' });
    }
    res.json(url);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// 4. Redirect to original URL
app.get('/:shortId', async (req, res) => {
  try {
    const { shortId } = req.params;
    const url = await Url.findOne({ shortId });

    if (!url) {
      return res.status(404).send('URL not found');
    }

    // Track analytics
    url.clicks += 1;
    url.analytics.push({
      userAgent: req.headers['user-agent'],
      ip: req.ip
    });
    await url.save();

    res.redirect(url.originalUrl);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
