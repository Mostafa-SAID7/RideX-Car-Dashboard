import React, { useState } from 'react';
import FeaturedCarCard from '../components/dashboard/FeaturedCarCard';
import CarListCard from '../components/dashboard/CarListCard';
import { TOP_SELLING_CARS, CAR_CATEGORIES, ANALYTICS_CARDS, COMPLETED_PAYMENT } from '../data/cars';
import { cn } from '../lib/utils';

const ArrowUpRight = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
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
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5">

      {/* ── LEFT COLUMN ── */}
      <div className="flex flex-col gap-5">

        {/* Hero Header */}
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <button className="w-[38px] h-[38px] rounded-full border border-border bg-card shadow-[0_2px_10px_0_rgba(0,0,0,0.04)] flex items-center justify-center shrink-0 mt-1 cursor-pointer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight">
              Explore Cars That Match{' '}
              <em className="italic font-serif">Your Lifestyle</em>
            </h1>
          </div>

          {/* Search Row */}
          <div className="flex gap-3 items-center">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-transparent flex-1 max-w-[300px]">
              <SearchIcon />
              <input type="text" placeholder="Tesla model y" className="border-none bg-transparent outline-none text-sm w-full text-foreground placeholder:text-muted-foreground" />
            </div>
            <button className="w-[38px] h-[38px] rounded-full border border-border bg-card shadow-[0_2px_10px_0_rgba(0,0,0,0.04)] flex items-center justify-center cursor-pointer">
              <FilterIcon />
            </button>
          </div>

          {/* Category Pills */}
          <div className="flex gap-2 flex-wrap">
            {CAR_CATEGORIES.map(cat => (
              <button
                key={cat}
                className={cn(
                  "px-5 py-2 rounded-full border border-border bg-transparent text-sm text-muted-foreground cursor-pointer transition-all hover:border-primary hover:text-primary",
                  activeCategory === cat && "border-primary text-primary font-semibold"
                )}
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
            <div key={card.id} className="bg-card rounded-[1.5rem] shadow-[0_2px_10px_0_rgba(0,0,0,0.04)] p-5 flex-1 relative overflow-hidden pb-8">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center rounded-lg bg-gray-50 p-2 text-foreground">
                    <AnalyticsIcon id={card.id} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{card.title}</p>
                    <p className="text-[0.8125rem] text-muted-foreground">{card.subtitle}</p>
                  </div>
                </div>
                <button className="w-10 h-10 rounded-full bg-transparent hover:bg-black/5 flex items-center justify-center cursor-pointer transition-colors border-none"><ArrowUpRight /></button>
              </div>

              {card.chartData ? (
                <>
                  <p className="text-[#22c55e] font-bold mb-2">{card.value} <span className="text-[0.8125rem] text-muted-foreground font-normal">{card.trendLabel}</span></p>
                  <div className="flex items-end gap-0.5 h-8">
                    {card.chartData.map((h, i) => (
                      <div key={i} className="flex-1 bg-[var(--color-chart-1)] rounded-t-sm" style={{ height: `${h}%`, opacity: i === 7 ? 1 : 0.5 }} />
                    ))}
                  </div>
                </>
              ) : (
                <p className="text-[1.375rem] font-bold">{card.value}</p>
              )}

              <div className="h-2 bg-[var(--color-chart-1)] rounded-t-md absolute bottom-0 left-0" style={{ width: card.accentWidth }} />
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT COLUMN ── */}
      <div className="flex flex-col gap-4">

        {/* Top Selling Header */}
        <div className="bg-card rounded-[1.5rem] shadow-[0_2px_10px_0_rgba(0,0,0,0.04)] p-5">
          <div className="flex justify-between items-start mb-1">
            <h2 className="text-lg font-semibold">Top Selling Car</h2>
            <button className="w-10 h-10 rounded-full bg-transparent text-muted-foreground hover:bg-black/5 flex items-center justify-center cursor-pointer transition-colors border-none text-lg tracking-widest">···</button>
          </div>
          <p className="text-[0.8125rem] text-muted-foreground">Discover the most popular choice.</p>
        </div>

        {/* Car List */}
        {TOP_SELLING_CARS.map(car => (
          <CarListCard key={car.id} {...car} />
        ))}

        {/* Completed Payment */}
        <div className="bg-card rounded-[1.5rem] shadow-[0_2px_10px_0_rgba(0,0,0,0.04)] p-5 pb-8 relative overflow-hidden">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-lg bg-gray-50 p-2 text-foreground">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
              </div>
              <div>
                <p className="text-sm font-medium">Completed Payment</p>
                <p className="text-[0.8125rem] text-muted-foreground">{COMPLETED_PAYMENT.id}</p>
              </div>
            </div>
            <button className="w-10 h-10 rounded-full bg-transparent hover:bg-black/5 flex items-center justify-center cursor-pointer transition-colors border-none"><ArrowUpRight /></button>
          </div>
          <p className="text-[1.375rem] font-bold">{COMPLETED_PAYMENT.value}</p>
          <div className="h-2 bg-[var(--color-chart-1)] rounded-t-md absolute bottom-0 left-0" style={{ width: COMPLETED_PAYMENT.accentWidth }} />
        </div>
      </div>

    </div>
  );
};

export default Overview;
