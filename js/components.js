// Component templates that render data into HTML

/**
 * Safely escapes HTML to prevent XSS attacks
 * @param {string} text - Text to escape
 * @returns {string} Escaped text
 */
function escapeHtml(text) {
  if (typeof text !== "string") return "";
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Allows specific safe HTML tags while escaping potentially dangerous content
 * @param {string} text - Text that may contain HTML
 * @returns {string} Sanitized HTML with only allowed tags
 */
function allowSafeHtml(text) {
  if (typeof text !== "string") return "";
  // First escape everything
  let escaped = escapeHtml(text);
  // Then restore only safe tags: <strong>, </strong>, <em>, </em>, <b>, </b>, <i>, </i>
  escaped = escaped.replace(/&lt;(\/?(strong|em|b|i))&gt;/gi, "<$1>");
  return escaped;
}

/**
 * Logs a warning message in development
 * @param {string} message - Warning message
 * @param {*} data - Optional data to log
 */
function logWarning(message, data = null) {
  if (console && console.warn) {
    console.warn(`[Mark Your Data] ${message}`, data || "");
  }
}

const components = {
  /**
   * Renders a testimonial card with quote, author info, and optional image
   * @param {Testimonial} data - Testimonial data object
   * @param {string} data.quote - The testimonial quote text
   * @param {string} data.author - Name of the person giving testimonial
   * @param {string} data.company - Company/organization of the author
   * @param {string} [data.image] - Optional URL to author's image
   * @returns {string} HTML string for testimonial component
   */
  testimonial: (data) => {
    // Validate required data
    if (!data || !data.quote || !data.author || !data.company) {
      logWarning("Testimonial component missing required data", data);
      return '<div class="error-message">Testimonial unavailable</div>';
    }

    try {
      const firstInitial = data.author.charAt(0).toUpperCase();
      const imageHtml = data.image
        ? `<img src="${escapeHtml(data.image)}" alt="${escapeHtml(data.author)}" loading="lazy">`
        : `<div class="testimonial-placeholder">${escapeHtml(firstInitial)}</div>`;

      return `
        <div class="testimonial" role="listitem">
          <div class="testimonial-image">
            ${imageHtml}
          </div>
          <div class="testimonial-content">
            <blockquote>"${escapeHtml(data.quote)}"</blockquote>
            <cite>— ${escapeHtml(data.author)}, ${escapeHtml(data.company)}</cite>
          </div>
        </div>
      `;
    } catch (error) {
      logWarning("Error rendering testimonial component", error);
      return '<div class="error-message">Testimonial unavailable</div>';
    }
  },

  /**
   * Renders a service card with title, description, and CTA button
   * @param {Service} data - Service data object
   * @param {string} data.title - Service title
   * @param {string} data.description - Service description
   * @param {string} data.url - URL to service page
   * @param {string} data.cta - Call-to-action button text
   * @param {boolean} [data.fullWidth] - Whether card should be full width
   * @param {Object} [options={}] - Rendering options
   * @param {boolean} [options.removeServicesPrefix] - Remove 'pages/services/' prefix from URLs
   * @returns {string} HTML string for service card component
   */
  serviceCard: (data, options = {}) => {
    // Validate required data
    if (!data || !data.title || !data.description || !data.url || !data.cta) {
      logWarning("Service card component missing required data", data);
      return '<div class="error-message">Service card unavailable</div>';
    }

    try {
      // Determine the correct URL based on current location
      let url = data.url;

      // If we're in /pages/services/index.html, remove the 'pages/services/' prefix
      if (options.removeServicesPrefix && url.startsWith("pages/services/")) {
        url = url.replace("pages/services/", "");
      }

      // Add full-width class if specified
      const cardClass = data.fullWidth
        ? "service-card service-card-full-width"
        : "service-card";

      return `
        <div class="${cardClass}">
          <h3>${escapeHtml(data.title)}</h3>
          <p>${escapeHtml(data.description)}</p>
          <a href="${escapeHtml(url)}" aria-label="${escapeHtml(data.title)}: ${escapeHtml(data.cta)}">
            <button type="button" class="cta-button">${escapeHtml(data.cta)}</button>
          </a>
        </div>
      `;
    } catch (error) {
      logWarning("Error rendering service card component", error);
      return '<div class="error-message">Service card unavailable</div>';
    }
  },

  /**
   * Renders a client logo image
   * @param {Client} data - Client data object
   * @param {string} data.name - Client company name (used for alt text)
   * @param {string} data.logo - URL to client logo image
   * @returns {string} HTML string for client logo component
   */
  clientLogo: (data) => {
    // Validate required data
    if (!data || !data.name || !data.logo) {
      logWarning("Client logo component missing required data", data);
      return '<div class="error-message">Client logo unavailable</div>';
    }

    try {
      return `
        <div class="client-logo" role="listitem">
          <img src="${escapeHtml(data.logo)}" alt="${escapeHtml(data.name)}" class="client-logo-img" loading="lazy">
        </div>
      `;
    } catch (error) {
      logWarning("Error rendering client logo component", error);
      return '<div class="error-message">Client logo unavailable</div>';
    }
  },

  /**
   * Renders a section heading with introductory text
   * @param {SectionContent} data - Section content data object
   * @param {string} data.heading - Section heading text
   * @param {string} data.text - Section intro/description text
   * @returns {string} HTML string for section heading and intro
   */
  sectionWithIntro: (data) => {
    // Validate required data
    if (!data || !data.heading || !data.text) {
      logWarning("Section with intro component missing required data", data);
      return '<div class="error-message">Section unavailable</div>';
    }

    try {
      return `
        <h2>${escapeHtml(data.heading)}</h2>
        <p class="section-intro">${allowSafeHtml(data.text)}</p>
      `;
    } catch (error) {
      logWarning("Error rendering section with intro component", error);
      return '<div class="error-message">Section unavailable</div>';
    }
  },

  /**
   * Renders a hero section with title, tagline, and optional CTA button
   * @param {Hero} data - Hero section data object
   * @param {string} data.title - Main hero heading
   * @param {string} data.tagline - Hero subtitle/tagline
   * @param {CTAButton} [data.ctaButton] - Optional call-to-action button
   * @param {string} [data.ctaButton.text] - CTA button text
   * @param {string} [data.ctaButton.link] - CTA button destination URL
   * @returns {string} HTML string for hero section
   */
  hero: (data) => {
    // Validate required data
    if (!data || !data.title || !data.tagline) {
      logWarning("Hero component missing required data", data);
      return '<div class="error-message">Hero section unavailable</div>';
    }

    try {
      // Resolve path based on current location
      let ctaLink = data.ctaButton ? data.ctaButton.link : "";
      if (ctaLink && typeof resolvePath === "function") {
        ctaLink = resolvePath(ctaLink);
      }

      return `
        <section class="hero">
          <div class="container">
            <h1>${escapeHtml(data.title)}</h1>
            <p class="tagline">${escapeHtml(data.tagline)}</p>
            ${
              data.ctaButton && data.ctaButton.text
                ? `
              <button type="button" class="cta-button" onclick="window.location.href='${escapeHtml(ctaLink)}'" aria-label="${escapeHtml(data.ctaButton.text)}">
                ${escapeHtml(data.ctaButton.text)}
              </button>
            `
                : ""
            }
          </div>
        </section>
      `;
    } catch (error) {
      logWarning("Error rendering hero component", error);
      return '<div class="error-message">Hero section unavailable</div>';
    }
  },

  /**
   * Renders a call-to-action section with heading and button
   * @param {CTASection} data - CTA section data object
   * @param {string} data.heading - CTA section heading
   * @param {string} [data.description] - Optional CTA description text
   * @param {CTAButton} data.button - CTA button configuration
   * @param {string} data.button.text - Button text
   * @param {string} data.button.link - Button destination URL
   * @returns {string} HTML string for CTA section
   */
  ctaSection: (data) => {
    // Validate required data
    if (
      !data ||
      !data.heading ||
      !data.button ||
      !data.button.text ||
      !data.button.link
    ) {
      logWarning("CTA section missing required data", data);
      return '<div class="error-message">CTA section unavailable</div>';
    }

    try {
      // Resolve path based on current location
      let buttonLink = data.button ? data.button.link : "";
      if (buttonLink && typeof resolvePath === "function") {
        buttonLink = resolvePath(buttonLink);
      }

      return `
        <section class="cta-section">
          <div class="container">
            <h2>${escapeHtml(data.heading)}</h2>
            ${data.description ? `<p>${escapeHtml(data.description)}</p>` : ""}
            <button type="button" class="cta-button" onclick="window.location.href='${escapeHtml(buttonLink)}'" aria-label="${escapeHtml(data.button.text)}">
              ${escapeHtml(data.button.text)}
            </button>
          </div>
        </section>
      `;
    } catch (error) {
      logWarning("Error rendering CTA section", error);
      return '<div class="error-message">CTA section unavailable</div>';
    }
  },

  /**
   * Renders a page header section for service/project pages
   * @param {PageData} data - Page header data object
   * @param {string} data.title - Page title
   * @param {string} [data.subtitle] - Optional page subtitle
   * @returns {string} HTML string for page header section
   */
  pageHeader: (data) => {
    // Validate required data
    if (!data || !data.title) {
      logWarning("Page header component missing required data", data);
      return '<div class="error-message">Page header unavailable</div>';
    }

    try {
      return `
        <section class="page-header">
          <div class="container">
            <h1>${escapeHtml(data.title)}</h1>
            ${data.subtitle ? `<p class="tagline">${escapeHtml(data.subtitle)}</p>` : ""}
          </div>
        </section>
      `;
    } catch (error) {
      logWarning("Error rendering page header component", error);
      return '<div class="error-message">Page header unavailable</div>';
    }
  },
};

/**
 * Renders service page sections (hero, CTA, services, clients, testimonials)
 * @param {string} pageName - Key name of the page in siteData.pages (e.g., 'platform', 'strategyConsulting')
 * @returns {void}
 */
function renderServicePage(pageName) {
  if (!siteData.pages || !siteData.pages[pageName]) return;

  const pageData = siteData.pages[pageName];
  const SELECTORS =
    typeof CONFIG !== "undefined"
      ? CONFIG.SELECTORS
      : {
          HERO: "hero-container",
          CTA: "cta-container",
        };

  // Render Hero section
  const heroContainer = document.getElementById(SELECTORS.HERO);
  if (heroContainer && pageData.hero) {
    heroContainer.innerHTML = components.hero(pageData.hero);
  }

  // Render CTA section
  const ctaContainer = document.getElementById(SELECTORS.CTA);
  if (ctaContainer && pageData.cta) {
    ctaContainer.innerHTML = components.ctaSection(pageData.cta);
  }

  // Also render services/clients/testimonials if they exist on this page
  // This allows service index pages to show the service cards
  renderComponents({ skipHomepage: true });
}

/**
 * Renders all homepage sections from siteData.homepage
 * Includes hero, about us, how we work, clients, fans, projects, and CTA sections
 * @returns {void}
 */
function renderHomepageSections() {
  if (!siteData.homepage) return;

  // Use CONFIG.SELECTORS if available, otherwise fall back to string IDs
  const SELECTORS =
    typeof CONFIG !== "undefined"
      ? CONFIG.SELECTORS
      : {
          HERO: "hero-container",
          ABOUT_US: "about-us-content",
          HOW_WE_WORK: "how-we-work-content",
          CLIENTS_CONTENT: "clients-content",
          FANS_CONTENT: "fans-content",
          PROJECTS_CONTENT: "projects-content",
          CTA: "cta-container",
        };

  // Render Hero section
  const heroContainer = document.getElementById(SELECTORS.HERO);
  if (heroContainer && siteData.homepage.hero) {
    heroContainer.innerHTML = components.hero(siteData.homepage.hero);
  }

  // Render About Us section
  const aboutUsContainer = document.getElementById(SELECTORS.ABOUT_US);
  if (aboutUsContainer && siteData.homepage.aboutUs) {
    aboutUsContainer.innerHTML = components.sectionWithIntro(
      siteData.homepage.aboutUs,
    );
  }

  // Render How We Work section
  const howWeWorkContainer = document.getElementById(SELECTORS.HOW_WE_WORK);
  if (howWeWorkContainer && siteData.homepage.howWeWork) {
    howWeWorkContainer.innerHTML = components.sectionWithIntro(
      siteData.homepage.howWeWork,
    );
  }

  // Render Clients section
  const clientsContentContainer = document.getElementById(
    SELECTORS.CLIENTS_CONTENT,
  );
  if (clientsContentContainer && siteData.homepage.clients) {
    clientsContentContainer.innerHTML = components.sectionWithIntro(
      siteData.homepage.clients,
    );
  }

  // Render Fans section
  const fansContainer = document.getElementById(SELECTORS.FANS_CONTENT);
  if (fansContainer && siteData.homepage.fans) {
    fansContainer.innerHTML = components.sectionWithIntro(
      siteData.homepage.fans,
    );
  }

  // Render Projects section
  const projectsContentContainer = document.getElementById(
    SELECTORS.PROJECTS_CONTENT,
  );
  if (projectsContentContainer && siteData.homepage.projects) {
    projectsContentContainer.innerHTML = components.sectionWithIntro(
      siteData.homepage.projects,
    );
  }

  // Render CTA section
  const ctaContainer = document.getElementById(SELECTORS.CTA);
  if (ctaContainer && siteData.homepage.cta) {
    ctaContainer.innerHTML = components.ctaSection(siteData.homepage.cta);
  }
}

/**
 * Main rendering function that populates page containers with components
 * Renders testimonials carousel, services cards, and client logos
 * @param {Object} [options={}] - Rendering options
 * @param {boolean} [options.skipHomepage=false] - If true, skips rendering homepage-specific sections
 * @returns {void}
 */
function renderComponents(options = {}) {
  const { skipHomepage = false } = options;

  // Render homepage sections from data (unless explicitly skipped)
  if (!skipHomepage) {
    renderHomepageSections();
  }

  // Use CONFIG.SELECTORS if available
  const SELECTORS =
    typeof CONFIG !== "undefined"
      ? CONFIG.SELECTORS
      : {
          TESTIMONIALS: "testimonials",
          TESTIMONIAL_INDICATORS: "testimonial-indicators",
          SERVICES: "services",
          CLIENTS: "clients",
        };

  // Render testimonials carousel
  const testimonialContainer = document.getElementById(SELECTORS.TESTIMONIALS);
  if (testimonialContainer && siteData.testimonials) {
    // Create carousel structure
    const testimonialsHTML = `
      <div class="testimonials-carousel-container" role="region" aria-label="Customer testimonials carousel">
        <div class="testimonials-carousel" role="list" aria-live="polite">
          ${siteData.testimonials.map((item) => components.testimonial(item)).join("")}
        </div>
        <button type="button" class="carousel-control carousel-control-prev" onclick="previousTestimonial()" aria-label="Previous testimonial">
          <span class="carousel-control-icon" aria-hidden="true">‹</span>
        </button>
        <button type="button" class="carousel-control carousel-control-next" onclick="nextTestimonial()" aria-label="Next testimonial">
          <span class="carousel-control-icon" aria-hidden="true">›</span>
        </button>
      </div>
      <div class="carousel-indicators" id="${SELECTORS.TESTIMONIAL_INDICATORS}" role="tablist" aria-label="Testimonial indicators"></div>
    `;
    testimonialContainer.innerHTML = testimonialsHTML;

    // Initialize indicators
    initializeTestimonialIndicators();

    // Add keyboard navigation support
    initializeCarouselKeyboardNavigation();
  }

  // Render services
  const servicesContainer = document.getElementById(SELECTORS.SERVICES);
  if (servicesContainer && siteData.services) {
    // Check if we're on the services index page
    const isServicesPage =
      window.location.pathname.includes("/pages/services/index.html") ||
      window.location.pathname.endsWith("/pages/services/");

    // Separate full-width and regular services
    const fullWidthServices = siteData.services.filter((s) => s.fullWidth);
    const regularServices = siteData.services.filter((s) => !s.fullWidth);

    // Render full-width services first, then regular services in a grid
    let servicesHTML = `<div role="list" aria-label="Our services">`;
    servicesHTML += fullWidthServices
      .map(
        (item) =>
          `<div role="listitem">${components.serviceCard(item, { removeServicesPrefix: isServicesPage })}</div>`,
      )
      .join("");

    if (regularServices.length > 0) {
      servicesHTML += `<div class="services-grid-three">`;
      servicesHTML += regularServices
        .map(
          (item) =>
            `<div role="listitem">${components.serviceCard(item, {
              removeServicesPrefix: isServicesPage,
            })}</div>`,
        )
        .join("");
      servicesHTML += `</div>`;
    }
    servicesHTML += `</div>`;

    servicesContainer.innerHTML = servicesHTML;
  }

  // Render clients
  const clientsContainer = document.getElementById(SELECTORS.CLIENTS);
  if (clientsContainer && siteData.clients) {
    // Set ARIA attributes on the container itself
    clientsContainer.setAttribute("role", "list");
    clientsContainer.setAttribute("aria-label", "Our clients");
    // Render client logos directly without wrapper
    clientsContainer.innerHTML = siteData.clients
      .map((item) => components.clientLogo(item))
      .join("");
  }

  // Projects are now rendered via js/projects.js
}

/**
 * Current index of the active testimonial in the carousel
 * @type {number}
 */
let currentTestimonialIndex = 0;

/**
 * Initializes testimonial carousel indicators and displays first testimonial
 * Creates clickable indicator dots for each testimonial
 * @returns {void}
 */
function initializeTestimonialIndicators() {
  const SELECTORS =
    typeof CONFIG !== "undefined"
      ? CONFIG.SELECTORS
      : {
          TESTIMONIAL_INDICATORS: "testimonial-indicators",
        };
  const indicatorsContainer = document.getElementById(
    SELECTORS.TESTIMONIAL_INDICATORS,
  );
  if (indicatorsContainer && siteData.testimonials) {
    indicatorsContainer.innerHTML = siteData.testimonials
      .map(
        (_, index) =>
          `<button type="button" class="carousel-indicator ${index === 0 ? "active" : ""}" onclick="goToTestimonial(${index})" role="tab" aria-label="Go to testimonial ${index + 1}" aria-selected="${index === 0}"></button>`,
      )
      .join("");
  }
  updateTestimonialDisplay();
}

/**
 * Updates the testimonial carousel display to show current testimonial
 * Animates carousel position and updates indicator states
 * @returns {void}
 */
function updateTestimonialDisplay() {
  const carousel = document.querySelector(".testimonials-carousel");
  const indicators = document.querySelectorAll(".carousel-indicator");
  const container = document.querySelector(".testimonials-carousel-container");

  if (carousel && container) {
    const containerWidth = container.offsetWidth;
    const gap = 32; // 2rem = 32px gap between cards
    const translateAmount = currentTestimonialIndex * (containerWidth + gap);
    carousel.style.transform = `translateX(-${translateAmount}px)`;
  }

  indicators.forEach((indicator, index) => {
    const isActive = index === currentTestimonialIndex;
    indicator.classList.toggle("active", isActive);
    indicator.setAttribute("aria-selected", isActive);
  });
}

/**
 * Advances the testimonial carousel to the next testimonial
 * Loops back to first testimonial after the last one
 * @returns {void}
 */
function nextTestimonial() {
  if (siteData.testimonials) {
    currentTestimonialIndex =
      (currentTestimonialIndex + 1) % siteData.testimonials.length;
    updateTestimonialDisplay();
  }
}

/**
 * Moves the testimonial carousel to the previous testimonial
 * Loops back to last testimonial when at the first one
 * @returns {void}
 */
function previousTestimonial() {
  if (siteData.testimonials) {
    currentTestimonialIndex =
      (currentTestimonialIndex - 1 + siteData.testimonials.length) %
      siteData.testimonials.length;
    updateTestimonialDisplay();
  }
}

/**
 * Navigates the testimonial carousel to a specific testimonial by index
 * @param {number} index - Zero-based index of the testimonial to display
 * @returns {void}
 */
function goToTestimonial(index) {
  currentTestimonialIndex = index;
  updateTestimonialDisplay();
}

/**
 * Initializes keyboard navigation for the testimonial carousel
 * Adds support for arrow keys to navigate testimonials
 * @returns {void}
 */
function initializeCarouselKeyboardNavigation() {
  const carouselContainer = document.querySelector(
    ".testimonials-carousel-container",
  );
  if (carouselContainer) {
    carouselContainer.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        previousTestimonial();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        nextTestimonial();
      }
    });
  }
}

// Auto-render when DOM is ready
// Note: renderComponents and renderHomepageSections check for container existence,
// so it's safe to call on any page
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderComponents);
} else {
  renderComponents();
}
