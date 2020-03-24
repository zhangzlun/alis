import React, { FunctionComponent } from 'react';
import DefaultLayout from '~/layouts/DefaultLayout';
import Carousel from '~/views/Home/components/Carousel';
import Solution from '~/views/Home/components/Solution';
import PageBody from '~/components/tmp/PageBody';
import Maincol from '~/components/tmp/Maincol';
import News from '~/views/Home/components/News';

const Home: FunctionComponent<{}> = () => (
  <DefaultLayout>
    <Carousel　/>
    <Solution　/>
    <PageBody>
      <Maincol isMaxWidth={false}>
        <News　/>
      </Maincol>
    </PageBody>
  </DefaultLayout>
);

export default Home;
