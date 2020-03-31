import React from 'react';
import { storiesOf } from '@storybook/react';
import FooterNav from '../components/FooterNav';
import Provider from './Provider';

const withProvider = (story) => <Provider>{story()}</Provider>;

storiesOf('FooterNav', module)
  .addDecorator(withProvider)
  .add('default', () => <FooterNav />);
