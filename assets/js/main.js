(function () {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');

  if (toggle && header && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = header.getAttribute('data-menu-open') === 'true';
      header.setAttribute('data-menu-open', String(!isOpen));
      toggle.setAttribute('aria-expanded', String(!isOpen));
    });

    nav.addEventListener('click', function (event) {
      if (event.target && event.target.tagName === 'A') {
        header.setAttribute('data-menu-open', 'false');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  var yearTarget = document.getElementById('current-year');
  if (yearTarget) {
    yearTarget.textContent = String(new Date().getFullYear());
  }
})();
