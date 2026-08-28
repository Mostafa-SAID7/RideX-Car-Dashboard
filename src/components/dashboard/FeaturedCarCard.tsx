import React from 'react';
import { FEATURED_CAR } from '../../data/cars';

const FeaturedCarCard: React.FC = () => {
  const car = FEATURED_CAR;

  return (
    <div className="bg-card rounded-[1.5rem] shadow-[0_2px_10px_0_rgba(0,0,0,0.04)] p-6 relative overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className="font-semibold text-lg">{car.name}</p>
          <p className="text-[0.8125rem] text-muted-foreground">{car.subtitle}</p>
        </div>
        <button className="w-[38px] h-[38px] rounded-full bg-transparent text-muted-foreground hover:bg-black/5 flex items-center justify-center cursor-pointer transition-colors text-lg tracking-widest">···</button>
      </div>

      {/* Car Image */}
      <div className="relative rounded-2xl overflow-hidden mb-4 bg-[#f8f8f8] h-[220px]">
        <img src={car.imageUrl} alt={car.name} className="w-full h-full object-cover" />

        {/* Carbon hotspot — top right */}
        <div className="absolute flex items-center gap-1.5 top-[42%] right-[16%]">
          <div className="w-3 h-3 rounded-full bg-white border-[3px] border-[#444] shadow-[0_0_0_3px_rgba(255,255,255,0.5)]"></div>
          <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold shadow-md">Carbon</span>
        </div>

        {/* Vibranium hotspot — bottom left */}
        <div className="absolute flex items-center gap-1.5 bottom-[16%] left-[5%]">
          <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold shadow-md">Vibranium</span>
          <div className="w-3 h-3 rounded-full bg-white border-[3px] border-[#444] shadow-[0_0_0_3px_rgba(255,255,255,0.5)]"></div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <button className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center cursor-pointer border-none">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-chart-1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
          </button>
          <button className="w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center cursor-pointer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-muted-foreground)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"/></svg>
          </button>
        </div>

        <div className="flex gap-6">
          {[
            { label: 'Deals', value: car.deals },
            { label: 'Rate', value: car.rating },
            { label: 'Seats', value: car.seats },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-baseline gap-1">
              <span className="text-[0.8125rem] text-muted-foreground">{label}</span>
              <span className="font-semibold text-lg">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCarCard;
