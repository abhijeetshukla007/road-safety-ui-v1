import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
