import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Link from 'next/link';
import { NavModuleType } from '../modules/navModules';
import { media, desktop} from './mediaStyle';

const Header = styled.div`
  height: auto;
  & li {
    margin: 0 10px;
  }
`;
console.log();

const HeaderInner = styled.div`
  display: inline-block;
  ${media.less(desktop)`;`}
`;

const HeaderNav = styled.nav`
  color: #0b60b4;
`;

const HeaderList = styled.nav`
  color: #0b60b4;
`;

export const TopNav: FunctionComponent<NavModuleType> = ({ navlsit }) => (
  <Header>
    <HeaderInner>
      <HeaderNav>123</HeaderNav>
      <Link href="/contact">
        <span>跳轉到contact</span>
      </Link>

      {navlsit.map((value) => (
        <span>{value[0]}</span>
      ))}

      <HeaderList />
    </HeaderInner>
  </Header>
);

const mapStateToProps = (state): NavModuleType => ({
  navlsit: state.nav,
});

export default connect(mapStateToProps)(TopNav);
