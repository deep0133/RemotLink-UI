// src/components/HomeSlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import home_image from "../../images/Rectangle 5.png";
const HomeSlider = ({ institutionDetails, url }) => {
  const settings = {
    infinite: true,
    speed: 550,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    rtl: false,
  };

  const images = [
    institutionDetails?.slider1,
    institutionDetails?.slider2,
    institutionDetails?.slider3,
  ];

  return (
    <div className='overflow-hidden h-full w-full'>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className='h-full w-full'>
            <img
              src={url + image}
              alt={`Slide ${index + 1}`}
              className='w-full h-full object-cover'
              onError={(e) => {
                e.target.src = home_image;
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;
