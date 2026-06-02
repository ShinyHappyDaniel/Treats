/* Perks — Grafisk profil: ikonset + grafiska element (inline SVG).
   Ikonerna ärver ink-färgen från --brand-primary. */
(function () {
  const css = getComputedStyle(document.documentElement);
  const ink    = (css.getPropertyValue('--brand-primary')   || '#1f1a14').trim();
  const coral  = (css.getPropertyValue('--brand-secondary') || '#f26a4f').trim();
  const sage   = (css.getPropertyValue('--perks-sage')      || '#9bb86b').trim();
  const sky    = (css.getPropertyValue('--perks-sky')       || '#7fb5d5').trim();
  const sunny  = (css.getPropertyValue('--perks-sunny')     || '#f5c84a').trim();
  const berry  = (css.getPropertyValue('--perks-berry')     || '#c94772').trim();
  const blush  = (css.getPropertyValue('--perks-blush')     || '#f4b5b0').trim();

  const S = (paths) =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="${ink}" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;

  /* En ren linje-ikonuppsättning — 1,9px stroke, runda hörn, 24px-grid. */
  const icons = [
    ['Home',       '<path d="M4 11l8-7 8 7"/><path d="M6 10v9h12v-9"/><path d="M10 19v-5h4v5"/>'],
    ['Search',     '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>'],
    ['Price',      '<path d="M20.6 12.6 12 4H4v8l8.6 8.6a1.4 1.4 0 0 0 2 0l6-6a1.4 1.4 0 0 0 0-2Z"/><circle cx="8" cy="8" r="1.3"/>'],
    ['Heart',      '<path d="M12 20s-7-4.6-9-9C1.5 7.3 3.6 4.5 6.6 4.5c1.8 0 3.2 1 4.4 2.6 1.2-1.6 2.6-2.6 4.4-2.6 3 0 5.1 2.8 3.6 6.5-2 4.4-9 9-9 9Z"/>'],
    ['Bag',        '<path d="M6 8h12l-1 12H7Z"/><path d="M9 8a3 3 0 0 1 6 0"/>'],
    ['Eco',        '<path d="M5 19c0-8 5-13 14-13 0 8-5 13-14 13Z"/><path d="M8 16c3-4 6-6 9-7"/>'],
    ['Delivery',   '<path d="M3 7h11v9H3Z"/><path d="M14 10h4l3 3v3h-7Z"/><circle cx="7" cy="18" r="1.7"/><circle cx="17.5" cy="18" r="1.7"/>'],
    ['Stamp',      '<circle cx="12" cy="12" r="8"/><path d="M9 12l2 2 4-4"/>'],
    ['Percent',    '<path d="M6 18 18 6"/><circle cx="8" cy="8" r="2"/><circle cx="16" cy="16" r="2"/>'],
    ['Star',       '<path d="M12 3.5l2.5 5.2 5.7.7-4.2 3.9 1.1 5.6L12 16.9l-5.1 2.5 1.1-5.6L3.8 9.4l5.7-.7Z"/>'],
    ['Arrow',      '<path d="M4 12h15"/><path d="M13 6l6 6-6 6"/>'],
    ['Plus',       '<path d="M12 5v14M5 12h14"/>'],
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

  /* ---- grafiska element ---- */
  const svgNS = 'http://www.w3.org/2000/svg';

  // 1 — The dot: scattered accent dots (multi-color)
  const td = document.getElementById('tile-dots');
  if (td) {
    const cols = [coral, sage, sky, sunny, berry, blush, ink];
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('width', '100%'); svg.setAttribute('height', '100%');
    let seed = 11;
    const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    for (let i = 0; i < 40; i++) {
      const c = document.createElementNS(svgNS, 'circle');
      c.setAttribute('cx', (rnd() * 100) + '%');
      c.setAttribute('cy', (rnd() * 100) + '%');
      c.setAttribute('r', 5 + rnd() * 13);
      c.setAttribute('fill', cols[Math.floor(rnd() * cols.length)]);
      svg.appendChild(c);
    }
    td.appendChild(svg);
  }

  // 2 — Stamps: rotated badge circles on dark bg
  const tsh = document.getElementById('tile-shapes');
  if (tsh) {
    const stamps = [
      { t: '−50%', bg: coral,  fg: ink,   top: 28,  left: 36,  size: 86, rot: -10 },
      { t: 'NEW',  bg: berry,  fg: '#fbf4e6', top: 120, left: 150, size: 64, rot: 8 },
      { t: 'eco',  bg: sage,   fg: ink,   top: 40,  left: 200, size: 72, rot: -6 },
      { t: 'PERK', bg: sunny,  fg: ink,   top: 140, left: 46,  size: 60, rot: 12 },
    ];
    stamps.forEach((s) => {
      const d = document.createElement('div');
      d.style.cssText = `position:absolute;top:${s.top}px;left:${s.left}px;width:${s.size}px;height:${s.size}px;border-radius:50%;background:${s.bg};color:${s.fg};display:grid;place-items:center;transform:rotate(${s.rot}deg);font-family:'Bricolage Grotesque',sans-serif;font-weight:700;font-size:${s.size*0.26}px;letter-spacing:-0.02em;box-shadow:0 10px 24px -12px rgba(0,0,0,.5)`;
      d.textContent = s.t;
      tsh.appendChild(d);
    });
  }

  // 3 — Monogram grid: repeated "p" in ink on coral
  const tg = document.getElementById('tile-grid');
  if (tg) {
    const wrap = document.createElement('div');
    wrap.style.cssText = "position:absolute;inset:0;display:grid;grid-template-columns:repeat(7,1fr);grid-auto-rows:1fr;color:" + ink + ";font-family:'Bricolage Grotesque',sans-serif;font-weight:700;font-feature-settings:'ss01';overflow:hidden";
    for (let i = 0; i < 35; i++) {
      const c = document.createElement('div');
      c.textContent = 'p';
      c.style.cssText = "display:grid;place-items:center;font-size:30px;letter-spacing:-0.06em;opacity:" + (i % 2 ? 0.85 : 0.5);
      wrap.appendChild(c);
    }
    tg.appendChild(wrap);
  }
})();
