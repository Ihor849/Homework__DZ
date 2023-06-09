import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { store, } from './redux/store';
import AppHook from 'components/App/AppHook';
import { GlobalStyle } from './style/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <AppHook />
        {/* </PersistGate> */}
      </Provider>
    </ThemeProvider>
    <GlobalStyle />
  </React.StrictMode>
);
