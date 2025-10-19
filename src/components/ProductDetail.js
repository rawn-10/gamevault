import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import { getStaticProducts, generateSpecifications } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('description');
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // In a real app, this would be your PHP backend URL
  const API_BASE_URL = 'http://localhost/api';

  useEffect(() => {
    const getStaticProduct = () => {
      const staticProducts = getStaticProducts();
      const foundProduct = staticProducts.find(p => p.id === parseInt(id));
      
      if (foundProduct) {
        // Add specifications if not present
        if (!foundProduct.specifications) {
          foundProduct.specifications = generateSpecifications(foundProduct);
        }
        return foundProduct;
      }
      
      // Return first product as fallback
      const fallback = staticProducts[0];
      if (!fallback.specifications) {
        fallback.specifications = generateSpecifications(fallback);
      }
      return fallback;
    };

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/products.php?id=${id}`);
        const data = await response.json();
        
        if (data.success && data.data.length > 0) {
          setProduct(data.data[0]);
        } else {
          // Fallback to static product data
          setProduct(getStaticProduct());
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        setProduct(getStaticProduct());
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);  const formatPrice = (price) => {
    if (typeof price === 'number') {
      return `₱${price.toLocaleString()}`;
    }
    return price;
  };

  const handleBuyNow = () => {
    // Store the selected product in sessionStorage for checkout
    sessionStorage.setItem('checkout_item', JSON.stringify({
      ...product,
      quantity: 1
    }));
    navigate('/checkout');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <Navigation />
        <div className="flex items-center justify-center py-20">
          <div className="animate-pulse flex space-x-4">
            <div className="h-12 w-12 rounded-full bg-purple-600/20"></div>
            <div className="space-y-4">
              <div className="h-4 w-36 bg-purple-600/20 rounded"></div>
              <div className="h-4 w-24 bg-purple-600/20 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <Navigation />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Game Credits Not Found</h2>
            <p className="text-gray-400 mb-8">The game credits you're looking for are not available.</p>
            <button
              onClick={() => navigate('/products')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
            >
              Browse Game Credits
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <Navigation />
      
      {/* Mobile Header */}
      <header className="lg:hidden bg-gray-800 px-4 py-3">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigate(-1)}
            className="text-white p-2 -ml-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
      </header>

      {/* Product Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Product Image */}
          <div className="mb-6 lg:mb-0">
            <div className="aspect-square bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
              {product.image ? (
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain p-8 relative z-10"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center relative z-10">
                  <svg className="w-24 h-24 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Game & Title */}
            <div>
              <p className="text-purple-400 font-semibold text-lg mb-2">{product.brand}</p>
              <h1 className="text-2xl lg:text-3xl font-bold text-white mb-4">{product.name}</h1>
            </div>

            {/* Tabs - Mobile */}
            <div className="lg:hidden">
              <div className="flex space-x-1 bg-gray-800 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                    activeTab === 'description'
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Details
                </button>
                <button
                  onClick={() => setActiveTab('specification')}
                  className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                    activeTab === 'specification'
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                />
                  Features
              </div>
            </div>

            {/* Content based on active tab - Mobile */}
            <div className="lg:hidden">
              {activeTab === 'description' ? (
                <div className="text-gray-300 text-sm leading-relaxed">
                  {product.description}
                </div>
              ) : (
                <div className="space-y-3">
                  {product.specifications && typeof product.specifications === 'object' 
                    ? Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between border-b border-gray-700 pb-2">
                          <span className="text-gray-400 text-sm">{key}</span>
                          <span className="text-white text-sm font-medium">{value}</span>
                        </div>
                      ))
                    : (
                        <div className="text-gray-300 text-sm">
                          {product.specifications || 'No specifications available'}
                        </div>
                      )
                  }
                </div>
              )}
            </div>

            {/* Desktop Content - Always visible */}
            <div className="hidden lg:block space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Product Details</h3>
                <p className="text-gray-300 leading-relaxed">{product.description}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Features & Benefits</h3>
                <div className="space-y-3">
                  {product.specifications && typeof product.specifications === 'object' 
                    ? Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between border-b border-purple-800/30 pb-2">
                          <span className="text-gray-400">{key}</span>
                          <span className="text-white font-medium">{value}</span>
                        </div>
                      ))
                    : (
                        <div className="text-gray-300">
                          {product.specifications || 'Features information not available'}
                        </div>
                      )
                  }
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl lg:text-3xl font-bold text-white">{formatPrice(product.price)}</span>
                    {product.originalPrice && (
                      <span className="text-gray-500 line-through text-lg">{formatPrice(product.originalPrice)}</span>
                    )}
                  </div>
                  {product.discount && (
                    <span className="text-purple-400 text-sm font-semibold">Save {product.discount}</span>
                  )}
                </div>
              </div>

              {/* Purchase Button */}
              <button
                onClick={handleBuyNow}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 px-6 
                          rounded-xl font-semibold transition-all duration-300 
                          hover:from-purple-500 hover:to-purple-600
                          hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25
                          flex items-center justify-center space-x-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                <span className="text-lg">Buy Now</span>
              </button>

              {/* Secure Transaction Notice */}
              <div className="mt-4 flex items-center justify-center text-gray-400 text-sm">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4H6a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2-2h-1V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4H6a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2-2h-1V7a4 4 0 00-8 0v4" />
                </svg>
                Secure, Instant Delivery
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;