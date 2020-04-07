import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/pro-duotone-svg-icons';
import { NavModuleType } from '../modules/navModules';

export const FooterNav: FunctionComponent<NavModuleType> = ({ navlsit }) => (
  <NavFooter>
    <Testlist>
      {navlsit.map((val) => (
        <li key={val[0]}>
          <FontAwesomeIcon icon={faAngleRight} />
          {val[0]}
        </li>
      ))}
    </Testlist>
  </NavFooter>
);

const Testlist = styled.ul`
  background: ${({ theme }) => theme.colors.borderColor};
  display: flex;
  justify-content: space-around;
  & li {
    display: inline;
    margin: 0 20px 0 0;
    color: ${({ theme }) => theme.colors.fontColor};
  }
`;

const NavFooter = styled.div`
  background: ${({ theme }) => theme.colors.borderColor};
  padding: 20px 0;
`;

const mapStateToProps = (state): NavModuleType => ({
  navlsit: state.nav,
});

export default connect(mapStateToProps)(FooterNav);
