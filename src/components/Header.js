import React from 'react';
import { Link as ReachLink } from 'react-router-dom';
import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Text
} from '@chakra-ui/react';

function Header() {
  return (
    <Box
      bgColor="white"
      boxShadow="0px 20px 20px rgba(0,0,0,0.05)"
      position="fixed"
      w="100%"
      zIndex="2"
    >
      <Container
        maxW="container.xl"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <ReachLink to="/">
          <Text fontSize="22px" fontWeight="bold" py={4}>
            PhoneStore
          </Text>
        </ReachLink>
        <Breadcrumb spacing="8px" separator="-">
          <BreadcrumbItem>
            <BreadcrumbLink as={ReachLink} to="/detail">
              Detail Link
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Box>Carrito</Box>
      </Container>
    </Box>
  );
}

export default Header;
