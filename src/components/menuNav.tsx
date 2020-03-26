import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { NavModuleType } from '../modules/navModules';
import Link from 'next/link';

export const MenuNav: FunctionComponent<NavModuleType> = ({ navlsit }) => (
  <Header>
    {navlsit.map((d) => (
      <Link href={d[1]}>
        <HeaderLink>{d[0]}</HeaderLink>
      </Link>
    ))}
  </Header>
);

const Header = styled.div`
  padding: 24px;
  overflow: hidden;
  background: #2b7791;
  text-align: center;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const HeaderLink = styled.a`
  transition: 0.3s ease;
  background: #2b7791;
  color: #ffffff;
  font-size: 14px;
  text-decoration: none;
  border-top: 4px solid #2b7791;
  border-bottom: 4px solid #2b7791;
  padding: 20px 0;
  margin: 0 20px;

  &:hover {
    border-top: 4px solid #ffffff;
    border-bottom: 4px solid #ffffff;
    padding: 6px 0;
  }
`;

const mapStateToProps = (state): NavModuleType => ({
  navlsit: state.nav,
});

export default connect(mapStateToProps)(MenuNav);
