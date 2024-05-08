import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

const BookingDates = ({ bookingData, propertyId }) => {
  const { user } = useUser(); // This hook provides user info

  const handleBooking = async (bookingDate) => {
    if (!user || !user.email) {
      alert('You must be logged in to book a visit.');
      return;
    }

    const bookingDetails = {
      property_id: propertyId,
      user_email: user.email,
      booking_date: bookingDate
    };

    // Post request to backend to save the booking
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingDetails)
      });

      if (!response.ok) throw new Error('Failed to book the property.');
      alert('Booking successful!');
    } catch (error) {
      console.error('Booking failed:', error);
      alert('Failed to book the property.');
    }
  };

  return (
    <div>
      <h3>Available Booking Slots:</h3>
      {bookingData.bookingSlots.map((slot, index) => (
        <div key={index}>
          <p>Date: {new Date(slot.bookingDate).toLocaleDateString()} at {slot.bookingTime}</p>
          <button onClick={() => handleBooking(slot.bookingDate)} className="btn-primary">
            Book Visit
          </button>
        </div>
      ))}
    </div>
  );
};

export default BookingDates;
