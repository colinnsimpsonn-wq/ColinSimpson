// Basic JS for the scaffolded site
// - highlight the active nav link
// - small enhancement: focus outline on internal navigation

document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.main-nav .nav-link');
  links.forEach(link => {
    if (link.href === window.location.href || link.href === window.location.pathname.split('/').pop()) {
      link.classList.add('active');
    }
  });

  // Accessibility: add keyboard focus style on tab
  document.body.addEventListener('keyup', function (e) {
    if (e.key === 'Tab') document.body.classList.add('show-focus');
  });
});

// Contact form behavior: open mail client with form data (mailto)
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = encodeURIComponent(document.getElementById('name').value || '');
    const email = encodeURIComponent(document.getElementById('email').value || '');
    const message = encodeURIComponent(document.getElementById('message').value || '');

    const subject = encodeURIComponent('Contact from website');
    const body = encodeURIComponent(`Name: ${decodeURIComponent(name)}\nEmail: ${decodeURIComponent(email)}\n\n${decodeURIComponent(message)}`);

    // open mail client
    window.location.href = `mailto:colinnsimpsonn@gmail.com?subject=${subject}&body=${body}`;
  });
});
