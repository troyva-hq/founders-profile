/* ============================================================
   TROYVA FOUNDERS PROFILE — MAIN JS
   ============================================================ */

(function () {
  'use strict';

  /* ── Scroll reveal ─────────────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach((el, i) => {
    // Stagger siblings within the same parent
    el.style.transitionDelay = `${(i % 4) * 80}ms`;
    observer.observe(el);
  });

  /* ── Bio expand/collapse ───────────────────────────────── */
  function initBioToggle(toggleId, cardClass) {
    const btn = document.getElementById(toggleId);
    if (!btn) return;

    const card = btn.closest(cardClass || '.founder-card');
    if (!card) return;

    const moreSpan = card.querySelector('.bio-more');
    const arrow    = btn.querySelector('.toggle-arrow');

    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';

      if (expanded) {
        moreSpan.style.display = 'none';
        btn.setAttribute('aria-expanded', 'false');
        btn.childNodes[0].textContent = 'Read more ';
        arrow.textContent = '↓';
      } else {
        moreSpan.style.display = 'inline';
        btn.setAttribute('aria-expanded', 'true');
        btn.childNodes[0].textContent = 'Show less ';
        arrow.textContent = '↑';
      }
    });
  }

  initBioToggle('rafsun-bio-toggle');
  initBioToggle('abrar-bio-toggle');

  /* ── Smooth scroll for CTA ─────────────────────────────── */
  document.getElementById('cta-contact')?.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  });

  /* ── Active nav highlight on scroll (optional) ─────────── */
  const sections = document.querySelectorAll('section[id]');

  function onScroll() {
    let current = '';
    sections.forEach((sec) => {
      const top = sec.getBoundingClientRect().top;
      if (top <= 80) current = sec.id;
    });
    // Reserved for a nav bar if added later
    void current;
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── Hero logo fallback already handled inline ─────────── */
  // Images use onerror attributes in HTML for zero-JS fallback

})();
