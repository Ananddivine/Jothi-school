import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Images.css';
import ExampleCarouselImage from './ExampleCarouselImage';
import image1 from './images/image1.jpg'; 
import image2 from './images/image2.jpg'; 
import image3 from './images/image3.jpg'; 

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleMouseOver = () => {
    setIsPaused(true);
  };

  const handleMouseOut = () => {
    setIsPaused(false);
  };

  const images = [
    { src: image1 },
    { src: image2 },
    { src: image3}
  ];

 
return (
  <div className='carousel'>
    <Carousel 
      activeIndex={index} 
      onSelect={handleSelect}
      indicators={false}
      interval={3000}
      pause={isPaused} 
      onMouseOver={handleMouseOver} 
      onMouseOut={handleMouseOut} 
    >
      {images.map((image, idx) => (
        <Carousel.Item key={idx}>
          <div className="carousel-image-container">
            <ExampleCarouselImage src={image.src} />
          </div>
          <Carousel.Caption>
            <h3>{image.text}</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  </div>
  );
}

export default ControlledCarousel;
