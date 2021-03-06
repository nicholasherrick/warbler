import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchMessages,
  removeMessage,
  editMessage,
} from '../store/actions/messages';
import MessageItem from '../components/MessageItem';

class MessageList extends Component {
  componentDidMount() {
    this.props.fetchMessages();
  }

  render() {
    const { messages, removeMessage, currentUser, editMessage } = this.props;
    let listMessages = messages.map((m) => (
      <MessageItem
        key={m._id}
        messageId={m._id}
        date={m.createdAt}
        text={m.text}
        username={m.user.username}
        profileImageUrl={m.user.profileImageUrl}
        // Pass in removeMessage action and bind the correct user and message ids to keyword this
        removeMessage={removeMessage.bind(this, m.user._id, m._id)}
        editMessage={editMessage}
        isCorrectUser={currentUser === m.user._id}
      />
    ));
    return (
      <div className='row col-sm-8'>
        <div className='offset-1 col-sm-10'>
          <ul className='list-group' id='messages'>
            {listMessages}
          </ul>
        </div>
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

export default connect(mapStateToProps, {
  fetchMessages,
  removeMessage,
  editMessage,
})(MessageList);
