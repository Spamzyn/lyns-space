import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

export const WigCard = ({ wig }) => {
  const navigate = useNavigate();
  const { addToCart } = useStore();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={wig.image}
        alt={wig.name}
        className="w-full h-48 object-cover"
        onClick={() => navigate(`/wigtypes/${wig.name}`)}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{wig.name}</h3>
        <p className="text-gray-600 mb-2">{wig.category}</p>
        <p className="text-purple-600 font-bold mb-4">${wig.price}</p>
        <button
          onClick={() => addToCart(wig)}
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

