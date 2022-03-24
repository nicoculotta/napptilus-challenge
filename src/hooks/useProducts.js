import { useQuery } from 'react-query';
import axios from 'axios';

const fetchProducts = () =>
  axios.get(`${process.env.REACT_APP_API_URL}api/product`);

const useProduct = () => useQuery('products', fetchProducts);

export default useProduct;
