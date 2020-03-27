import React from 'react';
import { NextPage } from 'next';
import DefaultLayout from '../layouts/DefaultLayout';
import News from '../components/news';

const Home: NextPage<{}> = () => (
  <DefaultLayout>
    home
    <News />
  </DefaultLayout>
);

export default Home;
