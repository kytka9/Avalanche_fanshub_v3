/* ---------- ZAUJÍMAVOSTI (HERO) ---------- */
const avalancheFacts = [
  "Colorado Avalanche vyhrali Stanley Cup hneď vo svojej prvej sezóne po presťahovaní z Quebecu v roku 1996.",
  "Joe Sakic, legenda klubu a bývalý kapitán, priviedol tím k víťazstvu ako hráč (1996, 2001) a neskôr aj ako generálny manažér (2022).",
  "Cale Makar získal v roku 2022 Norris Trophy (najlepší obranca) aj Conn Smythe Trophy (najužitočnejší hráč play-off).",
  "Maskot tímu sa volá 'Bernie the St. Bernard', ktorý v roku 2011 nahradil pôvodného maskota 'Howler the Yeti'.",
  "Nathan MacKinnon bol v roku 2013 draftovaný z 1. miesta celkovo práve tímom Colorado Avalanche."
];

const factBtn = document.getElementById('fact-btn');
const factDisplay = document.getElementById('fact-display');

function showRandomFact() {
  const randomIndex = Math.floor(Math.random() * avalancheFacts.length);
  if (factDisplay) {
    factDisplay.textContent = avalancheFacts[randomIndex];
  }
}

if (factBtn) {
  factBtn.addEventListener('click', showRandomFact);
}
/* ---------- KONIEC - ZAUJÍMAVOSTI (HERO) ---------- */

/* ---------- ZÁPASY DATA & RENDER ---------- */
const games = [
  { d: "12.04.", home: "Colorado Avalanche", homeLogo: "../../MIN.png", away: "Vegas Golden Knights", awayLogo: "../../minn.png", s: ":", w: null },
  { d: "09.04.", home: "Edmonton Oilers", homeLogo: "./assets/images/logos/edm.png", away: "Colorado Avalanche", awayLogo: "./assets/images/logos/col.png", s: "3:1", w: false },
  { d: "06.04.", home: "Colorado Avalanche", homeLogo: "./assets/images/logos/col.png", away: "Minnesota Wild", awayLogo: "./assets/images/logos/min.png", s: "5:1", w: true },
  { d: "03.04.", home: "Dallas Stars", homeLogo: "./assets/images/logos/dal.png", away: "Colorado Avalanche", awayLogo: "./assets/images/logos/col.png", s: "1:2", w: true },
  { d: "31.03.", home: "Colorado Avalanche", homeLogo: "./assets/images/logos/col.png", away: "Winnipeg Jets", awayLogo: "./assets/images/logos/wpg.png", s: "3:4", w: false }
];



const gamesEl = document.getElementById('games');
if (gamesEl) {
  gamesEl.innerHTML = games.map(g => {
    // Určenie odznaku podľa stavu zápasu
    let badgeHtml = '<span class="badge upcoming">...</span>';
    if (g.w === true) {
      badgeHtml = '<span class="badge w">Výhra</span>';
    } else if (g.w === false) {
      badgeHtml = '<span class="badge l">Prehra</span>';
    }

    return `
      <tr>
        <td>${g.d}</td>
        <td class="${g.home === 'Colorado Avalanche' ? 'name' : ''}">
          <div class="team-cell" style="justify-content: flex-end; text-align: right;">
            <span>${g.home}</span>
            <img src="${g.homeLogo}" alt="${g.home}" class="team-logo" loading="lazy">
          </div>
        </td>
        <td style="text-align: center;"><strong>${g.s}</strong></td>
        <td class="${g.away === 'Colorado Avalanche' ? 'name' : ''}">
          <div class="team-cell">
            <img src="${g.awayLogo}" alt="${g.away}" class="team-logo" loading="lazy">
            <span>${g.away}</span>
          </div>
        </td>
        <td>${badgeHtml}</td>
      </tr>`;
  }).join('');
}
/* ---------- KONIEC - ZÁPASY DATA & RENDER ---------- */

/* ---------- HVIEZDY ---------- */
const stars = [
  { n: "Nathan MacKinnon", num: 29, pos: "Center", t: "utocnik", img: "./IMG_3723.HEIC", d: "Motor tímu, elitný korčuliar a víťaz Hart Trophy." },
  { n: "Cale Makar", num: 8, pos: "Obranca", t: "obranca", img: "./IMG_3723.HEIC", d: "Ofenzívny obranca svetovej triedy, držiteľ Norris Trophy." },
  { n: "Martin Nečas", num: 88, pos: "Center", t: "utocnik", img: "./IMG_3723.HEIC", d: "Český útočník s výbornou rýchlosťou a produktivitou." }
];

