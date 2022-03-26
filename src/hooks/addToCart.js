import axios from 'axios';

const addToCart = async (newItem) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_API_URL}api/cart`,
    newItem,
    {
      withCredentials: false
    }
  );
  return data;
};

export default addToCart;
