import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { NavModuleType } from '../modules/navModules';
import Link from "next/link";

export const MenuNav: FunctionComponent<NavModuleType> = ({navlsit}) => (
  <Header>
    <HeaderLogo>
      <img alt="" src="images/logo.png" />
    </HeaderLogo>
    <HeaderLinkList>
      <ul>
        {navlsit.map((value) => (
          <Link href={}
          <li>{value[0]}</li>
        ))}
      </ul>
    </HeaderLinkList>
  </Header>
);

const Header = styled.div`
  display: flex;
  height: 70px;
  background: #ffffff;
  border-bottom: 5px solid #e74042;
  & div {
    display: inline-block;
    height: 100%;
    vertical-align: top;
  }
`;

const HeaderLogo = styled.div`
  height: 100%;
  padding: 0 0 0 30px;
  & img {
    height: 100%;
  }
`;

const HeaderLinkList = styled.div`
  margin-left: auto;
  margin-right: 35px;
  & ul {
    height: 100%;
  }
  & ul li {
    line-height: 70px;
    display: inline;
    color: #394761;
    margin-right: 15px;
    font-weight: 600;
  }
`;

const mapStateToProps = (state): NavModuleType => ({
  navlsit: state.nav,
});

export default connect(mapStateToProps)(MenuNav);