const starsEl = document.getElementById('stars');
function renderStars(f = 'all') {
  if (!starsEl) return;
  starsEl.innerHTML = stars.filter(p => f === 'all' || p.t === f).map(p => `
    <article class="card">
      <div class="card-top"><span class="jersey">#${p.num}</span><img src="${p.img}" alt="${p.n}" loading="lazy"></div>
      <div class="card-body">
        <span class="pos">${p.pos}</span>
        <h3>${p.n}</h3>
        <p>${p.d}</p>
      </div>
    </article>`).join('') || '<p class="lead">Žiadny hráč v tejto kategórii.</p>';
}

renderStars();

document.querySelectorAll('.chip[data-f]').forEach(c => c.addEventListener('click', () => {
  const activeChip = document.querySelector('.chip[data-f].active');
  if (activeChip) activeChip.classList.remove('active');
  c.classList.add('active');
  renderStars(c.dataset.f);
}));

/* ---------- SÚPISKA 2025/2026 + TRIEDENIE ---------- */
const roster = {
  goalies: [
    ["Blackwood Mackenzie", 39, "G", "L", 193, 102, "1996-12-09", "Thunder Bay, ON, CAN"],
    ["Wedgewood Scott", 41, "G", "L", 188, 91, "1992-08-14", "Brampton, ON, CAN"]
  ],
  forwards: [
    ["Nelson Brock", 11, "C", "L", 193, 93, "1991-10-15", "Warroad, MN, USA"],
    ["Nichushkin Valeri", 13, "RW", "L", 193, 95, "1995-03-04", "Chelyabinsk, RUS"],
    ["Necas Martin", 88, "C", "R", 191, 88, "1999-01-15", "Nove Mesto na Morave, CZE"],
    ["Bardakov Zakhar", 93, "C", "L", 188, 90, "2001-02-24", "Berdsk, RUS"],
    ["Kelly Parker", 17, "C", "L", 185, 84, "1999-05-14", "Camrose, AB, CAN"],
    ["Landeskog Gabriel", 92, "LW", "L", 185, 98, "1992-11-23", "Stockholm, SWE"],
    ["Colton Ross", 20, "C", "L", 183, 88, "1996-09-11", "Robbinsville, NJ, USA"],
    ["Ivan Ivan", 82, "C", "L", 183, 86, "2002-08-20", "Ostrava, CZE"],
    ["MacKinnon Nathan", 29, "C", "R", 183, 91, "1995-09-01", "Halifax, NS, CAN"],
    ["Drury Jack", 18, "C", "L", 180, 84, "2000-02-03", "New York, NY, USA"],
    ["Kiviranta Joel", 94, "LW", "L", 180, 84, "1996-03-23", "Vantaa, FIN"],
    ["Lehkonen Artturi", 62, "LW", "L", 180, 81, "1995-07-04", "Piikkio, FIN"],
    ["Olofsson Victor", 95, "LW", "L", 180, 82, "1995-07-18", "Ornskoldsvik, SWE"],
    ["Brindley Gavin", 54, "C", "R", 173, 78, "2004-10-05", "Fort Myers, FL, USA"]
  ],
  defense: [
    ["Burns Brent", 84, "D", "R", 196, 103, "1985-03-09", "Barrie, ON, CAN"],
    ["Girard Samuel", 49, "D", "L", 178, 77, "1998-05-12", "Roberval, QC, CAN"],
    ["Makar Cale", 8, "D", "R", 183, 85, "1998-10-30", "Calgary, AB, CAN"],
    ["Malinski Sam", 70, "D", "R", 180, 86, "1998-07-27", "Lakeville, MN, USA"],
    ["Manson Josh", 42, "D", "R", 191, 99, "1991-10-07", "Hinsdale, IL, USA"],
    ["Solovyov Ilya", 28, "D", "L", 191, 94, "2000-07-20", "Mogilev, BLR"],
    ["Toews Devon", 7, "D", "L", 185, 87, "1994-02-21", "Abbotsford, BC, CAN"]
  ]
};
const cols = ["Hráč", "#", "Poz", "Sh", "Výška", "Váha", "Narodený", "Miesto narodenia"];

function buildTable(table, rows) {
  if (!table || !rows) return;
  const state = { i: null, dir: 1 };
  const draw = () => {
    table.innerHTML =
      '<thead><tr>' + cols.map((c, i) =>
        `<th class="sortable ${state.i === i ? (state.dir === 1 ? 'asc' : 'desc') : ''}" data-i="${i}">${c}<span class="arr">${state.i === i ? (state.dir === 1 ? '▲' : '▼') : '⇅'}</span></th>`
      ).join('') + '</tr></thead><tbody>' +
      rows.map(r => '<tr>' + r.map((v, i) =>
        i === 0 ? `<td class="name">${v}</td>` :
          i === 1 ? `<td><span class="num-badge">${v}</span></td>` : `<td>${v}</td>`
      ).join('') + '</tr>').join('') + '</tbody>';

    table.querySelectorAll('th.sortable').forEach(th => th.addEventListener('click', () => {
      const i = +th.dataset.i;
      state.dir = state.i === i ? -state.dir : 1;
      state.i = i;
      rows.sort((a, b) => {
        const x = a[i], y = b[i];
        const cmp = (typeof x === 'number' && typeof y === 'number') ? x - y : String(x).localeCompare(String(y), 'sk');
        return cmp * state.dir;
      });
      draw();
    }));
  };
  draw();
}

