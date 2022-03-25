import {
  SimpleGrid,
  Container,
  Heading,
  Flex,
  Input,
  Text
} from '@chakra-ui/react';
import React, { useState } from 'react';
import useFilterProduct from '../hooks/useFilterProduct';
import CardItem from './CardItem';

function ProductList() {
  const [searchFilter, setSearchFilter] = useState('');
  const { data } = useFilterProduct(searchFilter);

  const handleSearch = (e) => {
    setSearchFilter(e.target.value);
  };

  return (
    <Container maxW="container.xl" pt="70px">
      <Flex
        direction={['column', null, 'row']}
        justifyContent="space-between"
        alignItems="center"
        py={6}
      >
        <Heading>New Products for sale</Heading>
        <Input
          borderColor="gray.300"
          w="250px"
          value={searchFilter}
          placeholder="Search by Brand or Model"
          onChange={(e) => handleSearch(e)}
        />
      </Flex>

      {data && data.length === 0 && (
        <Text fontSize="2xl">
          We can&apos;t find &quot;{searchFilter}&quot; in our products
        </Text>
      )}

      <SimpleGrid columns={[1, 2, 4]} spacing="24px">
        {data?.map((item) => (
          <CardItem
            key={item.id}
            id={item.id}
            image={item.imgUrl}
            brand={item.brand}
            model={item.model}
            price={item.price}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default ProductList;
