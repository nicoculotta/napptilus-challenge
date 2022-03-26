import { useQuery } from 'react-query';
import axios from 'axios';

const fetchProductsById = async (id) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL}api/product/${id}`
  );
  return data;
};

const useProductById = (id) =>
  useQuery(['product', id], () => fetchProductsById(id));

export default useProductById;
