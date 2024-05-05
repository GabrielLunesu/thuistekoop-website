import React from 'react'
import { useState } from 'react';
import ListingContainer from '@/app/components/listings/ListingContainer';
import FilterComponent from '@/app/components/listings/FilterComponent';
import SearchBar from '@/app/components/listings/SearchBar';

export async function getServerSideProps() {
  // Fetch properties data
  const res = await fetch(`https://thuistekoop-website-server-1.onrender.com/api/v1/property`);
  const data = await res.json();

  // Transform data to match the expected structure
  const transformedProperties = data.data.map((property) => ({
    id: property.id, // Ensure the API provides a unique ID
    image: property.images[0] || 'https://via.placeholder.com/400', // Default image if none is provided
    address: property.address,
    // Ensure that 'area' is a number and use a default value if it's not available
    area: property.space.find(detail => detail.label === 'Woonoppervlakte')?.value.replace(/\D/g, '') || '0', 
    rooms: property.layoutDetailsData.aantalKamers || 0,
    year: property.build.find(detail => detail.label === 'Bouwjaar')?.value || 'Unknown',
    price: property.price
  }));

  return {
    props: { properties: transformedProperties },
  };
}


const Aanbod = ({ properties }) => {
 
  
    
  return (
    <div className="">
      <ListingContainer property={properties} />

    </div>
  )
}

export default Aanbod
