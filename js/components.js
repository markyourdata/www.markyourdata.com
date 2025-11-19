// Component templates that render data into HTML

const components = {
  // Testimonial component
  testimonial: (data) => `
    <div class="testimonial">
      <blockquote>"${data.quote}"</blockquote>
      <cite>— ${data.author}, ${data.company}</cite>
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
};

// Render function that populates containers with components
function renderComponents() {
  // Render testimonials
  const testimonialContainer = document.getElementById("testimonials");
  if (testimonialContainer && siteData.testimonials) {
    testimonialContainer.innerHTML = siteData.testimonials
      .map((item) => components.testimonial(item))
      .join("");
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
}

// Auto-render when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderComponents);
} else {
  renderComponents();
}
