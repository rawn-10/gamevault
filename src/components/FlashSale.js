import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';

const FlashSale = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [saleProducts, setSaleProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // In a real app, this would be your PHP backend URL
  const API_BASE_URL = 'http://localhost/api'; // Adjust this to your PHP server

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/products.php?featured=true`);
        const data = await response.json();
        
        if (data.success) {
          setSaleProducts(data.data);
        } else {
          // Fallback to static data if API fails
          setSaleProducts(getStaticSaleProducts());
        }
      } catch (error) {
        console.error('Error fetching featured products:', error);
        // Fallback to static data if API fails
        setSaleProducts(getStaticSaleProducts());
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, [API_BASE_URL]);

  const handlePurchase = (product) => {
    // Here you would integrate with your payment processing system
    console.log(`Proceeding to purchase ${product.name}`);
  };

  // Fallback static data
  const getStaticSaleProducts = () => {
    return [
      {
        id: 1,
        name: 'Call of Duty: Modern Warfare III Credits (10,000)',
        price: 2999,
        originalPrice: 4999,
        discount: 40,
        image: 'cod-mw3.jpg',
        brand: 'Activision'
      },
      {
        id: 2,
        name: 'FIFA 24 Ultimate Team Points (12,000)',
        price: 3599,
        originalPrice: 5999,
        discount: 40,
        image: 'fifa24.jpg',
        brand: 'EA Sports'
      },
      {
        id: 3,
        name: 'Fortnite V-Bucks Bundle (13,500)',
        price: 4199,
        originalPrice: 6999,
        discount: 40,
        image: 'fortnite.jpg',
        brand: 'Epic Games'
      },
      {
        id: 4,
        name: 'Roblox Premium Currency (10,000)',
        price: 2399,
        originalPrice: 3999,
        discount: 40,
        image: 'roblox.jpg',
        brand: 'Roblox'
      },
      {
        id: 5,
        name: 'Valorant Points Bundle (11,000)',
        price: 3299,
        originalPrice: 5499,
        discount: 40,
        image: 'valorant.jpg',
        brand: 'Riot Games'
      },
      {
        id: 6,
        name: 'Genshin Impact Genesis Crystals (8,080)',
        price: 4799,
        originalPrice: 7999,
        discount: 40,
        image: 'genshin.jpg',
        brand: 'miHoYo'
      }
    ];
  };

  const formatPrice = (price) => {
    if (typeof price === 'number') {
      return `₱${price.toLocaleString()}`;
    }
    return price;
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(saleProducts.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(saleProducts.length / 4)) % Math.ceil(saleProducts.length / 4));
  };

  const currentProducts = saleProducts.slice(currentSlide * 4, (currentSlide + 1) * 4);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <Navigation />

      {/* Flash Sale Header */}
      <div className="bg-gradient-to-r from-purple-700 to-purple-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block animate-bounce mb-4">
              <span className="text-yellow-400 text-6xl">⚡</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              MEGA FLASH SALE
            </h2>
            <p className="text-xl text-purple-200 mb-2">40% OFF ALL GAME CREDITS</p>
            <p className="text-gray-300 text-lg">Limited time offer - Level up for less!</p>
          </div>
        </div>
      </div>

      {/* Products Grid with Carousel */}
      <div className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-purple-600 hover:bg-purple-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-purple-600 hover:bg-purple-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Products Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mx-12">
              {loading ? (
                <div className="col-span-full flex justify-center items-center py-20">
                  <div className="text-gray-300">Loading flash sale products...</div>
                </div>
              ) : (
                currentProducts.map((product) => (
                  <div key={product.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 relative group">
                    {/* Wishlist Heart */}
                    <button className="absolute top-3 right-3 z-10 text-gray-400 hover:text-purple-500 transition duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>

                    {/* Product Image */}
                    <div className="h-48 bg-gray-700 flex items-center justify-center relative overflow-hidden group-hover:opacity-90 transition duration-300">
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                      <span className="text-white text-sm z-10">{product.name.split(' ').slice(0, 2).join(' ')}</span>
                    </div>

                    {/* Product Info */}
                    <div className="p-4">
                      {/* Brand */}
                      {product.brand && (
                        <div className="mb-2">
                          <span className="text-xs bg-purple-900 text-purple-200 px-2 py-1 rounded-full">
                            {product.brand}
                          </span>
                        </div>
                      )}

                      {/* Product Name */}
                      <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2">
                        {product.name}
                      </h3>

                      {/* Price */}
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="text-purple-400 font-bold text-lg">{formatPrice(product.price)}</span>
                        {product.originalPrice && (
                          <span className="text-gray-500 line-through text-sm">{formatPrice(product.originalPrice)}</span>
                        )}
                      </div>

                      {/* Discount Badge */}
                      {product.discount && (
                        <div className="absolute top-3 left-3">
                          <span className="bg-yellow-500 text-gray-900 text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                            SAVE {product.discount}%
                          </span>
                        </div>
                      )}

                      {/* Purchase Button */}
                      <button 
                        onClick={() => handlePurchase(product)}
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition duration-300 text-sm font-semibold flex items-center justify-center space-x-2 transform hover:scale-105"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span>Buy Credits</span>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(saleProducts.length / 4) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition duration-300 ${
                  currentSlide === index ? 'bg-purple-600' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>

          {/* Timer Section */}
          <div className="text-center mt-12">
            <div className="inline-block bg-gray-800 px-6 py-4 rounded-lg">
              <p className="text-purple-400 text-sm mb-2">Flash Sale Ends In</p>
              <div className="flex space-x-4 text-white">
                <div className="flex-1">
                  <div className="text-2xl font-bold">24</div>
                  <div className="text-xs text-gray-400">Hours</div>
                </div>
                <div className="text-2xl font-bold">:</div>
                <div className="flex-1">
                  <div className="text-2xl font-bold">00</div>
                  <div className="text-xs text-gray-400">Minutes</div>
                </div>
                <div className="text-2xl font-bold">:</div>
                <div className="flex-1">
                  <div className="text-2xl font-bold">00</div>
                  <div className="text-xs text-gray-400">Seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">GameVault</h3>
            <p className="text-gray-400 mb-4">Your Gateway to Gaming Freedom</p>
            <p className="text-gray-500">&copy; 2025 GameVault. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FlashSale;