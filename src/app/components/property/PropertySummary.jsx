const PropertySummary = ({ property }) => {
    return (
      <div className="p-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold">{property.title}</h1>
        <p className="text-lg">{property.address}</p>
        <p className="font-semibold">{property.price}</p>
      </div>
    );
  };
  
  export default PropertySummary;
  