import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../../data/cars';
import { cn } from '../../lib/utils';

const Topbar: React.FC = () => {
  const location = useLocation();

  return (
    <header className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
      {/* Logo Pill */}
      <div className="bg-card rounded-[24px] shadow-sm flex items-center gap-3 px-5 py-2.5 shrink-0">
        <div className="text-foreground">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
        </div>
        <span className="font-bold text-xl tracking-tight">RideX</span>
      </div>

      {/* Nav Pill Container */}
      <nav className="bg-card rounded-[32px] shadow-sm flex items-center p-1.5 gap-1 overflow-x-auto max-w-full relative shrink-0">
        {NAV_ITEMS.map(({ label, path }) => {
          const isActive = location.pathname === path || (path === '/' && location.pathname === '/');
          
          return (
            <NavLink
              key={path}
              to={path}
              className={cn(
                "relative px-6 py-2.5 rounded-[24px] text-sm font-semibold transition-all duration-300 whitespace-nowrap z-10",
                isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {label}
              {/* CSS Background that animates slightly on mount/active */}
              {isActive && (
                <div 
                  className="absolute inset-0 bg-foreground rounded-[24px] -z-10 shadow-md animate-in fade-in zoom-in-95 duration-200" 
                />
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Right Icons Container */}
      <div className="flex items-center gap-2 shrink-0">
        <button className="w-12 h-12 bg-card shadow-sm flex items-center justify-center rounded-2xl text-muted-foreground hover:text-foreground hover:-translate-y-0.5 transition-all duration-200 border border-border/30">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        </button>
        <button className="w-12 h-12 bg-card shadow-sm flex items-center justify-center rounded-2xl text-muted-foreground hover:text-foreground hover:-translate-y-0.5 transition-all duration-200 border border-border/30">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
        </button>
        <button className="w-12 h-12 bg-card shadow-sm flex items-center justify-center rounded-2xl text-muted-foreground hover:text-foreground hover:-translate-y-0.5 transition-all duration-200 border border-border/30">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </button>
      </div>
    </header>
  );
};

export default Topbar;
