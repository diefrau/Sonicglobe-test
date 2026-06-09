const archiveDatabase = window.MUSIC_DATABASE || {};
const archiveField = document.querySelector('#archive-field');
const archiveForm = document.querySelector('#archive-search');
const archiveFilter = document.querySelector('#archive-filter');
const archiveQuery = document.querySelector('#archive-query');
const archiveCount = document.querySelector('#archive-count');
const nearbyGenres = document.querySelector('#nearby-genres');
const archiveHub = document.querySelector('.archive-hub');
const archiveSearchToggle = document.querySelector('#archive-search-toggle');
const archiveDetail = document.querySelector('#archive-detail');
const archiveFrame = document.querySelector('#archive-youtube');
const archiveMeta = document.querySelector('#archive-detail-meta');
const archiveTitle = document.querySelector('#archive-title');
const archiveArtist = document.querySelector('#archive-artist');
const archiveDescription = document.querySelector('#archive-description');
const archiveTags = document.querySelector('#archive-tags');
const archiveYoutubeLink = document.querySelector('#archive-youtube-link');

const genreNeighbors = {
  'city pop': ['J-Pop', 'Kayokyoku', 'J-R&B', 'Japanese Indie', 'Enka', 'Shibuya-kei', 'J-Rock', 'Japanese Singer-Songwriter', 'Jazz Fusion'],
  'j-pop': ['City Pop', 'Kayokyoku', 'J-Rock', 'Electropop', 'Idol Pop', 'Anime Song', 'Japanese Indie'],
  reggae: ['Roots Reggae', 'Ska', 'Rocksteady', 'Dub', 'Dancehall', 'Afrobeat'],
  soul: ['Funk', 'R&B', 'Psychedelic Rock', 'Jazz Pop', 'Blues'],
  trot: ['Traditional Pop', 'Kayokyoku', 'Enka', 'Ballad', 'Korean Folk'],
  afrobeat: ['Funk', 'Jazz', 'Highlife', 'Reggae', 'Soul'],
  'bossa nova': ['Jazz', 'Samba', 'MPB', 'Tropicalia', 'Jazz Fusion'],
};

let archiveTracks = [];
let currentTracks = [];
let lastFocusedArchiveNode = null;

function normalize(value) {
  return String(value || '').toLowerCase().trim();
}

function decadeOfArchive(year) {
  return `${Math.floor(Number(year) / 10) * 10}s`;
}

function stableRandom(index, salt = 1) {
  const x = Math.sin((index + 1) * 999.91 * salt) * 10000;
  return x - Math.floor(x);
}

function flattenArchiveData() {
  const tracks = [];

  Object.entries(archiveDatabase).forEach(([country, years]) => {
    Object.entries(years).forEach(([yearKey, value]) => {
      const songs = Array.isArray(value) ? value : [value];
      songs.filter(Boolean).forEach((song, index) => {
        tracks.push({
          ...song,
          id: `${country}-${yearKey}-${index}-${song.song}`,
          country,
          year: Number(yearKey),
          decade: decadeOfArchive(yearKey),
          genres: song.genres || [],
        });
      });
    });
  });

  archiveTracks = tracks.sort((a, b) => a.year - b.year || a.country.localeCompare(b.country));
}

function trackMatches(track, filter, query) {
  if (!query) return true;

  const genreText = track.genres.join(' ');
  const fields = {
    title: track.song,
    genre: genreText,
    year: String(track.year),
    country: track.country,
    all: `${track.song} ${track.artist} ${track.country} ${track.year} ${genreText}`,
  };

  return normalize(fields[filter] || fields.all).includes(query);
}

function inferredNearbyGenres(filter, query, tracks) {
  if (filter !== 'genre' && !query) return [];

  const key = normalize(query);
  const manual = genreNeighbors[key] || [];
  const counts = new Map();

  tracks.forEach((track) => {
    track.genres.forEach((genre) => {
      if (normalize(genre) !== key) counts.set(genre, (counts.get(genre) || 0) + 1);
    });
  });

  const automatic = [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([genre]) => genre)
    .filter((genre) => !manual.some((item) => normalize(item) === normalize(genre)));

  return [...manual, ...automatic].slice(0, 10);
}

function renderNearbyGenres(genres) {
  nearbyGenres.innerHTML = '';
  if (!genres.length) return;

  const label = document.createElement('span');
  label.className = 'nearby-label';
  label.textContent = 'NEARBY GENRES';
  nearbyGenres.append(label);

  genres.forEach((genre) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = genre;
    button.addEventListener('click', () => {
      archiveFilter.value = 'genre';
      archiveQuery.value = genre;
      updateArchive();
    });
    nearbyGenres.append(button);
  });
}

