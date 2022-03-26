import React, { useContext } from 'react';
import {
  SimpleGrid,
  Image,
  Box,
  Badge,
  Heading,
  Text,
  Table,
  Tbody,
  Tr,
  Td,
  Button,
  Flex
} from '@chakra-ui/react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import Colors from './Colors';
import Storage from './Storage';

const DetailMotion = motion(SimpleGrid);

function CardDetail({
  image,
  brand,
  model,
  price,
  cpu,
  ram,
  os,
  displayResolution,
  battery,
  primaryCamera,
  secondaryCmera,
  dimentions,
  weigth,
  options,
  onClick
}) {
  const { setItemSelected } = useContext(AppContext);
  const formatPrice = Number(price).toLocaleString('de-DE', {
    style: 'currency',
    currency: 'EUR'
  });

  return (
    <DetailMotion
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      columns={[1, 2]}
      bgColor="white"
      p={[4, 8]}
      borderRadius="xl"
      alignItems="center"
      position="relative"
    >
      <Box
        position="absolute"
        top="24px"
        left="24px"
        fontSize="xl"
        bgColor="gray.100"
        p={3}
        borderRadius="100%"
        as={Link}
        to="/"
        onClick={() => setItemSelected(null)}
      >
        <BsArrowLeft />
      </Box>
      <Image w="40%" m="0 auto" src={image} />
      <Box>
        <Badge
          bgColor="cyan.100"
          px={4}
          borderRadius="20px"
          color="blue.900"
          fontSize="sm"
        >
          {brand}
        </Badge>
        <Heading size="xl" mt={2}>
          {model}
        </Heading>
        <Text fontSize="2xl" pb={4}>
          {formatPrice}
        </Text>

        <Box border="1px" borderColor="gray.200" borderRadius="md">
          <Table size="sm">
            <Tbody>
              <Tr>
                <Td fontWeight="bold">CPU</Td>
                <Td>{cpu}</Td>
              </Tr>
              <Tr>
                <Td fontWeight="bold">RAM</Td>
                <Td>{ram}</Td>
              </Tr>
              <Tr>
                <Td fontWeight="bold">Operating System</Td>
                <Td>{os}</Td>
              </Tr>
              <Tr>
                <Td fontWeight="bold">Display Resolution</Td>
                <Td>{displayResolution}</Td>
              </Tr>
              <Tr>
                <Td fontWeight="bold">Battery</Td>
                <Td>{battery}</Td>
              </Tr>
              <Tr>
                <Td fontWeight="bold">Primary Camera</Td>
                <Td>
                  {typeof primaryCamera !== 'string'
                    ? primaryCamera?.map((item) => (
                        <Text mr={2} display="inline" key={item}>
                          {item}
                        </Text>
                      ))
                    : primaryCamera}
                </Td>
              </Tr>
              {secondaryCmera && (
                <Tr>
                  <Td fontWeight="bold">Secondary Camera</Td>
                  <Td>
                    {typeof secondaryCmera !== 'string'
                      ? secondaryCmera?.map((item) => (
                          <Text mr={2} display="inline" key={item}>
                            {item}
                          </Text>
                        ))
                      : secondaryCmera}
                  </Td>
                </Tr>
              )}
              <Tr>
                <Td fontWeight="bold">Dimentions</Td>
                <Td>{dimentions}</Td>
              </Tr>
              <Tr>
                <Td fontWeight="bold">Weight</Td>
                <Td>{weigth}</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>

        <Flex my={4}>
          <Box mr={6}>
            <Text>Colors:</Text>
            <Colors colors={options.colors} />
          </Box>
          <Box>
            <Text>Storage:</Text>
            <Storage storage={options.storages} />
          </Box>
        </Flex>
        <Box mt={4}>
          <Button
            onClick={onClick}
            colorScheme="cyan"
            color="white"
            px={8}
            borderRadius="30px"
            w={['100%', 'auto']}
          >
            <Box mr={2}>
              <FiShoppingCart />
            </Box>
            Add to Cart
          </Button>
        </Box>
      </Box>
    </DetailMotion>
  );
}

export default CardDetail;
