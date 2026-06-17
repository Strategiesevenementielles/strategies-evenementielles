/* ============================================================
   ACADÉMIE MARKETING
   Comportements partagés (chargés sur toutes les pages)
   ============================================================ */
(function () {
  'use strict';

  /* ---- ANNÉE COURANTE ---- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---- NAV : état scrollé ---- */
  var nav = document.getElementById('nav');
  if (nav) {
    var onScrollNav = function () { nav.classList.toggle('is-scrolled', window.scrollY > 30); };
    window.addEventListener('scroll', onScrollNav, { passive: true });
    onScrollNav();
  }

  /* ---- MENU MOBILE ---- */
  var burger = document.getElementById('burger');
  var mobileMenu = document.getElementById('mobile-menu');
  if (burger && mobileMenu) {
    var toggleMenu = function (force) {
      var open = force !== undefined ? force : !mobileMenu.classList.contains('open');
      mobileMenu.classList.toggle('open', open);
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', String(open));
      mobileMenu.setAttribute('aria-hidden', String(!open));
      document.body.style.overflow = open ? 'hidden' : '';
    };
    burger.addEventListener('click', function () { toggleMenu(); });
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { toggleMenu(false); });
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') toggleMenu(false); });
  }

  /* ---- BARRE DE PROGRESSION DE LECTURE ---- */
  var rp = document.getElementById('read-progress');
  if (rp) {
    window.addEventListener('scroll', function () {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      rp.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
    }, { passive: true });
  }

  /* ---- RÉVÉLATIONS AU SCROLL ---- */
  var revealEls = document.querySelectorAll('.reveal, .reveal-group');
  if (revealEls.length) {
    if ('IntersectionObserver' in window) {
      var revObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('is-visible'); revObs.unobserve(e.target); }
        });
      }, { threshold: 0.12 });
      revealEls.forEach(function (el) { revObs.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    }
  }

  /* ---- BOUTON RETOUR EN HAUT ---- */
  var toTop = document.getElementById('to-top');
  if (toTop) {
    window.addEventListener('scroll', function () {
      toTop.classList.toggle('show', window.scrollY > 600);
    }, { passive: true });
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---- SOMMAIRE DE LEÇON : surlignage actif ---- */
  var tocLinks = document.querySelectorAll('.lesson-toc a[href^="#"]');
  if (tocLinks.length && 'IntersectionObserver' in window) {
    var headings = [];
    tocLinks.forEach(function (a) {
      var t = document.getElementById(a.getAttribute('href').slice(1));
      if (t) headings.push(t);
    });
    var tocObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          tocLinks.forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id);
          });
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    headings.forEach(function (h) { tocObs.observe(h); });
  }

  /* ---- FORMULAIRES NETLIFY (soumission AJAX : reste sur la page + message de succès) ---- */
  document.querySelectorAll('form[data-netlify]').forEach(function (form) {
    var successId = form.getAttribute('data-success');
    var success = successId ? document.getElementById(successId) : form.querySelector('.form-success');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var submit = form.querySelector('button[type=submit]');
      if (submit) submit.disabled = true;
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString()
      }).then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        if (success) success.classList.add('show');
        if (submit) submit.textContent = form.getAttribute('data-done') || 'Envoyé ✓';
        form.querySelectorAll('input, textarea, select, button').forEach(function (el) { el.disabled = true; });
      }).catch(function () {
        // Repli : laisse le navigateur poster nativement vers l'action (Netlify capte puis redirige vers /merci.html)
        form.submit();
      });
    });
  });

})();
