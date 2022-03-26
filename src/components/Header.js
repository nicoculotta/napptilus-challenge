import React, { useContext } from 'react';
import { Link as ReachLink } from 'react-router-dom';
import { Container, Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Cart from './Cart';
import { AppContext } from '../context/AppContext';
import Bread from './Bread';

const MotionHeader = motion(Box);

function Header() {
  const { number, setItemSelected } = useContext(AppContext);

  const animation = {
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: { y: -100, opacity: 0 }
  };

  return (
    <MotionHeader
      variants={animation}
      initial="hidden"
      animate="visible"
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
        <ReachLink to="/" onClick={() => setItemSelected(null)}>
          <Text fontSize="22px" fontWeight="bold" py={4}>
            PhoneStore
          </Text>
        </ReachLink>
        <Bread />
        <Cart number={number} />
      </Container>
    </MotionHeader>
  );
}

export default Header;
