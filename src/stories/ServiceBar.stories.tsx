import React from 'react';
import { storiesOf } from '@storybook/react';
import ServiceBar from '../components/ServiceBar';
import Provider from './Provider';

const withProvider = (story) => <Provider>{story()}</Provider>;

storiesOf('ServiceBar', module)
  .addDecorator(withProvider)
  .add('default', () => <ServiceBar />);
