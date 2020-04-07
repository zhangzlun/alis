import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

export const Footer: FunctionComponent<{}> = () => (
  <FooterMain>
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
      <FooterTitleSub>
        <div>電話でのお問い合わせ</div>
        <span>0926521654</span>
      </FooterTitleSub>
      <FooterTitleSub>
        <div>E-mail</div>
        <span>hr＠alis.co.jp</span>
      </FooterTitleSub>
    </div>
  </FooterMain>
);

const FooterMain = styled.div`
  display: flex;
  padding: 30px 40px;
  justify-content: center;
  color: ${(props): any => props.theme.colors.fontColor};
  background: ${(props): any => props.theme.colors.borderColor};
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
  height: 70px;
  & img {
    height: 100%;
  }
`;

const FooterTitleSub = styled.div.attrs({
  fSize: 0.7,
})<{}>`
  padding: 10px 0;
  margin-left: 20px;
  & div {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }
  & span {
    font-size: 0.9rem;
  }
`;

export default Footer;
