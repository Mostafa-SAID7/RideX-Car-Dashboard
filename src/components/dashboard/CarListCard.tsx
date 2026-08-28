import React from 'react';
import { Car } from '../../types';

interface CarListCardProps extends Pick<Car, 'name' | 'price' | 'priceDecimal' | 'rating' | 'imageUrl'> {}

const CarListCard: React.FC<CarListCardProps> = ({ name, price, priceDecimal, rating, imageUrl }) => (
  <div className="bg-card rounded-3xl shadow-[0_2px_10px_0_rgba(0,0,0,0.04)] p-5 flex flex-col gap-3 mb-3 relative overflow-hidden">
    <div className="flex justify-between items-start">
      <div className="flex flex-col gap-1">
        <span className="font-semibold text-lg">{name}</span>
        <div className="flex items-baseline gap-0.5">
          <span className="font-bold text-[1.375rem]">{price}</span>
          <span className="text-[0.8125rem] text-muted-foreground">{priceDecimal}</span>
        </div>
        <div className="flex items-center gap-1">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="var(--color-chart-1)" stroke="var(--color-chart-1)" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <span className="font-medium text-sm">{rating}</span>
        </div>
      </div>
      <button className="w-[38px] h-[38px] rounded-full border border-border bg-card flex items-center justify-center cursor-pointer shadow-sm hover:bg-black/5 transition-colors">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
      </button>
    </div>
    <div className="flex justify-end">
      <img src={imageUrl} alt={name} className="h-20 w-44 object-cover rounded-xl" />
    </div>
  </div>
);

export default CarListCard;
