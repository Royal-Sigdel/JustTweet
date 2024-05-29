import React from 'react';
import Avatar from 'react-avatar';
import coverImage from '../cover.jpeg';

const ProfileCover = () => {
  return (
    <div className="profile-cover" style={{ backgroundImage: `url(${coverImage})` }}>
      <div className="profile-avatar-container">
        <Avatar name="John Smith" round={true} size="100" className="profile-avatar" />
      </div>
    </div>
  );
};

export default ProfileCover;
