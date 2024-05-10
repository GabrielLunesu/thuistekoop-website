const PropertyBuild = ({ build }) => {
    return (
      <div className="p-4 bg-white  my-4">
        <h2 className="text-xl font-bold mb-2">Bouw</h2>
        <div className="grid grid-cols-1 gap-4">
          {build.map((build, index) => (
            <div key={index}>
              <strong>{build.label}:</strong> {build.value}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default PropertyBuild;
  