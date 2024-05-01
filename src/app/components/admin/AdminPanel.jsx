import React, { useState } from 'react';
import PropertyList from './PropertyList';  // Component to list all properties
import PropertyForm from './PropertyForm';  // Component to add/edit properties

const AdminPanel = () => {
  const [properties, setProperties] = useState([]);

  const addProperty = (property) => {
    setProperties([...properties, {...property, id: properties.length + 1}]);
  };

  const deleteProperty = (id) => {
    setProperties(properties.filter(p => p.id !== id));
  };

  const updateProperty = (updatedProperty) => {
    setProperties(properties.map(p => p.id === updatedProperty.id ? updatedProperty : p));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Admin Panel</h1>
      <PropertyForm addProperty={addProperty} />
      <PropertyList properties={properties} deleteProperty={deleteProperty} updateProperty={updateProperty} />
    </div>
  );
};

export default AdminPanel;
