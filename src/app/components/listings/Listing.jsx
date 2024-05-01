import React from 'react';

const Listing = ({ listing }) => {
  return (
    <a
      className="w-full md:w-1/2 p-4 flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer mb-6"
      href={`/residentie/${listing.id}`}
    >
      <div className="w-full h-64 bg-gray-300 rounded-lg overflow-hidden" style={{ backgroundImage: `url(${listing.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Image container (empty if using background images) */}
      </div>
      <div className="w-full bg-white p-4 rounded-lg shadow-lg mt-4">
        <h3 className="font-bold text-xl mb-2">{listing.address}</h3>
        <div className="text-gray-800 font-semibold">{listing.price}</div>
        <div className="text-gray-600 text-sm mt-2">
          <span>{listing.area} m²</span> |
          <span> {listing.rooms} kamers</span> |
          <span> {listing.year}</span>
        </div>
      </div>
    </a>
  );
};

export default Listing;
