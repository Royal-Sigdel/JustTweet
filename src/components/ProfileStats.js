import React from 'react';


const ProfileStats = ({ tweetCount }) => {
  return (
    <div className="profile-stats">
      <div className="stat">
        <span className="stat-number">{tweetCount}</span>
        <span className="stat-label">Tweets</span>
      </div>
      <div className="stat">
        <span className="stat-number">420</span>
        <span className="stat-label">Following</span>
      </div>
      <div className="stat">
        <span className="stat-number">583</span>
        <span className="stat-label">Followers</span>
      </div>
      <div className="stat">
        <span className="stat-number">241</span>
        <span className="stat-label">Likes</span>
      </div>
    </div>
  );
};

export default ProfileStats;
