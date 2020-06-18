import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import DefaultProfileImg from '../images/default-profile-image.jpg';
import EditMessageForm from './EditMessageForm';

class MessageItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayEdit: false,
    };
    this.renderEditMessageForm = this.renderEditMessageForm.bind(this);
  }

  renderEditMessageForm = () => {
    if (this.state.displayEdit === true) {
      this.setState({ displayEdit: false });
    } else {
      this.setState({ displayEdit: true });
    }
  };

  render() {
    const {
      messageId,
      date,
      profileImageUrl,
      text,
      username,
      removeMessage,
      isCorrectUser,
    } = this.props;

    return (
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
            {this.state.displayEdit ? (
              <EditMessageForm messageId={messageId} />
            ) : (
              <p>{text}</p>
            )}
            {isCorrectUser && (
              <a
                onClick={this.renderEditMessageForm}
                className='btn btn-warning'
              >
                Edit
              </a>
            )}
            {isCorrectUser && (
              <a onClick={removeMessage} className='btn btn-danger'>
                Delete
              </a>
            )}
          </div>
        </li>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    currentUser: state.currentUser.user.id,
  };
}

export default connect(mapStateToProps, null)(MessageItem);
