import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../../data/cars';

const Topbar: React.FC = () => (
  <header className="topbar">
    <div>{/* left spacer */}</div>

    <nav className="pill-surface flex gap-1 p-1">
      {NAV_ITEMS.map(({ label, path }) => (
        <NavLink
          key={path}
          to={path}
          end={path === '/'}
          className={({ isActive }) =>
            `nav-pill-item${isActive ? ' active' : ''}`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>

    <div className="pill-surface flex gap-1 px-2">
      {/* Mail */}
      <button className="icon-btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      </button>
      {/* Bell */}
      <button className="icon-btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
      </button>
      {/* User */}
      <button className="icon-btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      </button>
    </div>
  </header>
);

export default Topbar;
