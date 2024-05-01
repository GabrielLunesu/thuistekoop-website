const PropertyDescription = ({ description }) => {
    return (
      <div className="p-4 bg-white shadow-md">
        <h2 className="text-xl font-bold mb-2">Beschrijving</h2>
        <p>{description}</p>
      </div>
    );
  };
  
  export default PropertyDescription;
  