const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB

const dbURI = 'mongodb+srv://alinsigdel:Pioneer123@justtweet.dwweefi.mongodb.net/?retryWrites=true&w=majority&appName=JustTweet';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Tweet Schema and Model
const tweetSchema = new mongoose.Schema({
  content: String,
  date: { type: Date, default: Date.now }
});

const Tweet = mongoose.model('Tweet', tweetSchema);

// Routes
app.get('/tweets', async (req, res) => {
  const tweets = await Tweet.find();
  res.json(tweets);
});

app.post('/tweets', async (req, res) => {
  const tweet = new Tweet(req.body);
  await tweet.save();
  res.json(tweet);
});

app.delete('/tweets/:id', async (req, res) => {
  await Tweet.findByIdAndDelete(req.params.id);
  res.json({ message: 'Tweet deleted' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
