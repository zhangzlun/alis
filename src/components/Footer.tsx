import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

export const Footer: FunctionComponent<{}> = () => (
  <FooterM>
    <div>
      <FooterImgTitle>
        <img alt="" src="images/onlogo.png" />
        <FooterTitleSub>
          <div>株式会社往来情報サービス</div>
          <span>All Rights Reserved</span>
        </FooterTitleSub>
      </FooterImgTitle>
      <FooterCopyright>Copyright © 2020. 株式会社往来情報サービス All Rights Reserved.</FooterCopyright>
    </div>
    <div>
      <div>
        <div>電話でのお問い合わせ</div>
        <span>0926521654</span>
      </div>
    </div>
  </FooterM>
);

const FooterM = styled.div`
  display: flex;
  padding: 30px 40px;
  justify-content: center;
  color: ${(props) => props.theme.colors.fontColor};
  background: ${(props) => props.theme.colors.backgroundColor};
  & > div {
    width: 100%;
  }
`;

const FooterCopyright = styled.span`
  font-size: 0.7rem;
`;

const FooterImgTitle = styled.div`
  display: flex;
  justify-content: start;
  margin-bottom: 50px;
  & img {
    height: 50px;
  }
`;

const FooterTitleSub = styled.div`
  padding: 10px 0;
  margin-left: 20px;
  & div {
    font-size: 1rem;
  }
  & span {
    font-size: 0.5rem;
  }
`;

export default Footer;
