import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Carousel: FunctionComponent<{}> = () => {
  return (

    <Carousels className="hero-slider" data-carousel>
      <div className="carousel-cell"
           style="background-image:url(https://68.media.tumblr.com/57836ee52bc9355ad7c5fed5abf91ccc/tumblr_oiboo6MaRS1slhhf0o1_1280.jpg);">
        <div className="overlay"></div>
        <div className="inner">
          <h3 className="subtitle">Slide 1</h3>
          <h2 className="title">Flickity Parallax</h2>
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <a href="https://flickity.metafizzy.co/" target="_blank" className="btn">Tell me more</a>
        </div>
      </div>
    </Carousels>
  );
};

const Carousels = styled.div`

`

export default Carousel;
