const PropertyParkDetails = ({ parkdetails }) => {
    return (
      <div className="p-4 bg-white  my-4">
        <h2 className="text-xl font-bold mb-2">Parkeergelegenheid</h2>
        <div className="grid grid-cols-1 gap-4">
          {parkdetails.map((parkdetails, index) => (
            <div key={index}>
              <strong>{parkdetails.label}:</strong> {parkdetails.value}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default PropertyParkDetails;
  