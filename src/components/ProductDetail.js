import React from 'react';
import { useParams } from 'react-router';
import { Container, Flex, Spinner } from '@chakra-ui/react';
import useProductById from '../hooks/useProductsById';
import CardDetail from './CardDetail';

function ProductDetail() {
  const { id } = useParams();
  const { data: product, isLoading } = useProductById(id);

  if (isLoading) {
    return (
      <Flex justifyContent="center" alignItems="center" h="50vh">
        <Spinner size="lg" color="red.500" />
      </Flex>
    );
  }

  return (
    <Container maxW="container.xl" pt="100px">
      <CardDetail
        image={product?.data.imgUrl}
        brand={product?.data.brand}
        model={product?.data.model}
        price={product?.data.price}
        cpu={product?.data.cpu}
        ram={product?.data.ram}
        os={product?.data.os}
        displayResolution={product?.data.displayResolution}
        battery={product?.data.battery}
        primaryCamera={product?.data.primaryCamera}
        secondaryCmera={product?.data.secondaryCmera}
        dimentions={product?.data.dimentions}
        weigth={product?.data.weigth}
      />
    </Container>
  );
}

export default ProductDetail;
