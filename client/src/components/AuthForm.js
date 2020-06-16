import React, { Component } from 'react';

export default class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      profileImageUrl: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { email, username, password, profileImageUrl } = this.state;
    const { heading, buttonText, register } = this.props;

    return (
      <div>
        <div className='row justify-content-md-center text-center'>
          <div className='col-md-6'>
            <form onSubmit={this.handleSubmit}>
              <h2>{heading}</h2>
              <label htmlFor='email'>Email</label>
              <input
                className='form-control'
                id='email'
                name='email'
                type='email'
                placeholder='email@example.com'
                value={email}
                onChange={this.handleChange}
              />
              <label htmlFor='password'>Password</label>
              <input
                className='form-control'
                id='password'
                name='password'
                type='password'
                placeholder='case sensitive'
                onChange={this.handleChange}
              />
              {register && (
                <div>
                  <label htmlFor='username'>Username</label>
                  <input
                    className='form-control'
                    id='username'
                    name='username'
                    type='text'
                    placeholder='other users will see your username'
                    value={username}
                    onChange={this.handleChange}
                  />
                  <label htmlFor='image-url'>Avatar Url</label>
                  <input
                    className='form-control'
                    id='image-Url'
                    name='profileImageUrl'
                    type='text'
                    placeholder='enter url to desired avatar image'
                    value={profileImageUrl}
                    onChange={this.handleChange}
                  />
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }
}
