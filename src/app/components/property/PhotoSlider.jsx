import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const PhotoSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true  // Adjusts slider's height based on the image
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="w-full h-64 md:h-96">  
            <img src={image} alt="Property Image" className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PhotoSlider;
