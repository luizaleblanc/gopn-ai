import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3030', 
  timeout: 10*1000, 
  headers: {
    'Content-Type': 'application/json', 
  },
});

export default api;
