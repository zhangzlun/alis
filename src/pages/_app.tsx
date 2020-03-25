import * as React from 'react';
import App, { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
// Provider を読み込む
import { Provider } from 'react-redux';

import setupStore from '../store';
// テーマを必要に応じて設定
const theme = {};
// ストアを作成
const store = setupStore();

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps }: AppProps = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default MyApp;
