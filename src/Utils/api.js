import axios from 'axios';
import Cookies from 'js-cookie'

const Token = Cookies.get('token')

const api = process.env.REACT_APP_API_URL;
// const api = 'http://localhost:4000/';

const createAxiosInstance = (token) => {
  return axios.create({
    baseURL: `${api}/`,
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${Token}`,
      'x-token': Token
    },
  });
};

export const instance = createAxiosInstance(Token);

export const updateToken = (newToken) => {
  // Create a new axios instance with the updated token
  instance.defaults.headers['Authorization'] = `Bearer ${newToken.trim()}`;
  instance.defaults.headers['x-token'] = newToken
};

export default instance;