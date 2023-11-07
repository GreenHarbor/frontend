import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosRetry from 'axios-retry';

const instance = axios.create({
  baseURL: 'https://api.greenharbor.cfd',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosRetry(instance, {
  retries: 5, // Set the total number of retries to 5
  retryDelay: axiosRetry.exponentialDelay, // Use exponential backoff delay between retries
  shouldResetTimeout: true, // Reset the request timeout on every retry
  retryCondition: (error) => {
    // Retry on network errors and 5xx status codes
    return (
      axiosRetry.isNetworkOrIdempotentRequestError(error) ||
      error.response.status >= 500
    );
  },
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
