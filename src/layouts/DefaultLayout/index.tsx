import React from 'react';
import styled from 'styled-components';
import MenuNav from '../../components/MenuNav';
import Footer from '../../components/Footer';
import media, { desktop } from '../../components/StyledComponents/mediaStyle';

export const DefaultLayout = ({ children }) => {
  return (
    <TYY>
      <MenuNav />
      {children}
      <Footer />
    </TYY>
  );
}

const TYY = styled.div`
  position: relative;
  margin: 0 auto;
  height: 100%;
  min-height: 100vh;
  width: ${desktop}px;
  ${media.less(desktop)`width: 100%;`}
`;

export default DefaultLayout;
