import React from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

const Layout: React.FC = () => (
  <div className="min-h-screen flex max-w-[1600px] mx-auto bg-background/50 text-foreground p-4 sm:p-6 gap-6">
    {/* Left Sidebar - Hidden on small screens */}
    <div className="hidden lg:flex shrink-0">
      <Sidebar />
    </div>

    {/* Main Content Stack */}
    <div className="flex-1 flex flex-col min-w-0 gap-6">
      <Topbar />
      
      <main className="flex-1 min-w-0 bg-card rounded-[32px] shadow-sm border border-border/40 p-6">
        <Outlet />
      </main>
    </div>
  </div>
);

export default Layout;

