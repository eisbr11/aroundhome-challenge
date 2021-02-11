import axios from 'axios';
import Config from 'lib/Config';

const companyServer = axios.create({
  baseURL: Config.api_host,
  timeout: 8000,
  headers: {
    accept: 'application/json',
  },
});

export default companyServer;
