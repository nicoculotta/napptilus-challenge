import { Image, Badge, Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function CardItem({ id, image, brand, model, price }) {
  const formatPrice = Number(price).toLocaleString('de-DE', {
    style: 'currency',
    currency: 'EUR'
  });

  return (
    <Box
      as={Link}
      to={`/detail/${id}`}
      bgColor="white"
      borderRadius={12}
      overflow="hidden"
      p={4}
      border="1px"
      borderColor="gray.100"
    >
      <Image m="0 auto" src={image} />
      <Badge>{brand}</Badge>
      <Heading size="md">{model}</Heading>
      <Text>{formatPrice}</Text>
    </Box>
  );
}

export default CardItem;
