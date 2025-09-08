import React from 'react'
import { ShoppingCart, Star, Heart } from 'lucide-react';

const Card = ({ resdata }) => {
  const { image, title, category, price } = resdata;

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition">
      <div className="h-48 flex items-center justify-center">
        <img 
          src={image} 
          alt={title} 
          loading="lazy" 
          className="h-full object-contain" 
        />
      </div>
      <div className="mt-4">
        <h2 className="text-sm font-semibold line-clamp-2">{title}</h2>
        <p className="text-gray-500 text-xs mt-1">{category}</p>

        <div className="flex items-center justify-between mt-3">
          <p className="text-lg font-bold text-green-600">${price}</p>
          <div className="flex gap-2">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-red-100">
              <Heart size={18} className="text-red-500" />
            </button>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-yellow-100">
              <ShoppingCart size={18} className="text-yellow-600" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-1 mt-2 text-yellow-500">
          <Star size={16} />
          <Star size={16} />
          <Star size={16} />
          <Star size={16} />
          <Star size={16} className="text-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default Card;
