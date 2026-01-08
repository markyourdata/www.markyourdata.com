// Configuration and Constants for Mark Your Data website

const CONFIG = {
  // Paths
  PATHS: {
    CONTACT: 'pages/contact.html',
    SERVICES: 'pages/services/',
    PROJECTS: 'pages/projects/',
    BLOGS: 'pages/blogs/',
    ASSETS: 'assets/',
  },

  // Container Selectors
  SELECTORS: {
    NAVBAR: 'navbar-container',
    HERO: 'hero-container',
    ABOUT_US: 'about-us-content',
    HOW_WE_WORK: 'how-we-work-content',
    SERVICES: 'services',
    CLIENTS_CONTENT: 'clients-content',
    CLIENTS: 'clients',
    CLIENTS_CAROUSEL: 'clients-carousel',
    FANS_CONTENT: 'fans-content',
    TESTIMONIALS: 'testimonials',
    TESTIMONIAL_INDICATORS: 'testimonial-indicators',
    PROJECTS_CONTENT: 'projects-content',
    PROJECTS: 'projects',
    CTA: 'cta-container',
  },

  // Carousel Settings
  CAROUSEL: {
    CLIENTS_ANIMATION_DURATION: 20, // seconds
    TESTIMONIAL_TRANSITION_DURATION: 600, // milliseconds
  },

  // Layout Settings
  LAYOUT: {
    MAX_CONTAINER_WIDTH: 1000, // pixels
    MOBILE_BREAKPOINT: 768, // pixels
    PROJECTS_LIMIT_HOMEPAGE: 2,
  },

  // Animation Settings
  ANIMATION: {
    DEFAULT_TRANSITION: '0.3s ease',
    HOVER_TRANSFORM_Y: -2, // pixels
  },

  // Depth calculation for path resolution
  PATH_SEGMENTS: {
    PAGES_INDEX: 'pages',
  },
};

// Helper function to get element by ID
const getElement = (id) => document.getElementById(id);

// Helper function to resolve paths based on current location
const resolvePath = (path) => {
  const currentPath = window.location.pathname;
  const pathParts = currentPath.split('/').filter((part) => part !== '');
  const pagesIndex = pathParts.indexOf(CONFIG.PATH_SEGMENTS.PAGES_INDEX);

  let basePath = '.';
  if (pagesIndex !== -1) {
    const depth = pathParts.length - pagesIndex - 1;
    basePath = '../'.repeat(depth + 1).slice(0, -1) || '.';
  }

  return `${basePath}/${path}`;
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CONFIG, getElement, resolvePath };
}
