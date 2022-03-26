import React, { useContext, useEffect } from 'react';
import { Link as ReachLink } from 'react-router-dom';
import { Container, Box, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Cart from './Cart';
import { AppContext } from '../context/AppContext';
import Bread from './Bread';

const MotionHeader = motion(Box);

function Header() {
  const { number, setNumber, setItemSelected } = useContext(AppContext);

  useEffect(() => {
    setNumber(localStorage.getItem('cart_count'));
  }, []);

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
      boxShadow="0px 15px 30px rgba(0,0,0,0.05)"
      position="fixed"
      w="100%"
      zIndex="2"
    >
      <Container
        maxW="container.xl"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        h="70px"
      >
        <Box display="flex" alignItems="center">
          <Box w="120px" mr="24px">
            <ReachLink to="/" onClick={() => setItemSelected(null)}>
              <Image src="/assets/logo.svg" />
            </ReachLink>
          </Box>
          <Box display={['none', 'block']}>
            <Bread />
          </Box>
        </Box>
        <Cart number={number} />
      </Container>
    </MotionHeader>
  );
}

export default Header;
