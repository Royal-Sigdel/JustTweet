import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Card } from 'react-bootstrap';
import Avatar from 'react-avatar';


const NewTweet = ({ onNewTweet }) => {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTweet = { content };
    const response = await axios.post('http://localhost:3000/tweets', newTweet);
    onNewTweet(response.data);
    setContent('');
  };

  return (
    <Card className="new-tweet mb-3">
      <Card.Body>
        <div className="d-flex">
          <Avatar name="John Smith" round={true} size="50" className="mr-3" />
          <Form onSubmit={handleSubmit} className="w-100">
            <Form.Group controlId="tweetContent">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="What's happening?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-2">
              Tweet
            </Button>
          </Form>
        </div>
      </Card.Body>
    </Card>
  );
};

export default NewTweet;
