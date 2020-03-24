import React, { Component } from 'react';

import TopNav from './components/TopNav';
import Footer from './components/Footer';

// eslint-disable-next-line react/prefer-stateless-function
class DefaultLayout extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render(): JSX.Element {
    const { children } = this.props;
    return (
      <>
        <TopNav />
        {children}
        <Footer />
      </>
    );
  }
}

export default DefaultLayout;
