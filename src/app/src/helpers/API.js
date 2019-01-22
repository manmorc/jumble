const API_URL = 'http://localhost:3005/';

const API = {
  test: API_URL + 'test',
  login: API_URL + 'auth/google',
  getUser: (userId) => API_URL + 'user/' + userId
};

export default API;
