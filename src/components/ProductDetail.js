import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { Container, Flex, Spinner, useToast } from '@chakra-ui/react';
import useProductById from '../hooks/useProductsById';
import addToCart from '../helpers/addToCart';
import CardDetail from './CardDetail';
import { AppContext } from '../context/AppContext';

function ProductDetail() {
  const { id } = useParams();
  const { data: product, isLoading } = useProductById(id);
  const { setNumber } = useContext(AppContext);
  const toast = useToast();

  const handleAddToCart = async (productId) => {
    const resp = await addToCart({
      id: productId,
      colorCode: 1,
      storageCode: 2
    });
    toast({
      title: 'Successful',
      description: 'Your product has been added',
      status: 'success',
      duration: 2000,
      isClosable: true,
      position: 'top-right'
    });
    const currentCart = localStorage.getItem('cart_count');
    if (currentCart) {
      localStorage.setItem(
        'cart_count',
        parseInt(resp.count, 10) + parseInt(currentCart, 10)
      );
      setNumber(localStorage.getItem('cart_count'));
    } else {
      localStorage.setItem('cart_count', parseInt(resp.count, 10));
      setNumber(localStorage.getItem('cart_count'));
    }
  };

  if (isLoading) {
    return (
      <Flex justifyContent="center" alignItems="center" h="80vh">
        <Spinner size="lg" color="cyan.400" />
      </Flex>
    );
  }

  return (
    <Container maxW="container.xl" pt="100px">
      <CardDetail
        image={product?.imgUrl}
        brand={product?.brand}
        model={product?.model}
        price={product?.price}
        cpu={product?.cpu}
        ram={product?.ram}
        os={product?.os}
        displayResolution={product?.displayResolution}
        battery={product?.battery}
        primaryCamera={product?.primaryCamera}
        secondaryCmera={product?.secondaryCmera}
        dimentions={product?.dimentions}
        weigth={product?.weigth}
        options={product?.options}
        onClick={() => handleAddToCart(id)}
      />
    </Container>
  );
}

export default ProductDetail;
