import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../../data/cars';
import { cn } from '../../lib/utils';

const Topbar: React.FC = () => (
  <header className="flex items-center justify-between h-14">
    <div>{/* left spacer */}</div>

    <nav className="bg-card rounded-full shadow-[0_4px_20px_0_rgba(0,0,0,0.05)] flex gap-1 p-1">
      {NAV_ITEMS.map(({ label, path }) => (
        <NavLink
          key={path}
          to={path}
          end={path === '/'}
          className={({ isActive }) => cn(
            "px-5 py-2 rounded-full text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-foreground whitespace-nowrap",
            isActive && "bg-primary text-primary-foreground hover:text-primary-foreground"
          )}
        >
          {label}
        </NavLink>
      ))}
    </nav>

    <div className="bg-card rounded-full shadow-[0_4px_20px_0_rgba(0,0,0,0.05)] flex gap-1 px-2 py-1 items-center">
      {/* Mail */}
      <button className="w-10 h-10 flex items-center justify-center rounded-full text-foreground hover:bg-black/5 transition-colors">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      </button>
      {/* Bell */}
      <button className="w-10 h-10 flex items-center justify-center rounded-full text-foreground hover:bg-black/5 transition-colors">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
      </button>
      {/* User */}
      <button className="w-10 h-10 flex items-center justify-center rounded-full text-foreground hover:bg-black/5 transition-colors">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      </button>
    </div>
  </header>
);

export default Topbar;
