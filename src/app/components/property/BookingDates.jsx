import React, { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { parseISO, format } from 'date-fns';

const BookingDates = ({ bookingSlots, propertyTitle }) => {
  const { user, isLoading } = useUser();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    subject: '',
    message: '',
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
    const message = `Naam: ${userName}\nEmail: ${userEmail}\nHallo, mijn naam is ${userName} en ik wil een bezoek boeken voor ${propertyTitle} op ${bookingDate}.`;

    setFormData({ subject, message });
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
    <div className="p-4 bg-white my-4 mb-4">
      <h3 className="text-xl font-semibold mb-4">Beschikbare boekingsslots:</h3>
      <div className="flex flex-wrap gap-4 justify-start">
        {bookingSlots.map((slot, index) => (
          <div
            key={index}
            className="bg-navy text-white font-bold rounded-lg text-center max-w-md p-4 shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl"
            style={{ minWidth: "250px" }}
          >
            <p className="text-white mb-2 font-medium">{formatDateTime(slot.bookingDate)}</p>
            <button
              onClick={() => handleBookingClick(formatDateTime(slot.bookingDate))}
              className="bg-white text-navy font-bold p-2 rounded border border-white hover:bg-navy hover:text-white transition-colors duration-300"
            >
              Boek bezoek
            </button>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
            >
              <span className="text-2xl">&times;</span>
            </button>
            <h3 className="text-lg font-semibold mb-4">Boekingsaanvraag</h3>
            <form onSubmit={handleSubmit}>
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
                <label htmlFor="message" className="block font-semibold mb-1">
                  Bericht:
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  rows="4"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
