import React from 'react';

const Rent: React.FC = () => {
  return (
    <div style={{ padding: '2rem 0' }}>
      <h1 className="h1">Rentals</h1>
      <p className="text-muted">Flexible rental options for any lifestyle.</p>
      <div className="card" style={{ marginTop: '2rem', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span className="text-muted">Rental fleet coming soon...</span>
      </div>
    </div>
  );
};

export default Rent;
