import React from 'react';

const Listing = ({ listing }) => {
  return (
    <a
      className="max-w-sm rounded overflow-hidden shadow-lg m-2 hover:shadow-xl transition-shadow duration-300"
      href={`/residentie/${listing.id}`}
    >
      <img className="w-full" src={listing.image} alt="House image" />
      <div className="px-6 py-4 bg-white">
        <div className="font-bold text-xl mb-2">{listing.address}</div>
        <div className="text-gray-900 font-bold">{listing.price}</div>
        <div className="text-gray-600 text-sm mt-2">
          <span className="mr-2">
            <i className="fas fa-expand-arrows-alt"></i> {listing.area} m²
          </span>
          <span className="mr-2">
            <i className="fas fa-bed"></i> {listing.rooms} kamers
          </span>
          <span>
            <i className="fas fa-calendar-alt"></i> {listing.year}
          </span>
        </div>
      </div>
    </a>
  );
};

export default Listing;
