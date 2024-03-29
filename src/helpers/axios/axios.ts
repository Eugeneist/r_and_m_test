import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/';

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.response.use(function (response: AxiosResponse) {
  return response.data;
});

export default instance;
