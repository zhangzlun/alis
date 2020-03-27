import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import News from '../components/news';
import setupStore from '../store';

const store = setupStore();

storiesOf('Task', module)
  .addDecorator((story) => <Provider store={store}>{story()}</Provider>)
  .add('default', () => <News />);
