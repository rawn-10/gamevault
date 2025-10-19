// Shared product data for the entire application

export const getStaticProducts = () => {
  return [
    {
      id: 1,
      name: 'Call of Duty: Warzone Credits (10,000)',
      price: 4999,
      originalPrice: 6999,
      category: 'FPS Games',
      brand: 'Call of Duty',
      image: '/images/productpics/Call of duty.jpeg',
      description: 'Get 10,000 COD Points to spend on Battle Pass tiers, weapon blueprints, operator skins, and more in Call of Duty: Warzone.'
    },
    {
      id: 2,
      name: 'Fortnite V-Bucks (13,500)',
      price: 4999,
      originalPrice: 7999,
      category: 'Battle Royale',
      brand: 'Fortnite',
      image: '/images/productpics/Fortnite.jpg',
      description: 'Purchase 13,500 V-Bucks to unlock premium Battle Pass content, exclusive skins, emotes, and more in Fortnite.'
    },
    {
      id: 3,
      name: 'Roblox Robux (10,000)',
      price: 4999,
      originalPrice: 6999,
      category: 'Platform Games',
      brand: 'Roblox',
      image: '/images/productpics/Roblox.jpg',
      description: 'Get 10,000 Robux to spend on avatar items, game passes, and exclusive features across thousands of Roblox experiences.'
    },
    {
      id: 4,
      name: 'Apex Legends Coins (11,500)',
      price: 4999,
      originalPrice: 7499,
      category: 'FPS Games',
      brand: 'Apex Legends',
      image: '/images/productpics/Apex.jpg',
      description: 'Purchase 11,500 Apex Coins to unlock new Legends, Battle Pass levels, exclusive skins, and more in Apex Legends.',
      specifications: 'Digital delivery within 24 hours'
    },
    {
      id: 5,
      name: 'Valorant Points (7,500)',
      price: 3999,
      originalPrice: 5999,
      category: 'FPS Games',
      brand: 'Valorant',
      image: '/images/productpics/Valorant.jpeg',
      description: 'Get 7,500 Valorant Points to unlock new agents, purchase premium skins, and battle pass content in Valorant.'
    },
    {
      id: 6,
      name: 'FIFA 24 Ultimate Team Points (12,000)',
      price: 4999,
      originalPrice: 7999,
      category: 'Sports Games',
      brand: 'FIFA',
      image: '/images/productpics/FIFA.jpg',
      description: 'Purchase 12,000 FIFA Points to open packs, buy players in the transfer market, and build your dream team in FIFA 24 Ultimate Team.'
    },
    {
      id: 7,
      name: 'League of Legends RP (7,200)',
      price: 3999,
      originalPrice: 5999,
      category: 'MOBA Games',
      brand: 'League of Legends',
      image: '/images/productpics/LOL.jpg',
      description: 'Get 7,200 Riot Points to unlock champions, skins, and other premium content in League of Legends.'
    },
    {
      id: 8,
      name: 'Minecraft Minecoins (3,500)',
      price: 1999,
      originalPrice: 2999,
      category: 'Sandbox Games',
      brand: 'Minecraft',
      image: '/images/productpics/Minecraft.jpeg',
      description: 'Purchase 3,500 Minecoins to buy skins, texture packs, worlds, and more from the Minecraft Marketplace.'
    },
    {
      id: 9,
      name: 'Genshin Impact Genesis Crystals (6,480)',
      price: 4999,
      originalPrice: 6999,
      category: 'RPG Games',
      brand: 'Genshin Impact',
      image: '/images/productpics/Genshin Impact.jpeg',
      description: 'Get 6,480 Genesis Crystals to wish for new characters, weapons, and refresh resin in Genshin Impact.'
    },
    {
      id: 10,
      name: 'PUBG Mobile UC (6,000)',
      price: 4999,
      originalPrice: 6999,
      category: 'Battle Royale',
      brand: 'PUBG Mobile',
      image: '/images/productpics/PUBGM.jpeg',
      description: 'Purchase 6,000 Unknown Cash (UC) to buy Royal Pass, outfits, weapon skins, and more in PUBG Mobile.'
    },
    {
      id: 11,
      name: 'GTA Online Shark Card (8,000,000 GTA$)',
      price: 4999,
      originalPrice: 7999,
      category: 'Action Games',
      brand: 'Grand Theft Auto',
      image: '/images/productpics/GTA V.jpeg',
      description: 'Get 8,000,000 GTA$ to spend on vehicles, properties, weapons, and more in GTA Online.'
    },
    {
      id: 12,
      name: 'Rocket League Credits (6,500)',
      price: 2999,
      originalPrice: 4999,
      category: 'Sports Games',
      brand: 'Rocket League',
      image: '/images/productpics/rocketleague.jpeg',
      description: 'Get 6,500 Credits to unlock new cars, decals, wheels, and other customization items in Rocket League.'
    },
    {
      id: 13,
      name: 'Rainbow Six Siege R6 Credits (4,200)',
      price: 2499,
      originalPrice: 3999,
      category: 'FPS Games',
      brand: 'Rainbow Six',
      image: '/images/productpics/R6.jpg',
      description: 'Purchase 4,200 R6 Credits to unlock new operators, weapon skins, and premium battle pass content in Rainbow Six Siege.'
    },
    {
      id: 14,
      name: 'Clash Royale Gems (14,000)',
      price: 4999,
      originalPrice: 7999,
      category: 'Mobile Games',
      brand: 'Clash Royale',
      image: '/images/productpics/Clash royale.jpeg',
      description: 'Get 14,000 Gems to unlock chests, enter special challenges, and progress faster in Clash Royale.',
      specifications: 'Instant delivery to your account'
    },
    {
      id: 15,
      name: 'Final Fantasy XIV Gil (5,000,000)',
      price: 2999,
      originalPrice: 4999,
      category: 'MMORPG',
      brand: 'Final Fantasy',
      image: '/images/productpics/FinalFantasy.jpeg',
      description: 'Purchase 5,000,000 Gil to buy equipment, materials, and cosmetic items in Final Fantasy XIV.'
    },
    {
      id: 16,
      name: 'Mobile Legends Diamonds (5,000)',
      price: 3999,
      originalPrice: 5999,
      category: 'Mobile Games',
      brand: 'Mobile Legends',
      image: '/images/productpics/ML.jpg',
      description: 'Get 5,000 Diamonds to unlock new heroes, skins, and other premium content in Mobile Legends.'
    },
    {
      id: 17,
      name: 'Steam Wallet Code ($50)',
      price: 2499,
      originalPrice: 2499,
      category: 'Digital Wallet',
      brand: 'Steam',
      image: '/images/productpics/Steam.jpg',
      description: '$50 Steam Wallet Code to purchase games, DLC, items, and more on Steam.'
    },
    {
      id: 18,
      name: 'PlayStation Store Gift Card ($50)',
      price: 2499,
      originalPrice: 2499,
      category: 'Digital Wallet',
      brand: 'PlayStation',
      image: '/images/productpics/playstation.jpg',
      description: '$50 PlayStation Store Gift Card for games, add-ons, and subscriptions.'
    }
  ];
}

