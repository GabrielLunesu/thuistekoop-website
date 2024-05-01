import React from 'react';
import Listing from './Listing';

const ListingContainer = ({ listings }) => {
  return (
    <div className="flex flex-wrap justify-center items-center mx-auto max-w-7xl p-4">
      {listings.map(listing => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </div>
  );
};
export default ListingContainer;
