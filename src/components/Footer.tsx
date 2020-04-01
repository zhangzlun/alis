import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

export const Footer: FunctionComponent<{}> = () => (
  <Footerd>

    <FooterdLeft>
      <div>
        <img />
        <div>
          株式会社
          All
        </div>
      </div>
      <span>2019</span>
    </FooterdLeft>

    <FooterdRight>
      132
    </FooterdRight>
  </Footerd>
);

const Footerd = styled.div`
  background: ${(props)=> props.theme.borderColor};
  padding: 10px;
  & > div{
    display: inline-block;
    width: 50%;
  }
`;
const FooterdLeft = styled.div`
  background: ${(props)=> props.theme.fontColor};
`;

const FooterdRight = styled.div`
  background: ${(props)=> props.theme.borderColor};
`;


export default Footer;
