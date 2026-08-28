import React from 'react';

const FeaturedCarCard: React.FC = () => {
  return (
    <div className="card" style={{ position: 'relative', overflow: 'hidden', padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h2 className="h2" style={{ margin: 0 }}>Tesla Model Y</h2>
          <p className="text-muted">Fully electric Crossover</p>
        </div>
        <button className="icon-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
        </button>
      </div>

      <div style={{ position: 'relative', margin: '2rem 0', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Placeholder for car image */}
        <div style={{ width: '100%', height: '100%', backgroundColor: '#f5f6f8', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           <img src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800" alt="Tesla Model Y" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }} />
        </div>
        
        {/* Hotspots */}
        <div style={{ position: 'absolute', top: '40%', right: '20%', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.8)', border: '4px solid #333', boxShadow: '0 0 0 4px rgba(255,255,255,0.5)' }}></div>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '4px 12px', borderRadius: '9999px', fontSize: '12px', fontWeight: '500', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>Carbon</div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer' }}>
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a3e635" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
          </button>
          <button style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#fff', border: '1px solid #e4e4e7', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path></svg>
          </button>
        </div>

        <div style={{ display: 'flex', gap: '2rem' }}>
           <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
              <span className="text-muted" style={{ fontSize: '0.875rem' }}>Deals</span>
              <span style={{ fontSize: '1.25rem', fontWeight: '600' }}>71</span>
           </div>
           <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
              <span className="text-muted" style={{ fontSize: '0.875rem' }}>Rate</span>
              <span style={{ fontSize: '1.25rem', fontWeight: '600' }}>4.9</span>
           </div>
           <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
              <span className="text-muted" style={{ fontSize: '0.875rem' }}>Seats</span>
              <span style={{ fontSize: '1.25rem', fontWeight: '600' }}>6</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCarCard;
