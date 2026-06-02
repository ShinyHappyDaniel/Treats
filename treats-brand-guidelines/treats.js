/* Treats Brand Guidelines — icon set, pattern tiles & cover confetti.
   Icons are drawn in ink (single colour, 2px, rounded). The pattern
   tiles are built from the brand's own capsule + dot motif. */
(function () {
  const css = getComputedStyle(document.documentElement);
  const v = (n, f) => (css.getPropertyValue(n) || f).trim();
  const ink     = v('--ink', '#13201C');
  const green   = v('--brand-primary', '#1FA463');
  const blue    = v('--brand-secondary', '#3A5A78');
  const yellow  = v('--brand-accent', '#E8B53B');
  const light   = '#EAF1EC';
  const svgNS   = 'http://www.w3.org/2000/svg';

  /* ---------- icon set (ink monoline, rounded) ---------- */
  const S = (paths) =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="${ink}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;

  const icons = [
    ['Gift',     '<rect x="3.5" y="9" width="17" height="11" rx="2"/><path d="M3.5 12.5h17M12 9v11M12 9C12 6.5 10.5 4.5 8.5 4.5S6 6.5 8 9M12 9c0-2.5 1.5-4.5 3.5-4.5S18 6.5 16 9"/>'],
    ['Heart',    '<path d="M12 20s-7-4.6-9-9C1.5 7.3 3.6 4.5 6.6 4.5c1.8 0 3.2 1 4.4 2.6 1.2-1.6 2.6-2.6 4.4-2.6 3 0 5.1 2.8 3.6 6.5-2 4.4-9 9-9 9Z"/>'],
    ['Star',     '<path d="M12 3.5l2.5 5.2 5.7.7-4.2 3.9 1.1 5.6L12 16.9l-5.1 2.5 1.1-5.6L3.8 9.4l5.7-.7Z"/>'],
    ['Tag',      '<path d="M4 4h7l9 9-7 7-9-9V4Z"/><circle cx="8" cy="8" r="1.4" fill="' + ink + '"/>'],
    ['Bag',      '<path d="M6 8h12l-1 12H7L6 8Z"/><path d="M9 8a3 3 0 016 0"/>'],
    ['Search',   '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>'],
    ['Bell',     '<path d="M6 9a6 6 0 1112 0c0 5 2 6 2 6H4s2-1 2-6Z"/><path d="M10 20a2 2 0 004 0"/>'],
    ['User',     '<circle cx="12" cy="8" r="4"/><path d="M4 20c0-3.5 3.6-6 8-6s8 2.5 8 6"/>'],
    ['Check',    '<circle cx="12" cy="12" r="9"/><path d="M8.5 12.5l2.5 2.5 4.5-5"/>'],
    ['Truck',    '<path d="M3 7h11v8H3z"/><path d="M14 10h4l3 3v2h-7z"/><circle cx="7" cy="17" r="1.8"/><circle cx="17" cy="17" r="1.8"/>'],
    ['Sparkle',  '<path d="M12 3l1.6 6.4L20 11l-6.4 1.6L12 19l-1.6-6.4L4 11l6.4-1.6Z"/>'],
    ['Arrow',    '<path d="M4 12h15"/><path d="M13 6l6 6-6 6"/>'],
  ];

  const grid = document.getElementById('icongrid');
  if (grid) {
    icons.forEach(([name, p]) => {
      const cell = document.createElement('div');
      cell.className = 'icon-cell';
      cell.innerHTML = S(p) + `<span class="nm">${name}</span>`;
      grid.appendChild(cell);
    });
  }

  /* seeded RNG so patterns are stable across reloads */
  function rng(seed) { return () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }; }

  /* a rounded capsule bar (the brand's confetti unit) */
  function capsule(svg, x, y, w, h, rot, fill, op) {
    const r = document.createElementNS(svgNS, 'rect');
    r.setAttribute('x', x); r.setAttribute('y', y);
    r.setAttribute('width', w); r.setAttribute('height', h);
    r.setAttribute('rx', w / 2);
    r.setAttribute('fill', fill);
    if (op != null) r.setAttribute('opacity', op);
    r.setAttribute('transform', `rotate(${rot} ${x + w / 2} ${y + h / 2})`);
    svg.appendChild(r);
  }
  function dot(svg, cx, cy, r, fill, op) {
    const c = document.createElementNS(svgNS, 'circle');
    c.setAttribute('cx', cx); c.setAttribute('cy', cy); c.setAttribute('r', r);
    c.setAttribute('fill', fill); if (op != null) c.setAttribute('opacity', op);
    svg.appendChild(c);
  }
  function makeSvg(host, vb) {
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('width', '100%'); svg.setAttribute('height', '100%');
    svg.setAttribute('viewBox', vb); svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
    host.appendChild(svg); return svg;
  }

  /* 1 — Confetti scatter (paper) : capsules + dots tumbling */
  const td = document.getElementById('tile-dots');
  if (td) {
    const svg = makeSvg(td, '0 0 400 260');
    const cols = [green, blue, yellow];
    const r = rng(11);
    for (let i = 0; i < 26; i++) {
      const w = 9 + r() * 5, h = 26 + r() * 16;
      capsule(svg, r() * 392, r() * 252, w, h, (r() * 120 - 60), cols[(Math.floor(r() * 3))], 0.92);
    }
    for (let i = 0; i < 7; i++) dot(svg, r() * 400, r() * 260, 4 + r() * 3, ink, 0.85);
  }

  /* 2 — Capsule rows (green) : tidy diagonal rows of light pills */
  const tsh = document.getElementById('tile-shapes');
  if (tsh) {
    const svg = makeSvg(tsh, '0 0 400 260');
    const w = 13, h = 40, gapX = 46, gapY = 56, rot = -22;
    for (let row = -1; row < 6; row++) {
      const offset = (row % 2) * (gapX / 2);
      for (let col = -1; col < 11; col++) {
        const x = col * gapX + offset - 10;
        const y = row * gapY - 10;
        capsule(svg, x, y, w, h, rot, light, (row + col) % 3 === 0 ? 0.95 : 0.45);
      }
    }
  }

  /* 3 — Dot grid (ink) : the treat-dot, with a few colour accents */
  const tg = document.getElementById('tile-grid');
  if (tg) {
    const svg = makeSvg(tg, '0 0 400 260');
    const step = 30; const r = rng(5);
    const accents = [green, blue, yellow];
    for (let y = step / 2; y < 260; y += step) {
      for (let x = step / 2; x < 400; x += step) {
        const acc = r() < 0.08;
        dot(svg, x, y, acc ? 5 : 3, acc ? accents[Math.floor(r() * 3)] : light, acc ? 0.95 : 0.45);
      }
    }
  }

})();
