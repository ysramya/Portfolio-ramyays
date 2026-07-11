/* shared.js — scroll reveal + micro-interactions for ramyays.com */
(function () {
  /* ── Scroll-reveal via IntersectionObserver ── */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('sr-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

  function initReveal() {
    /* Auto-mark reveal candidates if not already marked */
    const auto = [
      '.wcard', '.cs-meta-item', '.reflect-card', '.rat-card',
      '.process-card', '.phase-card', '.decision-card',
      '.stat-row', '.callout', '.cs-img', '.card-grid .card',
      '.facts-row', '.about-grid', '.writing-row'
    ];
    auto.forEach(sel => {
      document.querySelectorAll(sel).forEach((el, i) => {
        if (!el.closest('.sr-stagger')) {
          el.classList.add('sr-hidden');
          el.style.transitionDelay = (i * 0.07) + 's';
        }
      });
    });

    /* Stagger grids */
    document.querySelectorAll('.work-grid, .card-grid, .reflect-grid, .rat-grid').forEach(grid => {
      grid.classList.add('sr-stagger');
      /* Remove individual sr-hidden from children (stagger handles them) */
      grid.querySelectorAll('.sr-hidden').forEach(c => c.classList.remove('sr-hidden'));
    });

    /* Observe everything */
    document.querySelectorAll('.sr-hidden, .sr-stagger').forEach(el => io.observe(el));
  }

  /* ── Nav: active link on scroll ── */
  function initNavActive() {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-links a, .rail-nav a');
    if (!sections.length || !links.length) return;

    const sio = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id = e.target.id;
          links.forEach(a => {
            const href = a.getAttribute('href');
            a.classList.toggle('active', href === '#' + id || href.endsWith('#' + id));
          });
        }
      });
    }, { threshold: 0.4 });

    sections.forEach(s => sio.observe(s));
  }

  /* ── Burger: mobile nav ── */
  function initBurger() {
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('nav-links');
    const overlay = document.getElementById('nav-overlay');
    if (!burger) return;

    function close() {
      burger.classList.remove('open');
      navLinks && navLinks.classList.remove('open');
      overlay && overlay.classList.remove('show');
    }
    burger.addEventListener('click', () => {
      const open = burger.classList.toggle('open');
      navLinks && navLinks.classList.toggle('open', open);
      overlay && overlay.classList.toggle('show', open);
    });
    overlay && overlay.addEventListener('click', close);
    navLinks && navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  }

  /* ── Run ── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { initReveal(); initNavActive(); initBurger(); });
  } else {
    initReveal(); initNavActive(); initBurger();
  }

  /* Respect reduced motion: skip reveal setup */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.sr-hidden, .sr-stagger').forEach(el => {
      el.classList.add('sr-visible');
    });
  }
})();
