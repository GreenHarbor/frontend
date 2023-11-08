import axios from '../axios';

export const register = async (data) => {
  try {
    const response = await axios.post('/workshop-participation/register', data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const withdraw = async (data) => {
  try {
    const response = await axios.post('/workshop-participation/withdraw', data);
    return response;
  } catch (error) {
    throw error;
  }
};
