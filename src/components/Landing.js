import React from 'react';
import Navigation from './Navigation';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent animate-pulse"></div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-bounce delay-1000"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-300/10 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-bounce delay-700"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent animate-pulse">
                Game Credits, Unlocked
              </h1>
            </div>
            <div className="animate-fade-in-up delay-300">
              <p className="text-xl md:text-3xl mb-12 text-purple-50 font-light leading-relaxed max-w-4xl mx-auto">
                Your one-stop destination for gaming currency and credits
              </p>
            </div>
            <div className="animate-fade-in-up delay-500">
              <button 
                onClick={() => window.location.href = '/products?featured=true'}
                className="group relative bg-white/90 backdrop-blur-sm text-purple-600 px-12 py-4 rounded-2xl text-xl font-bold 
                          hover:bg-white hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 
                          transition-all duration-500 transform active:scale-95
                          before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-purple-600 before:to-purple-800 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
                          hover:text-white overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Browse Game Credits
                  <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
              Why Choose GameVault?
            </h3>
            <p className="text-gray-300 text-xl font-light max-w-2xl mx-auto">Your gateway to gaming freedom</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Quality Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-center 
                            hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10
                            transition-all duration-500 transform">
                <div className="bg-gradient-to-r from-purple-500 to-purple-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 
                              group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-purple-500/30">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-100 transition-colors duration-300">
                  Secure Transactions
                </h4>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  Every purchase is protected with state-of-the-art security measures
                </p>
              </div>
            </div>

            {/* Community Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-center 
                            hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10
                            transition-all duration-500 transform">
                <div className="bg-gradient-to-r from-purple-500 to-purple-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 
                              group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-purple-500/30">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-100 transition-colors duration-300">
                  24/7 Support
                </h4>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  Our dedicated team is always here to help with any gaming credit needs
                </p>
              </div>
            </div>

            {/* Value Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-center 
                            hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10
                            transition-all duration-500 transform">
                <div className="bg-gradient-to-r from-purple-500 to-purple-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 
                              group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-purple-500/30">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-100 transition-colors duration-300">
                  Competitive Rates
                </h4>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  Best prices for game credits and currencies across all platforms
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 text-white py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/3 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-0 right-1/3 w-24 h-24 bg-purple-600/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
                GameVault
              </h3>
              <p className="text-gray-300 text-xl font-light mb-6">Your Gateway to Gaming Freedom</p>
              <div className="flex justify-center space-x-8 mb-6">
                <a href="/products" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 font-medium">Shop Credits</a>
                <a href="/about" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 font-medium">About</a>
                <a href="/contact" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 font-medium">Support</a>
                <a href="/diy-tutorials" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 font-medium">Guides</a>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-500">&copy; 2025 GameVault. All rights reserved. | Your trusted source for game credits.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;