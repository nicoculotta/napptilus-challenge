import {
  SimpleGrid,
  Container,
  Heading,
  Flex,
  Input,
  Spinner,
  Text
} from '@chakra-ui/react';
import React, { useState } from 'react';
import useFilterProduct from '../hooks/useFilterProduct';
import CardItem from './CardItem';

function ProductList() {
  const [searchFilter, setSearchFilter] = useState('');
  const { data, isLoading } = useFilterProduct(searchFilter);

  const handleSearch = (e) => {
    setSearchFilter(e.target.value);
  };

  if (isLoading) {
    return (
      <Flex justifyContent="center" alignItems="center" h="50vh">
        <Spinner size="lg" color="red.500" />
      </Flex>
    );
  }

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
          onChange={handleSearch}
        />
      </Flex>

      {data && data.length === 0 && (
        <Text fontSize="2xl">We cant find {searchFilter} in our products</Text>
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
