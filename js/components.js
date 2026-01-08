// Component templates that render data into HTML

const components = {
  // Testimonial component
  testimonial: (data) => `
    <div class="testimonial">
      <div class="testimonial-image">
        ${data.image ? `<img src="${data.image}" alt="${data.author}">` : `<div class="testimonial-placeholder">${data.author.charAt(0)}</div>`}
      </div>
      <div class="testimonial-content">
        <blockquote>"${data.quote}"</blockquote>
        <cite>— ${data.author}, ${data.company}</cite>
      </div>
    </div>
  `,

  // Service card component
  serviceCard: (data, options = {}) => {
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
        <h3>${data.title}</h3>
        <p>${data.description}</p>
        <a href="${url}">
          <button class="cta-button">${data.cta}</button>
        </a>
      </div>
    `;
  },

  // Client logo component
  clientLogo: (data) => `
    <div class="client-logo">
      <img src="${data.logo}" alt="${data.name}" class="client-logo-img">
    </div>
  `,

  // Section heading with intro text
  sectionWithIntro: (data) => `
    <h2>${data.heading}</h2>
    <p class="section-intro">${data.text}</p>
  `,

  // Hero section component
  hero: (data) => `
    <section class="hero">
      <div class="container">
        <h1>${data.title}</h1>
        <p class="tagline">${data.tagline}</p>
        ${
          data.ctaButton
            ? `
          <button class="cta-button" onclick="window.location.href='${data.ctaButton.link}'">
            ${data.ctaButton.text}
          </button>
        `
            : ""
        }
      </div>
    </section>
  `,

  // CTA section component
  ctaSection: (data) => `
    <section class="cta-section">
      <div class="container">
        <h2>${data.heading}</h2>
        ${data.description ? `<p>${data.description}</p>` : ""}
        <button class="cta-button" onclick="window.location.href='${data.button.link}'">
          ${data.button.text}
        </button>
      </div>
    </section>
  `,

  // Page header component (for service/project pages)
  pageHeader: (data) => `
    <section class="page-header">
      <div class="container">
        <h1>${data.title}</h1>
        ${data.subtitle ? `<p class="tagline">${data.subtitle}</p>` : ""}
      </div>
    </section>
  `,
};

// Helper function to render homepage sections from data
function renderHomepageSections() {
  if (!siteData.homepage) return;

  // Render Hero section
  const heroContainer = document.getElementById("hero-container");
  if (heroContainer && siteData.homepage.hero) {
    heroContainer.innerHTML = components.hero(siteData.homepage.hero);
  }

  // Render About Us section
  const aboutUsContainer = document.getElementById("about-us-content");
  if (aboutUsContainer && siteData.homepage.aboutUs) {
    aboutUsContainer.innerHTML = components.sectionWithIntro(
      siteData.homepage.aboutUs,
    );
  }

  // Render How We Work section
  const howWeWorkContainer = document.getElementById("how-we-work-content");
  if (howWeWorkContainer && siteData.homepage.howWeWork) {
    howWeWorkContainer.innerHTML = components.sectionWithIntro(
      siteData.homepage.howWeWork,
    );
  }

  // Render Clients section
  const clientsContentContainer = document.getElementById("clients-content");
  if (clientsContentContainer && siteData.homepage.clients) {
    clientsContentContainer.innerHTML = components.sectionWithIntro(
      siteData.homepage.clients,
    );
  }

  // Render Fans section
  const fansContainer = document.getElementById("fans-content");
  if (fansContainer && siteData.homepage.fans) {
    fansContainer.innerHTML = components.sectionWithIntro(
      siteData.homepage.fans,
    );
  }

  // Render Projects section
  const projectsContentContainer = document.getElementById("projects-content");
  if (projectsContentContainer && siteData.homepage.projects) {
    projectsContentContainer.innerHTML = components.sectionWithIntro(
      siteData.homepage.projects,
    );
  }

  // Render CTA section
  const ctaContainer = document.getElementById("cta-container");
  if (ctaContainer && siteData.homepage.cta) {
    ctaContainer.innerHTML = components.ctaSection(siteData.homepage.cta);
  }
}

// Render function that populates containers with components
function renderComponents() {
  // Render homepage sections from data
  renderHomepageSections();

  // Render testimonials carousel
  const testimonialContainer = document.getElementById("testimonials");
  if (testimonialContainer && siteData.testimonials) {
    // Create carousel structure
    const testimonialsHTML = `
      <div class="testimonials-carousel-container">
        <div class="testimonials-carousel">
          ${siteData.testimonials.map((item) => components.testimonial(item)).join("")}
        </div>
        <button class="carousel-control carousel-control-prev" onclick="previousTestimonial()" aria-label="Previous testimonial">
          <span class="carousel-control-icon">‹</span>
        </button>
        <button class="carousel-control carousel-control-next" onclick="nextTestimonial()" aria-label="Next testimonial">
          <span class="carousel-control-icon">›</span>
        </button>
      </div>
      <div class="carousel-indicators" id="testimonial-indicators"></div>
    `;
    testimonialContainer.innerHTML = testimonialsHTML;

    // Initialize indicators
    initializeTestimonialIndicators();
  }

  // Render services
  const servicesContainer = document.getElementById("services");
  if (servicesContainer && siteData.services) {
    // Check if we're on the services index page
    const isServicesPage =
      window.location.pathname.includes("/pages/services/index.html") ||
      window.location.pathname.endsWith("/pages/services/");

    // Separate full-width and regular services
    const fullWidthServices = siteData.services.filter((s) => s.fullWidth);
    const regularServices = siteData.services.filter((s) => !s.fullWidth);

    // Render full-width services first, then regular services in a grid
    let servicesHTML = fullWidthServices
      .map((item) =>
        components.serviceCard(item, { removeServicesPrefix: isServicesPage }),
      )
      .join("");

    if (regularServices.length > 0) {
      servicesHTML += `<div class="services-grid-three">`;
      servicesHTML += regularServices
        .map((item) =>
          components.serviceCard(item, {
            removeServicesPrefix: isServicesPage,
          }),
        )
        .join("");
      servicesHTML += `</div>`;
    }

    servicesContainer.innerHTML = servicesHTML;
  }

  // Render clients
  const clientsContainer = document.getElementById("clients");
  if (clientsContainer && siteData.clients) {
    clientsContainer.innerHTML = siteData.clients
      .map((item) => components.clientLogo(item))
      .join("");
  }

  // Projects are now rendered via js/projects.js
}

// Testimonial carousel state
let currentTestimonialIndex = 0;

function initializeTestimonialIndicators() {
  const indicatorsContainer = document.getElementById("testimonial-indicators");
  if (indicatorsContainer && siteData.testimonials) {
    indicatorsContainer.innerHTML = siteData.testimonials
      .map(
        (_, index) =>
          `<button class="carousel-indicator ${index === 0 ? "active" : ""}" onclick="goToTestimonial(${index})" aria-label="Go to testimonial ${index + 1}"></button>`,
      )
      .join("");
  }
  updateTestimonialDisplay();
}

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
    indicator.classList.toggle("active", index === currentTestimonialIndex);
  });
}

function nextTestimonial() {
  if (siteData.testimonials) {
    currentTestimonialIndex =
      (currentTestimonialIndex + 1) % siteData.testimonials.length;
    updateTestimonialDisplay();
  }
}

function previousTestimonial() {
  if (siteData.testimonials) {
    currentTestimonialIndex =
      (currentTestimonialIndex - 1 + siteData.testimonials.length) %
      siteData.testimonials.length;
    updateTestimonialDisplay();
  }
}

function goToTestimonial(index) {
  currentTestimonialIndex = index;
  updateTestimonialDisplay();
}

// Auto-render when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderComponents);
} else {
  renderComponents();
}
