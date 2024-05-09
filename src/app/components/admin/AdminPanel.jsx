import React, { useState, useEffect } from "react";
import PropertyList from "./PropertyList";
import PropertyForm from "./PropertyForm";
import "./Modal/Modal.css"; // Ensure you import your CSS here

const AdminPanel = () => {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await fetch("https://thuistekoop-website-server-1.onrender.com/api/v1/property");
      const data = await response.json();
      setProperties(data.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  const openModalToEdit = (property) => {
    setSelectedProperty(property);
    setModalOpen(true);
  };

  const handleFormSubmit = (propertyData, isNew) => {
    const url = `https://thuistekoop-website-server-1.onrender.com/api/v1/property/${isNew ? '' : propertyData.id}`;
    const method = isNew ? 'POST' : 'PUT';

    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(propertyData)
    }).then(() => {
      fetchProperties(); // Reload properties after submitting
      setModalOpen(false); // Close modal
    }).catch(error => {
      console.error("Failed to submit property data:", error);
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Admin Panel</h1>
      <button className="add-button" onClick={() => openModalToEdit(null)}>Add Property</button>
      <PropertyList properties={properties} deleteProperty={() => { }} updateProperty={openModalToEdit} />
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={() => setModalOpen(false)}>✕</button>
            <PropertyForm propertyData={selectedProperty} handleSubmit={handleFormSubmit} isNew={!selectedProperty} />
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminPanel;
