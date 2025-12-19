// Carousel functionality for client logos

// Duplicate clients for truly infinite scroll
function initializeInfiniteCarousel() {
  const clientsContainer = document.getElementById("clients");

  if (clientsContainer) {
    const clientLogos = Array.from(clientsContainer.children);

    // Clone all logos to create seamless loop
    // We need enough copies to fill more than 2x the viewport width
    const copiesNeeded = Math.max(
      3,
      Math.ceil(window.innerWidth / (clientLogos.length * 220)),
    );

    for (let i = 0; i < copiesNeeded; i++) {
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
