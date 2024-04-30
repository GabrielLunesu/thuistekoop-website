const PropertyOutdoor = ({ outdoor }) => {
    return (
      <div className="p-4 bg-white shadow-md my-4">
        <h2 className="text-xl font-bold mb-2">Buitenruimte</h2>
        <div className="grid grid-cols-1 gap-4">
          {outdoor.map((outdoor, index) => (
            <div key={index}>
              <strong>{outdoor.label}:</strong> {outdoor.value}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default PropertyOutdoor;
  