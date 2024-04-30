const PropertyGarage = ({ garagedetails }) => {
    return (
      <div className="p-4 bg-white shadow-md my-4">
        <h2 className="text-xl font-bold mb-2">Garage</h2>
        <div className="grid grid-cols-1 gap-4">
          {garagedetails.map((garagedetails, index) => (
            <div key={index}>
              <strong>{garagedetails.label}:</strong> {garagedetails.value}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default PropertyGarage;
  