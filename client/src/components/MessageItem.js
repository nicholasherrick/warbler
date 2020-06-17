import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import DefaultProfileImg from '../images/default-profile-image.jpg';

const MessageItem = ({
  date,
  profileImageUrl,
  text,
  username,
  removeMessage,
  isCorrectUser,
}) => (
  <div>
    <li className='list-group-item'>
      <img
        src={profileImageUrl || DefaultProfileImg}
        alt={username}
        className='timeline-image'
        height='100'
        width='100'
      />
      <div className='message-area'>
        <Link to='/'>@{username} &nbsp;</Link>
        <span className='text-muted'>
          <Moment className='text-muted' format='Do MMM YYYY'>
            {date}
          </Moment>
        </span>
        <p>{text}</p>
        {isCorrectUser && (
          <a onClick={removeMessage} className='btn btn-danger'>
            Delete
          </a>
        )}
      </div>
    </li>
  </div>
);

export default MessageItem;
