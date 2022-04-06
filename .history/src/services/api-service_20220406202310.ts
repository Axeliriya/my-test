import axios from 'axios';

axios.defaults.baseURL = `https://artisant.io/api`;

export const getProducts = async () => {
  return await axios.get(`/products`);
};

export const getProductsId = async (id: number) => {
  return await axios.get(`/products/${id}`);
};
