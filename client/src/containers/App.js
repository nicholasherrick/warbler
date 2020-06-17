import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../store';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import Main from './Main';
import { setAuthorizationToken, setCurrentUser } from '../store/actions/auth';
import jwtDecode from 'jwt-decode';

const store = configureStore();

// Check for localStorage token on page refresh
if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  // Set up Rehydration, if server disconnects, remain authenticated
  // Prevent manual tampering with key of jwtToken in localStorage
  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  } catch (err) {
    // If token is tampered with, forcibly log out
    store.dispatch(setCurrentUser({}));
  }
}

const App = () => (
  <Provider store={store}>
    <Router>
      <div className='onboarding'>
        <Navbar />
        <Main />
      </div>
    </Router>
  </Provider>
);

export default App;
