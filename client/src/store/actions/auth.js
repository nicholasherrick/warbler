import { apiCall } from '../../services/api';
import { SET_CURRENT_USER } from '../actionTypes';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user,
  };
}

export function authUser(type, userData) {
  return (dispatch) => {
    //   Wrap thunk in a promise to wait for API call
    return new Promise((resolve, reject) => {
      return apiCall('post', `/api/auth/${type}`, userData)
        .then(({ token, ...user }) => {
          localStorage.setItem('jwtToken', token);
          dispatch(setCurrentUser(user));
          resolve(); // API call succeeded
        })
        .catch((err) => {
          reject(); // API call failed
        });
    });
  };
}