import React from 'react';
import { useParams } from "react-router-dom";
import useRes from '../utils/useRes';

const Resdetails = () => {
  const { id } = useParams();   
  const info = useRes(id);     

  if (!info) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-xl font-semibold text-gray-600 animate-pulse">
          Loading product details...
        </h2>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-md w-full text-center">
        <img 
          src={info.image} 
          alt={info.title} 
          className="w-40 h-40 object-contain mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{info.title}</h1>
        <p className="text-gray-600 mb-4">{info.description}</p>
        <p className="text-xl font-semibold text-green-600 mb-4">💲{info.price}</p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Resdetails;
