# Pops & Bags - Car Parts Online Store

A modern React.js car parts e-commerce website with premium glassmorphism design, featuring a comprehensive catalog of JDM and performance parts. **Now live at [popsnbags.vercel.app](https://popsnbags.vercel.app)**

## 🚗 Live Demo

**🌐 [View Live Site](https://popsnbags.vercel.app)**

## ✨ Features

### **Core E-commerce**

- **Complete Shopping System**: Full cart functionality with checkout and order processing
- **Email Integration**: Automatic order confirmations via FormSubmit.co
- **Product Catalog**: 73+ car parts including ROTA wheels, body kits, and performance parts
- **Smart Filtering**: Brand and category-based filtering with real-time search
- **Promo Codes**: Multiple discount codes (POPS40, BAGS30, NEWBIE20, balaqBAGS40)
- **Product Details**: Individual product pages with specifications and pricing

### **Premium UI/UX**

- **Glassmorphism Design**: Modern translucent design elements with backdrop blur
- **Advanced Animations**: Custom Tailwind animations (fade-in-up, float, glow, scale-in)
- **Mobile Responsive**: Fully optimized for all device sizes
- **Dark Theme**: Professional dark theme with red accent colors
- **Interactive Elements**: Smooth hover effects and transitions

### **Additional Pages**

- **DIY Tutorials**: Educational content for car enthusiasts
- **About Page**: Company information and mission
- **Contact Page**: Multiple contact methods with working forms
- **Flash Sale Section**: Special promotional content

## 🛠 Tech Stack

- **Frontend**: React.js 18, Tailwind CSS 3 (with custom animations), React Router DOM 6
- **State Management**: React Context API with localStorage persistence
- **Email Service**: FormSubmit.co for order confirmations and contact forms
- **Deployment**: Vercel with automatic GitHub integration
- **Styling**: Custom glassmorphism effects, backdrop blur, advanced gradients
- **Version Control**: Git & GitHub with automated deployments

## 🎯 Recent Updates & Fixes

### **All Critical Issues Resolved** ✅

- **Product Specifications**: Fixed table display showing proper key-value pairs
- **Checkout System**: Resolved white screen issues and cart state persistence
- **SSR Compatibility**: Fixed server-side rendering issues for Vercel deployment
- **Cart Persistence**: Added localStorage integration for cart state preservation
- **Property Alignment**: Fixed context property mismatches between components

### **Performance & UX Improvements**

- Enhanced error handling and debugging capabilities
- Improved mobile responsiveness and loading states
- Added defensive programming for production stability
- Optimized for both development and production environments

## 🚀 Quick Start

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/vperalta-git/popsnbags.git
cd popsnbags
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Landing.js      # Homepage component
│   ├── Products.js     # Product catalog with filtering
│   ├── ProductDetail.js # Individual product pages
│   ├── Contact.js      # Contact form
│   ├── About.js        # About page
│   ├── Navigation.js   # Navigation header
│   ├── ShoppingCart.js # Shopping cart component
│   └── FlashSale.js    # Flash sale banner
├── context/            # Context providers
│   └── CartContext.js  # Global cart state management
├── data/               # Product data
│   └── products.js     # Complete product catalog
└── App.js             # Main app component

api/
└── products.php       # Product API endpoint

public/
└── send-email.php     # Email handling endpoint
```

## 🛒 Available Scripts

### Development

```bash
npm start          # Run development server
npm test           # Run tests
npm run build      # Build for production
```

### Deployment

The app is configured for deployment on Vercel with automatic builds from GitHub.

## 💰 Promo Codes

- **POPS40**: 40% off all items
- **BAGS30**: 30% off all items
- **NEWBIE20**: 20% off for new customers
- **balaqBAGS40**: 40% off special promotion

## 📧 Contact & Email Configuration

**Email Integration**: Fully configured and working

- **Order Confirmations**: Automatic emails sent to customers after purchase
- **Contact Forms**: Direct messages sent to `vionneulrichp@gmail.com`
- **Service**: FormSubmit.co (reliable, serverless email handling)
- **Status**: ✅ **Live and operational**

## 🌐 Deployment Status

**🟢 LIVE AND FULLY OPERATIONAL**

- **Production URL**: [https://popsnbags.vercel.app](https://popsnbags.vercel.app)
- **Repository**: [https://github.com/vperalta-git/popsnbags](https://github.com/vperalta-git/popsnbags)
- **Deployment Platform**: Vercel (with automatic GitHub integration)
- **Last Updated**: October 18, 2025
- **All Systems**: ✅ Operational

### Deployment Features

- **Automatic Builds**: Deploys automatically on GitHub push
- **CDN Distribution**: Global content delivery network
- **SSL Certificate**: Secure HTTPS encryption
- **Custom Domain Ready**: Can be configured with custom domain
- **Performance Optimized**: Fast loading and caching strategies

## 🛠 Key Features

### Product Catalog

- 73+ products across multiple categories
- ROTA wheels collection
- Body kits and performance parts
- Detailed specifications for each product

### Smart Filtering System

- Toggle between "Brands" and "Categories" view
- Dynamic filter generation from product data
- Real-time search functionality

### Shopping Cart

- Add/remove items with quantity control
- Apply promo codes with validation
- Persistent cart state across navigation
- Cart total calculations with discounts

### Email Integration

- PHP-powered contact form
- Proper email validation and sanitization
- CORS-enabled for production deployment

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For questions or support:

- Use the contact form on the website
- Email: vionneulrichp@gmail.com
- Create an issue on GitHub

---

**Built with ❤️ for the JDM and car enthusiast community**
