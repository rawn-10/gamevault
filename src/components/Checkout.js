import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';

const Checkout = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [checkoutItem, setCheckoutItem] = useState(null);

  useEffect(() => {
    // Get the checkout item from sessionStorage
    const storedItem = sessionStorage.getItem('checkout_item');
    if (!storedItem) {
      navigate('/products');
      return;
    }
    setCheckoutItem(JSON.parse(storedItem));
    setIsLoading(false);
  }, [navigate]);
  const [customerInfo, setCustomerInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const handleInputChange = (e) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generate order number
    const orderNum = 'GV' + Date.now().toString().slice(-8);
    setOrderNumber(orderNum);

    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Send order confirmation email using FormSubmit.co
    try {
      const orderMessage = `
Order Details:
Order Number: ${orderNum}
Customer: ${customerInfo.firstName} ${customerInfo.lastName}
Email: ${customerInfo.email}
Phone: ${customerInfo.phone}

Item Ordered:
- ${checkoutItem.name} - ₱${checkoutItem.price.toLocaleString()}

Total: ₱${checkoutItem.price.toLocaleString()}

Payment Method: ${paymentMethod === 'credit' ? 'Credit/Debit Card' : 'PayPal'}
      `;

      const formData_submit = new FormData();
      formData_submit.append('name', `${customerInfo.firstName} ${customerInfo.lastName}`);
      formData_submit.append('email', customerInfo.email);
      formData_submit.append('subject', `New Order Confirmation - ${orderNum}`);
      formData_submit.append('message', orderMessage);
      formData_submit.append('_next', window.location.href);
      formData_submit.append('_captcha', 'false');
      formData_submit.append('_template', 'table');

      await fetch('https://formsubmit.co/ronnbelarmino.0922@gmail.com', {
        method: 'POST',
        body: formData_submit
      });
    } catch (error) {
      console.error('Failed to send order email:', error);
    }

    setIsSubmitting(false);
    setOrderComplete(true);
    // Clear the checkout item from session storage
    sessionStorage.removeItem('checkout_item');
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900">
        <Navigation />
        <div className="flex items-center justify-center py-20">
          <div className="text-white text-xl">Loading checkout...</div>
        </div>
      </div>
    );
  }

  // Order complete state
  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gray-900">
        <Navigation />
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-purple-600 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Purchase Complete!</h1>
            <p className="text-xl text-gray-300 mb-6">Thank you for your purchase!</p>
            <div className="bg-gray-800 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-white mb-2">Transaction ID</h3>
              <p className="text-2xl font-bold text-purple-500">{orderNumber}</p>
            </div>
            <p className="text-gray-300 mb-8">
              We've sent a confirmation email to <span className="text-purple-400">{customerInfo.email}</span>.
              Your game credits will be activated shortly.
            </p>
            <div className="space-x-4">
              <button
                onClick={() => window.location.href = '/'}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300"
              >
                Back to Home
              </button>
              <button
                onClick={() => window.location.href = '/products'}
                className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition duration-300"
              >
                Browse More Games
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!checkoutItem) {
    return (
      <div className="min-h-screen bg-gray-900">
        <Navigation />
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4">No Item Selected</h1>
            <p className="text-gray-300 mb-8">Please select a game credit package to purchase.</p>
            <button
              onClick={() => window.location.href = '/products'}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300"
            >
              Browse Games
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center">Secure Checkout</h1>
          <p className="text-xl text-purple-100 text-center mt-4">Complete your purchase</p>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <form onSubmit={handleSubmitOrder} className="grid lg:grid-cols-3 gap-12">
            
            {/* Customer Information */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Contact Information */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={customerInfo.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={customerInfo.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={customerInfo.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={customerInfo.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Payment Method</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="credit"
                      name="payment"
                      value="credit"
                      checked={paymentMethod === 'credit'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 focus:ring-purple-500"
                    />
                    <label htmlFor="credit" className="ml-3 text-gray-300">
                      Credit / Debit Card
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="paypal"
                      name="payment"
                      value="paypal"
                      checked={paymentMethod === 'paypal'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 focus:ring-purple-500"
                    />
                    <label htmlFor="paypal" className="ml-3 text-gray-300">
                      PayPal
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800 rounded-lg p-6 sticky top-8">
                <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
                
                {/* Item */}
                <div className="bg-gray-700/50 rounded-lg p-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 flex-shrink-0 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg overflow-hidden">
                      {checkoutItem.image && (
                        <img 
                          src={checkoutItem.image} 
                          alt={checkoutItem.name}
                          className="w-full h-full object-cover"
                        />
                      )}
                      {!checkoutItem.image && (
                        <div className="w-full h-full flex items-center justify-center">
                          <svg className="w-10 h-10 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium text-lg mb-1">{checkoutItem.name}</h4>
                      <p className="text-purple-400 text-sm mb-2">{checkoutItem.brand}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-bold">₱{checkoutItem.price.toLocaleString()}</span>
                        {checkoutItem.originalPrice && checkoutItem.originalPrice > checkoutItem.price && (
                          <span className="text-gray-400 text-sm line-through">
                            ₱{checkoutItem.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-600/50">
                    <div className="text-gray-400 text-sm">
                      {checkoutItem.description}
                    </div>
                  </div>
                </div>

                {/* Totals */}
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-300 text-sm">
                    <span>Subtotal</span>
                    <span>₱{checkoutItem.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-300 text-sm">
                    <span>Processing Fee</span>
                    <span>Free</span>
                  </div>
                  {checkoutItem.originalPrice && checkoutItem.originalPrice > checkoutItem.price && (
                    <div className="flex justify-between text-green-400 text-sm">
                      <span>Discount</span>
                      <span>-₱{(checkoutItem.originalPrice - checkoutItem.price).toLocaleString()}</span>
                    </div>
                  )}
                  <div className="pt-3 mt-3 border-t border-gray-700">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">Total</span>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">₱{checkoutItem.price.toLocaleString()}</div>
                        {checkoutItem.originalPrice && checkoutItem.originalPrice > checkoutItem.price && (
                          <div className="text-green-400 text-sm">
                            You save ₱{(checkoutItem.originalPrice - checkoutItem.price).toLocaleString()}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full mt-6 py-3 px-4 rounded-lg font-semibold transition duration-300 ${
                    isSubmitting 
                      ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                      : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}
                >
                  {isSubmitting ? 'Processing Order...' : 'Place Order'}
                </button>

                <p className="text-gray-400 text-sm text-center mt-4">
                  By placing your order, you agree to our terms and conditions.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;