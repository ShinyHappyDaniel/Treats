/* Kindly & Co — icon set + pattern tiles, rendered as inline SVG */
(function () {
  const stroke = '#00778E';
  const S = (paths) =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;

  const icons = [
    ['Gift', '<rect x="3" y="8" width="18" height="13" rx="2"/><path d="M3 12h18"/><path d="M12 8v13"/><path d="M12 8S9.5 3.5 7 4.8 9 8 12 8Zm0 0s2.5-4.5 5-3.2S15 8 12 8Z"/>'],
    ['Heart', '<path d="M12 20s-7-4.6-9-9C1.5 7.3 3.6 4.5 6.6 4.5c1.8 0 3.2 1 4.4 2.6 1.2-1.6 2.6-2.6 4.4-2.6 3 0 5.1 2.8 3.6 6.5-2 4.4-9 9-9 9Z"/>'],
    ['Card', '<rect x="2.5" y="5.5" width="19" height="13" rx="2.5"/><path d="M2.5 9.5h19"/><path d="M6 14.5h4"/>'],
    ['Envelope', '<rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M3.5 7l8.5 6 8.5-6"/>'],
    ['Star', '<path d="M12 3.5l2.5 5.2 5.7.7-4.2 3.9 1.1 5.6L12 16.9l-5.1 2.5 1.1-5.6L3.8 9.4l5.7-.7Z"/>'],
    ['Sparkle', '<path d="M12 3v5M12 16v5M3 12h5M16 12h5M6.5 6.5l3 3M14.5 14.5l3 3M17.5 6.5l-3 3M9.5 14.5l-3 3"/>'],
    ['Wallet', '<rect x="3" y="6" width="18" height="13" rx="2.5"/><path d="M16 12.5h2.5"/><path d="M3 9h13a2 2 0 012 2"/>'],
    ['Tag', '<path d="M4 4h7l9 9-7 7-9-9V4Z"/><circle cx="8" cy="8" r="1.4"/>'],
    ['Bell', '<path d="M6 9a6 6 0 1112 0c0 5 2 6 2 6H4s2-1 2-6Z"/><path d="M10 20a2 2 0 004 0"/>'],
    ['Send', '<path d="M21 4L3 11l7 2.5L13 21l3-9.5L21 4Z"/><path d="M10 13.5L21 4"/>'],
    ['Smile', '<circle cx="12" cy="12" r="9"/><path d="M8.5 14a4 4 0 007 0"/><path d="M9 9.5h.01M15 9.5h.01"/>'],
    ['Calendar', '<rect x="3.5" y="5" width="17" height="16" rx="2.5"/><path d="M3.5 9.5h17M8 3v4M16 3v4"/>'],
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

  /* ---- pattern tiles ---- */
  // diagonal stripes
  const ts = document.getElementById('tile-stripes');
  if (ts) {
    const cols = ['var(--coral)', 'var(--teal)', 'var(--cream)'];
    for (let i = -2; i < 9; i++) {
      const s = document.createElement('div');
      s.className = 's';
      s.style.background = cols[(i + 2) % 3];
      s.style.top = i * 34 + 'px';
      s.style.opacity = '.95';
      ts.appendChild(s);
    }
  }

  // confetti dots
  const td = document.getElementById('tile-dots');
  if (td) {
    const cols = ['#F24B6A', '#00778E', '#732231'];
    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    let seed = 7;
    const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    for (let i = 0; i < 46; i++) {
      const c = document.createElementNS(svgNS, 'circle');
      c.setAttribute('cx', (rnd() * 100) + '%');
      c.setAttribute('cy', (rnd() * 100) + '%');
      c.setAttribute('r', 4 + rnd() * 8);
      c.setAttribute('fill', cols[Math.floor(rnd() * 3)]);
      c.setAttribute('opacity', 0.85);
      svg.appendChild(c);
    }
    td.appendChild(svg);
  }

  // rounded shapes
  const tsh = document.getElementById('tile-shapes');
  if (tsh) {
    tsh.innerHTML = `
      <div style="position:absolute;width:120px;height:120px;border-radius:50%;background:var(--coral);top:-30px;left:-20px"></div>
      <div style="position:absolute;width:80px;height:160px;border-radius:999px;background:var(--cream);top:60px;left:90px;transform:rotate(20deg)"></div>
      <div style="position:absolute;width:120px;height:120px;border-radius:50% 50% 50% 0;background:var(--burgundy);bottom:-20px;right:30px"></div>
      <div style="position:absolute;width:54px;height:54px;border-radius:50%;background:#fff;bottom:40px;left:30px"></div>
    `;
  }
})();
