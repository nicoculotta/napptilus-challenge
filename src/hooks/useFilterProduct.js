import { useQuery } from 'react-query';
import axios from 'axios';

const refreshTime = 60;

const fetchProducts = async () => {
  const currentTime = localStorage.getItem('fetch_date');
  if (currentTime) {
    const timeNow = new Date().getTime();
    const diffInMinutes = Math.floor((timeNow - currentTime) / 1000 / 60);

    if (diffInMinutes < refreshTime) {
      const refreshProducts = JSON.parse(
        localStorage.getItem('fetch_products')
      );
      return refreshProducts;
    }
  }

  const InitialTime = new Date().getTime();
  localStorage.setItem('fetch_date', JSON.stringify(InitialTime));

  const products = await axios.get(
    `${process.env.REACT_APP_API_URL}api/product`
  );
  localStorage.setItem('fetch_products', JSON.stringify(products));

  return products;
};

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
