import React, { useState, useEffect } from 'react';

const BiddingDetails = ({ initialPrice, bids, bidEndTime }) => {
  const [highestBid, setHighestBid] = useState(initialPrice);
  const [timeLeft, setTimeLeft] = useState(bidEndTime);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        clearInterval(timer);
      }
    }, 3600000); // Update every hour

    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    const maxBid = Math.max(initialPrice, ...bids.map(bid => bid.amount));
    setHighestBid(maxBid);
  }, [bids, initialPrice]);

  // Sorting bids by amount in descending order
  const sortedBids = bids.sort((a, b) => b.amount - a.amount);

  return (
    <div className="bg-navy p-4 shadow-2xl rounded-lg text-white">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Current Price: €{highestBid.toLocaleString()}</h2>
        <p>Bidding closes in {timeLeft} hours</p>
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
