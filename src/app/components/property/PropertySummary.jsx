const PropertySummary = ({ property }) => {
    return (
      <div className="p-4 md:mt-0 -mt-24 bg-white ">
        <h1 className="text-2xl font-bold">{property.title}</h1>
        <p className="text-lg">{property.address}</p>
        <p className="font-semibold">{property.price}</p>
      </div>
    );
  };
  
  export default PropertySummary;
  