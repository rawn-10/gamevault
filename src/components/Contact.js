import React, { useState } from 'react';
import Navigation from './Navigation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(''); // 'success', 'error', or ''

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Using FormSubmit.co for reliable email delivery
      const formData_submit = new FormData();
      formData_submit.append('name', formData.name);
      formData_submit.append('email', formData.email);
      formData_submit.append('subject', `Contact from GameVault: ${formData.subject}`);
      formData_submit.append('message', formData.message);
      formData_submit.append('_next', window.location.href); // Redirect back to current page
      formData_submit.append('_captcha', 'false'); // Disable captcha
      formData_submit.append('_template', 'table'); // Use table template

      const response = await fetch('https://formsubmit.co/vionneulrichp@gmail.com', {
        method: 'POST',
        body: formData_submit
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('FormSubmit failed');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      // Fallback: use mailto
      try {
        const emailBody = `
From: ${formData.name} (${formData.email})
Subject: ${formData.subject}

Message:
${formData.message}

---

        `;
        
        const mailtoLink = `mailto:ronnbelarmino.0922@gmail.com?subject=${encodeURIComponent('Contact from GameVault: ' + formData.subject)}&body=${encodeURIComponent(emailBody)}`;
        window.open(mailtoLink);
        
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } catch (fallbackError) {
        console.error('Fallback email failed:', fallbackError);
        setSubmitStatus('error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-xl text-purple-100">We're here to help with your gaming needs</p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 mb-8">
                
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white">Office</h4>
                    <p className="text-gray-300">Metro Manila, Philippines<br />Available worldwide</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white">Phone</h4>
                    <p className="text-gray-300">+63 (927) 694-3363</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <p className="text-gray-300">contact@gamevault.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white">Support Hours</h4>
                    <p className="text-gray-300">
                      Monday - Saturday: 10:00 AM - 10:00 PM<br />
                      Sunday: 10:00 AM - 11:00 PM<br />
                      Philippine Standard Time
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 rounded-lg p-8 shadow-xl border border-purple-500">
              <h3 className="text-3xl font-bold text-white mb-6">Send us a Message</h3>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-purple-600 text-white rounded-lg shadow-lg">
                  <p>Thank you for your message! Our support team will get back to you shortly.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-600 text-white rounded-lg shadow-lg">
                  <p>There was an error sending your message. Please try again or reach out through our support channels.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-purple-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-purple-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-purple-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-900 border border-purple-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition duration-300 transform hover:scale-105 ${
                    isSubmitting 
                      ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                      : 'bg-purple-600 text-white hover:bg-purple-700 hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">GameVault</h3>
            <p className="text-gray-400 mb-4"></p>
            <p className="text-gray-500">&copy; 2025 GameVault. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;