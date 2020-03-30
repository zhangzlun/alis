import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Link from 'next/link';
import { NavModuleType } from '../modules/navModules';

export const MenuNav: FunctionComponent<NavModuleType> = ({ navlsit }) => (
  <Header>
    <HeaderInner>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link href="/">
          <Inmhs src="images/logo.png" alt="logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <HeaderText className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {navlsit.map((value) => (
              <li className="nav-item active">
                <Link href={value[1]}>
                  {value[0]}
                </Link>
                <span className="sr-only">(current)</span>
              </li>
            ))}
          </ul>
        </HeaderText>
      </nav>
    </HeaderInner>

    <HeaderBar />
  </Header>
);

const Header = styled.div`
  height: auto;
  & li {
    margin: 0 10px;
  }
`;

const HeaderInner = styled.div`
  width: auto;
  margin: 0 auto;
`;

const HeaderBar = styled.div`
  background: #28334a;
  height: 3px;
  width: 100%;
`;

const HeaderText = styled.div`
  margin: 0 60px;
  & li {
    fontweight: 600;
  }
`;

const Inmhs = styled.img`
  height: 70px;
`;

const mapStateToProps = (state): NavModuleType => ({
  navlsit: state.nav,
});

export default connect(mapStateToProps)(MenuNav);
