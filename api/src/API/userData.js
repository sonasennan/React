import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://fakestoreapi.com/',
});
 

export const fetchUsers = () => {
  return instance.get('/users')
    .then(response => {
      return response.data; 
    })
    .catch(error => {
      console.error('Error fetching users:', error);
      throw error; 
    });
};