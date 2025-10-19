import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { getStaticProducts } from '../data/products';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('brands'); // 'brands' (games) or 'categories' (credit types)

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      // For now, always use static data with our real product images
      console.log('Loading static products data...');
      setProducts(getProductsData());
    } catch (error) {
      console.error('Error loading products:', error);
      setProducts(getProductsData());
    } finally {
      setLoading(false);
    }
  }, []);

  const filterProducts = useCallback(() => {
    console.log('=== FILTERING DEBUG ===');
    console.log('Filter Type:', filterType);
    console.log('Selected Category:', selectedCategory);
    console.log('Total products:', products.length);
    console.log('Search Term:', searchTerm);
    
    let filtered = products;

    // Filter by brand or category based on filterType
    if (selectedCategory !== 'all') {
      console.log('Applying filter for:', selectedCategory);
      if (filterType === 'brands') {
        console.log('Filtering by brand...');
        filtered = filtered.filter(product => {
          const matches = product.brand && product.brand.toLowerCase() === selectedCategory.toLowerCase();
          if (matches) {
            console.log('✓ Product matches:', product.name, 'Brand:', product.brand);
          }
          return matches;
        });
      } else {
        console.log('Filtering by category...');
        filtered = filtered.filter(product => 
          product.category && product.category.toLowerCase() === selectedCategory.toLowerCase()
        );
      }
      console.log(`After ${filterType} filtering:`, filtered.length, 'products for:', selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        (product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (product.brand && product.brand.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      console.log('After search filtering:', filtered.length, 'products for term:', searchTerm);
    }

    console.log('Final filtered products:', filtered.length);
    console.log('Filtered product names:', filtered.map(p => p.name));
    console.log('===================');
    setFilteredProducts(filtered);
  }, [products, selectedCategory, searchTerm, filterType]);

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    // Always apply filtering (including search) regardless of selected brand
    filterProducts();
  }, [filterProducts]);

  // Use shared product data
  const getProductsData = () => {
    return getStaticProducts();
  };

  const handlePurchase = (product) => {
    // Here you would integrate with your payment processing system
    console.log(`Proceeding to purchase ${product.name}`);
  };

  // Reset to 'all' when switching filter types
  const handleFilterTypeChange = (newFilterType) => {
    setFilterType(newFilterType);
    setSelectedCategory('all');
  };

  // Get unique brands from products
  const getBrandFilters = () => {
    const uniqueBrands = [...new Set(products.map(product => product.brand).filter(Boolean))];
    return [
      { id: 'all', name: 'All Games' },
      ...uniqueBrands.sort().map(brand => ({ id: brand, name: brand }))
    ];
  };

  // Get unique categories from products
  const getCategoryFilters = () => {
    const uniqueCategories = [...new Set(products.map(product => product.category).filter(Boolean))];
    return [
      { id: 'all', name: 'All Credit Types' },
      ...uniqueCategories.sort().map(category => ({ id: category, name: category }))
    ];
  };

  // Get current filter options based on filterType
  const getCurrentFilters = () => {
    return filterType === 'brands' ? getBrandFilters() : getCategoryFilters();
  };

  const formatPrice = (price) => {
    if (typeof price === 'number') {
      return `₱${price.toLocaleString()}`;
    }
    return price;
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <Navigation showSearch={true} onSearchChange={handleSearchChange} />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0 animate-glitch-1 bg-purple-500/20"></div>
          <div className="absolute inset-0 animate-glitch-2 bg-purple-700/20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 animate-glitch-text relative inline-block">
              <span className="absolute inset-0 text-purple-300 animate-glitch-1">Game Credits</span>
              <span className="absolute inset-0 text-purple-500 animate-glitch-2">Game Credits</span>
              <span className="relative">Game Credits</span>
            </h2>
            <p className="text-xl text-purple-100">Browse our selection of digital gaming currency</p>
          </div>
        </div>
      </section>

      {/* Filter Toggle & Filters */}
      <section className="py-12 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 border-b border-white/10 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-purple-600/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Type Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-2 flex shadow-2xl shadow-purple-500/10">
              <button
                onClick={() => handleFilterTypeChange('brands')}
                className={`relative px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  filterType === 'brands'
                    ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/25 scale-105'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
                Filter by Games
              </button>
              <button
                onClick={() => handleFilterTypeChange('categories')}
                className={`relative px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  filterType === 'categories'
                    ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/25 scale-105'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Filter by Type
              </button>
            </div>
          </div>

          {/* Dynamic Filter Buttons */}
          <div className="flex flex-wrap gap-4 justify-center max-w-5xl mx-auto">
            {getCurrentFilters().map((filter, index) => (
              <button
                key={filter.id}
                onClick={() => {
                  console.log(`${filterType} button clicked:`, filter.id, filter.name);
                  setSelectedCategory(filter.id);
                }}
                className={`group relative px-6 py-3 rounded-2xl font-semibold transition-all duration-500 transform
                          hover:scale-105 hover:shadow-lg animate-glitch-hover ${
                  selectedCategory === filter.id
                    ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-xl shadow-purple-500/30 scale-105'
                    : 'bg-white/5 backdrop-blur-sm text-gray-300 border border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10">{filter.name}</span>
                {selectedCategory === filter.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-2xl blur-xl"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-pulse flex space-x-4">
                <div className="h-12 w-12 rounded-full bg-purple-600/20"></div>
                <div className="space-y-4">
                  <div className="h-4 w-36 bg-purple-600/20 rounded"></div>
                  <div className="h-4 w-24 bg-purple-600/20 rounded"></div>
                </div>
              </div>
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <div key={product.id} 
                     className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl 
                               overflow-hidden hover:bg-white/10 hover:border-white/20 hover:scale-105 
                               hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform
                               animate-glitch-in"
                     style={{ animationDelay: `${index * 100}ms` }}>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-3xl 
                                blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                  
                  {/* Image Container */}
                  <div className="relative h-56 bg-gradient-to-br from-gray-700/50 to-gray-800/50 overflow-hidden
                                group-hover:bg-gradient-to-br group-hover:from-purple-600/20 group-hover:to-purple-800/20
                                transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 
                                  group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Floating Icons */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 
                                  transform translate-y-4 group-hover:translate-y-0">
                      <Link to={`/product/${product.id}`} 
                            className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 
                                     transition-all duration-300 hover:scale-110 block mb-2">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </Link>
                    </div>
                    
                    {/* Product Image or Fallback */}
                    {product.image ? (
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    
                    {/* Fallback Icon */}
                    <div className={`w-full h-full flex items-center justify-center absolute inset-0 ${product.image ? 'hidden' : ''}`}>
                      <div className="text-center z-10">
                        <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-700 rounded-2xl 
                                      flex items-center justify-center mx-auto mb-4 shadow-lg shadow-red-500/30
                                      group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-gray-400 group-hover:text-white transition-colors duration-300">

                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative p-6">
                    {/* Brand Badge */}
                    {product.brand && (
                      <div className="mb-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
                                       bg-gradient-to-r from-red-500/20 to-red-700/20 text-red-300 border border-red-500/30
                                       backdrop-blur-sm group-hover:from-red-500/30 group-hover:to-red-700/30 
                                       group-hover:text-red-200 transition-all duration-300">
                          {product.brand}
                        </span>
                      </div>
                    )}
                    
                    {/* Title and Price */}
                    <div className="mb-3">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="text-xl font-bold text-white hover:text-red-300 transition-colors duration-300 
                                     group-hover:text-red-100 mb-2 line-clamp-2">
                          {product.name}
                        </h3>
                      </Link>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-500 
                                         bg-clip-text text-transparent">
                            {formatPrice(product.price)}
                          </span>
                          {product.originalPrice && (
                            <div className="text-gray-500 line-through text-sm">
                              {formatPrice(product.originalPrice)}
                            </div>
                          )}
                        </div>
                        <div className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full border border-green-500/30">
                          In Stock
                        </div>
                      </div>
                    </div>
                    
                    {/* Category */}
                    <p className="text-red-400 text-sm font-medium mb-3 uppercase tracking-wide">
                      {product.category}
                    </p>
                    
                    {/* Description */}
                    <p className="text-gray-300 mb-6 text-sm leading-relaxed line-clamp-2 
                                group-hover:text-gray-200 transition-colors duration-300">
                      {product.description}
                    </p>
                    
                    {/* Purchase Button */}
                    <button 
                      onClick={() => handlePurchase(product)}
                      className="w-full relative bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 
                               rounded-2xl font-semibold hover:from-purple-500 hover:to-purple-600 
                               hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25
                               transition-all duration-300 transform active:scale-95
                               before:absolute before:inset-0 before:rounded-2xl before:bg-white/10 
                               before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
                               group/btn overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Buy Credits
                        <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" 
                             fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-white mb-4">No products found</h3>
              <p className="text-gray-400">
                {searchTerm 
                  ? `No products match "${searchTerm}". Try a different search term.`
                  : 'No products available in this category.'
                }
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">GameVault</h3>
            <p className="text-gray-400 mb-4">Your Gateway to Gaming Freedom</p>
            <p className="text-gray-500">&copy; 2025 GameVault. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Products;