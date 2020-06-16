import { SET_CURRENT_USER } from '../actionTypes';

const DEFAULT_STATE = {
  isAuthenticated: false, //True when logged in
  user: {}, // All user info when logged in
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        //Returns boolean true if user is authenticated by checking for keys in action.user. If they exist, the user must be authenticated.
        // In other words, turn empty object into false, turn object with keys into true
        isAuthenticated: !!Object.keys(action.user).length,
        user: action.user,
      };
    default:
      return state;
  }
};
