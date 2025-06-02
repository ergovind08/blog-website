import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

export const api = axios.create({
  baseURL: API_URL,
});

// Only add interceptor on client side
if (typeof window !== 'undefined') {
  api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
}

export const signup = async (email: string, password: string) => {
  const response = await api.post('/api/auth/signup', { email, password }); // Updated endpoint
  return response.data;
};

export const login = async (email: string, password: string) => {
  const response = await api.post('/api/auth/login', { email, password }); // Updated endpoint
  return response.data;
};

export const createPost = async (title: string, content: string) => {
  const response = await api.post('/post', { title, content });
  return response.data;
};

export const getPosts = async (authorId?: string) => {
  const url = authorId ? `/posts?author=${authorId}` : '/posts';
  const response = await api.get(url);
  return response.data;
};