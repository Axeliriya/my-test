import axios from 'axios';

axios.defaults.baseURL = `https://artisant.io/api/products`;

export const getProducts = async () => {
  return await axios.get(`/trending/movie/day?&page=1`);
};
