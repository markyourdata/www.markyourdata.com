// Simple markdown renderer for content pages
// This uses the Marked.js library loaded from CDN

async function renderMarkdown() {
  // Get the markdown file path from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const mdFile = getMarkdownFilePath();

  if (!mdFile) {
    document.getElementById("content").innerHTML =
      "<p>Error: No markdown file specified</p>";
    return;
  }

  try {
    // Fetch the markdown file
    const response = await fetch(mdFile);
    if (!response.ok) {
      throw new Error(`Failed to load ${mdFile}`);
    }

    const markdown = await response.text();

    // Configure marked to allow HTML
    marked.setOptions({
      breaks: true,
      gfm: true,
      sanitize: false, // Allow HTML in markdown
    });

    // Convert markdown to HTML using marked.js
    const html = marked.parse(markdown);

    // Insert into content container
    document.getElementById("content").innerHTML = html;

    // Update page title if H1 exists
    const h1 = document.querySelector("#content h1");
    if (h1) {
      document.title = h1.textContent + " - Mark Your Data";
    }
  } catch (error) {
    console.error("Error loading markdown:", error);
    document.getElementById("content").innerHTML = `
      <div class="error-message">
        <h2>Content Not Found</h2>
        <p>Sorry, we couldn't load the requested content.</p>
        <p><a href="/index.html">Return to Home</a></p>
      </div>
    `;
  }
}

// Get markdown file path based on current HTML file
function getMarkdownFilePath() {
  const path = window.location.pathname;
  const fileName = path.split("/").pop().replace(".html", ".md");

  // Check if we're in a subdirectory
  if (path.includes("/pages/services/")) {
    return fileName;
  } else if (path.includes("/pages/projects/")) {
    return fileName;
  } else if (path.includes("/pages/blogs/")) {
    return fileName;
  }

  return null;
}

// Run when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderMarkdown);
} else {
  renderMarkdown();
}
