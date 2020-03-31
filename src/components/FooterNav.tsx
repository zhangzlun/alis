import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { NavModuleType } from '../modules/navModules';

export const FooterNav: FunctionComponent<NavModuleType> = ({ navlsit }) => (
  <NavFooter> </NavFooter>
);

const NavFooter = styled.div`
  background: darkblue;
`;

const mapStateToProps = (state): NavModuleType => ({
  navlsit: state.nav,
});

export default connect(mapStateToProps)(FooterNav);
