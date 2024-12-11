import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  timeout: 700, // Se passar 700 ms sem resposta ele para de esperar uma resposta
});
