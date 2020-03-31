import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Carousel: FunctionComponent<{}> = () => (
  <Carousels>
    <CarouselCard>
      1
    </CarouselCard>
    <CarouselCard>2</CarouselCard>
    <CarouselCard>3</CarouselCard>
    <CarouselCard>4</CarouselCard>
  </Carousels>
);

const Carousels = styled.div`
  background: #ffffff;
`;

const CarouselCard = styled.div`
  background: #ffffff;
`;

export default Carousel;
