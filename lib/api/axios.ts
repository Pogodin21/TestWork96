import { useAuthStore } from '@/store/auth';
import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://dummyjson.com',
    timeout: 10000,
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});