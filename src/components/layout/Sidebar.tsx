import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <aside className="w-[72px] flex flex-col items-center gap-6 py-2 shrink-0 h-full">
      
      {/* Top Back Button */}
      <button 
        onClick={() => navigate(-1)}
        className="w-[56px] h-[56px] flex items-center justify-center rounded-[20px] border border-border/40 bg-card shadow-sm hover:text-foreground text-muted-foreground transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group"
      >
        <svg className="group-hover:-translate-x-0.5 transition-transform duration-200" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
      </button>

      {/* Main Nav Pill Container */}
      <nav className="w-[56px] bg-card rounded-[32px] shadow-sm border border-border/30 flex flex-col items-center py-2.5 gap-2.5 relative">
        {/* Dashboard Grid (Overview) */}
        <NavLink 
          to="/" 
          end 
          className={({ isActive }) => cn(
            "relative w-[44px] h-[44px] flex items-center justify-center rounded-[20px] transition-all duration-300 z-10 group",
            isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
          )}
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <div className="absolute inset-0 bg-foreground rounded-[16px] -z-10 animate-in zoom-in-95 duration-200 shadow-md" />
              )}
              <svg className={cn("transition-transform duration-200", isActive ? "" : "group-hover:scale-110")} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/></svg>
            </>
          )}
        </NavLink>

        {/* Speedometer (Buy/Rent) */}
        <NavLink 
          to="/buy" 
          className={({ isActive }) => cn(
            "relative w-[44px] h-[44px] flex items-center justify-center rounded-[20px] transition-all duration-300 z-10 group",
            isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
          )}
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <div className="absolute inset-0 bg-foreground rounded-[16px] -z-10 animate-in zoom-in-95 duration-200 shadow-md" />
              )}
              <svg className={cn("transition-transform duration-200", isActive ? "" : "group-hover:scale-110")} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20V14"/><path d="M8 2h8"/><path d="M12 14A8 8 0 1 0 4 14"/><path d="m16 8-4 4"/>
              </svg>
            </>
          )}
        </NavLink>

        {/* Wallet (Sell) */}
        <NavLink 
          to="/sell" 
          className={({ isActive }) => cn(
            "relative w-[44px] h-[44px] flex items-center justify-center rounded-[20px] transition-all duration-300 z-10 group",
            isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
          )}
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <div className="absolute inset-0 bg-foreground rounded-[16px] -z-10 animate-in zoom-in-95 duration-200 shadow-md" />
              )}
              <svg className={cn("transition-transform duration-200", isActive ? "" : "group-hover:scale-110")} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/>
              </svg>
            </>
          )}
        </NavLink>

        {/* Bag (Rent) */}
        <NavLink 
          to="/rent" 
          className={({ isActive }) => cn(
            "relative w-[44px] h-[44px] flex items-center justify-center rounded-[20px] transition-all duration-300 z-10 group",
            isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
          )}
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <div className="absolute inset-0 bg-foreground rounded-[16px] -z-10 animate-in zoom-in-95 duration-200 shadow-md" />
              )}
              <svg className={cn("transition-transform duration-200", isActive ? "" : "group-hover:scale-110")} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
            </>
          )}
        </NavLink>
      </nav>

      {/* Bottom Icons (Settings & Sign Out) */}
      <div className="mt-auto flex flex-col gap-4 pb-2">
        <button className="w-[56px] h-[56px] flex items-center justify-center rounded-[20px] border border-border/40 bg-card shadow-sm hover:text-foreground text-muted-foreground transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group">
          <svg className="group-hover:rotate-45 transition-transform duration-300" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
        </button>
        <button className="w-[56px] h-[56px] flex items-center justify-center rounded-[20px] border border-border/40 bg-card shadow-sm hover:text-foreground text-muted-foreground transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group">
          <svg className="group-hover:translate-x-0.5 transition-transform duration-200" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
