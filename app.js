const $ = (selector) => document.querySelector(selector);
const SONICGLOBE_DATABASE = window.MUSIC_DATABASE || {};

const app = $('#app');
const player = $('.player');
const earth = $('.earth');
const decadeButtons = $('#decade-buttons');
const choiceButtons = $('#choice-buttons');
const submenuButtons = $('#submenu-buttons');
const submenuGuide = $('#submenu-guide');
const trackCard = $('#track-card');
const youtubeWrap = $('#youtube-frame-wrap');
const youtubeFrame = $('#youtube-frame');

const countryLabels = new Map([
  ['United States', 'USA'],
  ['South Korea', 'SOUTH KOREA'],
]);

const continentMap = {
  'South Korea': 'Asia',
  Japan: 'Asia',
  Brazil: 'South America',
  Jamaica: 'North America',
  'United States': 'North America',
  USA: 'North America',
  'United Kingdom': 'Europe',
  Nigeria: 'Africa',
  Germany: 'Europe',
  France: 'Europe',
  Sweden: 'Europe',
  Argentina: 'South America',
  India: 'Asia',
  Cuba: 'North America',
  'South Africa': 'Africa',
  Australia: 'Oceania',
  Mexico: 'North America',
  Canada: 'North America',
  Italy: 'Europe',
  Spain: 'Europe',
  Russia: 'Europe',
  China: 'Asia',
  Colombia: 'South America',
  Iceland: 'Europe',
  Ethiopia: 'Africa',
  Portugal: 'Europe',
  Ghana: 'Africa',
  Norway: 'Europe',
  Ireland: 'Europe',
  'New Zealand': 'Oceania',
  Chile: 'South America',
};

const choiceConfig = [
  { id: 'famous', label: 'FAMOUS' },
  { id: 'countries', label: 'COUNTRIES' },
  { id: 'random', label: 'RANDOM' },
  { id: 'continents', label: 'CONTINENTS' },
  { id: 'genres', label: 'GENRES' },
];

const planetLayouts = {
  wide: {
    decades: [
      [0.16, 0.34],
      [0.20, 0.54],
      [0.42, 0.41],
      [0.38, 0.64],
      [0.54, 0.65],
      [0.60, 0.52],
      [0.63, 0.70],
      [0.68, 0.59],
    ],
    choices: [
      [0.38, 0.64],
      [0.52, 0.30],
      [0.42, 0.52],
      [0.58, 0.44],
      [0.68, 0.40],
      [0.66, 0.58],
    ],
    submenu: [
      [0.55, 0.28],
      [0.73, 0.22],
      [0.48, 0.36],
      [0.74, 0.43],
      [0.66, 0.66],
      [0.58, 0.57],
      [0.42, 0.48],
      [0.62, 0.34],
    ],
  },
  narrow: {
    decades: [
      [0.32, 0.15],
      [0.58, 0.26],
      [0.56, 0.36],
      [0.52, 0.49],
      [0.34, 0.61],
      [0.50, 0.68],
      [0.56, 0.75],
      [0.42, 0.82],
    ],
    choices: [
      [0.28, 0.75],
      [0.32, 0.18],
      [0.56, 0.27],
      [0.50, 0.40],
      [0.32, 0.55],
      [0.56, 0.66],
    ],
    submenu: [
      [0.56, 0.16],
      [0.30, 0.29],
      [0.56, 0.35],
      [0.50, 0.45],
      [0.52, 0.56],
      [0.30, 0.68],
      [0.54, 0.74],
      [0.45, 0.52],
    ],
  },
};

const state = {
  tracks: [],
  tracksByDecade: new Map(),
  selectedDecade: null,
  selectedTrack: null,
  isPlaying: false,
  isMuted: false,
  volume: 70,
  isTransitioning: false,
};

function displayCountry(country) {
  return countryLabels.get(country) || country.toUpperCase();
}

function decadeOf(year) {
  return Math.floor(Number(year) / 10) * 10;
}

