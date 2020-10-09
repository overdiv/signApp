import axios from 'axios';
import { setInterceptors } from './common/interceptors';

const createInstance = () => {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  return setInterceptors(instance);
};

const instance = createInstance();

const registerUser = userData => {
  return instance.post('signup', userData);
};

const loginUser = userData => {
  return instance.post('login', userData);
};

const fetchPosts = () => {
  return instance.get('posts');
};

export { registerUser, loginUser, fetchPosts };
