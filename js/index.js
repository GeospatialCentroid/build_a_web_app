document.addEventListener('DOMContentLoaded', () => {
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