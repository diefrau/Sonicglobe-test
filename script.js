import { MUSIC_DATABASE } from './data.js';

// --- 1. 대륙 매핑 및 연대 설정 ---
const CONTINENT_MAP = {
  "South Korea": "Asia", "Japan": "Asia",
  "United States": "North America", "Canada": "North America", "Mexico": "North America",
  "Brazil": "South America", "Argentina": "South America", "Colombia": "South America", "Chile": "South America",
  "Jamaica": "North America", "Cuba": "North America",
  "United Kingdom": "Europe", "Germany": "Europe", "France": "Europe", "Italy": "Europe", "Spain": "Europe",
  "Nigeria": "Africa", "South Africa": "Africa",
  "Australia": "Oceania", "New Zealand": "Oceania"
};
const CONTINENTS = [...new Set(Object.values(CONTINENT_MAP))];

let currentDecade = 1990;
const yearEl = document.getElementById('current-year');

function updateDecadeDisplay() {
  yearEl.textContent = currentDecade + 's';
  initD3(); // 연대가 바뀌면 노드 초기화
}
document.getElementById('prev-year').addEventListener('click', () => {
  if(currentDecade > 1950) { currentDecade -= 10; updateDecadeDisplay(); }
});
document.getElementById('next-year').addEventListener('click', () => {
  if(currentDecade < 2020) { currentDecade += 10; updateDecadeDisplay(); }
});

// --- 2. 데이터 필터링 헬퍼 ---
function getSongsForDecade(decade) {
  let songs = [];
  for (const country in MUSIC_DATABASE) {
    for (let y = decade; y < decade + 10; y++) {
      if (MUSIC_DATABASE[country][y]) {
        let ySongs = MUSIC_DATABASE[country][y];
        if (!Array.isArray(ySongs)) ySongs = [ySongs];
        songs.push(...ySongs.map(s => ({ ...s, country, year: y })));
      }
    }
  }
  return songs;
}
function getAvailableGenres(decade) {
  const songs = getSongsForDecade(decade);
  const genres = new Set();
  songs.forEach(s => s.genres.forEach(g => genres.add(g)));
  return Array.from(genres);
}
function getAvailableCountries(decade) {
  const songs = getSongsForDecade(decade);
  const countries = new Set();
  songs.forEach(s => countries.add(s.country));
  return Array.from(countries);
}

// --- 3. D3.js 노드 네트워크 로직 ---
const width = window.innerWidth;
const height = window.innerHeight;
const svg = d3.select("#d3-container").append("svg").attr("width", width).attr("height", height);

let simulation, link, node;
let currentMenu = "main"; // main, country, genre, continent

function getMenuData(menu) {
  let nodes = [], links = [];
  if (menu === "main") {
    nodes = [
      { id: "Random", type: "root", radius: 50 },
      { id: "Country", type: "category", radius: 40 },
      { id: "Genre", type: "category", radius: 40 },
      { id: "Continent", type: "category", radius: 40 },
      { id: "Famous", type: "action", radius: 40 }
    ];
    links = [
      { source: "Random", target: "Country" },
      { source: "Random", target: "Genre" },
      { source: "Random", target: "Continent" },
      { source: "Random", target: "Famous" }
    ];
  } else if (menu === "country") {
    nodes.push({ id: "✕", type: "back", radius: 40 });
    getAvailableCountries(currentDecade).forEach(c => {
      nodes.push({ id: c, type: "action_country", radius: 35 });
      links.push({ source: "✕", target: c });
    });
  } else if (menu === "genre") {
    nodes.push({ id: "✕", type: "back", radius: 40 });
    getAvailableGenres(currentDecade).slice(0, 10).forEach(g => { // 최대 10개만 표시
      nodes.push({ id: g, type: "action_genre", radius: 35 });
      links.push({ source: "✕", target: g });
    });
  } else if (menu === "continent") {
    nodes.push({ id: "✕", type: "back", radius: 40 });
    CONTINENTS.forEach(c => {
      nodes.push({ id: c, type: "action_continent", radius: 35 });
      links.push({ source: "✕", target: c });
    });
  }
  return { nodes, links };
}

