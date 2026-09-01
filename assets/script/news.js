// Na začiatku sú data, a dole pod nimi je funkcia 
// Tu sa vykresľujú všetky novinky, roztriedené podľa mesiacov, v samostatnej news.html

// Dáta
const newsAll = [
  { m: "sep26", tag: "Hráči", d: "Január 2026", h: "MacKinnon opäť medzi najproduktívnejšími hráčmi ligy", p: "Nathan MacKinnon pokračuje v ofenzívnom predstavení a drží sa v čele kanadského bodovania. Kapitán Landeskog po zranení prináša tímu dôležité líderské kvality." },
  { m: "sep26", tag: "Tím", d: "Január 2026", h: "Avalanche si držia špiciu Central Division", p: "Denver prežíva skvelú sezónu — tím Jareda Bednara ťaží z vyváženej hry všetkých štyroch formácií a spoľahlivého brankárskeho dua Blackwood & Wedgewood." },
  { m: "sep26", tag: "Prestupy", d: "December 2025", h: "Martin Nečas získava čoraz väčšiu rolu v útoku", p: "Český útočník si získal dôveru trénera, hráva v presilovkách a jeho rýchlosť otvára priestory pre MacKinnonovu formáciu." },
  { m: "sep26", tag: "Obrana", d: "December 2025", h: "Makar láme ďalšie klubové rekordy", p: "Cale Makar sa znovu radí k najlepším obrancom NHL a jeho bodový prínos z modrej čiary je kľúčový pre herný štýl Avalanche." },
  { m: "sep26", tag: "Klub", d: "November 2025", h: "Ball Arena hlási vypredané domáce zápasy", p: "Fanúšikovia v Denveri zapĺňajú arénu na maximum — domáca atmosféra patrí v tejto sezóne k najlepším v celej lige." },
  { m: "sep26", tag: "Zranenia", d: "November 2025", h: "Návraty zranených hráčov posilnili šírku kádra", p: "Do zostavy sa postupne vrátili hráči z maródky, čo trénerovi umožňuje rotovať formácie a šetriť hviezdy do dôležitých zápasov." }
];

// Funkcia
const newsEl = document.getElementById('news');

function renderNews(f = 'all') {
  if (!newsEl) return;
  
  const filtered = newsAll.filter(n => f === 'all' || n.m === f);
  
  newsEl.innerHTML = filtered.map(n => `
    <article class="news-card reveal in">
      <span class="tag">${n.tag}</span>
      <h3>${n.h}</h3>
      <p>${n.p}</p>
      <time>${n.d}</time>
    </article>`).join('') || '<p class="lead">V tomto mesiaci neboli publikované žiadne novinky.</p>';
}

// Prvé vykreslenie všetkých noviniek
renderNews();

// Udalosť pre prepínanie mesiacov
document.querySelectorAll('.news-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    const activeChip = document.querySelector('.news-chip.active');
    if (activeChip) activeChip.classList.remove('active');
    
    chip.classList.add('active');
    renderNews(chip.dataset.m);
  });
});

