import React from 'react';
import ReactDOM from 'react-dom';

import { ReactQueryDevtools } from 'react-query/devtools';
import MainApp from './MainApp';
import ImportProviders from './components/ImportProviders';

ReactDOM.render(
  <ImportProviders>
    <MainApp />
    <ReactQueryDevtools initialIsOpen={false} />
  </ImportProviders>,
  document.getElementById('root')
);
