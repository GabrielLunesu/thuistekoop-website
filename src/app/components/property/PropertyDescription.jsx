const PropertyDescription = ({ description }) => {
    return (
      <div className="p-4 bg-white  my-4">
        <h2 className="text-xl font-bold mb-2">Beschrijving</h2>
        <p>{description}</p>
      </div>
    );
  };
  
  export default PropertyDescription;
  