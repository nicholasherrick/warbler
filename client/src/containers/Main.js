import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import { authUser } from '../store/actions/auth';
import { removeError } from '../store/actions/errors';

const Main = (props) => {
  const { authUser, errors, removeError } = props;

  return (
    <div className='container'>
      <Switch>
        <Route exact path='/' render={(props) => <Homepage {...props} />} />
        <Route
          exact
          path='/login'
          render={(props) => {
            return (
              <AuthForm
                removeError={removeError}
                errors={errors}
                onAuth={authUser}
                buttonText='Log In'
                heading='Welcome Back'
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          path='/register'
          render={(props) => {
            return (
              <AuthForm
                removeError={removeError}
                errors={errors}
                onAuth={authUser}
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
    errors: state.errors,
  };
}

// Use Main component after connected to redux store
export default withRouter(
  connect(mapStateToProps, { authUser, removeError })(Main)
);
