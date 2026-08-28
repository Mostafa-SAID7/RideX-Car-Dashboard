import React from 'react';

interface CarListCardProps {
  name: string;
  price: string;
  rating: number;
  imageUrl: string;
}

const CarListCard: React.FC<CarListCardProps> = ({ name, price, rating, imageUrl }) => {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', padding: '1.25rem', marginBottom: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '4px' }}>{name}</h3>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '8px' }}>
             <span style={{ fontSize: '1.25rem', fontWeight: '700' }}>{price.split(',')[0]}</span>
             <span className="text-muted" style={{ fontSize: '0.875rem' }}>,{price.split(',')[1]}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>{rating}</span>
          </div>
        </div>
        <button className="icon-btn" style={{ width: '32px', height: '32px' }}>
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </button>
      </div>
      <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
         <img src={imageUrl} alt={name} style={{ height: '100px', objectFit: 'contain', width: 'auto', alignSelf: 'flex-end' }} />
      </div>
    </div>
  );
};

export default CarListCard;
