import React, { useState, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

const BiddingDetails = ({ initialPrice, bids, bidEndTime, propertyTitle }) => {
  const { user, isLoading } = useUser();
  const [highestBid, setHighestBid] = useState(initialPrice);
  const [timeLeft, setTimeLeft] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    bidAmount: '',
    name: '',
    email: '',
    phoneNumber: ''
  });
  const [canBid, setCanBid] = useState(false);

  // Use useEffect to react to changes in user data
  useEffect(() => {
    if (user && !isLoading) {
      setFormData(prevFormData => ({
        ...prevFormData,
        name: user.name || '',
        email: user.email || ''
      }));
    }
  }, [user, isLoading]);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const endTime = new Date(bidEndTime).getTime();
      const now = new Date().getTime();
      const difference = endTime - now;
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      return null;
    };

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      if (!newTimeLeft) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [bidEndTime]);

  const formatTimeLeft = () => {
    if (!timeLeft) {
      return 'Bieden gesloten';
    }
    return `${timeLeft.days || 0}d ${timeLeft.hours || 0}h ${timeLeft.minutes || 0}m ${timeLeft.seconds || 0}s`;
  };

  useEffect(() => {
    setHighestBid(Math.max(initialPrice, ...bids.map(bid => bid.amount)));
  }, [bids, initialPrice]);

  const handleBid = (bidAmount) => {
    if (!user || isLoading) {
      alert('Log alstublieft in voordat u biedt.');
      return;
    }
    setFormData({ ...formData, bidAmount });
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting with:", formData);

    const emailContent = {
      subject: `Nieuw bod voor ${propertyTitle}`,
      message: `Naam: ${formData.name}\nEmail: ${formData.email}\nTelefoonnummer: ${formData.phoneNumber}\nBod: €${formData.bidAmount}`
    };

    console.log("Email content:", emailContent);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailContent),
      });

      if (response.ok) {
        alert('Uw bod is geplaatst en een bevestigingsmail is verzonden.');
        setShowForm(false);
      } else {
        alert('Er is een fout opgetreden bij het plaatsen van uw bod.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Er is een fout opgetreden bij het plaatsen van uw bod.');
    }
  };

  const handleBidAmountChange = (e) => {
    const newBidAmount = e.target.value;
    setFormData({ ...formData, bidAmount: newBidAmount });
    setCanBid(newBidAmount !== '' && !isNaN(newBidAmount));
  };

  const handlePhoneNumberChange = (e) => {
    const newPhoneNumber = e.target.value;
    setFormData(prev => ({ ...prev, phoneNumber: newPhoneNumber }));
  };

  return (
    <div className="bg-navy px-10 mx-5 p-4 shadow-2xl rounded-lg text-white">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Huidige Prijs: €{highestBid.toLocaleString()}</h2>
        <p>Bieden sluit over: {formatTimeLeft()}</p>
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Huidige Biedingen:</h3>
        {bids.length > 0 ? (
          bids.map((bid, index) => (
            <div key={index} className="p-3 rounded-md shadow-md bg-dark-blue">
              <div>Bieder: {bid.bidder}</div>
              <div>Bedrag: €{bid.amount.toLocaleString()}</div>
              <div>Tijd: {bid.time}</div>
            </div>
          ))
        ) : (
          <p className="text-sm italic">Geen huidige biedingen.</p>
        )}
        <input
          type="number"
          placeholder="Uw bod"
          value={formData.bidAmount}
          onChange={handleBidAmountChange}
          className="p-2 rounded shadow appearance-none text-black"
          min={highestBid + 1}  // Ensure the bid is higher than the highest bid
        />
        <button
          onClick={() => handleBid(formData.bidAmount)}
          disabled={!canBid}
          className={`bg-white ml-5 text-black font-bold p-2 rounded shadow ${
            canBid ? '' : 'opacity-50 cursor-not-allowed'
          }`}
        >
          Plaats bod
        </button>
      </div>
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-navy rounded-lg shadow-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">Bevestig uw bod</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block font-semibold mb-1">Naam:</label>
                <input type="text" value={formData.name} readOnly className="w-full text-black border rounded-md px-3 py-2" />
              </div>
              {/* <div className="mb-4">
                <label className="block font-semibold mb-1">Email:</label>
                <input type="email" value={formData.email} readOnly className="w-full text-black border rounded-md px-3 py-2" />
              </div> */}
              <div className="mb-4">
                <label className="block font-semibold mb-1">Bod:</label>
                <input type="text" value={formData.bidAmount} readOnly className="w-full text-black border rounded-md px-3 py-2" />
              </div>
              
              <div className="mb-4">
                <label className="block font-semibold mb-1">Telefoonnummer:</label>
                <input
                  type="tel"
                  placeholder="Uw telefoonnummer"
                  value={formData.phoneNumber}
                  onChange={handlePhoneNumberChange}
                  required
                  className="w-full text-black border rounded-md px-3 py-2"
                />
              </div>
              <div className="flex justify-end">
                <button type="submit" className="bg-white text-navy px-4 py-2 rounded-md">
                  Bevestigen en verzenden
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BiddingDetails;
