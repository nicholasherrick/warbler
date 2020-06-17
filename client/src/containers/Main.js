import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import { authUser } from '../store/actions/auth';
import { removeError } from '../store/actions/errors';
import withAuth from '../hocs/withAuth';
import MessageForm from '../containers/MessageForm';

const Main = (props) => {
  const { authUser, errors, removeError, currentUser } = props;

  return (
    <div className='container'>
      <Switch>
        {/* This route sends currentUser from redux to the Homepage component */}
        <Route
          exact
          path='/'
          render={(props) => <Homepage currentUser={currentUser} {...props} />}
        />
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
        <Route
          path='/users/:id/messages/new'
          component={withAuth(MessageForm)}
        />
      </Switch>
    </div>
  );
};

// these get passed into ^Main^ as props
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
