const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const cors = require('cors');



app.use(cors());
app.use(express.json());

;

mongoose.connect('mongodb+srv://alinsigdel:Pioneer123@justtweet.dwweefi.mongodb.net/?retryWrites=true&w=majority&appName=JustTweet')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


  const tweetSchema = new mongoose.Schema({
    content: String,
  }, { timestamps: true });

const Tweet = mongoose.model('Tweet', tweetSchema);


app.get('/tweets', async (req, res) => {
  const tweets = await Tweet.find().sort({ createdAt: -1 });
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
