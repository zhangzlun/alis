import * as React from 'react';
import App, { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import setupStore from '../store';
import GlobalStyle from '../components/globalStyle';

const theme = {
  whiteColor: true,
  primary: true,
};
const store = setupStore();

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps }: AppProps = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default MyApp;