import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function ImportProviders({ children }) {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ChakraProvider>
  );
}

export default ImportProviders;
