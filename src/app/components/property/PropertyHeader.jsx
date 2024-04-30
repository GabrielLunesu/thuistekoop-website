const PropertyHeader = ({ property }) => {
    return (
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">{property.address}</h1>
          <span className="text-xl text-gray-600">{property.price}</span>
        </div>
        <img src={property.image} alt="Property" className="w-full object-cover h-96" />
      </div>
    );
  };
  
  export default PropertyHeader;