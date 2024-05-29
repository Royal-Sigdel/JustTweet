import React from 'react';
import { Button } from 'react-bootstrap';
import nature from '../nature.jpeg';
import nature1 from '../nature1.jpeg';

const ProfileInfo = () => {
  return (
    <div className="profile-info">
      <h2>John Smith</h2>
      <p className="handle">@john</p>
      <a href="https://twitter.com/john" className="profile-link">twitter.com/john</a>
      <p className="location">Perth, WA</p>
      <p className="join-date">Joined November 2020</p>
      <Button variant="primary" className="tweet-button">Tweet to John Smith</Button>
      <div className="photos-videos">
        <p className="media-count">1,142 Photos and videos</p>
        <div className="media-grid">
          <img src={nature} alt="media1" />
          <img src={nature1} alt="media2" />
          <img src={nature} alt="media3" />
          <img src={nature1} alt="media4" />
          <img src={nature} alt="media5" />
          <img src={nature1} alt="media6" />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
