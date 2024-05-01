import Listing from "./Listing";

const ListingContainer = ({ listings }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {listings.map(listing => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </div>
  );
};

export default ListingContainer;