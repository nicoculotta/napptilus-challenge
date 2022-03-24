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
  Td
} from '@chakra-ui/react';
import React from 'react';

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
  weigth
}) {
  console.log(primaryCamera);
  const formatPrice = Number(price).toLocaleString('de-DE', {
    style: 'currency',
    currency: 'EUR'
  });

  return (
    <SimpleGrid
      columns={[1, 2]}
      bgColor="white"
      p={8}
      borderRadius="xl"
      alignItems="center"
    >
      <Image w="40%" m="0 auto" src={image} />
      <Box>
        <Badge fontSize="lg">{brand}</Badge>
        <Heading size="xl">{model}</Heading>
        <Text fontSize="2xl" pb={2}>
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
      </Box>
    </SimpleGrid>
  );
}

export default CardDetail;
