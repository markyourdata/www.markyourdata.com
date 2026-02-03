// Project rendering component with filtering support

/**
 * Renders projects into a container with optional filtering
 * @param {string} containerId - ID of the container element
 * @param {Object} options - Rendering options
 * @param {string[]} options.includeSlugs - Array of project slugs to include (if specified, only these will show)
 * @param {string[]} options.excludeSlugs - Array of project slugs to exclude
 * @param {number} options.limit - Maximum number of projects to show
 * @param {string} options.baseUrl - Base URL for project links (default: '/pages/projects/')
 * @param {boolean} options.compact - If true, renders a simpler compact card style
 */
function renderProjects(containerId, options = {}) {
  const container = document.getElementById(containerId);
  if (!container || !siteData.projects) {
    return;
  }

  // Determine the base path for project links
  const path = window.location.pathname;
  const pathParts = path.split("/").filter((part) => part !== "");
  const pagesIndex = pathParts.indexOf("pages");

  let calculatedBaseUrl = "pages/projects/";
  if (pagesIndex !== -1) {
    // Calculate depth: how many folders after 'pages' (excluding the filename)
    // e.g., /pages/services/index.html -> pathParts = ["pages", "services", "index.html"]
    // We want depth = 1 (just "services" folder), so we go up 1 level to reach /pages/, then into projects/
    const depth = pathParts.length - pagesIndex - 2; // -2 to exclude both 'pages' and the filename
    calculatedBaseUrl = "../".repeat(depth) + "projects/";
  }

  const {
    includeSlugs = null,
    excludeSlugs = [],
    limit = null,
    baseUrl = calculatedBaseUrl,
    logoPrefix = null,
    compact = false,
  } = options;

  // Create a map of client names to logos
  const clientLogoMap = {};
  if (siteData.clients) {
    siteData.clients.forEach((client) => {
      clientLogoMap[client.name] = client.logo;
    });
  }

  // Filter projects based on options
  let filteredProjects = siteData.projects;

  // If includeSlugs is specified, only show those projects
  if (includeSlugs && includeSlugs.length > 0) {
    filteredProjects = filteredProjects.filter((project) =>
      includeSlugs.includes(project.slug),
    );
  }

  // Exclude specific slugs
  if (excludeSlugs.length > 0) {
    filteredProjects = filteredProjects.filter(
      (project) => !excludeSlugs.includes(project.slug),
    );
  }

  // Apply limit if specified
  if (limit && limit > 0) {
    filteredProjects = filteredProjects.slice(0, limit);
  }

  // Determine logo path - use absolute path from root
  // Logos are always at /assets/images/clients/ from the domain root
  const finalLogoPrefix = logoPrefix !== null ? logoPrefix : "/";

  // Render projects
  container.innerHTML = filteredProjects
    .map((project) => {
      // Get the logo for this client
      const clientLogo = clientLogoMap[project.client];
      const logoHtml = clientLogo
        ? `<div class="project-client-logo"><img src="${finalLogoPrefix}${clientLogo}" alt="${project.client}" loading="lazy" /></div>`
        : "";

      // Compact card style for less prominent display
      if (compact) {
        const compactLogoHtml = clientLogo
          ? `<img src="${finalLogoPrefix}${clientLogo}" alt="${project.client}" class="project-card-compact-logo" />`
          : `<div class="card-tag">${project.client}</div>`;

        return `
          <a href="${baseUrl}${project.slug}.html" class="project-card-compact">
            <div class="project-card-compact-content">
              ${compactLogoHtml}
              <h3>${project.title}</h3>
              <span class="read-more-arrow">→</span>
            </div>
          </a>
        `;
      }

      // Full card style for featured projects
      const outcomeHtml = Array.isArray(project.outcome)
        ? `<div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 0.5rem;">${project.outcome.map((item) => `<div>${item}</div>`).join("")}</div>`
        : project.outcome;

      return `
        <div class="content-card">
          ${logoHtml}
          <div class="card-tag">${project.client}</div>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="card-meta"><strong>Outcomes:</strong> ${outcomeHtml}</div>
          <a href="${baseUrl}${project.slug}.html" class="read-more">Read Case Study →</a>
        </div>
      `;
    })
    .join("");
}
