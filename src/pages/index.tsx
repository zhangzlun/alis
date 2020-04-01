import React from 'react';
import { NextPage } from 'next';
import DefaultLayout from '../layouts/DefaultLayout';
import Carousel from '../components/Carousel';

const Home: NextPage<{}> = () => (
  <DefaultLayout>
    <Carousel />
  </DefaultLayout>
);

export default Home;
