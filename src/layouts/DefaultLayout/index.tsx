import React from 'react';
import MenuNav from '../../components/MenuNav';
import Footer from '../../components/Footer';

export const DefaultLayout = ({ children }) => (
  <>
    <MenuNav />
    {children}
    <Footer />
  </>
);

export default DefaultLayout;
