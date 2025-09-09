import axios from 'axios'

const config = axios.create({
  baseURL: "http://localhost:5200/",
  timeout: 30000,
  withCredentials: false,
});

export default config;