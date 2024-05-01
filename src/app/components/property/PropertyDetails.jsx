const PropertyDetails = ({ details }) => {
    return (
      <div className="p-4 bg-white shadow-md my-4">
        <h2 className="text-xl font-bold mb-2">Details</h2>
        <div className="grid grid-cols-2 gap-4">
          {details.map((detail, index) => (
            <div key={index}>
              <strong>{detail.label}:</strong> {detail.value}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default PropertyDetails;
  