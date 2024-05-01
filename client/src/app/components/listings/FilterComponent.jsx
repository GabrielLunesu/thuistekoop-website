import React, { useState } from 'react';

const FilterComponent = ({ onFilterChange }) => {
  const [price, setPrice] = useState(100000); // Default starting price

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onFilterChange(name, value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
    handleInputChange(event); // Update price in state
  };

  return (
    <div className="p-4 w-64 bg-navy ml-5 rounded-lg shadow-lg text-white">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="city">City</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="city"
          type="text"
          placeholder="Enter city"
          onChange={handleInputChange}
        />
      </div>

      {/* Price range slider */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Max Prijs: €{price.toLocaleString()}</label>
        <input
          type="range"
          min="50000"
          max="1000000"
          value={price}
          onChange={handlePriceChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
      </div>

      {/* Bedroom filter */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Aantal slaapkamers</label>
        {["1 slaapkamer", "2+ slaapkamers", "3+ slaapkamers", "4+ slaapkamers", "5+ slaapkamers"].map((item, index) => (
          <div key={index} className="mb-1">
            <input
              type="radio"
              id={`bed-${index}`}
              name="bedrooms"
              value={item}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label htmlFor={`bed-${index}`} className="text-white">{item}</label>
          </div>
        ))}
      </div>

      {/* Living space filter */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Woonoppervlakte</label>
        {["50+ m²", "75+ m²", "100+ m²", "150+ m²", "250+ m²"].map((size, index) => (
          <div key={index} className="mb-1">
            <input
              type="radio"
              id={`size-${index}`}
              name="livingSpace"
              value={size}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label htmlFor={`size-${index}`} className="text-white">{size}</label>
          </div>
        ))}
      </div>

      {/* Land area filter */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Perceel</label>
        {["250+ m²", "500+ m²", "1000+ m²", "2500+ m²", "5000+ m²"].map((area, index) => (
          <div key={index} className="mb-1">
            <input
              type="radio"
              id={`land-${index}`}
              name="landArea"
              value={area}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label htmlFor={`land-${index}`} className="text-white">{area}</label>
          </div>
        ))}
      </div>

    </div>
  );
};

export default FilterComponent;
