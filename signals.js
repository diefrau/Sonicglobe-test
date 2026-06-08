const signalArticles = {
  today: {
    type: "TODAY'S SIGNAL",
    country: 'JAPAN',
    year: '2016',
    genre: 'CITY POP / DANCE',
    title: '恋',
    artist: '星野源',
    youtubeId: 'jhOVibLEDhA',
    body: [
      '2010년대 중반의 밝고 압축적인 팝 신호다. 춤출 수 있는 리듬 위에 시티팝의 따뜻한 잔향이 얹혀 있고, 멜로디는 일상적인 장면을 곧바로 공동의 기억으로 바꾼다.',
      '이 곡은 단순한 차트 히트를 넘어 드라마, 안무, 후렴이 하나의 사회적 리듬으로 묶인 사례다. 일본 팝이 과거의 그루브를 스트리밍 시대에 어떻게 다시 활성화했는지 들어볼 수 있는 좋은 입구다.',
    ],
  },
  hidden: {
    type: 'HIDDEN GEM',
    country: 'SOUTH KOREA',
    year: '1969',
    genre: 'SOUL / PSYCHEDELIC ROCK',
    title: '커피 한 잔',
    artist: '펄 시스터즈',
    youtubeId: 'AetZ0YAhgE8',
    body: [
      '신중현 사운드의 우주에서 튀어나온 짧은 충격파다. 전기 기타, 소울풀한 보컬 프레이징, 그리고 당대 한국 팝의 틀보다 조금 더 뜨겁게 느껴지는 편곡이 한데 묶여 있다.',
      '디깅의 관점에서 이 곡은 경첩 같은 트랙이다. 뒤로는 미국 소울과 개러지 록을 가리키고, 앞으로는 더 묵직해질 한국 그룹사운드 실험을 예고한다.',
    ],
  },
  scene: {
    type: 'SCENE SPOTLIGHT',
    country: 'JAMAICA',
    year: '1970S',
    genre: 'ROOTS REGGAE',
    title: 'No Woman No Cry',
    artist: 'Bob Marley & The Wailers',
    youtubeId: 'IT8XvzIfi4U',
    body: [
      '기억을 공동체의 코러스로 바꾸는 노래다. 그루브는 차분하지만 정서의 중심은 크다. 고난, 장소, 버티는 마음이 하나의 후렴 안에서 함께 움직인다.',
      '씬의 표지로 보자면, 이 곡은 루츠 레게가 지역의 구체적인 경험을 잃지 않으면서도 어떻게 세계적인 언어가 될 수 있었는지 보여준다.',
    ],
  },
  archive: {
    type: 'FROM THE ARCHIVE',
    country: 'BRAZIL',
    year: '1964',
    genre: 'BOSSA NOVA / JAZZ',
    title: 'Garota de Ipanema',
    artist: 'Astrud Gilberto & João Gilberto',
    youtubeId: 'sVdaFQhS86E',
    body: [
      '표면은 거의 무중력처럼 부드럽지만, 그 아래의 문화적 움직임은 아주 정교하다. 보사노바는 브라질의 세련된 도시 감각을 재즈 어법으로 번역해 세계로 보냈다.',
      '이 아카이브 노트가 흥미로운 이유는 분명하다. 하나의 지역 씬이 톤, 절제, 공기감만으로 어떻게 국제적인 청취 습관이 되는지 보여주기 때문이다.',
    ],
  },
  surprise: {
    type: 'SURPRISE SIGNAL',
    country: 'NIGERIA',
    year: '1976',
    genre: 'AFROBEAT / FUNK',
    title: 'Zombie',
    artist: 'Fela Kuti',
    youtubeId: 'Qj5x6pbJMyU',
    body: [
      '이 신호는 3분짜리 팝송처럼 도착하지 않는다. 길게 뻗고, 몸을 잠그고, 반복을 압력으로 바꾼다.',
      '펠라 쿠티는 그루브를 정치적 건축물처럼 사용한다. 혼 섹션, 콜앤리스폰스, 리듬이 군사적 복종에 맞서는 하나의 논리로 움직인다. 음악이 운동이자 논쟁이 되는 순간이다.',
    ],
  },
};

const modal = document.querySelector('#signal-modal');
const modalFrame = document.querySelector('#signal-youtube');
const modalType = document.querySelector('#signal-modal-type');
const modalMeta = document.querySelector('#signal-modal-meta');
const modalTitle = document.querySelector('#signal-modal-title');
const modalArtist = document.querySelector('#signal-modal-artist');
const modalBody = document.querySelector('#signal-modal-body');
const modalLink = document.querySelector('#signal-youtube-link');
let lastFocusedSignal = null;

function openSignal(signalId) {
  const signal = signalArticles[signalId];
  if (!signal || !modal) return;

  lastFocusedSignal = document.activeElement;
  modalType.textContent = signal.type;
  modalMeta.textContent = `${signal.country} · ${signal.year} · ${signal.genre}`;
  modalTitle.textContent = signal.title;
  modalArtist.textContent = signal.artist;
  modalBody.innerHTML = signal.body.map((paragraph) => `<p>${paragraph}</p>`).join('');
  modalFrame.src = `https://www.youtube.com/embed/${signal.youtubeId}?controls=1&rel=0&modestbranding=1&playsinline=1`;
  modalLink.href = `https://www.youtube.com/watch?v=${signal.youtubeId}`;

  modal.classList.add('is-active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('is-signal-modal-open');
  document.querySelector('.signal-modal-close')?.focus();
}

function closeSignal() {
  if (!modal) return;

  modal.classList.remove('is-active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('is-signal-modal-open');
  modalFrame.src = '';
  if (lastFocusedSignal) lastFocusedSignal.focus();
}

document.querySelectorAll('.signal-card').forEach((card) => {
  card.addEventListener('click', () => openSignal(card.dataset.signalId));
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openSignal(card.dataset.signalId);
    }
  });
});

document.querySelectorAll('[data-close-signal]').forEach((control) => {
  control.addEventListener('click', closeSignal);
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal?.classList.contains('is-active')) closeSignal();
});
