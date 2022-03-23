import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import MainApp from './MainApp';
import ImportProviders from './components/ImportProviders';

ReactDOM.render(
  <ImportProviders>
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </ImportProviders>,
  document.getElementById('root')
);
