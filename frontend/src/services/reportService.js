import axios from 'axios';

const API_URL = 'https://sims-5u4f.onrender.com/api/reports';

export const getReport = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching report:', error);
    throw error;
  }
};