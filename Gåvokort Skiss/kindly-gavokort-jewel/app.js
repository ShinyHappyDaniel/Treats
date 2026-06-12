// Kindly Gåvokort — Jewel & foil-nivåkort + öppningsbara mottagarkort (vanilla JS).
(function () {
  'use strict';

  var TIERS = [
    { name: 'Small', tag: 'GÅVOKORT · SMALL', color: '#00778E', deep: '#015C6E',
      desc: 'Som mottagare av Small väljer du fritt bland 300 utvalda produkter i 10 produktkategorier.',
      meta: '300+ PRODUKTER · 10 KATEGORIER' },
    { name: 'Medium', tag: 'GÅVOKORT · MEDIUM', color: '#E0345A', deep: '#B22347',
      desc: 'Som mottagare av Medium väljer du fritt bland 500 utvalda produkter i 12 produktkategorier.',
      meta: '500+ PRODUKTER · 12 KATEGORIER' },
    { name: 'Large', tag: 'GÅVOKORT · LARGE', color: '#732231', deep: '#5A1826',
      desc: 'Som mottagare av Large har du hela 700 produkter att välja mellan i 15 produktkategorier.',
      meta: '700+ PRODUKTER · 15 KATEGORIER' },
    { name: 'Low impact', tag: 'GÅVOKORT · LOW IMPACT', color: '#2F6B57', deep: '#24523F',
      desc: 'Large-nivåns urval, kurerat för lägre klimatavtryck — 600 produkter med omsorgsfullt vald produktion och frakt.',
      meta: '600+ PRODUKTER · LÄGRE KLIMATAVTRYCK' },
    { name: 'Flex', tag: 'GÅVOKORT · FLEX', color: '#2B1A1E', deep: '#1C1013',
      desc: 'Ni väljer beloppet — vi skräddarsyr urvalet. Gåvokortet som formas helt efter ert företag.',
      meta: 'VALFRITT BELOPP · SKRÄDDARSYTT URVAL' }
  ];

  var GIFT = {
    greeting: 'Tack för ett fantastiskt år — välj ut något riktigt fint till dig själv. Du har förtjänat det.',
    sender: 'FRÅN ALLA OSS PÅ NORDIC STUDIO AB',
    code: 'KND·7F42·B9KX',
    valid: 'GILTIG T.O.M. 2027-06-30 · KINDLYCO.SE/GAVA'
  };

  function logo(color, w) {
    return '<span class="klogo" aria-label="Kindly" style="--w:' + w + 'px;background:' + color + '"></span>';
  }

  function qr(ink, paper, size) {
    var seed = [1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1];
    var cells = [];
    for (var i = 0; i < 81; i++) {
      var a = seed[i % 25], b = seed[(i * 7 + 3) % 25];
      cells.push(((a ^ b) || (i % 11 === 0)) ? 1 : 0);
    }
    [0,1,2,9,10,11,18,19,20].forEach(function (i) { cells[i] = 1; cells[i+6] = 1; cells[i+54] = 1; });
    [10,16,64].forEach(function (i) { cells[i] = 0; });
    var inner = cells.map(function (on) {
      return '<span style="background:' + (on ? ink : 'transparent') + '"></span>';
    }).join('');
    return '<div class="gkr-qr" aria-label="QR-kod" style="width:' + size + 'px;height:' + size + 'px;padding:4px;background:' + paper + '">' + inner + '</div>';
  }

  function tierCard(t) {
    return '' +
      '<div class="gk-card gk-jewel" style="background:linear-gradient(135deg,' + t.color + ' 0%,' + t.deep + ' 100%)">' +
        '<div class="gk-sheen"></div><div class="gk-shimmer"></div><div class="gk-foil-frame"></div>' +
        '<div class="gk-jewel-inner">' +
          '<div class="gk-row">' + logo('#F2EBDC', 88) + '<span class="gk-chip-foil">' + t.tag + '</span></div>' +
          '<div class="gk-jewel-mid"><h3 class="gk-tiername gk-foiltext">' + t.name + '</h3><p class="gk-desc">' + t.desc + '</p></div>' +
          '<div class="gk-row gk-bottom"><span class="gk-meta">' + t.meta + '</span><span class="gk-meta">KINDLYCO.SE</span></div>' +
        '</div>' +
      '</div>';
  }

  function recipCard(patClass) {
    var pat = patClass ? '<div class="gkr-pattern ' + patClass + '"></div>' : '';
    return '' +
      '<div class="gkr-stage">' +
        '<div class="gkr-stack" role="button" tabindex="0" aria-expanded="false" aria-label="Öppna gåvokortet">' +
          '<div class="gkr-inside">' +
            '<div class="gkr-row">' + logo('#2B1A1E', 78) + '<span class="gkr-chip-ink">GÅVOKORT</span></div>' +
            '<div class="gkr-note-mid"><h3 class="gkr-note-title">Till dig.</h3><p class="gkr-note-greeting">”' + GIFT.greeting + '”</p><p class="gkr-note-sender">' + GIFT.sender + '</p></div>' +
            '<div class="gkr-row gkr-bottom"><div><span class="gkr-code">' + GIFT.code + '</span><span class="gkr-valid">' + GIFT.valid + '</span></div>' + qr('#2B1A1E', '#FFFFFF', 54) + '</div>' +
          '</div>' +
          '<div class="gkr-door gkr-door-l"><div class="gkr-face gkr-front"><div class="gkr-frame gkr-frame-l"></div>' + pat + '<div class="gkr-shimmer"></div><div class="gkr-dc gkr-dc-l">' + logo('#F2EBDC', 82) + '</div></div><div class="gkr-face gkr-back"></div></div>' +
          '<div class="gkr-door gkr-door-r"><div class="gkr-face gkr-front"><div class="gkr-frame gkr-frame-r"></div>' + pat + '<div class="gkr-shimmer gkr-shimmer-2"></div><div class="gkr-dc gkr-dc-r"><span class="gkr-hint">KLICKA — ÖPPNA<span class="gkr-arrow">↗</span></span></div></div><div class="gkr-face gkr-back"></div></div>' +
          '<div class="gkr-ribbon" aria-hidden="true"></div>' +
        '</div>' +
      '</div>';
  }

  function fig(cardHtml, title, sub) {
    return '<figure class="fig">' + cardHtml + '<figcaption><strong>' + title + '</strong><span>' + sub + '</span></figcaption></figure>';
  }

  var TIER_CAPTIONS = {
    'Small': 'Teal — instegsnivån.',
    'Medium': 'Coral — bredare urval.',
    'Large': 'Burgundy — mest exklusiv.',
    'Low impact': 'Grön ton — Large-nivå, lägre avtryck.',
    'Flex': 'Ink + champagne — valfritt belopp.'
  };

  var RECIPS = [
    { pat: null, title: 'Ren', sub: 'Slätt papper — bandet får all uppmärksamhet.' },
    { pat: 'pat-stripe', title: 'Diagonala ränder', sub: 'Diskreta sneda ränder, ton-i-ton.' },
    { pat: 'pat-waves', title: 'Vågor', sub: 'Mjuka våglinjer — organiskt och lugnt.' }
  ];

  document.getElementById('tier-grid').innerHTML = TIERS.map(function (t) {
    return fig(tierCard(t), t.name, TIER_CAPTIONS[t.name] || '');
  }).join('');

  document.getElementById('recip-grid').innerHTML = RECIPS.map(function (r) {
    return fig(recipCard(r.pat), r.title, r.sub);
  }).join('');

  // Öppna/stäng mottagarkort vid klick eller tangent
  Array.prototype.forEach.call(document.querySelectorAll('.gkr-stack'), function (st) {
    var toggle = function () {
      var open = st.classList.toggle('is-open');
      st.setAttribute('aria-expanded', String(open));
    };
    st.addEventListener('click', toggle);
    st.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  });
})();
