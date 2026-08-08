// Data file for all links and project information
export const siteData = {
  personal: {
    name: "Suliman",
    title: "Flutter Developer",
    // avatar: "assets/images/avatar.jpg",
    avatar: "assets/images/personal/me.jpeg",
    email: "suliman1omira@gmail.com",
    // assets/images/me.jpeg
    github: "https://github.com/SulimanOmaira/",
    gitlab: "https://gitlab.com/SulimanOmaira/",
    linkedin: "https://linkedin.com/in/suliman-omaira-6196aa273/"
  },
  projects: {
    geoTracking: {
      title: 'Geo Tracking',
      description: 'Production Flutter app for field sales teams with offline workflows, GPS validation, ERP sync, and analytics dashboards.',
      image: "assets/images/geo_tracking/logo_geo_tracking1.png",
      features: [
        'Offline order, payment, and visit creation',
        'GPS check-in/out with validation',
        'Odoo ERP integration',
        'Offline sync dashboard',
        'Maps and live location updates',
        'Sales analytics and reports'
      ],
      tech: ['Flutter', 'Dart', 'Offline-first', 'GPS', 'Odoo ERP', 'SQLite'],
      demo: 'https://demo-link.com'
    },
    yahuAi: {
      title: 'Yahu-ai',
      description: 'Real-time taxi booking app for customers with driver tracking, route optimization, and seamless user experience.',
      image: "assets/images/yahu_ai/logocar.png",
      features: [
        'Real-time GPS tracking for drivers and passengers',
        'Interactive maps with route visualization',
        'WebSocket integration for live updates',
        'Trip states and history',
        'Customer ratings system',
        'Location-based services'
      ],
      tech: ['Flutter', 'GetX', 'WebSocket', 'Google Maps API', 'Laravel Backend'],
      demo: 'https://demo-link.com'
    },
    yahuDriver: {
      title: 'Yahu Driver',
      description: 'Driver companion app for taxi coordination with earnings dashboard and real-time notifications.',
      image: "assets/images/yahu_driver/logo_driver.png",
      features: [
        'GPS tracking and navigation',
        'Earnings dashboard',
        'Real-time notifications',
        'Trip management',
        'Driver rating system',
        'Offline route guidance'
      ],
      tech: ['Flutter', 'GetX', 'WebSocket', 'Google Maps API', 'Firebase'],
      demo: 'https://demo-link.com'
    },
    cfy: {
      title: 'Car For You (CFY)',
      description: 'Car marketplace for buying/selling with integrated chat, AI chatbot, and recommendation system.',
      image: "assets/images/cfy/logo.png",
      features: [
        'Advanced search and filtering',
        'Real-time chat between users',
        'Integrated AI chatbot (n8n)',
        'Simple recommendation system',
        'Image gallery with zoom',
        'Secure transactions'
      ],
      tech: ['Flutter', 'Laravel', 'MySQL', 'WebSocket', 'Firebase', 'n8n'],
      demo: 'https://demo-link.com'
    },
    tradeNova: {
      title: 'Trade Nova',
      description: 'Lightweight mobile accounting & POS for small stores with store & inventory management.',
      image: "assets/images/trade_nova/logo_trade_nova.png",
      features: [
        'Store and inventory management',
        'Full offline-first support',
        'Cloud synchronization',
        'Sales reports and analytics',
        'Barcode scanning',
        'Customer management'
      ],
      tech: ['Flutter', 'SQLite', 'Firebase', 'Local Storage', 'Laravel Backend'],
      demo: 'https://demo-link.com'
    }
  },
  social: {
    github: "https://github.com/SulimanOmaira",
    gitlab: "https://gitlab.com/SulimanOmaira",
    linkedin: "https://linkedin.com/in/suliman-omaira-6196aa273",
    whatsapp: "https://wa.me/963985143050",
    email: "mailto:suliman1omira@gmail.com"
  }
};