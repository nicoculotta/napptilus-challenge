import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import '@fontsource/ibm-plex-serif/700.css';
import '@fontsource/ibm-plex-sans/700.css';
import '@fontsource/ibm-plex-sans/500.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 30000
    }
  }
});

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        background: 'gray.50'
      }
    }
  },
  fonts: {
    heading: 'IBM Plex Serif',
    body: 'IBM Plex Sans'
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
