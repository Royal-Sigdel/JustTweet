import React from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import Avatar from 'react-avatar';


const RightPanel = () => {
  return (
    <Card className="right-panel">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Card.Title className="mb-0">Who to follow</Card.Title>
          <div>
            <Button variant="link" size="sm" className="p-0 mr-2">Refresh</Button>
            <Button variant="link" size="sm" className="p-0">View All</Button>
          </div>
        </div>
        <ListGroup variant="flush">
          <ListGroup.Item className="d-flex align-items-center">
            <Avatar name="Bjarne" round={true} size="40" className="mr-3" />
            <div className="flex-grow-1">
              <Card.Text className="mb-0"><strong>Bjarne</strong> @stroustrup</Card.Text>
            </div>
            <Button variant="outline-primary" size="sm">Follow</Button>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex align-items-center">
            <Avatar name="John Smith" round={true} size="40" className="mr-3" />
            <div className="flex-grow-1">
              <Card.Text className="mb-0"><strong>John Smith</strong> @John</Card.Text>
            </div>
            <Button variant="outline-primary" size="sm">Follow</Button>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex align-items-center">
            <Avatar name="John Smith" round={true} size="40" className="mr-3" />
            <div className="flex-grow-1">
              <Card.Text className="mb-0"><strong>John Smith</strong> @John</Card.Text>
            </div>
            <Button variant="outline-primary" size="sm">Follow</Button>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default RightPanel;
