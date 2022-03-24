import { useQuery } from 'react-query';
import axios from 'axios';

const fetchProducts = () =>
  axios.get(`${process.env.REACT_APP_API_URL}api/product`);

const useFilterProduct = (filter) =>
  useQuery(['productsFiltered', filter], () => fetchProducts(filter), {
    select: (productsFiltered) =>
      productsFiltered.data.filter(
        (product) =>
          product.model.toLowerCase().includes(filter.toLowerCase()) ||
          product.brand.toLowerCase().includes(filter.toLowerCase())
      )
  });

export default useFilterProduct;
