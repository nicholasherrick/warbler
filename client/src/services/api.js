import axios from 'axios';

// Attaches token to any request while user is logged in
export function setTokenHeader(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}

// Calls back-end api, returning data or errors
export function apiCall(method, path, data) {
  return new Promise((resolve, reject) => {
    return axios[method](path, data)
      .then((res) => {
        return resolve(res.data);
      })
      .catch((err) => {
        return reject(err.response.data.error);
      });
  });
}