document.querySelectorAll('table[data-roster]').forEach(t => {
  if (roster[t.dataset.roster]) {
    buildTable(t, roster[t.dataset.roster]);
  }
});

/* ---------- NOVINKY ---------- */
const news = [
  { tag: "Tím", d: "Január 2026", h: "Avalanche si držia špiciu Central Division", p: "Denver prežíva skvelú sezónu — tím Jareda Bednara ťaží z vyváženej hry všetkých štyroch formácií a spoľahlivého brankárskeho dua Blackwood & Wedgewood." },
  { tag: "Hráči", d: "Január 2026", h: "MacKinnon opäť medzi najproduktívnejšími hráčmi ligy", p: "Nathan MacKinnon pokračuje v ofenzívnom predstavení a drží sa v čele kanadského bodovania. Kapitán Landeskog po zranení prináša tímu dôležité líderské kvality." },
  { tag: "Zranenia", d: "November 2025", h: "Návraty zranených hráčov posilnili šírku kádra", p: "Do zostavy sa postupne vrátili hráči z maródky, čo trénerovi umožňuje rotovať formácie a šetriť hviezdy do dôležitých zápasov." }
];

const newsEl = document.getElementById('news');
if (newsEl) {
  newsEl.innerHTML = news.map(n => `
    <article class="news-card reveal">
      <span class="tag">${n.tag}</span>
      <h3>${n.h}</h3>
      <p>${n.p}</p>
      <time>${n.d}</time>
    </article>`).join('');
}

/* ---------- FAQ ---------- */
const faqs = [
  { q: "Kde hrá Colorado Avalanche domáce zápasy?", a: "V Ball Arene v Denveri, ktorú zdieľa s basketbalovým tímom Denver Nuggets." },
  { q: "Koľko Stanley Cupov tím získal?", a: "Tri — v rokoch 1996, 2001 a 2022." },
  { q: "Kto vedie tím z lavičky?", a: "Hlavným trénerom je Jared Bednar, ktorý priviedol klub k titulu v roku 2022." },
  { q: "Aké sú klubové farby?", a: "Bordová (burgundy), modrá, strieborná a čierna." }
];

const faqEl = document.getElementById('faq-list');
if (faqEl) {
  faqEl.innerHTML = faqs.map(f => `
    <div class="faq-item">
      <button class="faq-q">${f.q}<i>+</i></button>
      <div class="faq-a"><p>${f.a}</p></div>
    </div>`).join('');

  document.querySelectorAll('.faq-q').forEach(b => b.addEventListener('click', () => {
    const item = b.parentElement;
    const a = item.querySelector('.faq-a');
    const open = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-a').style.maxHeight = null;
    });
    if (!open) {
      item.classList.add('open');
      a.style.maxHeight = a.scrollHeight + 'px';
    }
  }));
}

/* ---------- NAVIGATION & BURGER ---------- */
const menu = document.getElementById('menu');
const burger = document.getElementById('burger');

if (burger && menu) {
  burger.addEventListener('click', () => menu.classList.toggle('open'));
  menu.addEventListener('click', e => {
    if (e.target.tagName === 'A') menu.classList.remove('open');
  });

  const links = [...menu.querySelectorAll('a')];
  window.addEventListener('scroll', () => {
    let cur = '';
    document.querySelectorAll('section').forEach(s => {
      if (scrollY >= s.offsetTop - 140) cur = s.id;
    });
    links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + cur));
  });
}

/* ---------- REVEAL & COUNTERS (INTERSECTION OBSERVER) ---------- */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) {
    e.target.classList.add('in');
    io.unobserve(e.target);
  }
}), { threshold: .15 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

const co = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  const el = e.target;
  const end = +el.dataset.count;
  let t0 = null;
  const step = ts => {
    if (!t0) t0 = ts;
    const p = Math.min((ts - t0) / 1400, 1);
    el.textContent = Math.floor(end * (1 - Math.pow(1 - p, 3))).toLocaleString('sk-SK');
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
  co.unobserve(el);
}), { threshold: .5 });

document.querySelectorAll('[data-count]').forEach(el => co.observe(el));