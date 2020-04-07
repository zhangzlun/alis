import React, { FunctionComponent, useState } from 'react';
import { Carousels, CarouselCards, CarouselCardLabels, CarouselCard, CarouselCardLabel } from './style';

const testData = [
  { labelName: 'Label1', context: '内容-1', labelData: 'いつでもお客様に' },
  { labelName: 'Label2', context: '内容-2', labelData: 'いつでもお客様に2' },
  { labelName: 'Label3', context: '内容-3', labelData: 'いつでもお客様に3' },
];

export const Carousel: FunctionComponent<{}> = () => {
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
          <CarouselCardLabel key={data.labelName} currently={show} labelName={data.labelName} onClick={() => setShow(data.labelName)}>
            {data.labelData}
          </CarouselCardLabel>
        ))}
      </CarouselCardLabels>
    </Carousels>
  );
};

export default Carousel;
