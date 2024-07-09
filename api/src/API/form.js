
import axios from 'axios';

export const postProducts = (data) => {
  const url = `${import.meta.env.VITE_MART_BASE_URL}/products`;
  console.log("data",data)
  return axios.post(url, data)
    .then((res) => {
        console.log(res.data)
      return res.data;
    })
    .catch((error) => {
      console.error('Error while posting data:', error);
      throw error;
    });
};