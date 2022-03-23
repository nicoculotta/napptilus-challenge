import React from 'react';
import ReactDOM from 'react-dom';

import MainApp from './MainApp';
import ImportProviders from './components/ImportProviders';

ReactDOM.render(
  <ImportProviders>
    <MainApp />
  </ImportProviders>,
  document.getElementById('root')
);
