import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import '@fontsource/lexend-deca/700.css';
import '@fontsource/lexend-deca/400.css';
import '@fontsource/lexend-deca/300.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      cacheTime: 3600000
    }
  }
});

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        background: 'gray.50',
        color: 'blue.900'
      }
    }
  },
  fonts: {
    heading: 'Lexend Deca',
    body: 'Lexend Deca'
  }
});

function ImportProviders({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ChakraProvider>
  );
}

export default ImportProviders;
