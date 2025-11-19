// Carousel functionality for client logos

// Duplicate clients multiple times for truly infinite scroll
function initializeInfiniteCarousel() {
  const clientsContainer = document.getElementById("clients");

  if (clientsContainer) {
    const clientLogos = Array.from(clientsContainer.children);

    // Clone all logos multiple times to ensure smooth infinite loop
    // We'll create 3 copies so there's always content in view
    for (let i = 0; i < 3; i++) {
      clientLogos.forEach((logo) => {
        const clone = logo.cloneNode(true);
        clientsContainer.appendChild(clone);
      });
    }
  }
}

// Initialize carousel when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      initializeInfiniteCarousel();
    }, 100);
  });
} else {
  setTimeout(() => {
    initializeInfiniteCarousel();
  }, 100);
}
