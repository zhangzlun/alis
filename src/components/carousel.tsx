import React, { Fragment, Component } from 'react';

class Carousel extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    item:0,
    currentIndex: 0,
    galleryItems: this.galleryItems()
  };

  galleryItems(){
    return [11, 6, 12].map((v, index) => (
      <div>
        <pre>{index}</pre>
        <img alt="" src={`/images/Carousel${v}.jpg`}  />
      </div>
    )
  }

  render() {
    return (
      <div className="carousel slide" data-ride="carousel">
        <div className={`carousel-inner ${classes.carouselInner}`}>
          <div className={["carousel-item", "active", classes.carousel].join(" ")}>

          </div>
        </div>
      </div>
    )
  }
}

export default Carousel
