/* appcomplish.click — main.js */

// ── Mobile nav toggle ────────────────────────────────────────
const toggle = document.getElementById('nav-toggle');
const links  = document.getElementById('nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', links.classList.contains('open'));
  });
}

// ── Mark active nav link ─────────────────────────────────────
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.href === window.location.href) a.classList.add('active');
});
