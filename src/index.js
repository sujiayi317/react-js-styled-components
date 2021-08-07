import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import Theme from './theme/theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');
ReactDOM.render(
  <>
    {/* <ThemeProvider theme={Theme}> */}
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
      
    {/* </ThemeProvider> */}
  </>,
  root
);
