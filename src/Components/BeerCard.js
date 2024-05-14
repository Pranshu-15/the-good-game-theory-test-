import React from 'react';

const BeerCard = ({ beer }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={beer.image_url}
        alt={beer.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{beer.name}</h3>
        <p className="text-gray-700 text-base">{beer.tagline}</p>
      </div>
    </div>
  );
};

export default BeerCard;