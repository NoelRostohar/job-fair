import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'theme-ui';

import App from './App';
import theme from './ui/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
