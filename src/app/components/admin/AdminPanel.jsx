import React, { useState, useEffect } from "react";
import PropertyList from "./PropertyList";
import PropertyForm from "./PropertyForm";

const AdminPanel = () => {
  const [properties, setProperties] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    // Fetch properties from API on component mount
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

  const deleteProperty = async (id) => {
    try {
      await fetch(`https://thuistekoop-website-server-1.onrender.com/api/v1/property/${id}`, {
        method: "DELETE",
      });
      setProperties(properties.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Error deleting property:", error);
    }
  };

  const updateId = async (updatedProperty) => {
    setId(updatedProperty.id);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Admin Panel</h1>
      <PropertyForm id={id} dataSubmitted={fetchProperties} />
      <PropertyList properties={properties} deleteProperty={deleteProperty} updateProperty={updateId} />
    </div>
  );
};

export default AdminPanel;
