import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomNavbar from './components/Navbar';
import ProfileCover from './components/ProfileCover';
import ProfileInfo from './components/ProfileInfo';
import ProfileStats from './components/ProfileStats';
import NewTweet from './components/NewTweet';
import TweetCard from './components/TweetCard';
import RightPanel from './components/RightPanel';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

const Home = ({ tweets, addNewTweet, deleteTweet }) => (
  <>
    <ProfileCover />
    <ProfileStats tweetCount={tweets.length} />
    <Container>
      <Row>
        <Col md={3}>
          <ProfileInfo />
        </Col>
        <Col md={6}>
          <NewTweet onNewTweet={addNewTweet} />
          {tweets.map(tweet => (
            <TweetCard key={tweet._id} tweet={tweet} onDelete={deleteTweet} />
          ))}
        </Col>
        <Col md={3}>
          <RightPanel />
        </Col>
      </Row>
    </Container>
  </>
);

const Moments = () => (
  <Container>
    <h2>Moments</h2>
    <p>Moments are displayed here.</p>
  </Container>
);

const Notifications = () => (
  <Container>
    <h2>Notifications</h2>
    <p>View all the notifications here.</p>
  </Container>
);

const Messages = () => (
  <Container>
    <h2>Messages</h2>
    <p>View and send message from here.</p>
  </Container>
);

const App = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      const response = await axios.get('http://localhost:3000/tweets');
      setTweets(response.data);
    };
    fetchTweets();
  }, []);

  const addNewTweet = (tweet) => {
    setTweets([tweet, ...tweets]);
  };

  const deleteTweet = (id) => {
    setTweets(tweets.filter(tweet => tweet._id !== id));
  };

  return (
    <Router>
      <div className="App">
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home tweets={tweets} addNewTweet={addNewTweet} deleteTweet={deleteTweet} />} />
          <Route path="/moments" element={<Moments />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
