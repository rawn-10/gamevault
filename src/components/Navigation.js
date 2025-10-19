import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = ({ showSearch = false, onSearchChange = null }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearchChange) {
      onSearchChange(value);
    }
  };

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const getNavLinkClass = (path) => {
    const baseClasses = "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200";
    return `${baseClasses} ${
      isActive(path)
        ? "bg-purple-700 text-white"
        : "text-gray-300 hover:text-white hover:bg-purple-800"
    }`;
  };

  const getMobileNavLinkClass = (path) => {
    const baseClasses = "block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200";
    return `${baseClasses} ${
      isActive(path)
        ? "bg-purple-700 text-white"
        : "text-gray-300 hover:text-white hover:bg-purple-800"
    }`;
  };

  return (
    <nav className="bg-purple-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="group flex items-center">
              <span className="text-2xl font-bold text-white">GameVault</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              <Link to="/" className={getNavLinkClass("/")}>
                Home
              </Link>
              <Link to="/products" className={getNavLinkClass("/products")}>
                Shop
              </Link>
              <Link to="/flash-sale" className={getNavLinkClass("/flash-sale")}>
                Flash Sale
                <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs px-1 py-0.5 rounded">Hot</span>
              </Link>
              <Link to="/about" className={getNavLinkClass("/about")}>
                About
              </Link>
              <Link to="/contact" className={getNavLinkClass("/contact")}>
                Contact
              </Link>
            </div>
          </div>

          {/* Search Bar */}
          {showSearch && (
            <div className="hidden md:block flex-1 max-w-md mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search games..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-64 px-4 py-1 text-sm text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="Toggle menu"
            >
              <svg className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-purple-900">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {showSearch && (
                <div className="px-2 mb-3">
                  <input
                    type="text"
                    placeholder="Search games..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full px-4 py-2 text-sm text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              )}
              <Link
                to="/"
                className={getMobileNavLinkClass("/")}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={getMobileNavLinkClass("/products")}
                onClick={() => setIsOpen(false)}
              >
                Shop
              </Link>
              <Link
                to="/flash-sale"
                className={getMobileNavLinkClass("/flash-sale")}
                onClick={() => setIsOpen(false)}
              >
                Flash Sale
                <span className="absolute right-2 top-2 bg-purple-500 text-white text-xs px-2 py-0.5 rounded">Hot</span>
              </Link>
              <Link
                to="/about"
                className={getMobileNavLinkClass("/about")}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={getMobileNavLinkClass("/contact")}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;