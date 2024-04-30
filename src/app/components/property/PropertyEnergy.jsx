import React from 'react';

const PropertyEnergy = ({ energy }) => {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Energie</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <div className="mb-2"><strong>Isolatie:</strong> {energy.isolatie}</div>
          <div className="mb-2"><strong>Verwarming:</strong> {energy.verwarming}</div>
          <div className="mb-2"><strong>Warm water:</strong> {energy.warmWater}</div>
          <div className="mb-2"><strong>Cv-ketel:</strong> {energy.cvKetel}</div>
        </div>
        <div className="flex items-center">
          <div className="mr-2"><strong>Energielabel:</strong></div>
          <span className="px-2 py-1 text-white bg-green-500 rounded-full">{energy.energielabel}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyEnergy;
