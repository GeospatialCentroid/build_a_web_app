document.addEventListener('DOMContentLoaded', () => {

  enhanceExternalLinks();
  // create navigation
  fetch('nav.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('nav-placeholder').innerHTML = html;

      // Highlight current page
      const current = window.location.pathname.split('/').pop() || 'index.html';
      document.querySelectorAll('#site-nav a').forEach(link => {
        if (link.getAttribute('href') === current) {
          link.classList.add('active');
        }

        // Close mobile menu on click
        link.addEventListener('click', () => {
          document.querySelector('.nav-links').classList.remove('open');
        });
      });

      // Hamburger toggle
      document.querySelector('.nav-toggle')
        .addEventListener('click', () => {
          document.querySelector('.nav-links')
            .classList.toggle('open');
        });
    });
    
  });

  function enhanceExternalLinks() {
  const links = document.querySelectorAll("a[href^='http']");

  links.forEach(link => {
    const url = new URL(link.href);

    if (url.hostname !== window.location.hostname) {

      // Open in new tab
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");

      // Avoid duplicating icon if script runs twice
      if (!link.querySelector(".external-icon")) {

        const icon = document.createElement("span");
        icon.classList.add("external-icon");
        icon.innerHTML = "↗";  // simple unicode arrow

        link.appendChild(icon);
      }
    }
  });
}