export const generateSpecifications = (product) => {
  const baseSpecs = {
    'Platform': 'PC, Mobile, Console',
    'Delivery': 'Digital Code - Instant Delivery',
    'Region': 'Global',
    'Validity': '12 months from purchase',
    'Support': '24/7 Customer Service'
  };
  switch (product.category) {
    case 'FPS Games':
      return {
        ...baseSpecs,
        'Game Type': 'First-Person Shooter',
        'Content': 'Battle Pass, Skins, Weapons',
        'Platform': 'PC, Console'
      };
    case 'Battle Royale':
      return {
        ...baseSpecs,
        'Game Type': 'Battle Royale',
        'Content': 'Skins, Emotes, Battle Pass',
        'Players': '100 per match'
      };
    case 'MOBA Games':
      return {
        ...baseSpecs,
        'Game Type': 'Multiplayer Online Battle Arena',
        'Content': 'Champions, Skins, Emotes',
        'Platform': 'PC'
      };
    case 'RPG Games':
      return {
        ...baseSpecs,
        'Game Type': 'Role-Playing Game',
        'Content': 'Characters, Weapons, Items',
        'Game Mode': 'Single/Multiplayer'
      };
    case 'Sports Games':
      return {
        ...baseSpecs,
        'Game Type': 'Sports Simulation',
        'Content': 'Players, Teams, Customization',
        'Mode': 'Single/Multiplayer'
      };
    case 'Digital Wallet':
      return {
        ...baseSpecs,
        'Type': 'Digital Currency',
        'Usage': 'Games, DLC, Subscriptions',
        'Activation': 'Instant'
      };
    case 'MMORPG':
      return {
        ...baseSpecs,
        'Game Type': 'Massively Multiplayer Online RPG',
        'Content': 'Currency, Items, Equipment',
        'Mode': 'Online Multiplayer'
      };
    case 'Mobile Games':
      return {
        ...baseSpecs,
        'Platform': 'Mobile',
        'Content': 'Heroes, Skins, Items',
        'Mode': 'Online Multiplayer'
      };
    case 'Platform Games':
      return {
        ...baseSpecs,
        'Game Type': 'Platform Game',
        'Content': 'Avatar Items, Game Passes',
        'Mode': 'Single/Multiplayer'
      };
    case 'Action Games':
      return {
        ...baseSpecs,
        'Game Type': 'Action Adventure',
        'Content': 'In-Game Currency, Items',
        'Mode': 'Online Multiplayer'
      };
    case 'Sandbox Games':
      return {
        ...baseSpecs,
        'Game Type': 'Sandbox',
        'Content': 'Skins, Textures, Worlds',
        'Mode': 'Creative/Multiplayer'
      };
    default:
      return baseSpecs;
  }
};