import axios from 'axios';


const url=import.meta.env.VITE_API_URL
const instance = axios.create({
  baseURL:url,
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