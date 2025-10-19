import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900">

      {/* Page Header */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">About GameVault</h2>
            <p className="text-xl text-purple-100">Your Gateway to Gaming Freedom</p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
            <p className="text-gray-300 mb-6">
              GameVault was born from a simple idea: gaming should be accessible to everyone. We started with 
              a mission to revolutionize how gamers access their favorite games, making digital gaming more 
              affordable and flexible. We understand that every gamer has unique preferences and playing styles, 
              and we're here to support that diversity.
            </p>
            <p className="text-gray-300 mb-8">
              Our platform focuses on providing game credits and digital keys at competitive prices, ensuring 
              you can enjoy more games without breaking the bank. Whether you're a casual player or a hardcore 
              gamer, GameVault is your trusted partner in gaming.
            </p>

            <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-gray-300 mb-8">
              To create the most trusted and convenient platform for gamers to access their favorite games. 
              GameVault connects players with amazing gaming experiences by offering secure game credits, 
              reliable service, and a community that celebrates gaming culture.
            </p>

            <h3 className="text-3xl font-bold text-white mb-6">Why Choose Us?</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-semibold text-white mb-3">Secure & Instant</h4>
                <p className="text-gray-300">
                  We prioritize security and speed. Your game credits are delivered instantly and safely through our secure platform.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-3">24/7 Support</h4>
                <p className="text-gray-300">
                  Our dedicated team of gamers is always here to help. Whether you need assistance with a purchase or have questions, we've got you covered.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-3">Best Value</h4>
                <p className="text-gray-300">
                  We offer competitive prices on game credits and run regular promotions to help you get more gaming for your money.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-3">Verified Sellers</h4>
                <p className="text-gray-300">
                  All our game credits come from authorized sources, ensuring you get legitimate keys that work every time.
                </p>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-white mb-6">Play. Connect. Win.</h3>
            <p className="text-gray-300 mb-8">
              Join our gaming community where you can discover new titles, share experiences, and stay updated on 
              the latest gaming trends. We're more than just a marketplace - we're your gaming companion.
            </p>

            <div className="text-center mt-12 p-8 bg-gradient-to-r from-purple-700 to-purple-900 rounded-lg">
              <h4 className="text-2xl font-bold text-white mb-4">Level up your gaming experience with GameVault</h4>
              <p className="text-purple-100">Your game, your way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Our Impact</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">100K+</div>
              <div className="text-gray-300">Active Gamers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">500K+</div>
              <div className="text-gray-300">Credits Sold</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">99%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
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

export default About;