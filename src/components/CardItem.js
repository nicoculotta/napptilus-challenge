import { Image, Badge, Box, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const MotionBox = motion(Box);

function CardItem({ id, image, brand, model, price }) {
  const { setItemSelected } = useContext(AppContext);
  const formatPrice = Number(price).toLocaleString('de-DE', {
    style: 'currency',
    currency: 'EUR'
  });

  const appear = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };

  return (
    <MotionBox
      initial="hidden"
      animate="visible"
      variants={appear}
      whileHover={{ scale: 1.05 }}
      as={Link}
      to={`/detail/${id}`}
      bgColor="white"
      borderRadius={12}
      overflow="hidden"
      p={4}
      border="1px"
      borderColor="gray.100"
      onClick={() => setItemSelected(`${brand} - ${model}`)}
    >
      <Box p={6}>
        <Image m="0 auto" src={image} />
      </Box>
      <Badge
        mb={2}
        bgColor="cyan.100"
        color="blue.900"
        borderRadius="10px"
        px={2}
      >
        {brand}
      </Badge>
      <Heading size="sm">{model}</Heading>
      <Text fontWeight="300" fontSize={['lg', 'lg', '2xl']}>
        {formatPrice}
      </Text>
    </MotionBox>
  );
}

export default CardItem;
