import React, { useState, useEffect } from 'react';

const BiddingDetails = ({ initialPrice, bids, bidEndTime }) => {
  const [highestBid, setHighestBid] = useState(initialPrice);
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    // Calculate time left function
    const calculateTimeLeft = () => {
      const endTime = new Date(bidEndTime).getTime();
      const now = new Date().getTime();
      const difference = endTime - now;
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      } else {
        return null; // Return null when the time has passed
      }
      return timeLeft;
    };

    // Set initial time left
    setTimeLeft(calculateTimeLeft());

    // Update the timer every second
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      if (!newTimeLeft) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [bidEndTime]);

  useEffect(() => {
    const maxBid = Math.max(initialPrice, ...bids.map(bid => bid.amount));
    setHighestBid(maxBid);
  }, [bids, initialPrice]);

  const sortedBids = bids.sort((a, b) => b.amount - a.amount);

  const formatTimeLeft = () => {
    if (!timeLeft) {
      return 'Bidding has been closed'; // Display message when bidding is closed
    }
    return `${timeLeft.days || 0}d ${timeLeft.hours || 0}h ${timeLeft.minutes || 0}m ${timeLeft.seconds || 0}s`;
  };

  return (
    <div className="bg-navy p-4 shadow-2xl rounded-lg text-white">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Current Price: €{highestBid.toLocaleString()}</h2>
        <p>Bidding closes in: {formatTimeLeft()}</p>
      </div>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Current Bids:</h3>
        {sortedBids.length > 0 ? (
          sortedBids.map((bid, index) => (
            <div key={index} className="grid grid-cols-3 gap-4 bg-dark-blue p-3 rounded-md shadow-md">
              <div className="col-span-1 font-medium">Bidder: {bid.bidder}</div>
              <div className="col-span-1 font-medium">Amount: €{bid.amount.toLocaleString()}</div>
              <div className="col-span-1 font-medium">Time: {bid.time}</div>
            </div>
          ))
        ) : (
          <p className="text-sm italic">No current bids.</p>
        )}
      </div>
    </div>
  );
};

export default BiddingDetails;
