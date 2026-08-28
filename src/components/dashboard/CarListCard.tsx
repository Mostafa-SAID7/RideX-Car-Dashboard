import React from 'react';
import { Car } from '../../types';

interface CarListCardProps extends Pick<Car, 'name' | 'price' | 'priceDecimal' | 'rating' | 'imageUrl'> {}

const CarListCard: React.FC<CarListCardProps> = ({ name, price, priceDecimal, rating, imageUrl }) => (
  <div className="card card-padded-sm flex flex-col gap-3 mb-3">
    <div className="flex justify-between items-start">
      <div className="flex flex-col gap-1">
        <span className="text-title">{name}</span>
        <div className="flex items-baseline gap-0.5">
          <span className="text-value">{price}</span>
          <span className="text-meta text-muted">{priceDecimal}</span>
        </div>
        <div className="flex items-center gap-1">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="#FEBE00" stroke="#FEBE00" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <span className="text-label">{rating}</span>
        </div>
      </div>
      <button className="icon-btn-circle">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
      </button>
    </div>
    <div className="flex justify-end">
      <img src={imageUrl} alt={name} className="h-20 w-44 object-cover rounded-xl" />
    </div>
  </div>
);

export default CarListCard;
