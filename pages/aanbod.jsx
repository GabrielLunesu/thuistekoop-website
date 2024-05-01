import React from 'react'
import { useState } from 'react';
import ListingContainer from '@/app/components/listings/ListingContainer';
import FilterComponent from '@/app/components/listings/FilterComponent';
import SearchBar from '@/app/components/listings/SearchBar';

const Aanbod = () => {
  const [listings, setListings] = useState([
    { 
      id: 1, 
      image: 'https://via.placeholder.com/400x300/abc', 
      address: 'Hendrik de Swaeffstraat 11', 
      area: '132', 
      rooms: '5', 
      year: '1998', 
      price: '€469,000' 
    },
    { 
      id: 2, 
      image: 'https://via.placeholder.com/400x300/bcd', 
      address: 'Wilhelminaplein 23', 
      area: '150', 
      rooms: '4', 
      year: '2010', 
      price: '€550,000' 
    },
    { 
      id: 3, 
      image: 'https://via.placeholder.com/400x300/cde', 
      address: 'Kasteel Traverse 30', 
      area: '100', 
      rooms: '3', 
      year: '2005', 
      price: '€320,000' 
    },
    { 
      id: 4, 
      image: 'https://via.placeholder.com/400x300/def', 
      address: 'Noord Koninginnewal 49', 
      area: '110', 
      rooms: '4', 
      year: '2000', 
      price: '€410,000' 
    },
    { 
      id: 5, 
      image: 'https://via.placeholder.com/400x300/efg', 
      address: 'Stationsstraat 77', 
      area: '145', 
      rooms: '6', 
      year: '1995', 
      price: '€480,000' 
    },
    { 
      id: 6, 
      image: 'https://via.placeholder.com/400x300/fgh', 
      address: 'Europaweg 99', 
      area: '120', 
      rooms: '4', 
      year: '2015', 
      price: '€395,000' 
    }
  ]);
  


  const [filter, setFilter] = useState('');

  const handleFilterChange = (value) => {
    // Implement filtering logic here
    setFilter(value);
  };

  return (
    <div className="">
      {/* <SearchBar />
      <FilterComponent onFilterChange={handleFilterChange} /> */}
      <ListingContainer listings={listings.filter(listing => listing.address.includes(filter))} />
    </div>
  )
}

export default Aanbod
