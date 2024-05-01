// components/ListingSection.js

import Image from 'next/image';
import React from 'react';

const ListingSection = () => {
  // Assuming you want to have 3 placeholder cards for now
  const placeholderListings = [
    { id: 1, title: 'Luxury Villa', description: '5 beds, 4 baths, 3 garages', imageSrc: 'https://placehold.co/500x500.png' },
    { id: 2, title: 'Cozy Cottage', description: '2 beds, 1 bath, 1 garage', imageSrc: 'https://placehold.co/500x500.png' },
    { id: 3, title: 'Urban Flat', description: '3 beds, 2 baths', imageSrc: 'https://placehold.co/500x500.png' },
  ];

  return (
    <section className=" ">
      <div className="">
        <div className="bg-white p-6  shadow-lg">
          <div className="flex flex-wrap items-center justify-between mb-6">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <h2 className="text-lg font-semibold text-black">Real estate listings</h2>
              <p className="text-xs font-medium text-black">Find your dream home</p>
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 text-sm font-medium text-black bg-white border border-coolGray-200 rounded-md hover:border-coolGray-300">Contact</button>
              <button className="px-4 py-2 text-sm text-white bg-navy border border-navy rounded-md hover:bg-navy">Bekijk alles</button>
            </div>
          </div>
          {/* Card container */}
          <div className="flex text-black flex-wrap -mx-4">
            {placeholderListings.map((listing) => (
              <div key={listing.id} className="w-full md:w-1/3 px-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                  <Image src={listing.imageSrc} alt={listing.title} width={500} height={500} className="rounded-md mb-4" />
                  <h3 className="text-lg font-semibold">{listing.title}</h3>
                  <p className="text-sm text-black">{listing.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingSection;
