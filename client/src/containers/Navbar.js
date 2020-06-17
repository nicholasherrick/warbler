import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/actions/auth';
import Logo from '../images/warbler-logo.png';

class Navbar extends Component {
  logout = (e) => {
    e.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <nav className='navbar navbar-expand'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <Link to='/' className='navbar-brand'>
              <img src={Logo} alt='Warbler Home' />
            </Link>
          </div>
          {this.props.currentUser.isAuthenticated ? (
            // Displayed if logged in
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <Link
                  to={`/users/${this.props.currentUser.user.id}/messages/new`}
                >
                  New Message
                </Link>
              </li>
              <li>
                <a onClick={this.logout}>Logout</a>
              </li>
            </ul>
          ) : (
            // Displayed if logged out
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <Link to='/register'>Register</Link>
              </li>
              <li>
                <Link to='/login'>Login</Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps, { logout })(Navbar);
