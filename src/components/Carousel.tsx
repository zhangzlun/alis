import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { CarouselModuleType } from '~/modules/carouselModules';

const testData: Array<> = [
  { labelName: 'Label1', context: '内容-1', labelData: 'いつでもお客様に、「満足」・「安心」を1' },
  { labelName: 'Label2', context: '内容-2', labelData: 'いつでもお客様に、「満足」・「安心」を2' },
  { labelName: 'Label3', context: '内容-3', labelData: 'いつでもお客様に、「満足」・「安心」を3' },
];

export const Carousel: FunctionComponent<CarouselModuleType> = () => {
  const [show, setShow] = useState(testData[0].labelName);

  return (
    <Carousels>
      <CarouselCards>
        {testData.map((data) => (
          <CarouselCard key={data.labelName} currently={show} self={data.labelName}>
            {data.context}
          </CarouselCard>
        ))}
      </CarouselCards>

      <CarouselCardLabels>
        {testData.map((data) => (
          <CarouselCardLabel
            key={data.labelName}
            currently={show}
            labelName={data.labelName}
            onClick={(): void => setShow(data.labelName)}
          >
            {data.labelData}
          </CarouselCardLabel>
        ))}
      </CarouselCardLabels>
    </Carousels>
  );
};

const Carousels = styled.div`
  background: ${(props) => props.theme.borderColor};
`;

const CarouselCards = styled.div`
  position: relative;
  height: 300px;
`;

const CarouselCardLabels = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CarouselCard = styled.div.attrs({
  index: ({ currently, self, theme }) => (
    currently === self
      ? theme.zIndex.high
      : theme.zIndex.low),
})<{ currently?: string; self?: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  z-index: ${(props) => props.index};
  background: ${({ theme }) => theme.colors.which};
`;

const CarouselCardLabel = styled.span.attrs({
  fontColor: (props) => (
    props.currently === props.labelName
      ? props.theme.colors.backgroundColor
      : props.theme.colors.which),
  bgColor: (props) => (
    props.currently === props.labelName
      ? props.theme.colors.which
      : props.theme.colors.backgroundColor),
})<{ currently?: string; labelName?: string }>`
  position: relative;
  display: inline-block;
  width: 100%;
  padding: 10px 5px 10px;
  font-weight: 600;
  color: ${(props) => props.fontColor};
  background: ${(props) => props.bgColor};
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border-right: 2px solid ${({ theme }) => theme.colors.which};
  }
`;

export default Carousel;
