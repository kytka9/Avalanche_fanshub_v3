// Prvé sú komplet zápasy a dole na konci je funkcia


//Zápasy
const gamesAll = [
  { d: "12.04.", home: "Colorado Avalanche", homeLogo: "../../MIN.png", away: "Vegas Golden Knights", awayLogo: "../../minn.png", s: ":", w: null },
  { d: "09.04.", home: "Edmonton Oilers", homeLogo: "./assets/images/logos/edm.png", away: "Colorado Avalanche", awayLogo: "./assets/images/logos/col.png", s: "3:1", w: false },
  { d: "06.04.", home: "Colorado Avalanche", homeLogo: "./assets/images/logos/col.png", away: "Minnesota Wild", awayLogo: "./assets/images/logos/min.png", s: "5:1", w: true },
  { d: "03.04.", home: "Dallas Stars", homeLogo: "./assets/images/logos/dal.png", away: "Colorado Avalanche", awayLogo: "./assets/images/logos/col.png", s: "1:2", w: true },
  { d: "03.04.", home: "Dallas Stars", homeLogo: "./assets/images/logos/dal.png", away: "Colorado Avalanche", awayLogo: "./assets/images/logos/col.png", s: "1:2", w: true },
  { d: "03.04.", home: "Dallas Stars", homeLogo: "./assets/images/logos/dal.png", away: "Colorado Avalanche", awayLogo: "./assets/images/logos/col.png", s: "1:2", w: true },
  { d: "03.04.", home: "Dallas Stars", homeLogo: "./assets/images/logos/dal.png", away: "Colorado Avalanche", awayLogo: "./assets/images/logos/col.png", s: "1:2", w: true },
  { d: "31.03.", home: "Colorado Avalanche", homeLogo: "./assets/images/logos/col.png", away: "Winnipeg Jets", awayLogo: "./assets/images/logos/wpg.png", s: "3:4", w: false }
];


// Funkcia
const gamesEl = document.getElementById('gamesAll');
if (gamesEl) {
  gamesEl.innerHTML = gamesAll.map(g => {
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