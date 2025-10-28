import React from 'react';
import { Product } from '../types';
import { StarIcon } from '../constants';

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-metallic-gray rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-accent-red/20 hover:-translate-y-1 transition-all duration-300 flex flex-col border-2 border-transparent hover:border-accent-red/50">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-bold font-heading text-white flex-grow">{product.name}</h3>
        <div className="mt-4 flex justify-between items-center">
          <p className="text-xl font-semibold text-accent-red">${product.price.toFixed(2)}</p>
          <div className="flex items-center gap-1 text-sm text-gray-400">
            <StarIcon className="w-4 h-4 text-yellow-400" />
            <span>{product.rating.toFixed(1)}</span>
            <span className="ml-1">({product.reviewCount})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
