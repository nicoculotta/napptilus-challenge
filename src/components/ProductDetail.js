import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { Container, Flex, Spinner } from '@chakra-ui/react';
import useProductById from '../hooks/useProductsById';
import CardDetail from './CardDetail';
import addToCart from '../hooks/addToCart';
import { AppContext } from '../context/AppContext';

function ProductDetail() {
  const { id } = useParams();
  const { data: product, isLoading } = useProductById(id);
  const { setNumber } = useContext(AppContext);

  const handleAddToCart = async (productId) => {
    const resp = await addToCart({
      id: productId,
      colorCode: 1,
      storageCode: 2
    });
    setNumber((prev) => prev + 1);
    console.log(resp);
  };

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
        onClick={() => handleAddToCart(id)}
      />
    </Container>
  );
}

export default ProductDetail;