function decadeLabel(decade) {
  return `${decade}s`;
}

function asArray(value) {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function randomFrom(items) {
  if (!items.length) return null;
  return items[Math.floor(Math.random() * items.length)];
}

function clamp(value, min, max) {
  if (max < min) return min;
  return Math.min(Math.max(value, min), max);
}

function viewportSize() {
  const visualViewport = window.visualViewport;
  return {
    width: Math.round(visualViewport?.width || window.innerWidth),
    height: Math.round(visualViewport?.height || window.innerHeight),
  };
}

function flattenData() {
  const tracks = [];

  Object.entries(SONICGLOBE_DATABASE).forEach(([country, years]) => {
    Object.entries(years).forEach(([yearKey, value]) => {
      const year = Number(yearKey);
      const decade = decadeOf(year);
      const continent = continentMap[country] || 'Other';

      asArray(value).forEach((song, index) => {
        tracks.push({
          ...song,
          id: `${country}-${year}-${index}-${song.song}`,
          country,
          countryLabel: displayCountry(country),
          year,
          decade,
          continent,
          genres: song.genres || [],
        });
      });
    });
  });

  state.tracks = tracks;
  tracks.forEach((track) => {
    if (!state.tracksByDecade.has(track.decade)) {
      state.tracksByDecade.set(track.decade, []);
    }
    state.tracksByDecade.get(track.decade).push(track);
  });
}

function makeButton(label, onClick, options = {}) {
  const button = document.createElement('button');
  button.className = 'float-button';
  button.type = 'button';
  button.textContent = label;
  button.style.setProperty('--i', options.index || 0);
  button.dataset.layoutGroup = options.group || '';
  button.dataset.layoutIndex = String(options.layoutIndex ?? options.index ?? 0);
  if (options.muted) button.classList.add('is-muted');
  if (!options.muted) button.addEventListener('click', onClick);
  return button;
}

function setView(view) {
  app.dataset.view = view;
  app.classList.remove('is-layout-ready');
  $('.stage-decades').setAttribute('aria-hidden', String(view !== 'decades'));
  $('.stage-choices').setAttribute('aria-hidden', String(view !== 'choices'));
  $('.stage-submenu').setAttribute('aria-hidden', String(view !== 'submenu'));
  requestLayout();
}

let layoutFrame = 0;
let resizeSettleTimers = [];

function currentLayoutSet() {
  const viewport = viewportSize();
  return viewport.width <= 900 || viewport.width / viewport.height < 0.92
    ? planetLayouts.narrow
    : planetLayouts.wide;
}

function fallbackPlanetPoint(group, index, total) {
  const angle = -Math.PI * 0.82 + (Math.PI * 1.12 * index) / Math.max(total - 1, 1);
  const radius = group === 'decades' ? 0.34 : 0.25;
  return [
    0.5 + Math.cos(angle) * radius,
    0.48 + Math.sin(angle) * radius,
  ];
}

function inferLayoutData(button) {
  if (button.dataset.layoutGroup) return;

  const parent = button.closest('.floating-options');
  const siblings = [...parent.querySelectorAll('.float-button')];
  const index = siblings.indexOf(button);

  if (parent.classList.contains('floating-decades')) {
    button.dataset.layoutGroup = 'decades';
  } else if (parent.classList.contains('floating-choices')) {
    button.dataset.layoutGroup = 'choices';
  } else {
    button.dataset.layoutGroup = 'submenu';
  }

  button.dataset.layoutIndex = String(Math.max(index, 0));
}

function fitPointInsidePlanet(point, earthRect, button) {
  const viewport = viewportSize();
  const buttonWidth = button.offsetWidth || 90;
  const buttonHeight = button.offsetHeight || 48;
  const halfWidth = buttonWidth / 2;
  const halfHeight = buttonHeight / 2;
  const playerHeight = player.getBoundingClientRect().height || 74;
  const headerSafe = viewport.width <= 600 ? 104 : 118;
  const edgeSafe = viewport.width <= 600 ? 44 : viewport.width <= 900 ? 28 : 16;
  const safe = {
    left: edgeSafe + halfWidth,
    right: viewport.width - edgeSafe - halfWidth,
    top: headerSafe + halfHeight,
    bottom: viewport.height - playerHeight - 16 - halfHeight,
  };

  const center = {
    x: earthRect.left + earthRect.width / 2,
    y: earthRect.top + earthRect.height / 2,
  };
  const radius = earthRect.width / 2;
  const interiorRadius = Math.max(24, radius - Math.hypot(halfWidth, halfHeight) - 24);
  const fitted = { ...point };

  for (let i = 0; i < 4; i += 1) {
    const dx = fitted.x - center.x;
    const dy = fitted.y - center.y;
    const distance = Math.hypot(dx, dy);

    if (distance > interiorRadius) {
      const scale = interiorRadius / distance;
      fitted.x = center.x + dx * scale;
      fitted.y = center.y + dy * scale;
    }

    fitted.x = clamp(fitted.x, safe.left, safe.right);
    fitted.y = clamp(fitted.y, safe.top, safe.bottom);
  }

  return fitted;
}

function visiblePlanetRect(earthRect) {
  const viewport = viewportSize();
  const playerHeight = player.getBoundingClientRect().height || 74;
  const fieldTopRatio = viewport.width <= 900 ? 0.22 : 0.1;
  const rect = {
    left: Math.max(earthRect.left, 0),
    top: Math.max(earthRect.top, viewport.height * fieldTopRatio),
    right: Math.min(earthRect.right, viewport.width),
    bottom: Math.min(earthRect.bottom, viewport.height - playerHeight - 8),
  };

  rect.width = Math.max(rect.right - rect.left, 1);
  rect.height = Math.max(rect.bottom - rect.top, 1);
  return rect;
}

function layoutFloatingButtons() {
  if (!earth) return;
  if (!document.body.classList.contains('is-settled') && app.dataset.view === 'decades') return;

  const earthRect = earth.getBoundingClientRect();
  const visibleRect = visiblePlanetRect(earthRect);
  const layoutSet = currentLayoutSet();
  const buttons = [...document.querySelectorAll('.float-button')];

  buttons.forEach((button) => {
    inferLayoutData(button);

    const group = button.dataset.layoutGroup;
    const index = Number(button.dataset.layoutIndex || 0);
    const groupButtons = [...document.querySelectorAll(`[data-layout-group="${group}"]`)];
    const point = layoutSet[group]?.[index] || fallbackPlanetPoint(group, index, groupButtons.length);
    const rawPoint = {
      x: visibleRect.left + visibleRect.width * point[0],
      y: visibleRect.top + visibleRect.height * point[1],
    };
    const fittedPoint = fitPointInsidePlanet(rawPoint, earthRect, button);

    button.style.setProperty('--layout-left', `${Math.round(fittedPoint.x)}px`);
    button.style.setProperty('--layout-top', `${Math.round(fittedPoint.y)}px`);
    button.classList.add('is-laid-out');
  });

  app.classList.add('is-layout-ready');
}

function guidePointOutsidePlanet(guide, earthRect) {
  const viewport = viewportSize();
  const visibleRect = visiblePlanetRect(earthRect);
  const guideWidth = guide.offsetWidth || 240;
  const guideHeight = guide.offsetHeight || 28;
  const playerHeight = player.getBoundingClientRect().height || 74;
  const gap = 22;
  const headerSafe = viewport.width <= 600 ? 88 : 116;
  const bottomSafe = viewport.height - playerHeight - guideHeight - 18;

  if (app.dataset.view === 'decades' && viewport.width > 900) {
    return {
      left: clamp(viewport.width * 0.72, 16, viewport.width - guideWidth - 16),
      top: clamp(viewport.height * 0.15, headerSafe, bottomSafe),
    };
  }

  let left = visibleRect.right + gap;
  let top = visibleRect.top + visibleRect.height * (app.dataset.view === 'decades' ? 0.42 : 0.22);

  if (left + guideWidth > viewport.width - 16) {
    left = viewport.width <= 600 ? viewport.width * 0.5 : viewport.width * 0.72;
    top = visibleRect.top - guideHeight - 18;
  }

  left = clamp(left, 16, viewport.width - guideWidth - 16);
  top = clamp(top, headerSafe, bottomSafe);

  const center = {
    x: earthRect.left + earthRect.width / 2,
    y: earthRect.top + earthRect.height / 2,
  };
  const guideCenter = {
    x: left + guideWidth / 2,
    y: top + guideHeight / 2,
  };
  const isInsideEarth = Math.hypot(guideCenter.x - center.x, guideCenter.y - center.y) < earthRect.width / 2 + 8;

  if (isInsideEarth && visibleRect.top - guideHeight - 18 >= headerSafe) {
    top = visibleRect.top - guideHeight - 18;
  }

  return { left, top };
}

function layoutGuides() {
  if (!earth) return;

  const earthRect = earth.getBoundingClientRect();
  [...document.querySelectorAll('.stage-guide')].forEach((guide) => {
    const point = guidePointOutsidePlanet(guide, earthRect);
    guide.style.setProperty('--guide-left', `${Math.round(point.left)}px`);
    guide.style.setProperty('--guide-top', `${Math.round(point.top)}px`);
    guide.classList.add('is-laid-out');
  });
}

function layoutFloatingUI() {
  layoutFloatingButtons();
  layoutGuides();
}

function requestLayout() {
  window.cancelAnimationFrame(layoutFrame);
  layoutFrame = window.requestAnimationFrame(() => {
    layoutFloatingUI();
  });
  window.setTimeout(layoutFloatingUI, 40);
}

function scheduleResizeLayout() {
  requestLayout();
  resizeSettleTimers.forEach((timer) => window.clearTimeout(timer));
  resizeSettleTimers = [140, 360, 720, 1120].map((delay) => window.setTimeout(requestLayout, delay));
}

function goToDecades() {
  if (state.isTransitioning) return;
  app.classList.remove('is-orbiting', 'is-leaving-decades', 'is-entering-choices');
  setView('decades');
  window.setTimeout(requestLayout, 980);
}

function goToChoices() {
  if (state.isTransitioning) return;
  state.isTransitioning = true;
  app.classList.add('is-leaving-decades');

  window.setTimeout(() => {
    renderChoices();
    app.classList.add('is-orbiting', 'is-entering-choices');
    setView('choices');
    requestLayout();
  }, 380);

  window.setTimeout(() => {
    app.classList.remove('is-leaving-decades', 'is-entering-choices');
    state.isTransitioning = false;
    requestLayout();
  }, 1380);
}

function renderDecades() {
  const decades = [...state.tracksByDecade.keys()].sort((a, b) => a - b);
  decadeButtons.innerHTML = '';

  decades.forEach((decade, index) => {
    const button = makeButton(decadeLabel(decade), () => {
      if (state.isTransitioning) return;
      state.selectedDecade = decade;
      goToChoices();
    }, { group: 'decades', index, layoutIndex: index });
    button.dataset.decade = String(decade);
    decadeButtons.append(button);
  });
  requestLayout();
}

function renderChoices() {
  choiceButtons.innerHTML = '';
  choiceButtons.append(makeButton('BACK', goToDecades, { group: 'choices', index: 0, layoutIndex: 0 }));
  choiceConfig.forEach((choice, index) => {
    choiceButtons.append(makeButton(choice.label, () => handleChoice(choice.id), {
      group: 'choices',
      index: index + 1,
      layoutIndex: index + 1,
    }));
  });
  requestLayout();
}

function tracksForDecade() {
  return state.tracksByDecade.get(state.selectedDecade) || [];
}

function representativeTrack() {
  const pool = tracksForDecade();
  if (!pool.length) return null;
  return pool.find((track) => track.youtubeId) || pool[0];
}

function sortedUnique(values) {
  return [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

function handleChoice(choiceId) {
  if (choiceId === 'random') {
    selectTrack(randomFrom(tracksForDecade()), 'RANDOM');
    return;
  }

  if (choiceId === 'famous') {
    selectTrack(representativeTrack(), 'FAMOUS');
    return;
  }

  if (choiceId === 'countries') {
    renderSubmenu('COUNTRIES', countryItems());
    return;
  }

  if (choiceId === 'genres') {
    const items = sortedUnique(tracksForDecade().flatMap((track) => track.genres))
      .slice(0, 6)
      .map((genre) => ({
        label: genre.toUpperCase(),
        action: () => selectTrack(randomFrom(tracksForDecade().filter((track) => track.genres.includes(genre))), genre),
      }));
    renderSubmenu('GENRES', [...items, backItem(), soonItem()]);
    return;
  }

  if (choiceId === 'continents') {
    const items = sortedUnique(tracksForDecade().map((track) => track.continent))
      .slice(0, 6)
      .map((continent) => ({
        label: continent.toUpperCase(),
        action: () => selectTrack(randomFrom(tracksForDecade().filter((track) => track.continent === continent)), continent),
      }));
    renderSubmenu('CONTINENTS', [...items, backItem(), soonItem()]);
  }
}

function countryItems() {
  const preferred = ['Japan', 'Brazil', 'Jamaica', 'United States', 'South Korea'];

  return [
    ...preferred.map((country) => ({
      label: displayCountry(country),
      action: () => {
        const countryTrack = randomFrom(tracksForDecade().filter((track) => track.country === country));
        selectTrack(countryTrack || representativeTrack(), displayCountry(country));
      },
    })),
    backItem(),
    soonItem(),
  ];
}

function backItem() {
  return {
    label: 'BACK',
    action: () => {
      renderChoices();
      setView('choices');
      requestLayout();
    },
  };
}

function soonItem() {
  return {
    label: 'SOON...',
    muted: true,
  };
}

function renderSubmenu(label, items) {
  submenuGuide.textContent = 'Select Your Choices';
  submenuButtons.innerHTML = '';
  items.forEach((item, index) => {
    submenuButtons.append(makeButton(item.label, item.action || (() => {}), {
      group: 'submenu',
      index,
      layoutIndex: index,
      muted: item.muted,
    }));
  });
  setView('submenu');
}

function setText(selector, value) {
  const el = $(selector);
  if (el) el.textContent = value || '';
}

function sendYouTubeCommand(func, args = []) {
  if (!youtubeFrame.contentWindow) return;
  youtubeFrame.contentWindow.postMessage(JSON.stringify({
    event: 'command',
    func,
    args,
  }), '*');
}

function syncYouTubeVolume() {
  if (!state.selectedTrack || !state.selectedTrack.youtubeId) return;

  sendYouTubeCommand('setVolume', [state.volume]);
  sendYouTubeCommand(state.isMuted || state.volume === 0 ? 'mute' : 'unMute');
}

function selectTrack(track, sourceLabel) {
  if (!track) return;
  state.selectedTrack = track;
  state.isPlaying = false;
  player.classList.remove('is-playing');

  setText('#player-country', sourceLabel || track.countryLabel);
  setText('#player-year', String(track.year));
  setText('#player-song', track.song || '-');
  setText('#player-artist', track.artist || '-');

  setText('#card-country', track.countryLabel);
  setText('#card-year', String(track.year));
  setText('#card-song', track.song || '-');
  setText('#card-artist', track.artist || '-');
  setText('#card-description', track.description || '');

  $('#play-button').disabled = !track.youtubeId;
  trackCard.classList.add('is-active');
  trackCard.setAttribute('aria-hidden', 'false');
  if (track.youtubeId) {
    playVideo();
  } else {
    stopVideo();
  }
}

function playVideo() {
  const track = state.selectedTrack;
  if (!track || !track.youtubeId) return;

  const mute = state.isMuted ? 1 : 0;
  youtubeFrame.src = `https://www.youtube.com/embed/${track.youtubeId}?autoplay=1&mute=${mute}&controls=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`;
  youtubeWrap.classList.add('is-active');
  youtubeWrap.setAttribute('aria-hidden', 'false');
  state.isPlaying = true;
  player.classList.add('is-playing');
  window.setTimeout(syncYouTubeVolume, 700);
  window.setTimeout(syncYouTubeVolume, 1400);
}

function stopVideo() {
  youtubeFrame.src = '';
  state.isPlaying = false;
  player.classList.remove('is-playing');
}

function setupPlayer() {
  $('#play-button').addEventListener('click', () => {
    if (state.isPlaying) {
      stopVideo();
    } else {
      playVideo();
    }
  });

  $('#youtube-button').addEventListener('click', playVideo);
  $('#youtube-close').addEventListener('click', () => {
    youtubeWrap.classList.remove('is-active');
    youtubeWrap.setAttribute('aria-hidden', 'true');
    stopVideo();
  });

  $('#mute-button').addEventListener('click', () => {
    state.isMuted = !state.isMuted;
    syncYouTubeVolume();
    $('#mute-button').setAttribute('aria-label', state.isMuted ? 'Unmute audio' : 'Mute audio');
  });

  $('#volume-slider').addEventListener('input', (event) => {
    state.volume = Number(event.target.value);
    state.isMuted = state.volume === 0;
    syncYouTubeVolume();
    $('#mute-button').setAttribute('aria-label', state.isMuted ? 'Unmute audio' : 'Mute audio');
  });

  youtubeFrame.addEventListener('load', () => {
    window.setTimeout(syncYouTubeVolume, 300);
  });

  $('#track-card-close').addEventListener('click', () => {
    trackCard.classList.remove('is-active');
    trackCard.setAttribute('aria-hidden', 'true');
  });
}

function setupStars() {
  const canvas = $('#starfield');
  const context = canvas.getContext('2d');
  const stars = Array.from({ length: 180 }, () => ({
    x: Math.random(),
    y: Math.random(),
    r: Math.random() * 1.6 + 0.25,
    a: Math.random() * 0.75 + 0.2,
  }));

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function draw(time = 0) {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    stars.forEach((star, index) => {
      const alpha = star.a * (0.72 + Math.sin(time * 0.001 + index) * 0.28);
      context.beginPath();
      context.fillStyle = `rgba(255,255,255,${alpha})`;
      context.arc(star.x * window.innerWidth, star.y * window.innerHeight, star.r, 0, Math.PI * 2);
      context.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize);
  requestAnimationFrame(draw);
}

function initFromUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const decadeParam = Number(params.get('decade') || 1990);
  const view = params.get('view');

  if (!view) return;

  state.selectedDecade = state.tracksByDecade.has(decadeParam)
    ? decadeParam
    : [...state.tracksByDecade.keys()].sort((a, b) => b - a)[0];

  if (view === 'choices') {
    renderChoices();
    setView('choices');
    return;
  }

  if (view === 'countries') {
    renderSubmenu('COUNTRIES', countryItems());
    return;
  }

  if (view === 'genres' || view === 'continents') {
    renderChoices();
    handleChoice(view);
  }
}

function init() {
  flattenData();
  renderDecades();
  setupPlayer();
  setupStars();
  initFromUrlParams();
  window.addEventListener('resize', scheduleResizeLayout);
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', scheduleResizeLayout);
  }
  window.addEventListener('orientationchange', () => {
    window.setTimeout(scheduleResizeLayout, 120);
  });
  if (document.fonts) {
    document.fonts.ready.then(requestLayout);
  }
  [600, 1700, 2600].forEach((delay) => window.setTimeout(requestLayout, delay));
  window.setTimeout(() => {
    document.body.classList.add('is-settled');
    layoutFloatingUI();
    window.setTimeout(layoutFloatingUI, 80);
  }, 3300);
}

init();
