import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from '../components/StyledComponents/globalStyle';
import setupStore from '~/store';

const store = setupStore();

const ProviderWrapper = ({ children }) => (
  <Provider store={store}>
    <GlobalStyle />
    {children}
  </Provider>
);

export default ProviderWrapper;
