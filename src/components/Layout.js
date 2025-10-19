import React from 'react';
import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="bg-gray-800 py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-purple-500">GameVault</h3>
              <p className="text-gray-400 mt-2">Your trusted source for game credits</p>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-gray-400">© 2024 GameVault. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="/about" className="text-gray-400 hover:text-purple-500 transition-colors">About</a>
                <a href="/contact" className="text-gray-400 hover:text-purple-500 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;