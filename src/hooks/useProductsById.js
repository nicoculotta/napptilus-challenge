import { useQuery } from 'react-query';
import axios from 'axios';

const fetchProductsById = (id) =>
  axios.get(`${process.env.REACT_APP_API_URL}api/product/${id}`);

const useProductById = (id) =>
  useQuery(['product', id], () => fetchProductsById(id));

export default useProductById;
