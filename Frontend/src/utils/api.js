import axios from 'axios';

const API_URL = 'http://localhost:5000/api';
console.log('API URL:', API_URL);

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  console.log('Making request to:', config.baseURL + config.url);
  console.log('Request data:', config.data);
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  console.error('Request interceptor error:', error);
  return Promise.reject(error);
});

api.interceptors.response.use(
  (response) => {
    console.log('Response received:', response);
    return response;
  },
  (error) => {
    console.error('Response error:', error);
    if (error.code === 'ECONNABORTED') {
      console.error('Request timeout');
    }
    return Promise.reject(error);
  }
);

export const authAPI = {
  register: (data) => {
    console.log('authAPI.register called with:', data);
    return api.post('/auth/register', data);
  },
  login: (data) => api.post('/auth/login', data),
  getMe: () => api.get('/auth/me'),
};

export const jobAPI = {
  getAllJobs: (params) => api.get('/jobs', { params }),
  getJobById: (id) => api.get(`/jobs/${id}`),
  createJob: (data) => api.post('/jobs', data),
  getMyJobs: () => api.get('/jobs/my-jobs'),
  updateJob: (id, data) => api.put(`/jobs/${id}`, data),
  deleteJob: (id) => api.delete(`/jobs/${id}`),
};

export const applicationAPI = {
  applyForJob: (data) => api.post('/applications', data),
  getMyApplications: () => api.get('/applications/my-applications'),
  getJobApplications: (jobId) => api.get(`/applications/job/${jobId}`),
  updateApplicationStatus: (id, data) => api.put(`/applications/${id}`, data),
};

export const profileAPI = {
  getProfile: () => api.get('/profile'),
  updateProfile: (data) => api.put('/profile', data),
};

export const adminAPI = {
  getStats: () => api.get('/admin/stats'),
  getAllUsers: () => api.get('/admin/users'),
  toggleUserStatus: (id) => api.put(`/admin/users/${id}/toggle-status`),
  deleteUser: (id) => api.delete(`/admin/users/${id}`),
};

export default api;