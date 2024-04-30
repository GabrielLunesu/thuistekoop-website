import React from 'react';

const PropertyLayout = ({ layoutdetails }) => {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Indeling</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="mb-2"><strong>Aantal kamers:</strong> {layoutdetails.aantalKamers}</div>
          <div className="mb-2"><strong>Aantal slaapkamers:</strong> {layoutdetails.aantalSlaapkamers}</div>
          <div className="mb-2"><strong>Aantal badkamers:</strong> {layoutdetails.aantalBadkamers}</div>
          <div className="mb-2"><strong>Aantal woonlagen:</strong> {layoutdetails.aantalWoonlagen}</div>
        </div>
        <div>
          {layoutdetails.voorzieningen.map((voorziening, index) => (
            <div key={index} className="flex items-center mb-2">
              <svg className="w-6 h-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              {voorziening}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyLayout;
