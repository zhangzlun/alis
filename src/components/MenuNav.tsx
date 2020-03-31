import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { NavModuleType } from '../modules/navModules';

export const MenuNav: FunctionComponent<NavModuleType> = ({ navlsit }) => (
  <Header>
    <HeaderLogo>
      <img alt="" src="images/logo.png" />
    </HeaderLogo>
    <div>

    </div>
  </Header>
);

const Header = styled.div`
  position: relative;
  height: 70px;
  background: #ffffff;
  border-bottom: 5px solid #e74042;
`;

const HeaderLogo = styled.div`
  height: 100%;
  
  & img {
    height: 100%;
  }
`;

const mapStateToProps = (state): NavModuleType => ({
  navlsit: state.nav,
});

export default connect(mapStateToProps)(MenuNav);
