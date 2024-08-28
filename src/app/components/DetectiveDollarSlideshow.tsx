import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image'; // or use <img> if not using Next.js

const images = [
  "/DetectiveDollar/DetectiveDollar1.jpg",
  "/DetectiveDollar/DetectiveDollar2.png",
  "/DetectiveDollar/DetectiveDollar3.jpg",
  "/DetectiveDollar/DetectiveDollar4.jpg",
  "/DetectiveDollar/DetectiveDollar5.png",
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000, // Change slide every 3 seconds
};

const DetectiveDollarSlideShow = () => (
  <Slider {...settings}>
    {images.map((src, index) => (
      <div key={index}>
        <Image
          src={src}
          alt={`detective dollar ${index}`}
          height={200}
          width={200}
          className="border border-black border-2 rounded-lg mb-4"
        />
      </div>
    ))}
  </Slider>
);

export default DetectiveDollarSlideShow;
