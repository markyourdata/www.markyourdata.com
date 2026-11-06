// Talks/podcasts rendering

/**
 * Renders talks into a container
 * @param {string} containerId - ID of the container element
 * @param {Object} [options={}] - Rendering options
 * @param {string} [options.projectBaseUrl] - Base URL to prefix a related project's slug with
 */
function renderTalks(containerId, options = {}) {
  const container = document.getElementById(containerId);
  if (!container || !siteData.talks) {
    return;
  }

  container.innerHTML = siteData.talks
    .map((talk) => components.talkCard(talk, options))
    .join("");
}
