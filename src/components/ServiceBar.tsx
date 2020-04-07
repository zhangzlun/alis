import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer } from '@fortawesome/pro-solid-svg-icons';

export const ServiceBar: FunctionComponent<{}> = () => {
  return (
    <Service>
      <ServiceBox>
        <FontAwesomeIcon css={iconClass} icon={faServer} />
        システム・ソフトウェア受託開発事業
      </ServiceBox>
      <ServiceBox> icon SES（システムエンジニアリングサービス）事業</ServiceBox>
      <ServiceBox> icon システム運用・保守事業</ServiceBox>
      <ServiceBox> icon RPA（ロボットによる業務自動化）事業</ServiceBox>
      <ServiceBox> icon 製品等開発</ServiceBox>
    </Service>
  );
};

const iconClass = css`
  color: brown;
`

const Service = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100px;
`;

const ServiceBox = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 20px;
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.fontColor};
  background: ${(props) => props.theme.colors.borderColor};
`;

export default ServiceBar;
