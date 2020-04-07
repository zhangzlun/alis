import React from 'react';
import { storiesOf } from '@storybook/react';
import Carousel from '../components/Carousel/index';
import Provider from './Provider';

const withProvider = (story) => <Provider>{story()}</Provider>;

storiesOf('Carousel', module)
  .addDecorator(withProvider)
  .add('default', () => <Carousel />);
