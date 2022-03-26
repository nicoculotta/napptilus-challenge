import React from 'react';
import ReactDOM from 'react-dom';

import { ReactQueryDevtools } from 'react-query/devtools';
import MainApp from './MainApp';
import ImportProviders from './components/ImportProviders';
import CartProvider from './context/AppContext';

ReactDOM.render(
  <ImportProviders>
    <CartProvider>
      <MainApp />
    </CartProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </ImportProviders>,
  document.getElementById('root')
);
