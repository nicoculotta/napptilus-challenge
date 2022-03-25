import { useMutation } from 'react-query';
import axios from 'axios';

const addToCart = (newItem) =>
  axios.post(`${process.env.REACT_APP_API_URL}api/cart`, newItem);

const useCart = (newItem) => useMutation(addToCart(newItem));

export default useCart;
