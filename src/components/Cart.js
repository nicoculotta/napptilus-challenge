import { Badge, Flex, Box } from '@chakra-ui/react';
import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

function Cart({ number = 0 }) {
  return (
    <Flex
      fontSize="xl"
      alignItems="center"
      bgColor="cyan.300"
      px={4}
      py={2}
      borderRadius="20px"
    >
      <Box mr={2} color="blue.900">
        <FiShoppingCart />
      </Box>
      <Badge bgColor="white" fontSize="md" borderRadius="100%" px={2}>
        {number}
      </Badge>
    </Flex>
  );
}

export default Cart;
