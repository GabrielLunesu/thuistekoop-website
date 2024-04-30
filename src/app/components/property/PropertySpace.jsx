const PropertySpace = ({ space }) => {
    return (
      <div className="p-4 bg-white shadow-md my-4">
        <h2 className="text-xl font-bold mb-2">Oppervlakte en Inhoud</h2>
        <div className="grid grid-cols-1 gap-4">
          {space.map((space, index) => (
            <div key={index}>
              <strong>{space.label}:</strong> {space.value}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default PropertySpace;
  