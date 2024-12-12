import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.3.17:3333',
  timeout: 700, // Se passar 700 ms sem resposta ele para de esperar uma resposta
});
