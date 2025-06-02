import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

export const serverApi = axios.create({
  baseURL: API_URL,
});

export const getServerPosts = async (token?: string) => {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await serverApi.get('api/posts', { headers });
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};