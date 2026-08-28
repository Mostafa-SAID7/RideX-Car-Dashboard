import React from 'react';

const Buy: React.FC = () => {
  return (
    <div style={{ padding: '2rem 0' }}>
      <h1 className="h1">Buy Cars</h1>
      <p className="text-muted">Browse our extensive inventory of premium vehicles.</p>
      <div className="card" style={{ marginTop: '2rem', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span className="text-muted">Buy inventory coming soon...</span>
      </div>
    </div>
  );
};

export default Buy;
