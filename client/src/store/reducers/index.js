import { combineReducers } from 'redux';
import currentUser from './currentUser';
import errors from './errors';

// Bundle together the errors and currentUser reducers
const rootReducer = combineReducers({
  currentUser,
  errors,
});

export default rootReducer;
