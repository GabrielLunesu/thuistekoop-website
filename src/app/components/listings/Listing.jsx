import React from 'react';

const Listing = ({ listing }) => {
  return (
    <div
      className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 cursor-pointer"
      onClick={() => window.location.href = `/residentie/${listing.id}`}
    >
      <img className="w-full h-48 object-cover" src={listing.image} alt="House image" />
      <div className="px-6 py-4 bg-white">
        <div className="font-bold text-xl mb-1">{listing.address}</div>
        <div className="text-gray-900 font-bold">{listing.price}</div>
        <div className="text-gray-600 text-sm mt-2 flex justify-between items-center">
          <span className="flex items-center">
            <i className="fas fa-expand-arrows-alt mr-1"></i>{listing.area} m²
          </span>
          <span className="flex items-center">
            <i className="fas fa-bed mr-1"></i>{listing.rooms} kamers
          </span>
          <span className="flex items-center">
            <i className="fas fa-calendar-alt mr-1"></i>{listing.year}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Listing;
