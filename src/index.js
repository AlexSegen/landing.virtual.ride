import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Routes />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);