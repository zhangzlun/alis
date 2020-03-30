import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

export const Footer: FunctionComponent<{}> = () => (
  <TFooter>
    <LFooter />
  </TFooter>
);

const TFooter = styled.div`
  background: #d78a41;
  height: 100px;
  width: 100%;
  position: absolute;
  bottom: 20px;
`;

const LFooter = styled.div`
  position: absolute;
  width: 100%;
  height: 20px;
  bottom: -20px;
  background: #c4ba82;
`;

export default Footer;
