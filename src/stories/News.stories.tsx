import React from 'react';
import { storiesOf } from '@storybook/react';
import News from '../components/News';
import Provider from './Provider';

const withProvider = (story) => <Provider>{story()}</Provider>;

storiesOf('News', module)
  .addDecorator(withProvider)
  .add('default', () => <News />);
