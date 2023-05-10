import React from 'react';
import ReactDOM from 'react-dom/client';
import AppHook from 'components/App/AppHooK';
import { ThemeProvider } from '@emotion/react';
import { theme } from './constants/theme';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppHook />
    </ThemeProvider>
  </React.StrictMode>
);
