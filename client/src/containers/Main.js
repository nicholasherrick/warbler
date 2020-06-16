import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';

const Main = () => {
  return (
    <div className='container'>
      <Switch>
        <Route exact path='/' render={(props) => <Homepage {...props} />} />
        <Route
          exact
          path='/login'
          render={(props) => {
            return (
              <AuthForm buttonText='Log In' heading='Welcome Back' {...props} />
            );
          }}
        />
        <Route
          exact
          path='/register'
          render={(props) => {
            return (
              <AuthForm
                register
                buttonText='Sign Up'
                heading='Join Warbler'
                {...props}
              />
            );
          }}
        />
      </Switch>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

// Use Main component after connected to redux store
export default withRouter(connect(mapStateToProps, null)(Main));
