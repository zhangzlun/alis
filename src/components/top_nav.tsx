import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { NavModuleType } from '~/modules/navModules';

export const TopNav: FunctionComponent<NavModuleType> = ({ navlsit }) => {
  return (
    <div>
      {navlsit.map((value) => (
        <span>{value[0]}</span>
      ))}
    </div>
  );
}

const mapStateToProps = (state): NavModuleType => ({
  navlsit: state.nav,
});

export default connect(mapStateToProps)(TopNav);
