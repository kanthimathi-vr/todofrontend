import axios from 'axios';

// Set a base URL for all requests
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
});

// You can create reusable functions for each API endpoint
export const getTasks = () => api.get('tasks/');
export const addTask = (title) => api.post('tasks/', { title });
export const updateTask = (id, data) => api.put(`tasks/${id}/`, data);
export const deleteTask = (id) => api.delete(`tasks/${id}/`);

export default api;