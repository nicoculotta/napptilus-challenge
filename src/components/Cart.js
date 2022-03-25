import { Badge, Flex, Box } from '@chakra-ui/react';
import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

function Cart({ number = 0 }) {
  return (
    <Flex fontSize="xl" alignItems="center">
      <Box mr={2}>
        <FiShoppingCart />
      </Box>
      <Badge fontSize="md">{number}</Badge>
    </Flex>
  );
}

export default Cart;
