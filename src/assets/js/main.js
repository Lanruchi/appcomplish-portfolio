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

// ── Diagram zoom: double-click the image or press the expand button ──
if (window.HTMLDialogElement) {
  document.querySelectorAll('.diagram-box img').forEach(img => {
    const dialog = document.createElement('dialog');
    dialog.className = 'lightbox';
    dialog.innerHTML = '<img alt=""><span class="lightbox-hint">Click anywhere or press Esc to close</span>';
    const big = dialog.querySelector('img');
    big.src = img.currentSrc || img.src;
    big.alt = img.alt;
    dialog.addEventListener('click', () => dialog.close());

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'zoom-btn';
    btn.setAttribute('aria-label', 'View diagram full screen');
    btn.title = 'View full screen';
    btn.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>';

    const open = () => dialog.showModal();
    btn.addEventListener('click', open);
    img.addEventListener('dblclick', open);
    img.title = 'Double-click to enlarge';
    img.parentElement.append(btn, dialog);
  });
}
