// src/pages/WigDetail.jsx
import React, { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/contextProvider';
import { assets } from '../assets';

const WigDetail = () => {
  const { wigName } = useParams();
  const navigate = useNavigate();
  const { category } = useContext(StoreContext);

  // Define wig collections mapping
  const wigCollections = {
    'bob-wigs': {
      title: 'Bob Wigs',
      images: [
        { src: assets.bob1, alt: 'Bob Wig 1' },
        { src: assets.bob2, alt: 'Bob Wig 2' },
        { src: assets.bob3, alt: 'Bob Wig 3' },
        { src: assets.bob4, alt: 'Bob Wig 4' },
        { src: assets.bob5, alt: 'Bob Wig 5' },
        { src: assets.bob6, alt: 'Bob Wig 6' },
        { src: assets.bob7, alt: 'Bob Wig 7' },
      ]
    },
    'curly-wigs': {
      title: 'Curly Wigs',
      images: [
        { src: assets.curly1, alt: 'Curly Wig 1' },
        { src: assets.curly2, alt: 'Curly Wig 2' },
        { src: assets.curly3, alt: 'Curly Wig 3' },
        { src: assets.curly4, alt: 'Curly Wig 4' },
        { src: assets.curly5, alt: 'Curly Wig 5' },
        { src: assets.curly6, alt: 'Curly Wig 6' },
      ]
    },
    'long-wigs': {
      title: 'Long Wigs',
      images: [
        { src: assets.long1, alt: 'Long Wig 1' },
        { src: assets.long2, alt: 'Long Wig 2' },
        { src: assets.long3, alt: 'Long Wig 3' },
        { src: assets.long4, alt: 'Long Wig 4' },
        { src: assets.long5, alt: 'Long Wig 5' },
        { src: assets.long6, alt: 'Long Wig 6' },
        { src: assets.long7, alt: 'Long Wig 7' },
        { src: assets.long8, alt: 'Long Wig 8' },
      ]
    },
    'pixie-wigs': {
      title: 'Pixie Wigs',
      images: [
        { src: assets.pixie1, alt: 'Pixie Wig 1' },
        { src: assets.pixie2, alt: 'Pixie Wig 2' },
        { src: assets.pixie3, alt: 'Pixie Wig 3' },
      ]
    },
    'synthetic-wigs': {
      title: 'Synthetic Wigs',
      images: [
        { src: assets.synthetic1, alt: 'Synthetic Wig 1' },
        { src: assets.synthetic2, alt: 'Synthetic Wig 2' },
        { src: assets.synthetic3, alt: 'Synthetic Wig 3' },
        { src: assets.synthetic4, alt: 'Synthetic Wig 4' },
        { src: assets.synthetic5, alt: 'Synthetic Wig 5' },
        { src: assets.synthetic6, alt: 'Synthetic Wig 6' },
        { src: assets.synthetic7, alt: 'Synthetic Wig 7' },
      ]
    },
    'human-hair-wigs': {
      title: 'Human Hair Wigs',
      images: [
        { src: assets.humanHair1, alt: 'Human Hair Wig 1' },
        { src: assets.humanHair2, alt: 'Human Hair Wig 2' },
        { src: assets.humanHair3, alt: 'Human Hair Wig 3' },
        { src: assets.humanHair4, alt: 'Human Hair Wig 4' },
        { src: assets.humanHair5, alt: 'Human Hair Wig 5' },
        { src: assets.humanHair6, alt: 'Human Hair Wig 6' },
        { src: assets.humanHair7, alt: 'Human Hair Wig 7' },
        { src: assets.humanHair8, alt: 'Human Hair Wig 8' },
      ]
    },
    'lace-front-wigs': {
      title: 'Lace Front Wigs',
      images: [
        { src: assets.laceFront1, alt: 'Lace Front Wig 1' },
        { src: assets.laceFront2, alt: 'Lace Front Wig 2' },
        { src: assets.laceFront3, alt: 'Lace Front Wig 3' },
        { src: assets.laceFront4, alt: 'Lace Front Wig 4' },
        { src: assets.laceFront5, alt: 'Lace Front Wig 5' },
        { src: assets.laceFront6, alt: 'Lace Front Wig 6' },
        { src: assets.laceFront7, alt: 'Lace Front Wig 7' },
        { src: assets.laceFront8, alt: 'Lace Front Wig 8' },
      ]
    },
    'full-lace-wigs': {
      title: 'Full Lace Wigs',
      images: [
        { src: assets.fullLace2, alt: 'Full Lace Wig 2' },
        { src: assets.fullLace3, alt: 'Full Lace Wig 3' },
        { src: assets.fullLace4, alt: 'Full Lace Wig 4' },
        { src: assets.fullLace5, alt: 'Full Lace Wig 5' },
        { src: assets.fullLace6, alt: 'Full Lace Wig 6' },
        { src: assets.fullLace7, alt: 'Full Lace Wig 7' },
        { src: assets.fullLace8, alt: 'Full Lace Wig 8' },
        { src: assets.fullLace9, alt: 'Full Lace Wig 9' },
      ]
    },
  };

  const collection = wigCollections[wigName];

  if (!collection) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Wig collection not found.</h2>
        <button 
          onClick={() => navigate('/wigtypes')}
          className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-500 transition duration-300"
        >
          Back to Wig Types
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">{collection.title}</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {collection.images.map((wig, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="relative pb-[100%]">
                <img
                  src={wig.src}
                  alt={wig.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{collection.title} Style {index + 1}</h3>
                <button className="mt-2 w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-500 transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WigDetail;
