// Breadcrumb component
// Renders a breadcrumb trail based on the current URL and siteData.breadcrumbs config

function renderBreadcrumbs() {
  const container = document.getElementById("breadcrumb-container");
  if (!container) return;

  // Move breadcrumb container to after the hero section (if one exists)
  const hero =
    document.querySelector("section.hero") ||
    document.getElementById("hero-container");
  if (hero) {
    hero.parentNode.insertBefore(container, hero.nextSibling);
  }

  const path = window.location.pathname;
  const pagesIndex = path.indexOf("/pages/");
  if (pagesIndex === -1) return;

  // Get the path after "pages/" and strip trailing slashes and file extensions
  const relativePath = path
    .substring(pagesIndex + "/pages/".length)
    .replace(/\/(index\.html)?$/, "")
    .replace(/\.html$/, "");

  if (!relativePath) return;

  const names = siteData.breadcrumbs || {};

  // Build breadcrumb chain by walking up the path segments
  // e.g. "services/platform/details/data-pipelines" produces:
  //   services -> services/platform -> services/platform/details/data-pipelines
  // We skip intermediate segments that have no config entry (like "details")
  const segments = relativePath.split("/");
  const crumbs = []; // { label, href }

  for (let i = 0; i < segments.length; i++) {
    const key = segments.slice(0, i + 1).join("/");
    const label = names[key];
    if (!label) continue;

    const isLast = key === relativePath;
    // Build href for this crumb: the key maps to pages/<key>/index.html or pages/<key>.html
    let href = null;
    if (!isLast) {
      // Section roots (blogs, projects, services) use index.html
      // Sub-sections (services/platform, services/strategy-consulting) use index.html
      const segmentCount = key.split("/").length;
      if (segmentCount <= 2) {
        href = resolvePath("pages/" + key + "/index.html");
      }
    }

    crumbs.push({ label, href, isLast });
  }

  if (crumbs.length === 0) return;

  // Build HTML with Home as the root
  const homeHref = resolvePath("index.html");
  let items = `<li><a href="${homeHref}">Home</a></li>`;

  for (const crumb of crumbs) {
    items += `<li><span class="separator" aria-hidden="true">/</span>`;
    if (crumb.isLast) {
      items += `<span class="current" aria-current="page">${crumb.label}</span>`;
    } else if (crumb.href) {
      items += `<a href="${crumb.href}">${crumb.label}</a>`;
    } else {
      items += `<span>${crumb.label}</span>`;
    }
    items += `</li>`;
  }

  container.innerHTML = `
    <div class="breadcrumbs">
      <div class="container">
        <nav aria-label="Breadcrumb">
          <ol>${items}</ol>
        </nav>
      </div>
    </div>
  `;
}

// Auto-render when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderBreadcrumbs);
} else {
  renderBreadcrumbs();
}
