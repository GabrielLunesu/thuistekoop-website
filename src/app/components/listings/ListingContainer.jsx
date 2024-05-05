import React from 'react';
import Listing from './Listing';

const ListingContainer = ({ property }) => {
  return (
    <div className="flex flex-wrap justify-center items-center mx-auto max-w-7xl p-4">
      {property.map(property => (
        <Listing key={property.id} property={property} />
      ))}
    </div>
  );
};
export default ListingContainer;
