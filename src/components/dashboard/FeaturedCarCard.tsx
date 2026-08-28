import React from 'react';
import { FEATURED_CAR } from '../../data/cars';

const FeaturedCarCard: React.FC = () => {
  const car = FEATURED_CAR;

  return (
    <div className="card card-padded">
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className="text-title">{car.name}</p>
          <p className="text-meta text-muted">{car.subtitle}</p>
        </div>
        <button className="icon-btn text-muted text-lg tracking-widest">···</button>
      </div>

      {/* Car Image */}
      <div className="relative rounded-2xl overflow-hidden mb-4" style={{ height: '220px', background: '#f8f8f8' }}>
        <img src={car.imageUrl} alt={car.name} className="w-full h-full object-cover" />

        {/* Carbon hotspot — top right */}
        <div className="absolute flex items-center gap-1.5" style={{ top: '42%', right: '16%' }}>
          <div className="hotspot-dot"></div>
          <span className="hotspot-label">Carbon</span>
        </div>

        {/* Vibranium hotspot — bottom left */}
        <div className="absolute flex items-center gap-1.5" style={{ bottom: '16%', left: '5%' }}>
          <span className="hotspot-label">Vibranium</span>
          <div className="hotspot-dot"></div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <button className="action-btn-like">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FEBE00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
          </button>
          <button className="action-btn-dislike">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C4C3C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"/></svg>
          </button>
        </div>

        <div className="flex gap-6">
          {[
            { label: 'Deals', value: car.deals },
            { label: 'Rate', value: car.rating },
            { label: 'Seats', value: car.seats },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-baseline gap-1">
              <span className="text-meta text-muted">{label}</span>
              <span className="text-title">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCarCard;
