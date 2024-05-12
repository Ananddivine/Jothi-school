import React from 'react';

function ExampleCarouselImage({ src, text }) {
  return (
    <div style={{ pointerEvents: 'none' }}>
      <img
        className="d-block img-fluid"
        src={src}
        alt={text}
      />
    </div>
  );
}

export default ExampleCarouselImage;