function initD3(menu = "main") {
  currentMenu = menu;
  svg.selectAll("*").remove(); 
  const { nodes, links } = getMenuData(menu);

  simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(120))
    .force("charge", d3.forceManyBody().strength(-400))
    .force("center", d3.forceCenter(width / 2 + 100, height / 2 - 50)) // 우측 상단 배치 유도
    .force("collide", d3.forceCollide().radius(d => d.radius + 10));

  link = svg.append("g").selectAll("line")
    .data(links).enter().append("line").attr("class", "link");

  node = svg.append("g").selectAll("g")
    .data(nodes).enter().append("g")
    .attr("class", d => "node " + d.type)
    .call(d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended))
    .on("click", handleNodeClick);

  node.append("circle").attr("r", d => d.radius);
  node.append("text").text(d => d.id);

  simulation.on("tick", () => {
    link
      .attr("x1", d => d.source.x).attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x).attr("y2", d => d.target.y);
    node.attr("transform", d => `translate(${d.x},${d.y})`);
  });
}

function handleNodeClick(event, d) {
  if (d.type === "category") {
    initD3(d.id.toLowerCase()); // 하위 메뉴 열기
  } else if (d.type === "back") {
    initD3("main"); // 뒤로 가기
  } else {
    // 액션(재생) 처리
    let songs = getSongsForDecade(currentDecade);
    if(songs.length === 0) return;

    if (d.type === "action_country") {
      songs = songs.filter(s => s.country === d.id);
    } else if (d.type === "action_genre") {
      songs = songs.filter(s => s.genres.includes(d.id));
    } else if (d.type === "action_continent") {
      songs = songs.filter(s => CONTINENT_MAP[s.country] === d.id);
    } // Random이나 Famous는 필터 없이 songs에서 선택

    if(songs.length > 0) {
      const randomSong = songs[Math.floor(Math.random() * songs.length)];
      playAndShowInfo(randomSong);
    }
  }
}

function dragstarted(event, d) {
  if (!event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x; d.fy = d.y;
}
function dragged(event, d) {
  d.fx = event.x; d.fy = event.y;
}
function dragended(event, d) {
  if (!event.active) simulation.alphaTarget(0);
  d.fx = null; d.fy = null;
}

initD3(); // 초기 실행

// --- 4. YouTube 플레이어 & 모달 로직 ---
let ytPlayer = null;
let ytReady = false;
let currentVideoId = null;

window.onYouTubeIframeAPIReady = function () {
  ytPlayer = new YT.Player('yt-iframe', {
    height: '144', width: '256',
    playerVars: { autoplay: 1, controls: 1, rel: 0 },
    events: { onReady: () => { ytReady = true; } }
  });
};

function playAndShowInfo(info) {
  currentVideoId = info.youtubeId;
  if (ytReady && currentVideoId) {
    ytPlayer.loadVideoById(currentVideoId);
    document.getElementById('yt-wrap').classList.add('visible');
  }
  
  // 모달 데이터 채우기
  document.getElementById('card-country').textContent = info.country;
  document.getElementById('card-year').textContent = info.year;
  document.getElementById('card-song').textContent = info.song;
  document.getElementById('card-artist').textContent = info.artist;
  document.getElementById('card-album').textContent = info.album || '—';
  document.getElementById('card-release').textContent = info.releaseDate || '—';
  document.getElementById('card-desc').textContent = info.description || '';
  
  const tagsEl = document.getElementById('card-genres');
  tagsEl.innerHTML = '';
  (info.genres || []).forEach(g => {
    const t = document.createElement('div');
    t.className = 'genre-tag';
    t.textContent = g;
    tagsEl.appendChild(t);
  });

  // 하단 플레이어 바 업데이트
  document.getElementById('player-song-name').textContent = info.song;
  document.getElementById('player-artist-name').textContent = info.artist;
  
  // 모달 열기
  document.getElementById('info-modal').classList.remove('hidden');
}

// 모달 닫기
document.getElementById('card-close').addEventListener('click', () => {
  document.getElementById('info-modal').classList.add('hidden');
});
document.querySelector('.modal-overlay').addEventListener('click', () => {
  document.getElementById('info-modal').classList.add('hidden');
});