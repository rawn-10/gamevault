// This file maps product names to their corresponding image files
export const getProductImage = (productId, productName, category, brand) => {
  // Real product images mapping
  const imageMap = {
    1: '/images/productpics/hks_muff-removebg-preview.png', // HKS Muffler
    2: '/images/productpics/tein-removebg-preview.png', // Tein Springs
    3: '/images/productpics/ZR-Coilover-removebg-preview.png', // BC Racing Coilovers
    4: '/images/productpics/gridoffroad_1.png', // Rota Grid Off-Road
    5: '/images/productpics/airsus-removebg-preview.png', // Air Suspension
    6: '/images/productpics/momo-pontecarlo-removebg-preview.png', // MOMO Monte Carlo
    7: '/images/productpics/momo.png', // MOMO Racing
    8: '/images/productpics/torque-removebg-preview.png', // Torque Exhaust
    9: '/images/productpics/ikr-removebg-preview.png', // IKR Components
  };

  // Return specific image if available, otherwise return placeholder
  return imageMap[productId] || `https://via.placeholder.com/400x300/1f2937/ef4444?text=${encodeURIComponent(brand)}`;
};