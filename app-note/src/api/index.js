import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

const registerUser = userData => {
  return instance.post('signup', userData);
};

const loginUser = () => {};

export { registerUser };
