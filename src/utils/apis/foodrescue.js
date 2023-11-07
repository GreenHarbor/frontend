import axios from '../axios';

export const getPost = async () => {
  try {
    const response = await axios.get('/food/posts');

    return response;
  } catch (error) {
    throw error;
  }
};

export const getPostById = async (id) => {
  try {
    const response = await axios.get(`/food/posts/${id}`);

    return response;
  } catch (error) {
    throw error;
  }
};

export const createPost = (data) => {
  try {
    const response = axios.post('/food/posts', data);

    return response;
  } catch (error) {
    throw error;
  }
};

export const updatePost = (id, data) => {
  try {
    const response = axios.put(`/food/posts/${id}`, data);

    return response;
  } catch (error) {
    throw error;
  }
};

export const patchPost = (id, data) => {
  try {
    const response = axios.patch(`/food/posts/${id}`, data);

    return response;
  } catch (error) {
    throw error;
  }
};

export const deletePost = (id) => {
  try {
    const response = axios.delete(`/food/posts/${id}`);

    return response;
  } catch (error) {
    throw error;
  }
};

export const getPostVerified = async () => {
  try {
    const response = await axios.get('/food/posts/verified', {
      params: {
        coordinate_lat: '1.379819',
        coordinate_long: '103.889117',
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const getPostNearby = async (lat, lng) => {
  try {
    const response = await axios.get(
      `/food/posts/sortbydistance?coordinate_lat=${lat}&coordinate_long=${lng}`
    );

    return response;
  } catch (error) {
    throw error;
  }
};

export const getPostOrganic = async () => {
  try {
    const response = await axios.get('/food/posts/organic');

    return response;
  } catch (error) {
    throw error;
  }
};

export const getPostVegan = async () => {
  try {
    const response = await axios.get('/food/posts/vegan');

    return response;
  } catch (error) {
    throw error;
  }
};

export const getPostNew = async () => {
  try {
    const response = await axios.get('/food/posts/new');

    return response;
  } catch (error) {
    throw error;
  }
};

export const getPostUrgent = async () => {
  try {
    const response = await axios.get('/food/posts/urgent');

    return response;
  } catch (error) {
    throw error;
  }
};
