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
  serviceCard: (data) => `
    <div class="service-card">
      <h3>${data.title}</h3>
      <p>${data.description}</p>
      <a href="${data.url}">
        <button class="cta-button">${data.cta}</button>
      </a>
    </div>
  `,

  // Client logo component
  clientLogo: (data) => `
    <div class="client-logo">
      <img src="${data.logo}" alt="${data.name}" class="client-logo-img">
    </div>
  `,

  // Project card component
  projectCard: (data) => {
    const outcomeHtml = Array.isArray(data.outcome)
      ? `<div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 0.5rem;">${data.outcome.map((item) => `<div>${item}</div>`).join("")}</div>`
      : data.outcome;

    return `
      <div class="content-card">
        <div class="card-tag">${data.client}</div>
        <h3>${data.title}</h3>
        <p>${data.description}</p>
        <div class="card-meta"><strong>Outcomes:</strong> ${outcomeHtml}</div>
        <a href="pages/projects/${data.slug}.html" class="read-more">Read Case Study →</a>
      </div>
    `;
  },
};

// Render function that populates containers with components
function renderComponents() {
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
    servicesContainer.innerHTML = siteData.services
      .map((item) => components.serviceCard(item))
      .join("");
  }

  // Render clients
  const clientsContainer = document.getElementById("clients");
  if (clientsContainer && siteData.clients) {
    clientsContainer.innerHTML = siteData.clients
      .map((item) => components.clientLogo(item))
      .join("");
  }

  // Render projects (limit to 6 on homepage)
  const projectsContainer = document.getElementById("projects");
  if (projectsContainer && siteData.projects) {
    const projectsToShow = siteData.projects.slice(0, 9);
    projectsContainer.innerHTML = projectsToShow
      .map((item) => components.projectCard(item))
      .join("");
  }
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
