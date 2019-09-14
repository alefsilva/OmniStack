import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://localhost:7777'
});

export default Api;
