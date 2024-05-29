import React from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import Avatar from 'react-avatar';

const TweetCard = ({ tweet, onDelete }) => {
  const handleDelete = async () => {
    await axios.delete(`http://localhost:3000/tweets/${tweet._id}`);
    onDelete(tweet._id);
  };


  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };


  const currentDate = formatDate(new Date());

  return (
    <Card className="tweet-card mb-3">
      <Card.Body>
        <div className="d-flex align-items-start">
          <Avatar name="John Smith" round={true} size="50" className="mr-3" />
          <div className="w-100">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <div>
                <strong>John Smith</strong> @john - {currentDate}
              </div>
              <Button variant="link" size="sm" onClick={handleDelete}>Delete</Button>
            </div>
            <Card.Text>
              {tweet.content}
            </Card.Text>
            <div className="d-flex justify-content-between tweet-stats">
              <span>18</span>
              <span>64</span>
              <span>202</span>
              <span>155</span>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TweetCard;
