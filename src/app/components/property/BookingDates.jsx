import { useUser } from '@auth0/nextjs-auth0/client';
import { parseISO, format } from 'date-fns';

const BookingDates = ({ bookingSlots, propertyTitle }) => {
  const { user, isLoading } = useUser();

  const formatDateTime = (isoDateString) => {
    return format(parseISO(isoDateString), "PPpp");
  };

  if (!bookingSlots || bookingSlots.length === 0) {
    return <p>No booking slots available.</p>;
  }

  const handleBookingClick = (bookingDate) => {
    if (!user || isLoading) {
      alert("Please log in to book a visit.");
      return;
    }

    const userEmail = user.email;
    const userName = user.name;
    const subject = `Booking request for ${propertyTitle}`;
    const body = `Hi, my name is ${userName} and I want to book a visit for ${propertyTitle} on ${bookingDate}. My email is ${userEmail}.`;

    const mailtoLink = `mailto:sales@realestate.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the default email client
    window.open(mailtoLink, '_blank');
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Available Booking Slots:</h3>
      {bookingSlots.map((slot, index) => (
        <div key={index} className="mb-4">
          <p className="text-gray-600 mb-1">{formatDateTime(slot.bookingDate)}</p>
          <button 
            onClick={() => handleBookingClick(formatDateTime(slot.bookingDate))}
            className="bg-navy text-white px-4 py-2 rounded hover:bg-navy-dark focus:outline-none focus:ring-2 focus:ring-navy-dark"
          >
            Book Visit
          </button>
        </div>
      ))}
    </div>
  );
};

export default BookingDates;
