import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import GlobalStyle from './theme/globalStyles';
import Theme from './theme/theme';
import { ThemeProvider } from 'styled-components';

const root = document.getElementById('root');
ReactDOM.render(
  <>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </>,
  root
);
