import axios from 'axios';


const apiUrl = "http://127.0.0.1:5000";

const instance = axios.create({
  baseURL: apiUrl,
});

export const fetchProducts = () => {
  return instance.get('/product')
    .then(response => {
      return response.data; 
    })
    .catch(error => {
      console.error('Error fetching Products:', error);
      throw error; 
    });
};
