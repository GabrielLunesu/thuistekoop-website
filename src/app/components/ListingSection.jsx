// components/ListingSection.js

import Image from 'next/image';
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const ListingSection = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Change this as needed for different screen sizes
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3, // Display three items on larger screens
        },
      },
    ],
  };
  // Assuming you want to have 3 placeholder cards for now
  const placeholderListings = [
    { id: 1, title: 'Luxury Villa', description: '5 beds, 4 baths, 3 garages', imageSrc: 'https://placehold.co/500x500.png' },
    { id: 2, title: 'Cozy Cottage', description: '2 beds, 1 bath, 1 garage', imageSrc: 'https://placehold.co/500x500.png' },
    { id: 3, title: 'Urban Flat', description: '3 beds, 2 baths', imageSrc: 'https://placehold.co/500x500.png' },
  ];

  return (
    <section className="p-6 bg-white shadow-lg">
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-black">Real estate listings</h2>
      <p className="text-sm text-black">Find your dream home</p>
    </div>
    <Slider {...settings}>
      {placeholderListings.map((listing) => (
        <div key={listing.id} className="px-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <Image src={listing.imageSrc} alt={listing.title} width={500} height={500} className="rounded-md mb-4" />
            <h3 className="text-lg font-semibold">{listing.title}</h3>
            <p className="text-sm text-black">{listing.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  </section>
  );
};

export default ListingSection;
