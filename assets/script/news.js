const newsEl = document.getElementById('news');

function renderNews(f = 'all') {
  if (!newsEl) return;
  
  const filtered = news.filter(n => f === 'all' || n.m === f);
  
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