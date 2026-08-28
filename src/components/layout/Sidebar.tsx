import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '../../lib/utils';

const Sidebar: React.FC = () => (
  <aside className="bg-card rounded-full shadow-[0_4px_20px_0_rgba(0,0,0,0.05)] flex-1 flex flex-col py-5 items-center gap-5">
    {/* Overview */}
    <NavLink to="/" end className={({ isActive }) => cn(
      "w-10 h-10 flex items-center justify-center rounded-full text-muted-foreground transition-all duration-200 hover:text-foreground",
      isActive && "bg-primary text-primary-foreground hover:text-primary-foreground"
    )}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
    </NavLink>
    {/* Buy */}
    <NavLink to="/buy" className={({ isActive }) => cn(
      "w-10 h-10 flex items-center justify-center rounded-full text-muted-foreground transition-all duration-200 hover:text-foreground",
      isActive && "bg-primary text-primary-foreground hover:text-primary-foreground"
    )}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    </NavLink>
    {/* Sell */}
    <NavLink to="/sell" className={({ isActive }) => cn(
      "w-10 h-10 flex items-center justify-center rounded-full text-muted-foreground transition-all duration-200 hover:text-foreground",
      isActive && "bg-primary text-primary-foreground hover:text-primary-foreground"
    )}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
    </NavLink>
    {/* Rent */}
    <NavLink to="/rent" className={({ isActive }) => cn(
      "w-10 h-10 flex items-center justify-center rounded-full text-muted-foreground transition-all duration-200 hover:text-foreground",
      isActive && "bg-primary text-primary-foreground hover:text-primary-foreground"
    )}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="12" rx="2"/><path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/></svg>
    </NavLink>
    {/* Settings (bottom) */}
    <div className="w-10 h-10 flex items-center justify-center rounded-full text-muted-foreground transition-all duration-200 hover:text-foreground cursor-pointer mt-auto">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
    </div>
  </aside>
);

export default Sidebar;
