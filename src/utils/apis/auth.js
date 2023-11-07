import axios from '../axios';

export const login = async (username, password) => {
  try {
    const response = await axios.post('/auth/signin', {
      username,
      password,
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const register = async (email, password, username) => {
  try {
    const response = await axios.post('/auth/signup', {
      email,
      password,
      username,
      tag: ['urgent', 'vegan', 'organic', 'nearby'],
    });

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
