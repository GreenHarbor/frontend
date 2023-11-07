import axios from '../axios';

export const getWorkshops = async () => {
  try {
    const response = await axios.get('/workshop/workshop');
    return response;
  } catch (error) {
    throw error;
  }
};

export const createWorkshop = async (data) => {
  try {
    const response = await axios.post('/workshop/workshop', data);
    return response;
  } catch (error) {
    throw error;
  }
};
