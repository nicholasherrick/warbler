import { apiCall } from '../../services/api';
import { addError } from './errors';
import { LOAD_MESSAGES, REMOVE_MESSAGE, EDIT_MESSAGE } from '../actionTypes';

export const loadMessages = (messages) => ({
  type: LOAD_MESSAGES,
  messages,
});

export const remove = (id) => ({
  type: REMOVE_MESSAGE,
  id,
});

export const edit = (id) => ({
  type: EDIT_MESSAGE,
  id,
});

export const fetchMessages = () => {
  return (dispatch) => {
    return apiCall('get', '/api/messages')
      .then((res) => {
        dispatch(loadMessages(res));
      })
      .catch((err) => {
        dispatch(addError(err.message));
      });
  };
};

export const postNewMessage = (text) => (dispatch, getState) => {
  let { currentUser } = getState();
  const id = currentUser.user.id;
  return apiCall('post', `/api/users/${id}/messages`, { text })
    .then((res) => {})
    .catch((err) => {
      dispatch(addError(err.message));
    });
};

export const removeMessage = (user_id, message_id) => {
  return (dispatch) => {
    return apiCall('delete', `/api/users/${user_id}/messages/${message_id}`)
      .then(() => dispatch(remove(message_id)))
      .catch((err) => {
        dispatch(addError(err.message));
      });
  };
};

export const editMessage = (text, user_id, message_id) => {
  return (dispatch) => {
    return apiCall('put', `/api/users/${user_id}/messages/${message_id}`, {
      text,
    })
      .then(() => dispatch(edit(message_id)))
      .catch((err) => {
        dispatch(addError(err.message));
      });
  };
};
