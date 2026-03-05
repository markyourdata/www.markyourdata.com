// Cloud toggle component
// Renders a cloud provider selector with architecture image and key components list.
// Requires data/platform-clouds.js (defines platformCloudsData) and js/config.js
// (defines resolvePath) to be loaded first.
// Expects a #cloud-toggle-container element in the page.
//
// Cloud data supports two formats:
//   - sections: [{ title, components[] }]  renders a heading + list per section
//   - components: []                        renders a single "Key components" list

function renderCloudToggle() {
  const container = document.getElementById("cloud-toggle-container");
  if (!container) return;

  const data = platformCloudsData;
  const cloudsMap = {};
  data.clouds.forEach((c) => (cloudsMap[c.id] = c));

  function buildComponentItem(comp) {
    let text = comp.description || "";
    if (comp.link) {
      const href = resolvePath(comp.link.path);
      text += ` <a href="${href}">${comp.link.text}</a>`;
    }
    if (comp.suffix) {
      text += comp.suffix;
    }
    return `<li><strong>${comp.label}</strong> - ${text}</li>`;
  }

  function buildContent(cloud) {
    if (cloud.sections) {
      return cloud.sections
        .map(
          (section) => `
          <h3>${section.title}</h3>
          <ul class="list-benefits">
            ${section.components.map(buildComponentItem).join("")}
          </ul>`
        )
        .join("");
    }
    return `
      <h3>Key components</h3>
      <ul class="list-benefits">
        ${cloud.components.map(buildComponentItem).join("")}
      </ul>`;
  }

  function buildMeta(cloud) {
    let html = "";
    if (cloud.intro) {
      html += `<p class="cloud-intro">${cloud.intro}</p>`;
    }
    if (cloud.customization) {
      const c = cloud.customization;
      let text = c.text || "";
      if (c.link) {
        text += ` <a href="${resolvePath(c.link.path)}">${c.link.text}</a>`;
      }
      if (c.suffix) text += c.suffix;
      html += `<p class="cloud-customization">${text}</p>`;
    }
    return html;
  }

  function renderCloud(cloudId) {
    const cloud = cloudsMap[cloudId];
    if (!cloud) return;
    container.querySelector("img").src = resolvePath(cloud.image);
    container.querySelector("img").alt = cloud.imageAlt;
    container.querySelector(".cloud-meta-area").innerHTML = buildMeta(cloud);
    container.querySelector(".cloud-content-area").innerHTML = buildContent(cloud);
  }

  const defaultId = data.defaultCloud || data.clouds[0].id;
  const defaultCloud = cloudsMap[defaultId];

  const buttonsHtml = data.clouds
    .map(
      (c) =>
        `<button class="cloud-toggle-btn${c.id === defaultId ? " active" : ""}" data-cloud="${c.id}" aria-pressed="${c.id === defaultId}">${c.label}</button>`
    )
    .join("");

  container.innerHTML = `
    <div class="cloud-toggle" role="group" aria-label="Select cloud provider">
      ${buttonsHtml}
    </div>
    <div class="image-container">
      <img
        src="${resolvePath(defaultCloud.image)}"
        alt="${defaultCloud.imageAlt}"
        loading="lazy"
        class="featured-service-image"
      />
    </div>
    <div class="cloud-meta-area">
      ${buildMeta(defaultCloud)}
    </div>
    <div class="cloud-content-area">
      ${buildContent(defaultCloud)}
    </div>
  `;

  container.querySelectorAll(".cloud-toggle-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      container.querySelectorAll(".cloud-toggle-btn").forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      renderCloud(btn.dataset.cloud);
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderCloudToggle);
} else {
  renderCloudToggle();
}