function createArchiveNode(track, index, total) {
  const button = document.createElement('button');
  button.className = 'archive-node';
  button.type = 'button';
  button.textContent = track.song || '-';
  button.title = `${track.song} - ${track.artist}`;
  button.style.setProperty('--i', index);

  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  const spread = Math.sqrt((index + 0.5) / Math.max(total, 1));
  const angle = index * goldenAngle + stableRandom(index, 1.73) * 0.95;
  const orbit = (0.46 + spread * 0.54) * (0.9 + stableRandom(index, 2.91) * 0.16);
  const xJitter = (stableRandom(index, 3.67) - 0.5) * 4.8;
  const yJitter = (stableRandom(index, 4.43) - 0.5) * 4.2;
  const x = 50 + Math.cos(angle) * orbit * 44 + xJitter;
  const y = 50 + Math.sin(angle) * orbit * 39 + yJitter;

  button.style.left = `${Math.max(6, Math.min(94, x))}%`;
  button.style.top = `${Math.max(8, Math.min(92, y))}%`;
  button.addEventListener('click', () => openArchiveTrack(track, button));
  return button;
}

function renderArchiveTracks(tracks) {
  archiveField.innerHTML = '';
  const visible = tracks.slice(0, 260);

  visible.forEach((track, index) => {
    archiveField.append(createArchiveNode(track, index, visible.length));
  });
}

function updateArchive() {
  const filter = archiveFilter.value;
  const query = normalize(archiveQuery.value);
  currentTracks = archiveTracks.filter((track) => trackMatches(track, filter, query));

  archiveCount.textContent = `${currentTracks.length} tracks found`;
  if (currentTracks.length > 260) {
    archiveCount.textContent += ' · showing first 260';
  }

  renderNearbyGenres(inferredNearbyGenres(filter, query, currentTracks));
  renderArchiveTracks(currentTracks);
}

function openArchiveSearch() {
  document.body.classList.remove('is-archive-search-dismissed');
  document.body.classList.add('is-archive-search-open');
  archiveSearchToggle?.setAttribute('aria-expanded', 'true');
  if (window.matchMedia('(max-width: 900px)').matches) {
    window.setTimeout(() => archiveQuery.focus(), 80);
  }
}

function closeArchiveSearch(options = {}) {
  document.body.classList.remove('is-archive-search-open');
  archiveSearchToggle?.setAttribute('aria-expanded', 'false');
  if (options.dismissHover) {
    document.body.classList.add('is-archive-search-dismissed');
  }
}

function openArchiveTrack(track, sourceButton) {
  lastFocusedArchiveNode = sourceButton;
  archiveMeta.textContent = `${track.country} · ${track.year} · ${track.genres.join(' / ') || 'Unknown Genre'}`;
  archiveTitle.textContent = track.song || '-';
  archiveArtist.textContent = track.artist || '-';
  archiveDescription.textContent = track.description || '';
  archiveTags.innerHTML = '';
  track.genres.forEach((genre) => {
    const tag = document.createElement('button');
    tag.type = 'button';
    tag.textContent = genre;
    tag.addEventListener('click', () => {
      closeArchiveTrack();
      archiveFilter.value = 'genre';
      archiveQuery.value = genre;
      updateArchive();
      openArchiveSearch();
    });
    archiveTags.append(tag);
  });

  if (track.youtubeId) {
    archiveFrame.src = `https://www.youtube.com/embed/${track.youtubeId}?autoplay=1&controls=1&rel=0&modestbranding=1&playsinline=1`;
    archiveYoutubeLink.href = `https://www.youtube.com/watch?v=${track.youtubeId}`;
    archiveYoutubeLink.hidden = false;
  } else {
    archiveFrame.src = '';
    archiveYoutubeLink.hidden = true;
  }

  archiveDetail.classList.add('is-active');
  archiveDetail.setAttribute('aria-hidden', 'false');
  document.body.classList.add('is-archive-detail-open');
  document.querySelector('.archive-close')?.focus();
}

function closeArchiveTrack() {
  archiveDetail.classList.remove('is-active');
  archiveDetail.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('is-archive-detail-open');
  archiveFrame.src = '';
  if (lastFocusedArchiveNode) lastFocusedArchiveNode.focus();
}

archiveSearchToggle?.addEventListener('click', () => {
  if (document.body.classList.contains('is-archive-search-open')) {
    closeArchiveSearch();
  } else {
    openArchiveSearch();
  }
});

archiveForm.addEventListener('submit', (event) => {
  event.preventDefault();
  updateArchive();
});

archiveFilter.addEventListener('change', updateArchive);
archiveQuery.addEventListener('input', () => {
  window.clearTimeout(archiveQuery.updateTimer);
  archiveQuery.updateTimer = window.setTimeout(updateArchive, 120);
});

document.querySelectorAll('[data-close-archive]').forEach((control) => {
  control.addEventListener('click', closeArchiveTrack);
});

document.querySelectorAll('[data-close-archive-search]').forEach((control) => {
  control.addEventListener('click', () => {
    closeArchiveSearch({ dismissHover: control.classList.contains('archive-search-close') });
  });
});

archiveSearchToggle?.addEventListener('mouseenter', () => {
  document.body.classList.remove('is-archive-search-dismissed');
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && archiveDetail.classList.contains('is-active')) closeArchiveTrack();
  if (event.key === 'Escape' && document.body.classList.contains('is-archive-search-open')) closeArchiveSearch();
});

flattenArchiveData();
updateArchive();
