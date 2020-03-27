import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import DefaultLayout from '../layouts/DefaultLayout';

const Contact: NextPage<{}> = () => (
  <DefaultLayout>
    <Test />
    <Msg1>送信完了いたしました。</Msg1>
    <Test />
    <Msg2>
      <p>お問い合わせありがとうございました。</p>
      <p>担当者より、後ほどご連絡させていただきます。</p>
      <p>しばらくお待ちください。</p>
    </Msg2>
    <span>
      (通常5営業日以内に回答させていただきますが、ご相談内容によりましては回答に時間がかかる場合や回答できない場合がありますことを予めご了承ください。)
    </span>
  </DefaultLayout>
);

const Msg1 = styled.b`
  font-size: 50px;
  color: red;
  display: block;
  font-weight: 600;
`;

const Msg2 = styled.b`
  font-size: 20px;
  color: black;
  & p {
    margin-bottom: 15px;
  }
`;

const Test = styled.div`
  height: 30px;
`;

export default Contact;
