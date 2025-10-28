
import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { CarIcon } from '../constants';
import ChatBot from './ChatBot';
import ScrollToTop from './ScrollToTop';

const Layout: React.FC = () => {
    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'bg-accent-red text-white' : 'text-gray-300 hover:bg-metallic-gray-light hover:text-white'
    }`;

  return (
    <div className="bg-jet-black min-h-screen text-gray-200 font-sans">
      <header className="bg-metallic-gray/80 backdrop-blur-sm sticky top-0 z-40 border-b border-gray-700">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                 <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl">
                    <CarIcon className="w-8 h-8 text-accent-red" />
                    <span>AutoHub</span>
                </Link>
                <div className="hidden md:flex items-center space-x-4">
                    <NavLink to="/" className={navLinkClass} end>Home</NavLink>
                    <NavLink to="/forum" className={navLinkClass}>Forum</NavLink>
                    <NavLink to="/guides" className={navLinkClass}>Guides</NavLink>
                    <NavLink to="/events" className={navLinkClass}>Events</NavLink>
                    <NavLink to="/marketplace" className={navLinkClass}>Marketplace</NavLink>
                </div>
            </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      <footer className="bg-metallic-gray border-t border-gray-700 mt-12">
        <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} AutoHub Community. All rights reserved.</p>
        </div>
      </footer>
      <ChatBot />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
