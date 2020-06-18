import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editMessage } from '../store/actions/messages';

class EditMessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  handleEditMessage = (event) => {
    event.preventDefault();
    this.props.editMessage(
      this.state.message,
      this.props.currentUser,
      this.props.messageId
    );
    window.location.reload(false);
  };

  render() {
    return (
      <form onSubmit={this.handleEditMessage}>
        {this.props.errors.message && (
          <div className='alert alert-danger'>{this.props.errors.message}</div>
        )}
        <input
          type='text'
          className='form-control'
          value={this.state.message}
          onChange={(e) => this.setState({ message: e.target.value })}
        />
        <button type='submit' className='btn btn-success pull-right'>
          Save
        </button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors,
    currentUser: state.currentUser.user.id,
  };
}

export default connect(mapStateToProps, { editMessage })(EditMessageForm);
