const PropertyFeatures = ({ features }) => {
    return (
      <div className="bg-white p-6">
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <ul className="list-disc pl-5">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default PropertyFeatures;