import axios from 'axios';

const API_URL = 'https://sims-5u4f.onrender.com/api/spare-parts';

export const getSpareParts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getSparePartByName = async (name) => {
  const response = await axios.get(`${API_URL}/${name}`);
  return response.data;
};

export const createSparePart = async (sparePart) => {
  const response = await axios.post(API_URL, sparePart);
  return response.data;
};

export const updateSparePart = async (name, sparePart) => {
  const response = await axios.put(`${API_URL}/${name}`, sparePart);
  return response.data;
};

export const deleteSparePart = async (name) => {
  await axios.delete(`${API_URL}/${name}`);
};