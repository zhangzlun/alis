import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuNav from '../components/MenuNav';
import Provider from './Provider';

const withProvider = (story) => <Provider>{story()}</Provider>;

storiesOf('MenuNav', module)
  .addDecorator(withProvider)
  .add('default', () => <MenuNav />);
