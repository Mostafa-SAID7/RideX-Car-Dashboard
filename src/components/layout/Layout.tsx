import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Layout: React.FC = () => (
  <div className="flex min-h-screen p-6 gap-6 max-w-[1600px] mx-auto">
    {/* Left Rail: Logo + Sidebar Icons */}
    <div className="flex flex-col gap-4 w-[72px] shrink-0">
      <div className="bg-card rounded-full shadow-[0_4px_20px_0_rgba(0,0,0,0.05)] h-14 flex items-center justify-center gap-2 font-bold text-lg tracking-tight">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
        <span>RideX</span>
      </div>
      <Sidebar />
    </div>

    {/* Main Content */}
    <main className="flex-1 flex flex-col gap-6 min-w-0">
      <Topbar />
      <Outlet />
    </main>
  </div>
);

export default Layout;
