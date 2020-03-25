import React, { Component } from 'react';

import TopNav from '../../components/top_nav';
// import Footer from './components/Footer';

// eslint-disable-next-line react/prefer-stateless-function
class DefaultLayout extends Component {
  render(): JSX.Element {
    const { children } = this.props;
    return (
      <>
        <TopNav />
        {children}
        {/*<Footer />*/}
      </>
    );
  }
}

export default DefaultLayout;
