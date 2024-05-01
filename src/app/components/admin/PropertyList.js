import React from 'react';

const PropertyList = ({ properties, deleteProperty, updateProperty }) => {
  return (
    <div className="mt-4">
      {properties.map(property => (
        <div key={property.id} className="bg-white p-4 rounded shadow mb-4">
          <h2 className="text-xl font-bold">{property.title}</h2>
          <p>{property.address}</p>
          <p className="font-semibold">{property.price}</p>
          <button onClick={() => deleteProperty(property.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 mr-2">Delete</button>
          <button onClick={() => updateProperty(property)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700">Edit</button>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
