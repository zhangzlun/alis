import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { NavModuleType } from '../modules/navModules';

export const FooterNav: FunctionComponent<NavModuleType> = ({ navlsit }) => (
  <NavFooter>
    <Testlist>
      {navlsit.map((val) => (
        <li>{val[0]}</li>
      ))}
    </Testlist>
  </NavFooter>
);

const Testlist = styled.ul`
  background: #e74042;
  display: flex;
  justify-content: space-around;
  & li {
    display: inline;
    margin: 0 20px 0 0;
    color: #ffffff;
  }
`;

const NavFooter = styled.div`
  background: #e74042;
  padding: 20px 0;
`;

const mapStateToProps = (state): NavModuleType => ({
  navlsit: state.nav,
});

export default connect(mapStateToProps)(FooterNav);
