import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

export const Footer: FunctionComponent<{}> = () => (
  <FooterM>

  </FooterM>
);

const FooterM = styled.div`
  background: ${(props) => props.theme.colors.borderColor};
`;

export default Footer;
