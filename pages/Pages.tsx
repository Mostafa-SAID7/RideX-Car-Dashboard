import React from 'react';
import { useParams } from 'react-router-dom';
import FeaturedCarCard from '../components/FeaturedCarCard';
import CarListCard from '../components/CarListCard';

const TOP_CARS = [
  { id: '1', name: 'Ford B-Max', price: '$32,31.112', rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=400' },
  { id: '2', name: 'Volvo Ex30', price: '$43,71.223', rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1629897048514-3dd741484549?auto=format&fit=crop&q=80&w=400' }
];

export const HomePage: React.FC = () => (
  <div className="dashboard-grid">
    {/* Left Column */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* Hero Section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <h1 className="h1" style={{ maxWidth: '400px' }}>Explore Cars That Match Your Lifestyle</h1>
        
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div className="search-bar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#71717a' }}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input type="text" placeholder="Tesla model y" className="search-input" />
          </div>
          <button className="icon-btn">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
          </button>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn-outline active">Crossover</button>
          <button className="btn-outline">Sedan</button>
          <button className="btn-outline">Wagon</button>
        </div>
      </div>

      {/* Featured Car */}
      <FeaturedCarCard />
      
      {/* Bottom Insights */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        <div className="card" style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem' }}>
           <div style={{ padding: '10px', backgroundColor: '#f5f6f8', borderRadius: '12px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
           </div>
           <div>
             <h4 style={{ fontSize: '1rem', fontWeight: '500' }}>Revenue Insights</h4>
             <span className="text-muted" style={{ fontSize: '0.875rem' }}>17.09.25 - 21.09.25</span>
           </div>
        </div>
         <div className="card" style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem' }}>
           <div style={{ padding: '10px', backgroundColor: '#f5f6f8', borderRadius: '12px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
           </div>
           <div>
             <h4 style={{ fontSize: '1rem', fontWeight: '500' }}>Sales Trends</h4>
             <span className="text-muted" style={{ fontSize: '0.875rem' }}>17.09.25 - 21.09.25</span>
           </div>
        </div>
      </div>

    </div>

    {/* Right Column */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
       <div>
         <h2 className="h2" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            Top Selling Car
            <button className="icon-btn" style={{ border: 'none', background: 'transparent' }}>...</button>
         </h2>
         <p className="text-muted">Discover the most popular choice.</p>
       </div>

       <div style={{ display: 'flex', flexDirection: 'column' }}>
          {TOP_CARS.map(car => (
            <CarListCard key={car.id} {...car} />
          ))}
       </div>

       <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ padding: '10px', backgroundColor: '#f5f6f8', borderRadius: '12px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: '600' }}>Completed Payment</h4>
                <span className="text-muted" style={{ fontSize: '0.875rem' }}>00412345</span>
              </div>
          </div>
          <button className="icon-btn" style={{ width: '32px', height: '32px' }}>
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </button>
       </div>
    </div>

  </div>
);

// Stubs for the rest of the app to prevent compilation errors
export const ForumPage: React.FC = () => <div><h1>Forum (Coming Soon)</h1></div>;
export const GuidesPage: React.FC = () => <div><h1>Guides (Coming Soon)</h1></div>;
export const EventsPage: React.FC = () => <div><h1>Events (Coming Soon)</h1></div>;
export const MarketplacePage: React.FC = () => <div><h1>Marketplace (Coming Soon)</h1></div>;
export const DetailPage: React.FC = () => {
    const { type, id } = useParams<{ type: string; id: string }>();
    return <div><h1>Detail: {type} {id}</h1></div>;
};
