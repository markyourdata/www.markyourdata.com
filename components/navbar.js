// Navigation bar component
// Automatically determines the correct path based on current page location

function createNavbar(activePage = "home") {
  // Determine the base path based on current location
  const path = window.location.pathname;

  // Count how many levels deep we are from the root
  const pathParts = path.split("/").filter((part) => part !== "");
  const pagesIndex = pathParts.indexOf("pages");

  let basePath = ".";
  if (pagesIndex !== -1) {
    // Calculate depth: how many folders after 'pages'
    const depth = pathParts.length - pagesIndex - 1;
    basePath = "../".repeat(depth + 1).slice(0, -1) || ".";
  }

  const navbar = `
    <nav class="navbar">
      <div class="container nav-container">
        <a href="${basePath}/index.html" class="logo">
          <img src="${basePath}/assets/images/logo_myd_rond.png" alt="Mark Your Data" class="logo-img" />
          <span class="logo-text">MARK YOUR DATA</span>
        </a>
        <button class="hamburger" onclick="toggleMobileMenu()" aria-label="Toggle menu">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
        <ul class="nav-menu" id="nav-menu">
          <li><a href="${basePath}/index.html" class="nav-link ${activePage === "home" ? "active" : ""}">Home</a></li>
          <li><a href="${basePath}/pages/services/index.html" class="nav-link ${activePage === "services" ? "active" : ""}">Services</a></li>
          <li><a href="${basePath}/pages/projects/index.html" class="nav-link ${activePage === "projects" ? "active" : ""}">Projects</a></li>
          <li><a href="${basePath}/pages/blogs/index.html" class="nav-link ${activePage === "blogs" ? "active" : ""}">Blog</a></li>
          <li><a href="${basePath}/pages/about.html" class="nav-link ${activePage === "about" ? "active" : ""}">About</a></li>
          <li><a href="${basePath}/pages/contact.html" class="nav-link ${activePage === "contact" ? "active" : ""}">Contact</a></li>
        </ul>
      </div>
    </nav>
  `;

  return navbar;
}

// Render the navbar when the page loads
function renderNavbar(activePage = "home") {
  const navContainer = document.getElementById("navbar-container");
  if (navContainer) {
    navContainer.innerHTML = createNavbar(activePage);
  }
}

// Auto-detect active page from URL if not specified
function getActivePage() {
  const path = window.location.pathname;

  if (path.includes("/pages/services/")) return "services";
  if (path.includes("/pages/projects/")) return "projects";
  if (path.includes("/pages/blogs/")) return "blogs";
  if (path.includes("/pages/about.html")) return "about";
  if (path.includes("/pages/contact.html")) return "contact";
  return "home";
}

// Toggle mobile menu
function toggleMobileMenu() {
  const navMenu = document.getElementById("nav-menu");
  const hamburger = document.querySelector(".hamburger");

  if (navMenu && hamburger) {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  }
}

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  const navMenu = document.getElementById("nav-menu");
  const hamburger = document.querySelector(".hamburger");

  if (navMenu && hamburger && navMenu.classList.contains("active")) {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
    }
  }
});

// Auto-render when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    renderNavbar(getActivePage());
  });
} else {
  renderNavbar(getActivePage());
}
