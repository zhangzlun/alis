import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Carousel: FunctionComponent<{}> = () => (
  <Carousels>
    <CarouselCards>
      <CarouselCard>内容-1</CarouselCard>
      <CarouselCard>内容-2</CarouselCard>
    </CarouselCards>
    <CarouselCardLabels>
      <span>Label-1</span>
      <span>Label-2</span>
    </CarouselCardLabels>
  </Carousels>
);

const Carousels = styled.div`
  width: 300px;
  height: 300px;
  background: ${(props) => props.theme.backgroundColor};
  border: 1px solid ${(props) => props.theme.borderColor};
`;

const CarouselCards = styled.div`
  position: relative;
  height: 100px;
`;

const CarouselCardLabels = styled.div`
  position: relative;
  & span {
    color: ${(props) => props.theme.fontColor};
  }
`;

const CarouselCard = styled.div`
  background: #ffffff;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0 20px;
`;

export default Carousel;
