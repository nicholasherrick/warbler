import React from 'react';
import { Link } from 'react-router-dom';
import MessageTimeline from './MessageTimeline';

const Homepage = ({ currentUser }) => {
  // If user is not logged in
  if (!currentUser.isAuthenticated) {
    return (
      <div className='home-hero'>
        <h1>What's Happening?</h1>
        <h4>New to Warbler?</h4>
        <Link to='/register' className='btn btn-primary'>
          Sign up here
        </Link>
      </div>
    );
  }
  // If user is logged in
  return (
    <div>
      <MessageTimeline
        profileImageUrl={currentUser.user.profileImageUrl}
        username={currentUser.user.username}
      />
    </div>
  );
};

export default Homepage;
