import { useUser } from '@auth0/nextjs-auth0/client';
import { parseISO, format } from 'date-fns';
import { useState } from 'react';

const BookingDates = ({ bookingSlots, propertyTitle }) => {
  const { user, isLoading } = useUser();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    body: '',
  });

  const formatDateTime = (isoDateString) => {
    return format(parseISO(isoDateString), "PPpp");
  };

  if (!bookingSlots || bookingSlots.length === 0) {
    return <p className="text-gray-600">Geen boekingsslots beschikbaar.</p>;
  }

  const handleBookingClick = (bookingDate) => {
    if (!user || isLoading) {
      alert("Gelieve in te loggen om een bezoek te boeken.");
      return;
    }

    const userEmail = user.email;
    const userName = user.name;
    const subject = `Boekingsaanvraag voor ${propertyTitle}`;
    const body = `Hallo, mijn naam is ${userName} en ik wil een bezoek boeken voor ${propertyTitle} op ${bookingDate}. Mijn e-mailadres is ${userEmail}.`;

    setFormData({ name: userName, email: userEmail, subject, body });
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('E-mail is succesvol verzonden.');
        setShowModal(false);
      } else {
        alert('Er is een fout opgetreden bij het verzenden van de e-mail.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Er is een fout opgetreden bij het verzenden van de e-mail.');
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Beschikbare boekingsslots:</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {bookingSlots.map((slot, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-4 shadow-md transition-all duration-300 hover:shadow-lg"
          >
            <p className="text-gray-600 mb-2">{formatDateTime(slot.bookingDate)}</p>
            <button
              onClick={() => handleBookingClick(formatDateTime(slot.bookingDate))}
              className="bg-navy text-white px-4 py-2 rounded-md hover:bg-dark-blue transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-navy-dark"
            >
              Boek bezoek
            </button>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">Boekingsaanvraag</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block font-semibold mb-1">
                  Naam:
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-semibold mb-1">
                  E-mailadres:
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block font-semibold mb-1">
                  Onderwerp:
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="body" className="block font-semibold mb-1">
                  Bericht:
                </label>
                <textarea
                  id="body"
                  value={formData.body}
                  onChange={(e) => setFormData({ ...formData, body: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  rows="4"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-navy text-white px-4 py-2 rounded-md hover:bg-dark-blue transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-navy-dark"
                >
                  Verzenden
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingDates;
