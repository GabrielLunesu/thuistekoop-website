import React from 'react';

const Listing = ({ property }) => {
  return (
    <a
      className="w-full md:w-1/2 p-4 flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer mb-6"
      href={`/residentie/${property.id}`}
    >
      <div className="w-full h-64 bg-gray-300 rounded-lg overflow-hidden" style={{ backgroundImage: `url(${property.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Image container (empty if using background images) */}
      </div>
      <div className="w-full bg-white p-4 rounded-lg shadow-lg mt-4">
        <h3 className="font-bold text-xl mb-2">{property.address}</h3>
        <div className="text-gray-800 font-semibold">{property.price}</div>
        <div className="text-gray-600 text-sm mt-2">
          <span>{property.area} m²</span> |
          <span> {property.rooms} kamers</span> |
          <span> {property.year}</span>
        </div>
      </div>
    </a>
  );
};

export default Listing;
