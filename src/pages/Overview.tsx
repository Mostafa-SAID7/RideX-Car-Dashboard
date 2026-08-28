import React, { useState } from 'react';
import FeaturedCarCard from '../components/dashboard/FeaturedCarCard';
import CarListCard from '../components/dashboard/CarListCard';
import { TOP_SELLING_CARS, CAR_CATEGORIES, ANALYTICS_CARDS, COMPLETED_PAYMENT } from '../data/cars';

const ArrowUpRight = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

const FilterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="11" y1="18" x2="13" y2="18"/>
  </svg>
);

const AnalyticsIcon = ({ id }: { id: string }) => {
  if (id === 'revenue-insights')
    return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>;
};

const Overview: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Crossover');

  return (
    <div className="dashboard-grid">

      {/* ── LEFT COLUMN ── */}
      <div className="flex flex-col gap-5">

        {/* Hero Header */}
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <button className="icon-btn-circle flex-shrink-0 mt-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <h1 className="text-hero">
              Explore Cars That Match{' '}
              <em style={{ fontStyle: 'italic' }}>Your Lifestyle</em>
            </h1>
          </div>

          {/* Search Row */}
          <div className="flex gap-3 items-center">
            <div className="search-bar">
              <SearchIcon />
              <input type="text" placeholder="Tesla model y" className="search-input" />
            </div>
            <button className="icon-btn-circle">
              <FilterIcon />
            </button>
          </div>

          {/* Category Pills */}
          <div className="flex gap-2 flex-wrap">
            {CAR_CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`filter-pill${activeCategory === cat ? ' active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Car */}
        <FeaturedCarCard />

        {/* Analytics Cards Row */}
        <div className="flex gap-4">
          {ANALYTICS_CARDS.map(card => (
            <div key={card.id} className="card card-padded-sm flex-1" style={{ paddingBottom: '2rem' }}>
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center rounded-lg bg-gray-50 p-2">
                    <AnalyticsIcon id={card.id} />
                  </div>
                  <div>
                    <p className="text-label">{card.title}</p>
                    <p className="text-meta text-muted">{card.subtitle}</p>
                  </div>
                </div>
                <button className="icon-btn"><ArrowUpRight /></button>
              </div>

              {card.chartData ? (
                <>
                  <p className="text-green mb-2">{card.value} <span className="text-meta text-muted font-normal">{card.trendLabel}</span></p>
                  <div className="flex items-end gap-0.5" style={{ height: '32px' }}>
                    {card.chartData.map((h, i) => (
                      <div key={i} className="chart-bar" style={{ height: `${h}%`, opacity: i === 7 ? 1 : 0.5 }} />
                    ))}
                  </div>
                </>
              ) : (
                <p className="text-value">{card.value}</p>
              )}

              <div className="yellow-bar" style={{ width: card.accentWidth }} />
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT COLUMN ── */}
      <div className="flex flex-col gap-4">

        {/* Top Selling Header */}
        <div className="card card-padded-sm">
          <div className="flex justify-between items-start mb-1">
            <h2 className="text-title">Top Selling Car</h2>
            <button className="icon-btn text-muted text-lg tracking-widest">···</button>
          </div>
          <p className="text-meta text-muted">Discover the most popular choice.</p>
        </div>

        {/* Car List */}
        {TOP_SELLING_CARS.map(car => (
          <CarListCard key={car.id} {...car} />
        ))}

        {/* Completed Payment */}
        <div className="card card-padded-sm" style={{ paddingBottom: '2rem' }}>
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-lg bg-gray-50 p-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
              </div>
              <div>
                <p className="text-label">Completed Payment</p>
                <p className="text-meta text-muted">{COMPLETED_PAYMENT.id}</p>
              </div>
            </div>
            <button className="icon-btn"><ArrowUpRight /></button>
          </div>
          <p className="text-value">{COMPLETED_PAYMENT.value}</p>
          <div className="yellow-bar" style={{ width: COMPLETED_PAYMENT.accentWidth }} />
        </div>
      </div>

    </div>
  );
};

export default Overview;
