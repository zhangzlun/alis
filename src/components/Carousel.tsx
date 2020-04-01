import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { CarouselModuleType } from '~/modules/carouselModules';

const list = [
  'いつでもお客様に、「満足」・「安心」を',
  '社員の成長に心掛けていくこと',
  '企業市民として、社会に貢献すること',
]

export const Carousel: FunctionComponent<CarouselModuleType> = () => {
  const [action, setAction] = useState('elem name');
  return (
    <Carousels>
      <CarouselCards>

        <CarouselCard action="true">内容-1</CarouselCard>
        <CarouselCard>内容-2</CarouselCard>
        <CarouselCard>内容-3</CarouselCard>

      </CarouselCards>

      <CarouselCardLabels>
        {list.map((data) => (
          <CarouselCardLabel action="true" onClick={}>
            {data}
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

const CarouselCard = styled.div<{ action?: string }>`
  background: ${({ theme }) => theme.colors.which};
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  z-index: ${(props) => (props.action !== undefined ? 1000 : 0)};
`;

const CarouselCardLabel = styled.span<{ action?: string }>`
  position: relative;
  display: inline-block;
  width: 100%;
  padding: 10px 5px 10px;
  font-weight: 600;
  color: ${(props) => {
    return props.action !== undefined
      ? props.theme.borderColor
      : props.theme.fontColor;
  }};
  background: ${({ action, theme }) => (action !== undefined ? theme.colors.which : theme.backgroundColor)};
  &::after {
    border-right: 2px solid ${({ theme }) => theme.colors.which};
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    content: '';
  }
  &:not([action]):hover::after {
    border-right: 10px solid ${({ theme }) => theme.colors.which};
  }
`;

export default Carousel;
