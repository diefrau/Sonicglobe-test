// data.js
// 구조: { "국가명": { "연도": [ ...곡 배열 ] } }
// 나라를 클릭하면 해당 연도 배열에서 랜덤으로 한 곡을 선택합니다.
const MUSIC_DATABASE = {
  "South Korea": {
  "1950": [
    {
      "song": "전선야곡",
      "artist": "신세영",
      "album": "전선야곡 (Single)",
      "releaseDate": "1950",
      "genres": ["Trot"],
      "description": "한국전쟁 당시 고향에 계신 어머니를 그리워하는 병사의 마음을 담아 전 국민적인 심금을 울린 곡입니다.",
      "youtubeId": "I87i1F8t6vU"
    },
    {
      "song": "전우야 잘자라",
      "artist": "현인",
      "album": "전우야 잘자라 (Single)",
      "releaseDate": "1950",
      "genres": ["Military Song", "Trot"],
      "description": "전쟁의 포화 속에서 전우애를 다지는 가사로 당시 군인과 민간인 모두에게 널리 불린 진중가요입니다.",
      "youtubeId": "zX6Ew-6_M84"
    },
    {
      "song": "아내의 노래",
      "artist": "심연옥",
      "album": "아내의 노래 (Single)",
      "releaseDate": "1950",
      "genres": ["Trot"],
      "description": "남편을 전쟁터로 보낸 아내의 애절한 기다림을 담은 곡으로 심연옥의 데뷔작이자 대표곡입니다.",
      "youtubeId": "VwGZqQvj9r8"
    }
  ],
  "1951": [
    {
      "song": "굳세어라 금순아",
      "artist": "현인",
      "album": "굳세어라 금순아 (Single)",
      "releaseDate": "1951",
      "genres": ["Trot"],
      "description": "흥남 철수 작전과 피난민의 애환을 상징하는 곡으로, 전쟁 시기 가장 상징적인 대중가요 중 하나입니다.",
      "youtubeId": "u6iLOfB9hic"
    },
    {
      "song": "신라의 달밤",
      "artist": "현인",
      "album": "신라의 달밤 (Single)",
      "releaseDate": "1951",
      "genres": ["Trot"],
      "description": "작곡가 박시춘과 가수 현인의 콤비가 만들어낸 곡으로, 독특한 창법과 이국적인 분위기로 큰 인기를 끌었습니다.",
      "youtubeId": "MOnm89574Q8"
    },
    {
      "song": "고향만리",
      "artist": "현인",
      "album": "고향만리 (Single)",
      "releaseDate": "1951",
      "genres": ["Trot"],
      "description": "피난길에 오른 대중들이 고향을 그리워하며 불렀던 곡으로, 현인의 전성기를 증명하는 곡입니다.",
      "youtubeId": "n8_H_7e0R6U"
    }
  ],
  "1952": [
    {
      "song": "경상도 아가씨",
      "artist": "박재홍",
      "album": "경상도 아가씨 (Single)",
      "releaseDate": "1952",
      "genres": ["Trot"],
      "description": "피난지 부산에서의 삶과 만남을 그린 곡으로, 당시 영도다리 주변 피난민들의 풍경을 생생히 묘사했습니다.",
      "youtubeId": "6m9H1o0y6e4"
    },
    {
      "song": "봄날은 간다",
      "artist": "백설희",
      "album": "봄날은 간다 (Single)",
      "releaseDate": "1952",
      "genres": ["Trot"],
      "description": "한국 대중음악사상 가장 아름다운 노랫말 중 하나로 꼽히며, 전쟁 중에도 꽃은 피고 지는 인생의 허무를 노래했습니다.",
      "youtubeId": "pB6mZ8Wn8E4"
    },
    {
      "song": "홍도야 우지마라",
      "artist": "박재홍",
      "album": "홍도야 우지마라 (Single)",
      "releaseDate": "1952",
      "genres": ["Trot"],
      "description": "일제강점기 신파극 주제가를 1950년대에 박재홍이 다시 불러 전후 대중들에게 다시 한번 큰 사랑을 받았습니다.",
      "youtubeId": "Y3zL99jA0W8"
    }
  ],
  "1953": [
    {
      "song": "이별의 부산정거장",
      "artist": "남인수",
      "album": "이별의 부산정거장 (Single)",
      "releaseDate": "1953",
      "genres": ["Trot"],
      "description": "휴전 직후 부산을 떠나 상경하는 피난민들의 이별 풍경을 경쾌하면서도 슬프게 담아낸 명곡입니다.",
      "youtubeId": "hWq6uF4XjYo"
    },
    {
      "song": "추억의 소야곡",
      "artist": "남인수",
      "album": "추억의 소야곡 (Single)",
      "releaseDate": "1953",
      "genres": ["Trot"],
      "description": "남인수 특유의 미성이 돋보이는 곡으로, 미련 어린 사랑을 세련된 가창으로 표현하여 큰 인기를 누렸습니다.",
      "youtubeId": "u06MvL0E_4c"
    },
    {
      "song": "물방아 도는 내력",
      "artist": "박재홍",
      "album": "물방아 도는 내력 (Single)",
      "releaseDate": "1953",
      "genres": ["Trot"],
      "description": "고향의 평화로운 풍경을 그리워하는 가사로 전쟁 후 안정을 찾고 싶어 하던 대중들의 마음을 사로잡았습니다.",
      "youtubeId": "Dq8p2U8_3uY"
    }
  ],
  "1954": [
    {
      "song": "샌프란시스코",
      "artist": "백설희",
      "album": "샌프란시스코 (Single)",
      "releaseDate": "1954",
      "genres": ["Traditional Pop", "Jazz Pop"],
      "description": "미국적인 정취와 세련된 멜로디를 통해 전후 한국 사회에 불어온 서구 문화의 동경을 보여주는 곡입니다.",
      "youtubeId": "hE_W9h-F08I"
    },
    {
      "song": "단장의 미아리고개",
      "artist": "이해연",
      "album": "단장의 미아리고개 (Single)",
      "releaseDate": "1954",
      "genres": ["Trot"],
      "description": "전쟁 중 납북된 남편을 그리워하는 처절한 가사로, 미아리고개라는 장소성을 통해 전쟁의 비극을 증언합니다.",
      "youtubeId": "rS_3Ww4wz7M"
    },
    {
      "song": "청춘 고백",
      "artist": "남인수",
      "album": "청춘 고백 (Single)",
      "releaseDate": "1954",
      "genres": ["Trot"],
      "description": "전쟁의 상흔에서 벗어나 다시 사랑과 인생을 이야기하기 시작한 청년들의 마음을 대변하며 히트했습니다.",
      "youtubeId": "qWp9v6I9m6Y"
    }
  ],
  "1955": [
    {
      "song": "나하나의 사랑",
      "artist": "송민도",
      "album": "나하나의 사랑 (Single)",
      "releaseDate": "1955",
      "genres": ["Traditional Pop"],
      "description": "트로트의 틀을 벗어나 스탠다드 팝 스타일의 세련된 감성을 선보이며 한국 발라드의 원형을 제시했습니다.",
      "youtubeId": "7A4r5p9kYm8"
    },
    {
      "song": "청춘 등대",
      "artist": "손인호",
      "album": "청춘 등대 (Single)",
      "releaseDate": "1955",
      "genres": ["Trot"],
      "description": "손인호의 묵직하면서도 따뜻한 음색이 돋보이는 곡으로 50년대 중반 대중적인 큰 인기를 얻었습니다.",
      "youtubeId": "f-z1E6gBvM0"
    },
    {
      "song": "미사의 노래",
      "artist": "이인권",
      "album": "미사의 노래 (Single)",
      "releaseDate": "1955",
      "genres": ["Trot"],
      "description": "종교적인 분위기와 슬픈 멜로디가 결합되어 당시 많은 사람들에게 위로를 주었던 명곡입니다.",
      "youtubeId": "m_yW-L596_E"
    }
  ],
  "1956": [
    {
      "song": "산유화",
      "artist": "남인수",
      "album": "산유화 (Single)",
      "releaseDate": "1956",
      "genres": ["Trot"],
      "description": "자연의 섭리를 인간의 삶과 비유한 철학적인 가사와 남인수의 절정기 가창력을 감상할 수 있는 곡입니다.",
      "youtubeId": "S3n-K6pP8x0"
    },
    {
      "song": "비 내리는 호남선",
      "artist": "손인호",
      "album": "비 내리는 호남선 (Single)",
      "releaseDate": "1956",
      "genres": ["Trot"],
      "description": "당시 정치적 상황과 맞물려 '해공 신익희'의 죽음을 애도하는 노래로 오해받으며 전국적인 신드롬을 일으켰습니다.",
      "youtubeId": "8z_D-kYy1D8"
    },
    {
      "song": "아리조나 카우보이",
      "artist": "명국환",
      "album": "아리조나 카우보이 (Single)",
      "releaseDate": "1956",
      "genres": ["Western Pop", "Trot"],
      "description": "미국 서부 영화의 영향을 받은 경쾌한 리듬의 곡으로, 당시 한국 사회에 유행하던 '미제' 문화를 반영합니다.",
      "youtubeId": "Nf-E2_5-F5s"
    }
  ],
  "1957": [
    {
      "song": "무너진 사랑탑",
      "artist": "남인수",
      "album": "무너진 사랑탑 (Single)",
      "releaseDate": "1957",
      "genres": ["Trot"],
      "description": "남인수의 후기 커리어에서 가장 큰 성공을 거둔 곡 중 하나로, 실연의 아픔을 장중하게 그려냈습니다.",
      "youtubeId": "hWq6uF4XjYo"
    },
    {
      "song": "대전 부르스",
      "artist": "안정애",
      "album": "대전 부르스 (Single)",
      "releaseDate": "1957",
      "genres": ["Blues", "Trot"],
      "description": "대전역을 배경으로 한 이별의 정서를 블루스 리듬에 담아내어 밤차를 타는 이들의 감수성을 자극했습니다.",
      "youtubeId": "Z7S8v7O_7mY"
    },
    {
      "song": "백치 아다다",
      "artist": "나애심",
      "album": "영화 '백치 아다다' 주제가",
      "releaseDate": "1957",
      "genres": ["Trot"],
      "description": "동명 소설을 영화화한 작품의 주제가로, 나애심의 허스키하고 매력적인 목소리가 큰 화제가 되었습니다.",
      "youtubeId": "pE_NInGv0j8"
    }
  ],
  "1958": [
    {
      "song": "단벌 신사",
      "artist": "김희갑",
      "album": "단벌 신사 (Single)",
      "releaseDate": "1958",
      "genres": ["Comedy Song", "Swing Jazz"],
      "description": "가난하지만 낙천적인 태도를 잃지 않는 당시 서민들의 모습을 재치 있게 묘사한 유행가입니다.",
      "youtubeId": "v8Y4Z6Q-JjQ"
    },
    {
      "song": "꿈에 본 내 고향",
      "artist": "한정무",
      "album": "꿈에 본 내 고향 (Single)",
      "releaseDate": "1958",
      "genres": ["Trot"],
      "description": "실향민들의 고통을 정면으로 다룬 곡으로, 한정무의 처절한 가창이 돋보이는 시대의 비가입니다.",
      "youtubeId": "L-SshG7PAnM"
    },
    {
      "song": "울어라 기타줄",
      "artist": "손인호",
      "album": "울어라 기타줄 (Single)",
      "releaseDate": "1958",
      "genres": ["Trot"],
      "description": "기타 선율에 실린 애수 어린 멜로디가 대중들의 고독감을 달래주며 큰 인기를 끌었습니다.",
      "youtubeId": "7A4r5p9kYm8"
    }
  ],
  "1959": [
    {
      "song": "유정천리",
      "artist": "박재홍",
      "album": "영화 '유정천리' 주제가",
      "releaseDate": "1959",
      "genres": ["Trot"],
      "description": "영화와 함께 엄청난 히트를 기록했으며, 1950년대를 마무리하는 가장 대표적인 가요로 꼽힙니다.",
      "youtubeId": "AetZ0YAhgE8"
    },
    {
      "song": "Roses in the Snow",
      "artist": "김시스터즈",
      "album": "The Kim Sisters: Their First Album",
      "releaseDate": "1959",
      "genres": ["Traditional Pop", "Vocal Group"],
      "description": "한국 가수 최초로 미국 시장에 진출하여 성공을 거둔 김시스터즈의 대표적인 퍼포먼스 곡입니다.",
      "youtubeId": "pB_O_39S8vU"
    },
    {
      "song": "꿈은 사라지고",
      "artist": "최무룡",
      "album": "영화 '꿈은 사라지고' 주제가",
      "releaseDate": "1959",
      "genres": ["Traditional Pop"],
      "description": "당대 최고의 영화 스타 최무룡이 부른 곡으로, 50년대 말의 낭만적인 분위기를 잘 담고 있습니다.",
      "youtubeId": "_AY4sPDNzy8"
    }
  ],
  "1960": [
    {
      "song": "외나무 다리",
      "artist": "최무룡",
      "album": "영화 '외나무 다리' 주제가",
      "releaseDate": "1960",
      "genres": ["Trot", "Traditional Pop"],
      "description": "영화배우 최무룡이 부른 서정적인 곡으로, 당시 전후 복구 시기 사람들의 감수성을 자극하며 큰 인기를 끌었습니다.",
      "youtubeId": "m-p1-yK6XW0"
    },
    {
      "song": "울어라 열풍아",
      "artist": "이미자",
      "album": "울어라 열풍아 (Single)",
      "releaseDate": "1960",
      "genres": ["Trot"],
      "description": "이미자 초기 커리어의 히트곡으로, 한국적 애환이 서린 목소리가 대중들의 마음을 사로잡기 시작한 시점의 곡입니다.",
      "youtubeId": "8z_D-kYy1D8"
    },
    {
      "song": "지평선은 말이 없다",
      "artist": "기주희",
      "album": "영화 '지평선은 말이 없다' 주제가",
      "releaseDate": "1960",
      "genres": ["Trot"],
      "description": "만주를 배경으로 한 영화의 주제가로, 웅장하면서도 애수 어린 멜로디가 60년대 초반 큰 반향을 일으켰습니다.",
      "youtubeId": "zX6Ew-6_M84"
    }
  ],
  "1961": [
    {
      "song": "노란 샤쓰의 사나이",
      "artist": "한명숙",
      "album": "한명숙 히트곡집",
      "releaseDate": "1961",
      "genres": ["Swing", "Country Pop"],
      "description": "한국 가요사에서 '팝 스타일'의 전성기를 연 곡으로, 동남아시아를 비롯해 일본까지 번안될 정도로 범아시아적 히트를 기록했습니다.",
      "youtubeId": "rS_3Ww4wz7M"
    },
    {
      "song": "우리 애인은 올드미스",
      "artist": "최희준",
      "album": "최희준 히트곡집",
      "releaseDate": "1961",
      "genres": ["Jazz Pop", "Swing"],
      "description": "미국 유학파 출신의 엘리트 가수 최희준이 부른 경쾌한 재즈 스타일의 곡으로, 현대적인 남성상을 제시했습니다.",
      "youtubeId": "Nf-E2_5-F5s"
    },
    {
      "song": "해운대 엘레지",
      "artist": "손인호",
      "album": "해운대 엘레지 (Single)",
      "releaseDate": "1961",
      "genres": ["Trot"],
      "description": "손인호의 차분하고 깊은 가창력이 돋보이는 곡으로, 부산 해운대를 배경으로 한 이별 노래의 고전입니다.",
      "youtubeId": "u6iLOfB9hic"
    }
  ],
  "1962": [
    {
      "song": "님은 먼 곳에 (초판)",
      "artist": "김치캣",
      "album": "김치캣 히트집",
      "releaseDate": "1962",
      "genres": ["Traditional Pop", "Jazz"],
      "description": "미국 무대에서도 활동한 걸그룹 김치캣의 세련된 화음이 돋보이는 곡으로, 60년대 초반의 모던한 분위기를 담고 있습니다.",
      "youtubeId": "pB_O_39S8vU"
    },
    {
      "song": "진고개 신사",
      "artist": "최희준",
      "album": "진고개 신사 / 맨발의 청춘",
      "releaseDate": "1962",
      "genres": ["Traditional Pop"],
      "description": "당시 서울의 풍경과 낭만을 노래한 최희준의 대표곡으로, 중후한 저음이 돋보이는 스탠다드 팝입니다.",
      "youtubeId": "MOnm89574Q8"
    },
    {
      "song": "눈물 젖은 두만강 (재발표)",
      "artist": "김정구",
      "album": "김정구 걸작집",
      "releaseDate": "1962",
      "genres": ["Trot"],
      "description": "일제강점기 곡이나 60년대 초반 다시 대대적으로 유행하며 국민 가요로 자리 잡았습니다.",
      "youtubeId": "n8_H_7e0R6U"
    }
  ],
  "1963": [
    {
      "song": "동백아가씨",
      "artist": "이미자",
      "album": "영화 '동백아가씨' 주제가",
      "releaseDate": "1963",
      "genres": ["Trot"],
      "description": "한국 대중음악 역사상 최고의 베스트셀러 중 하나로, 이미자를 '엘레지의 여왕'으로 등극시킨 결정적인 곡입니다.",
      "youtubeId": "I87i1F8t6vU"
    },
    {
      "song": "맨발의 청춘",
      "artist": "최희준",
      "album": "영화 '맨발의 청춘' 주제가",
      "releaseDate": "1963",
      "genres": ["Jazz Pop", "Swing"],
      "description": "청춘 영화의 금자탑인 '맨발의 청춘' 주제가로, 당시 젊은 세대의 반항과 낭만을 상징하는 찬가였습니다.",
      "youtubeId": "6m9H1o0y6e4"
    },
    {
      "song": "빨간 구두 아가씨",
      "artist": "남일해",
      "album": "남일해 히트곡집",
      "releaseDate": "1963",
      "genres": ["Traditional Pop", "Swing"],
      "description": "남일해의 매력적인 저음과 경쾌한 리듬이 어우러져 도시적인 세련미를 뽐냈던 히트곡입니다.",
      "youtubeId": "Y3zL99jA0W8"
    }
  ],
  "1964": [
    {
      "song": "떠날 때는 말없이",
      "artist": "현미",
      "album": "영화 '떠날 때는 말없이' 주제가",
      "releaseDate": "1964",
      "genres": ["Traditional Pop", "Jazz Pop"],
      "description": "허스키 보이스의 대명사 현미의 대표곡으로, 이봉조 작곡가의 세련된 편곡이 돋보이는 명곡입니다.",
      "youtubeId": "Dq8p2U8_3uY"
    },
    {
      "song": "빗속의 여인",
      "artist": "에드훠 (Add 4)",
      "album": "The Add 4: First Album",
      "releaseDate": "1964",
      "genres": ["Rock", "Psych-Rock"],
      "description": "한국 록의 대부 신중현이 결성한 에드훠의 곡으로, 한국 그룹 사운드의 역사적인 시작점을 알린 곡입니다.",
      "youtubeId": "hE_W9h-F08I"
    },
    {
      "song": "단골손님",
      "artist": "조미미",
      "album": "조미미 히트집",
      "releaseDate": "1964",
      "genres": ["Trot"],
      "description": "신선한 가창력으로 60년대 중반 트로트계에 활력을 불어넣은 조미미의 초기 히트작입니다.",
      "youtubeId": "qWp9v6I9m6Y"
    }
  ],
  "1965": [
    {
      "song": "님아",
      "artist": "펄 시스터즈",
      "album": "펄 시스터즈 데뷔 앨범",
      "releaseDate": "1965",
      "genres": ["Soul", "Rock"],
      "description": "신중현 사운드와 만나 파격적인 댄스와 소울풀한 창법을 선보이며 가요계에 큰 충격을 주었습니다.",
      "youtubeId": "u06MvL0E_4c"
    },
    {
      "song": "하숙생",
      "artist": "최희준",
      "album": "라디오 드라마 '하숙생' 주제가",
      "releaseDate": "1965",
      "genres": ["Traditional Pop"],
      "description": "인생을 '나그네 길'에 비유한 철학적인 가사로 남녀노소 불문하고 엄청난 사랑을 받은 곡입니다.",
      "youtubeId": "m_yW-L596_E"
    },
    {
      "song": "흑맥주",
      "artist": "최양숙",
      "album": "최양숙 가요 앨범",
      "releaseDate": "1965",
      "genres": ["Traditional Pop", "Chanson Style"],
      "description": "샹송적인 분위기를 풍기는 최양숙의 우아한 가창력이 돋보이는 곡으로 60년대 지성인들 사이에서 인기였습니다.",
      "youtubeId": "f-z1E6gBvM0"
    }
  ],
  "1966": [
    {
      "song": "안개",
      "artist": "정훈희",
      "album": "영화 '안개' 주제가",
      "releaseDate": "1966",
      "genres": ["Jazz Pop", "Soul"],
      "description": "당시 17세였던 정훈희의 청아한 목소리와 몽환적인 분위기가 결합되어 한국 팝의 수준을 높인 명곡입니다.",
      "youtubeId": "Z7S8v7O_7mY"
    },
    {
      "song": "가슴 아프게",
      "artist": "남진",
      "album": "남진 히트곡집",
      "releaseDate": "1966",
      "genres": ["Trot"],
      "description": "남진을 당대 최고의 스타로 만든 곡으로, '오빠 부대'의 시초격인 폭발적인 인기를 끌었습니다.",
      "youtubeId": "S3n-K6pP8x0"
    },
    {
      "song": "월남에서 돌아온 김상사",
      "artist": "김추자",
      "album": "늦기 전에 / 월남에서 돌아온 김상사",
      "releaseDate": "1966",
      "genres": ["Soul", "Psychedelic Rock"],
      "description": "신중현 사운드의 뮤즈 김추자의 등장을 알린 곡으로, 파격적인 율동과 창법으로 큰 화제가 되었습니다.",
      "youtubeId": "L-SshG7PAnM"
    }
  ],
  "1967": [
    {
      "song": "사랑은 차가운 유혹",
      "artist": "양미란",
      "album": "양미란 히트집",
      "releaseDate": "1967",
      "genres": ["Soul", "Pop Rock"],
      "description": "강렬한 비트와 허스키한 창법이 돋보이는 곡으로, 60년대 후반 소울 음악의 유행을 선도했습니다.",
      "youtubeId": "v8Y4Z6Q-JjQ"
    },
    {
      "song": "대머리 총각",
      "artist": "김상희",
      "album": "김상희 히트집",
      "releaseDate": "1967",
      "genres": ["Traditional Pop"],
      "description": "밝고 경쾌한 이미지의 김상희를 상징하는 곡으로, 유머러스한 가사와 멜로디가 대중적인 사랑을 받았습니다.",
      "youtubeId": "7A4r5p9kYm8"
    },
    {
      "song": "빨간 마후라",
      "artist": "쟈니 브라더스",
      "album": "영화 '빨간 마후라' 주제가",
      "releaseDate": "1967",
      "genres": ["Military Song", "Chorus"],
      "description": "한국 공군을 상징하는 곡이기도 하며, 영화의 대히트와 함께 사중창단의 힘찬 화음이 큰 인기를 얻었습니다.",
      "youtubeId": "VwGZqQvj9r8"
    }
  ],
  "1968": [
    {
      "song": "커피 한 잔",
      "artist": "펄 시스터즈",
      "album": "님아 / 커피 한 잔",
      "releaseDate": "1968",
      "genres": ["Soul", "Psychedelic Rock"],
      "description": "신중현이 작곡한 곡으로, 사이키델릭한 기타 사운드와 두 자매의 완벽한 호흡이 돋보이는 60년대 록의 정수입니다.",
      "youtubeId": "AetZ0YAhgE8"
    },
    {
      "song": "돌아와요 부산항에 (초판)",
      "artist": "김해일",
      "album": "돌아와요 부산항에 / 추억의 길",
      "releaseDate": "1968",
      "genres": ["Trot"],
      "description": "후에 조용필이 불러 국민 가요가 된 곡의 원곡 버전으로, 당시에도 부산 지역을 중심으로 입소문을 탔습니다.",
      "youtubeId": "pE_NInGv0j8"
    },
    {
      "song": "님은 먼 곳에",
      "artist": "김추자",
      "album": "님은 먼 곳에 / 월남에서 돌아온 김상사",
      "releaseDate": "1968",
      "genres": ["Soul", "Ballad"],
      "description": "김추자의 폭발적인 가창력과 신중현의 소울풀한 작곡이 만난 한국 소울 발라드의 기념비적인 작품입니다.",
      "youtubeId": "hWq6uF4XjYo"
    }
  ],
  "1969": [
    {
      "song": "님아",
      "artist": "김추자",
      "album": "늦기 전에 / 월남에서 돌아온 김상사",
      "releaseDate": "1969",
      "genres": ["Soul", "Rock"],
      "description": "김추자의 데뷔와 동시에 그녀를 시대의 아이콘으로 만든 곡으로, 강렬한 샤우팅이 인상적입니다.",
      "youtubeId": "_AY4sPDNzy8"
    },
    {
      "song": "사랑하고 있어요",
      "artist": "나훈아",
      "album": "나훈아 정규 1집",
      "releaseDate": "1969",
      "genres": ["Trot"],
      "description": "나훈아의 초기 히트작으로, 남진과 함께 70년대 가요계 양대 산맥의 탄생을 알린 곡입니다.",
      "youtubeId": "u06MvL0E_4c"
    },
    {
      "song": "봄비",
      "artist": "박인수",
      "album": "신중현과 덩키스",
      "releaseDate": "1969",
      "genres": ["Soul", "Blues"],
      "description": "한국 소울의 전설 박인수가 부른 곡으로, 신중현의 사이키델릭한 편곡과 박인수의 절규하는 듯한 보컬이 압권입니다.",
      "youtubeId": "qWp9v6I9m6Y"
    }
  ],
    "1970": [
    {
      "song": "약속",
      "artist": "뚜아에무아",
      "album": "뚜아에무아 1집",
      "releaseDate": "1970",
      "genres": ["Folk", "Korean Folk"],
      "description": "박인희와 이필원의 혼성 포크 듀오 뚜아에무아를 대표하는 초기 히트곡으로, 1970년대 통기타 포크의 대중화를 보여주는 곡입니다.",
      "youtubeId": "di_xKc4AHKY"
    },
    {
      "song": "해변으로 가요",
      "artist": "키보이스",
      "album": "키보이스 특선 2집",
      "releaseDate": "1970",
      "genres": ["Rock", "Group Sound", "Surf Rock"],
      "description": "한국 그룹사운드 시대를 상징하는 여름 노래로, 밴드 편성과 청춘적인 분위기가 1970년대 초 대중음악의 변화를 보여줍니다.",
      "youtubeId": "f9FgjwX1fn4"
    },
    {
      "song": "아씨",
      "artist": "이미자",
      "album": "TBC-TV 연속극 아씨 주제가",
      "releaseDate": "1970",
      "genres": ["Trot", "Traditional Pop", "Drama OST"],
      "description": "동명의 인기 드라마 주제가로 널리 알려진 곡으로, 이미자의 애절한 창법과 1970년대 초 TV 드라마 음악의 영향력을 보여줍니다.",
      "youtubeId": "OI33Qs6H94I"
    }
  ],
  "1971": [
    {
      "song": "아침이슬",
      "artist": "김민기",
      "album": "김민기 1집",
      "releaseDate": "1971",
      "genres": ["Folk", "Singer-Songwriter"],
      "description": "김민기의 1집에 수록된 한국 포크의 상징적인 곡으로, 이후 민주화와 청년문화의 상징으로 자리 잡았습니다.",
      "youtubeId": "3eEYLSskfUQ"
    },
    {
      "song": "사랑해",
      "artist": "라나에로스포",
      "album": "라나에로스포 여학생 애창곡 수록 제1집",
      "releaseDate": "1971",
      "genres": ["Folk", "Pop"],
      "description": "라나에로스포의 대표곡으로, 밝고 따라 부르기 쉬운 멜로디를 통해 1970년대 초 포크 음악의 대중적 확산을 보여줍니다.",
      "youtubeId": "NbEDkE0J1W8"
    },
    {
      "song": "아름다운 사람",
      "artist": "서유석",
      "album": "생각 / 타박네 / 아름다운 사람 / 가는 세월",
      "releaseDate": "1971",
      "genres": ["Folk", "Korean Folk"],
      "description": "서유석의 대표적인 포크곡으로, 문학적인 가사와 담백한 보컬이 1970년대 초 한국 포크의 지적인 감성을 잘 보여줍니다.",
      "youtubeId": "f-5e68Kh1Ak"
    }
  ],
  "1972": [
    {
      "song": "개여울",
      "artist": "정미조",
      "album": "최신히트 제1집 - 그리운 생각 / 개여울",
      "releaseDate": "1972.01.01",
      "genres": ["Art Pop", "Traditional Pop"],
      "description": "김소월의 시를 바탕으로 한 곡으로, 시적 정서와 대중가요가 결합된 1970년대 초반의 대표적인 서정 가요입니다.",
      "youtubeId": "6Pbpkc_dUxY"
    },
    {
      "song": "님과 함께",
      "artist": "남진",
      "album": "님과 함께",
      "releaseDate": "1972",
      "genres": ["Trot", "Pop"],
      "description": "남진의 대표곡 중 하나로, 경쾌한 리듬과 힘 있는 가창을 통해 1970년대 트로트 스타의 대중적 이미지를 확립한 곡입니다.",
      "youtubeId": "AvI25KxUfgI"
    },
    {
      "song": "세노야 세노야",
      "artist": "양희은",
      "album": "양희은 고운노래 모음",
      "releaseDate": "1972",
      "genres": ["Folk", "Korean Folk"],
      "description": "민요적인 선율과 포크 감성이 어우러진 곡으로, 양희은의 담백한 목소리를 통해 1970년대 포크의 한국적 정서를 잘 보여줍니다.",
      "youtubeId": "ICP-7oGvv-0"
    }
  ],
  "1973": [
    {
      "song": "그건 너",
      "artist": "이장희",
      "album": "이장희 3집 - 그건 너",
      "releaseDate": "1973",
      "genres": ["Folk Rock", "Pop Rock"],
      "description": "직설적인 가사와 세련된 포크 록 감각으로 1970년대 청년문화의 자유롭고 도시적인 분위기를 대표하는 곡입니다.",
      "youtubeId": "9t8M26W8s4Y"
    },
    {
      "song": "아름다운 강산",
      "artist": "김정미",
      "album": "김정미 - 바람",
      "releaseDate": "1973",
      "genres": ["Psychedelic Rock", "Soul", "K-Rock"],
      "description": "신중현이 만든 한국 록의 상징적인 곡으로, 김정미의 몽환적인 보컬과 사이키델릭한 편곡이 돋보입니다.",
      "youtubeId": "dv0CNrcUatE"
    },
    {
      "song": "마른잎",
      "artist": "장현",
      "album": "장현 히트앨범",
      "releaseDate": "1973",
      "genres": ["Soul", "Rock", "Traditional Pop"],
      "description": "신중현 사단의 대표 남성 보컬 장현의 히트곡으로, 낮고 깊은 음색과 쓸쓸한 정서가 인상적인 곡입니다.",
      "youtubeId": "2midNAdy0CI"
    }
  ],
  "1974": [
    {
      "song": "미인",
      "artist": "신중현과 엽전들",
      "album": "신중현과 엽전들 제1집",
      "releaseDate": "1974",
      "genres": ["Rock", "Psychedelic Rock", "K-Rock"],
      "description": "한국적 록 사운드를 대표하는 곡으로, 강렬한 기타 리프와 민요적 반복 구조가 결합된 신중현의 대표작입니다.",
      "youtubeId": "m1VIZa4iJ9Y"
    },
    {
      "song": "나 그대에게 모두 드리리",
      "artist": "이장희",
      "album": "별들의 고향 OST",
      "releaseDate": "1974",
      "genres": ["Folk Rock", "Movie Soundtrack", "Pop"],
      "description": "영화 '별들의 고향'과 함께 알려진 곡으로, 1970년대 도시 청춘의 낭만과 감성을 상징하는 대표적인 영화음악입니다.",
      "youtubeId": "NW3ye-VAB90"
    },
    {
      "song": "피리 부는 사나이",
      "artist": "송창식",
      "album": "송창식 골든 제1집",
      "releaseDate": "1974.11.15",
      "genres": ["Folk", "Singer-Songwriter"],
      "description": "송창식의 개성적인 보컬과 서사적인 멜로디가 돋보이는 곡으로, 1970년대 싱어송라이터 음악의 개성을 잘 보여줍니다.",
      "youtubeId": "4Rsmf7snqUw"
    }
  ],
  "1975": [
    {
      "song": "고래사냥",
      "artist": "송창식",
      "album": "바보들의 행진 OST",
      "releaseDate": "1975",
      "genres": ["Folk Rock", "Movie Soundtrack"],
      "description": "영화 '바보들의 행진'을 통해 널리 알려진 곡으로, 억눌린 시대의 청년들이 꿈꾸던 탈출과 자유의 정서를 상징합니다.",
      "youtubeId": "I4cA3zcIbrQ"
    },
    {
      "song": "왜 불러",
      "artist": "송창식",
      "album": "바보들의 행진 OST",
      "releaseDate": "1975",
      "genres": ["Folk Rock", "Movie Soundtrack"],
      "description": "송창식 특유의 장난스럽고도 반항적인 정서가 담긴 곡으로, 영화와 함께 1970년대 청년문화의 상징으로 남았습니다.",
      "youtubeId": "BIgw6E0a81c"
    },
    {
      "song": "하얀 나비",
      "artist": "김정호",
      "album": "김정호 골드 2집",
      "releaseDate": "1975",
      "genres": ["Folk", "Ballad"],
      "description": "김정호의 대표곡으로, 애수 어린 목소리와 서정적인 멜로디가 결합된 1970년대 포크 발라드의 고전입니다.",
      "youtubeId": "KAuXS6CuFfQ"
    }
  ],
  "1976": [
    {
      "song": "돌아와요 부산항에",
      "artist": "조용필",
      "album": "조용필과 영사운드",
      "releaseDate": "1976",
      "genres": ["Trot", "Go-Go", "Pop"],
      "description": "조용필을 전국적인 스타로 만든 곡으로, 트로트적 선율과 밴드 사운드를 결합해 대중가요의 새 흐름을 열었습니다.",
      "youtubeId": "bkm_srSRf1A"
    },
    {
      "song": "막차로 떠난 여인",
      "artist": "하남석",
      "album": "하남석 1집 - 막차로 떠난 여인",
      "releaseDate": "1976",
      "genres": ["Folk", "Ballad"],
      "description": "하남석의 대표곡으로, 쓸쓸한 이별 정서와 담담한 포크 발라드 감성이 1970년대 중반의 분위기를 잘 담고 있습니다.",
      "youtubeId": "u1MNsI43QLM"
    },
    {
      "song": "먼 훗날",
      "artist": "둘다섯",
      "album": "둘다섯 골든앨범 Vol.1",
      "releaseDate": "1976.06.12",
      "genres": ["Folk", "Acoustic Pop"],
      "description": "포크 듀오 둘다섯의 대표곡으로, 순수한 감성의 멜로디와 서정적인 가사가 1970년대 통기타 음악의 정서를 보여줍니다.",
      "youtubeId": "cUtPFXf2jeA"
    }
  ],
  "1977": [
    {
      "song": "아니 벌써",
      "artist": "산울림",
      "album": "산울림 새 노래 모음 - 아니 벌써",
      "releaseDate": "1977.12.15",
      "genres": ["Rock", "Psychedelic Rock", "K-Rock"],
      "description": "산울림의 데뷔곡으로, 기존 가요 문법을 벗어난 거칠고 신선한 밴드 사운드를 통해 한국 록의 방향을 크게 바꾼 곡입니다.",
      "youtubeId": "0deHcNFCEDs"
    },
    {
      "song": "나 어떡해",
      "artist": "샌드 페블즈",
      "album": "제1회 MBC 대학가요제",
      "releaseDate": "1977",
      "genres": ["Campus Song", "Rock", "Pop Rock"],
      "description": "제1회 MBC 대학가요제 대상곡으로, 대학가요제와 캠퍼스 밴드 문화의 출발을 상징하는 곡입니다.",
      "youtubeId": "DAwg3L2r9qA"
    },
    {
      "song": "내게도 사랑이",
      "artist": "함중아",
      "album": "제1회 77 MBC 대학가요제 제2집",
      "releaseDate": "1977",
      "genres": ["Rock", "Group Sound", "Pop Rock"],
      "description": "함중아 특유의 허스키한 보컬과 밴드 사운드가 돋보이는 곡으로, 1970년대 후반 그룹사운드의 대중적 흐름을 보여줍니다.",
      "youtubeId": "zN7SDS8o1ic"
    }
  ],
  "1978": [
    {
      "song": "내 마음에 주단을 깔고",
      "artist": "산울림",
      "album": "산울림 제2집 - 내 마음에 주단을 깔고",
      "releaseDate": "1978",
      "genres": ["Rock", "Psychedelic Rock", "K-Rock"],
      "description": "산울림 2집의 대표곡으로, 긴 구성과 몽환적인 기타 사운드를 통해 한국 사이키델릭 록의 실험성을 보여줍니다.",
      "youtubeId": "Od2zhI92gug"
    },
    {
      "song": "한동안 뜸했었지",
      "artist": "사랑과 평화",
      "album": "사랑과 평화 1집",
      "releaseDate": "1978",
      "genres": ["Funk", "Soul", "K-Rock"],
      "description": "한국 대중음악에서 펑크와 소울 사운드를 본격적으로 선보인 곡으로, 뛰어난 연주력과 그루브가 돋보입니다.",
      "youtubeId": "DXwgiJjuohk"
    },
    {
      "song": "실버들",
      "artist": "희자매",
      "album": "희자매 1집 - 실버들",
      "releaseDate": "1978.12.18",
      "genres": ["Pop", "Disco", "Traditional Pop"],
      "description": "김소월의 시를 바탕으로 한 곡으로, 희자매의 화음과 안치행의 편곡이 결합된 1970년대 후반 여성 보컬 그룹의 대표곡입니다.",
      "youtubeId": "WOxpKLvYH78"
    }
  ],
  "1979": [
    {
      "song": "그때 그 사람",
      "artist": "심수봉",
      "album": "심수봉 1집 - 그때 그 사람",
      "releaseDate": "1979",
      "genres": ["Trot", "Ballad", "Jazz Pop"],
      "description": "심수봉의 데뷔 히트곡으로, 세미 트로트와 재즈적인 감성이 결합되어 1970년대 말 가요계의 새로운 여성 싱어송라이터를 알렸습니다.",
      "youtubeId": "8ZFy_WWyuC8"
    },
    {
      "song": "장미",
      "artist": "사랑과 평화",
      "album": "사랑과 평화 2집 - 뭐라고 딱 꼬집어 얘기할 수 없어요 / 장미",
      "releaseDate": "1979",
      "genres": ["Funk", "Soul", "K-Rock"],
      "description": "사랑과 평화 2집의 대표곡 중 하나로, 세련된 펑크 록 편곡과 보컬이 1970년대 말 밴드 음악의 완성도를 보여줍니다.",
      "youtubeId": "HOwZPE5ThJA"
    },
    {
      "song": "연안부두",
      "artist": "김트리오",
      "album": "김트리오 1집 - 연안부두",
      "releaseDate": "1979.07.07",
      "genres": ["Pop", "Trot", "Disco"],
      "description": "인천 연안부두의 장소성과 경쾌한 리듬이 결합된 곡으로, 1970년대 말 지역성과 대중성이 함께 살아 있는 대표곡입니다.",
      "youtubeId": "TcbE281uUpI"
    }
  ],
  "1980": [
    {
      "song": "창밖의 여자",
      "artist": "조용필",
      "album": "조용필 1집 - 창밖의 여자 / 단발머리",
      "releaseDate": "1980.03.20",
      "genres": ["Pop", "Trot", "Ballad"],
      "description": "조용필의 정규 1집을 대표하는 곡으로, 1980년대 한국 대중가요에서 조용필 시대의 본격적인 시작을 알린 작품입니다.",
      "youtubeId": "ZQoi_Jk0Dhw"
    },
    {
      "song": "단발머리",
      "artist": "조용필",
      "album": "조용필 1집 - 창밖의 여자 / 단발머리",
      "releaseDate": "1980.03.20",
      "genres": ["Pop Rock", "Trot", "K-Pop"],
      "description": "경쾌한 리듬과 대중적인 멜로디로 큰 사랑을 받은 곡으로, 조용필의 폭넓은 음악적 스펙트럼을 보여주는 대표곡입니다.",
      "youtubeId": "EkD4N_aLUNo"
    },
    {
      "song": "가나다라",
      "artist": "송창식",
      "album": "'80 가나다라 송창식",
      "releaseDate": "1980.09.20",
      "genres": ["Folk", "Pop", "Singer-Songwriter"],
      "description": "한글 자모와 숫자, 전통적 어휘를 유희적으로 엮은 곡으로, 송창식 특유의 실험성과 해학이 돋보이는 1980년대 초반 명곡입니다.",
      "youtubeId": "ukeaJtC2UaA"
    }
  ],
  "1981": [
    {
      "song": "고추잠자리",
      "artist": "조용필",
      "album": "조용필 3집",
      "releaseDate": "1981.07.10",
      "genres": ["Pop Rock", "Progressive Pop", "K-Pop"],
      "description": "조용필의 3집 수록곡으로, 독특한 리듬과 동요적인 정서, 록적인 편곡이 결합된 1981년 대표 히트곡입니다.",
      "youtubeId": "ZGiU2kGgkZM"
    },
    {
      "song": "바람이려오",
      "artist": "이용",
      "album": "국풍 '81 젊은이의 가요제",
      "releaseDate": "1981",
      "genres": ["Ballad", "Pop"],
      "description": "국풍 '81 젊은이의 가요제에서 주목받은 곡으로, 이후 이용이 1980년대 초반 발라드 가수로 자리 잡는 계기가 되었습니다.",
      "youtubeId": "BAMvO0q3Sao"
    },
    {
      "song": "별이여 사랑이여",
      "artist": "사랑의 하모니",
      "album": "제2회 MBC-FM 강변축제",
      "releaseDate": "1981.09.28",
      "genres": ["Folk", "Ballad", "Campus Song"],
      "description": "제2회 MBC 강변가요제 대상곡으로, 대학가요제·강변가요제 계열의 서정적인 캠퍼스 음악을 대표하는 곡입니다.",
      "youtubeId": "5vZuSwvonbc"
    }
  ],
  "1982": [
    {
      "song": "잊혀진 계절",
      "artist": "이용",
      "album": "이용 1집",
      "releaseDate": "1982.02.17",
      "genres": ["Ballad", "Pop"],
      "description": "매년 10월이 되면 다시 회자되는 한국 발라드의 대표곡으로, 계절성과 이별 정서를 강하게 각인시킨 노래입니다.",
      "youtubeId": "fMmgz5RS0RE"
    },
    {
      "song": "어쩌다 마주친 그대",
      "artist": "송골매",
      "album": "송골매 2집",
      "releaseDate": "1982.01.15",
      "genres": ["Rock", "Pop Rock", "Group Sound"],
      "description": "구창모 보컬 시기의 송골매를 대표하는 곡으로, 한국 록 밴드 음악이 대중적으로 크게 확산된 사례입니다.",
      "youtubeId": "VGq9b3gLXqk"
    },
    {
      "song": "못찾겠다 꾀꼬리",
      "artist": "조용필",
      "album": "조용필 4집 - 못찾겠다 꾀꼬리",
      "releaseDate": "1982",
      "genres": ["Pop Rock", "K-Pop"],
      "description": "어린 시절의 놀이와 상실감을 결합한 곡으로, 조용필의 대중성과 음악적 실험성이 함께 드러나는 1982년 대표곡입니다.",
      "youtubeId": "j3bLNbLWzo0"
    }
  ],
  "1983": [
    {
      "song": "친구여",
      "artist": "조용필",
      "album": "조용필 5집",
      "releaseDate": "1983.06.25",
      "genres": ["Ballad", "Pop"],
      "description": "우정과 그리움을 서정적으로 담아낸 곡으로, 조용필의 1980년대 중반 발라드 감성을 대표하는 노래입니다.",
      "youtubeId": "kOBoQe-aJuc"
    },
    {
      "song": "못다핀 꽃한송이",
      "artist": "김수철",
      "album": "못다핀 꽃한송이",
      "releaseDate": "1983.08.15",
      "genres": ["Rock", "Pop Rock", "Singer-Songwriter"],
      "description": "김수철의 솔로 커리어를 대표하는 곡으로, 강한 록 보컬과 서정적인 멜로디가 결합된 1980년대 한국 록의 주요 작품입니다.",
      "youtubeId": "j8eSPRW0hRk"
    },
    {
      "song": "아! 대한민국",
      "artist": "정수라",
      "album": "바람이었나 / 아! 대한민국",
      "releaseDate": "1983.10.07",
      "genres": ["Pop", "Patriotic Pop"],
      "description": "1980년대 초반 대중적 애국가요의 대표작으로, 정수라를 국민적인 가수로 각인시킨 곡입니다.",
      "youtubeId": "f4HmslrR7fY"
    }
  ],
  "1984": [
    {
      "song": "J에게",
      "artist": "4막5장 (이선희)",
      "album": "제5회 MBC 강변가요제",
      "releaseDate": "1984",
      "genres": ["Ballad", "Campus Song", "K-Pop"],
      "description": "1984년 MBC 강변가요제 대상곡으로, 이선희의 등장을 알린 곡이자 1980년대 여성 보컬 발라드의 상징적인 출발점입니다.",
      "youtubeId": "GpgRMHBXJ6s"
    },
    {
      "song": "불티",
      "artist": "전영록",
      "album": "전영록 8집",
      "releaseDate": "1984.11.20",
      "genres": ["Dance-pop", "Pop Rock"],
      "description": "강렬한 무대 에너지와 중독성 있는 후렴으로 전영록의 전성기를 대표하는 곡입니다.",
      "youtubeId": "iUi3Pa4iND8"
    },
    {
      "song": "젊은 그대",
      "artist": "김수철",
      "album": "젊은 그대",
      "releaseDate": "1984.10.01",
      "genres": ["Rock", "Pop Rock", "Movie Soundtrack"],
      "description": "영화 '고래사냥'과 함께 알려진 곡으로, 청춘의 에너지와 희망적인 정서를 강하게 담은 김수철의 대표곡입니다.",
      "youtubeId": "Rwej0ZyRdBI"
    }
  ],
  "1985": [
    {
      "song": "아! 옛날이여",
      "artist": "이선희",
      "album": "이선희 1집 - 아! 옛날이여",
      "releaseDate": "1985.01.25",
      "genres": ["Ballad", "Pop"],
      "description": "이선희의 정규 1집 타이틀곡으로, 폭발적인 고음과 선명한 감정 표현을 통해 1980년대 여성 보컬의 새 기준을 보여준 곡입니다.",
      "youtubeId": "UJc2B9wVyIw"
    },
    {
      "song": "바람 바람 바람",
      "artist": "김범룡",
      "album": "김범룡 1집 - 바람 바람 바람",
      "releaseDate": "1985.03.10",
      "genres": ["Pop", "Dance-pop"],
      "description": "김범룡의 데뷔 히트곡으로, 밝고 경쾌한 멜로디와 반복적인 후렴을 통해 1980년대 중반 대중가요의 흐름을 보여줍니다.",
      "youtubeId": "ZFPqPlzltKg"
    },
    {
      "song": "그것만이 내 세상",
      "artist": "들국화",
      "album": "들국화 1집",
      "releaseDate": "1985.09.15",
      "genres": ["Rock", "K-Rock", "Folk Rock"],
      "description": "한국 록 역사에서 가장 중요한 앨범 중 하나인 들국화 1집의 대표곡으로, 언더그라운드 록이 대중음악사에 남긴 결정적 장면입니다.",
      "youtubeId": "Kg3N7EnVRd0"
    }
  ],
  "1986": [
    {
      "song": "오늘밤",
      "artist": "김완선",
      "album": "김완선 1집 - 오늘밤",
      "releaseDate": "1986.04.11",
      "genres": ["Dance-pop", "New Wave", "K-Pop"],
      "description": "김완선의 데뷔 앨범 타이틀곡으로, 1980년대 한국형 댄스 팝과 여성 솔로 퍼포머의 등장을 상징합니다.",
      "youtubeId": "NJFzQkoUlbg"
    },
    {
      "song": "촛불잔치",
      "artist": "이재성",
      "album": "이재성 3집 - 촛불잔치",
      "releaseDate": "1986.05.30",
      "genres": ["Folk Pop", "Ballad"],
      "description": "대학가요제 출신 싱어송라이터 이재성의 대표곡으로, 서정적인 멜로디와 대중적인 후렴이 인상적인 곡입니다.",
      "youtubeId": "lX1jcWZtRLo"
    },
    {
      "song": "비처럼 음악처럼",
      "artist": "김현식",
      "album": "김현식 3집 - 비처럼 음악처럼",
      "releaseDate": "1986.12.05",
      "genres": ["Ballad", "Soul", "Blues"],
      "description": "김현식의 허스키한 보컬과 블루지한 정서가 절정에 달한 곡으로, 한국 발라드와 소울 음악의 중요한 기준점이 되었습니다.",
      "youtubeId": "4tjQYX4rp4E"
    }
  ],
  "1987": [
    {
      "song": "사랑하기 때문에",
      "artist": "유재하",
      "album": "사랑하기 때문에",
      "releaseDate": "1987.08.20",
      "genres": ["Ballad", "Singer-Songwriter", "Sophisti-pop"],
      "description": "유재하의 유일한 정규 앨범 타이틀곡으로, 한국 발라드의 화성·편곡·싱어송라이터 문법을 크게 바꾼 작품입니다.",
      "youtubeId": "6O8oM-vPRtY"
    },
    {
      "song": "사랑이 지나가면",
      "artist": "이문세",
      "album": "이문세 4집",
      "releaseDate": "1987.03.10",
      "genres": ["Ballad", "Adult Contemporary"],
      "description": "이문세와 이영훈 콤비의 대표곡 중 하나로, 1980년대 후반 한국형 팝 발라드의 정서를 정립한 곡입니다.",
      "youtubeId": "cOq-vCErjIU"
    },
    {
      "song": "리듬 속의 그 춤을",
      "artist": "김완선",
      "album": "김완선 2집 - 나홀로 뜰 앞에서",
      "releaseDate": "1987.05.07",
      "genres": ["Dance-pop", "New Wave", "K-Pop"],
      "description": "김완선의 퍼포먼스 이미지를 확고히 만든 곡으로, 1980년대 후반 한국 댄스 음악의 초기 흐름을 대표합니다.",
      "youtubeId": "aJZr3Vn61Qg"
    }
  ],
  "1988": [
    {
      "song": "붉은 노을",
      "artist": "이문세",
      "album": "이문세 5집",
      "releaseDate": "1988.09",
      "genres": ["Pop", "Ballad", "Adult Contemporary"],
      "description": "이문세 5집의 대표곡으로, 이후 여러 세대에 걸쳐 리메이크되며 한국 대중가요의 클래식으로 자리 잡았습니다.",
      "youtubeId": "gA4GbXLuVIA"
    },
    {
      "song": "홀로 된다는 것",
      "artist": "변진섭",
      "album": "변진섭 1집 - 홀로 된다는 것",
      "releaseDate": "1988.06.15",
      "genres": ["Ballad", "Pop"],
      "description": "변진섭의 데뷔 앨범 대표곡으로, 1990년대 초반까지 이어지는 한국 발라드 전성기의 문을 연 곡입니다.",
      "youtubeId": "06ZqPjOOEnM"
    },
    {
      "song": "담다디",
      "artist": "이상은",
      "album": "제9회 MBC 강변가요제",
      "releaseDate": "1988",
      "genres": ["Dance-pop", "Campus Song", "K-Pop"],
      "description": "제9회 MBC 강변가요제 대상곡으로, 이상은의 개성적인 이미지와 경쾌한 사운드가 결합되어 1988년 대중문화의 아이콘이 되었습니다.",
      "youtubeId": "e4TSR0eBOtw"
    }
  ],
  "1989": [
    {
      "song": "춘천가는 기차",
      "artist": "김현철",
      "album": "김현철 Vol.1",
      "releaseDate": "1989.08.26",
      "genres": ["Pop", "Bossa Nova", "City Pop"],
      "description": "김현철의 데뷔 앨범 대표곡으로, 세련된 코드 진행과 보사노바 감각을 통해 한국형 시티팝·웰메이드 팝의 흐름을 보여줍니다.",
      "youtubeId": "u8wQ5HLIORE"
    },
    {
      "song": "희망사항",
      "artist": "변진섭",
      "album": "변진섭 2집 - 너에게로 또 다시",
      "releaseDate": "1989.10.25",
      "genres": ["Pop", "Ballad"],
      "description": "재치 있는 가사와 밝은 멜로디로 폭넓게 사랑받은 곡으로, 변진섭의 국민적 인기를 이어간 대표곡입니다.",
      "youtubeId": "SpJ9X1OsSis"
    },
    {
      "song": "호랑나비",
      "artist": "김흥국",
      "album": "김흥국 3집 - 호랑나비",
      "releaseDate": "1989",
      "genres": ["Dance-pop", "Novelty", "K-Pop"],
      "description": "강렬한 퍼포먼스와 독특한 후렴으로 1989년 대중문화에 큰 인상을 남긴 곡으로, 예능적 캐릭터와 가요가 결합된 대표 사례입니다.",
      "youtubeId": "mQc1dFmxJZM"
    }
  ],
  "1990": [
    {
      "song": "사랑일뿐야",
      "artist": "김민우",
      "album": "김민우 1집",
      "releaseDate": "1990.02.10",
      "genres": ["Ballad", "Pop"],
      "description": "김민우의 데뷔 앨범 수록곡으로, 1990년대 초반 감성 발라드의 흐름을 연 대표적인 히트곡입니다.",
      "youtubeId": "-ARccz9TMpI"
    },
    {
      "song": "슬픈 표정 하지 말아요",
      "artist": "신해철",
      "album": "신해철 1집 - 슬픈 표정 하지 말아요",
      "releaseDate": "1990",
      "genres": ["Pop Rock", "Singer-Songwriter"],
      "description": "무한궤도 이후 솔로로 나선 신해철의 대표곡으로, 1990년대 초반 싱어송라이터 팝 록의 감성을 보여줍니다.",
      "youtubeId": "g2HmkLLa5Fs"
    },
    {
      "song": "텅 빈 거리에서",
      "artist": "015B",
      "album": "015B 1집",
      "releaseDate": "1990.07.01",
      "genres": ["Ballad", "Pop", "Synth-pop"],
      "description": "윤종신이 객원 보컬로 참여한 015B의 데뷔곡으로, 객원 보컬 시스템과 세련된 도시형 발라드의 출발점으로 평가됩니다.",
      "youtubeId": "HWHyG18yUFs"
    }
  ],
  "1991": [
    {
      "song": "내 사랑 내 곁에",
      "artist": "김현식",
      "album": "김현식 6집",
      "releaseDate": "1991",
      "genres": ["Ballad", "Soul", "Blues"],
      "description": "김현식 사후 발표된 유작 앨범의 대표곡으로, 허스키한 보컬과 깊은 감정선이 한국 발라드의 고전으로 남았습니다.",
      "youtubeId": "fnEsPUT3jWI"
    },
    {
      "song": "보이지 않는 사랑",
      "artist": "신승훈",
      "album": "신승훈 2집",
      "releaseDate": "1991",
      "genres": ["Ballad", "Pop"],
      "description": "신승훈을 1990년대 대표 발라드 가수로 자리 잡게 한 곡으로, 클래식 선율을 차용한 도입부와 극적인 멜로디가 인상적입니다.",
      "youtubeId": "I-BXHgPTDVc"
    },
    {
      "song": "사랑했지만",
      "artist": "김광석",
      "album": "김광석 2집",
      "releaseDate": "1991",
      "genres": ["Folk", "Ballad"],
      "description": "김광석의 절제된 보컬과 서정적인 가사가 돋보이는 곡으로, 1990년대 한국 포크 발라드의 대표곡 중 하나입니다.",
      "youtubeId": "ZZEv8ZB6G_s"
    }
  ],
  "1992": [
    {
      "song": "난 알아요",
      "artist": "서태지와 아이들",
      "album": "서태지와 아이들 1집",
      "releaseDate": "1992.03.23",
      "genres": ["K-Pop", "New Jack Swing", "Rap", "Dance-pop"],
      "description": "랩, 댄스, 샘플링, 록 감각을 결합해 한국 대중음악의 판도를 바꾼 곡으로, 1990년대 K-Pop의 실질적인 출발점으로 평가됩니다.",
      "youtubeId": "pfK330aFmrk"
    },
    {
      "song": "흐린 기억 속의 그대",
      "artist": "현진영",
      "album": "New Dance 2",
      "releaseDate": "1992",
      "genres": ["New Jack Swing", "Dance", "K-Pop"],
      "description": "한국식 뉴 잭 스윙과 힙합 댄스 퍼포먼스를 대중화한 곡으로, 1990년대 초반 댄스 음악의 중요한 흐름을 보여줍니다.",
      "youtubeId": "6wMUCMGFXPo"
    },
    {
      "song": "잠 못 드는 밤 비는 내리고",
      "artist": "김건모",
      "album": "김건모 1집",
      "releaseDate": "1992",
      "genres": ["Dance-pop", "R&B", "K-Pop"],
      "description": "김건모의 데뷔 앨범 대표곡으로, 리듬감 있는 편곡과 독특한 보컬 톤을 통해 1990년대 댄스 팝의 가능성을 보여줬습니다.",
      "youtubeId": "llY4UtFtrgM"
    }
  ],
  "1993": [
    {
      "song": "하여가",
      "artist": "서태지와 아이들",
      "album": "서태지와 아이들 2집",
      "releaseDate": "1993",
      "genres": ["K-Pop", "Rap Rock", "Alternative Rock", "Dance"],
      "description": "태평소 사운드와 헤비한 록, 랩을 결합한 곡으로, 장르 혼합을 대중음악의 중심으로 끌어올린 1990년대 대표곡입니다.",
      "youtubeId": "L-AxO7EPU8c"
    },
    {
      "song": "나를 돌아봐",
      "artist": "듀스",
      "album": "Deux",
      "releaseDate": "1993.04.23",
      "genres": ["Hip-hop", "New Jack Swing", "Dance"],
      "description": "이현도와 김성재로 구성된 듀스의 데뷔곡으로, 한국 힙합 댄스 음악의 세련된 방향성을 제시한 곡입니다.",
      "youtubeId": "FxnQWeOs29k"
    },
    {
      "song": "핑계",
      "artist": "김건모",
      "album": "김건모 2집",
      "releaseDate": "1993",
      "genres": ["Dance-pop", "Reggae Pop", "K-Pop"],
      "description": "레게 리듬을 한국식 댄스 팝으로 풀어낸 곡으로, 김건모의 대중적 전성기를 본격적으로 연 대표곡입니다.",
      "youtubeId": "GSunUuKABhI"
    }
  ],
  "1994": [
    {
      "song": "서른 즈음에",
      "artist": "김광석",
      "album": "김광석 네번째",
      "releaseDate": "1994.06.25",
      "genres": ["Folk", "Ballad"],
      "description": "김광석의 생전 마지막 정규 앨범에 수록된 곡으로, 나이 듦과 상실감을 담담하게 노래한 한국 포크 발라드의 대표작입니다.",
      "youtubeId": "L7lED8RtdAI"
    },
    {
      "song": "마법의 성",
      "artist": "더 클래식",
      "album": "마법의 성",
      "releaseDate": "1994",
      "genres": ["Ballad", "Pop"],
      "description": "김광진이 만든 더 클래식의 대표곡으로, 동화적인 가사와 맑은 멜로디가 세대를 넘어 사랑받는 곡입니다.",
      "youtubeId": "okF4DVI2xPc"
    },
    {
      "song": "칵테일 사랑",
      "artist": "마로니에",
      "album": "마로니에 3집 - 칵테일 사랑",
      "releaseDate": "1994.03.01",
      "genres": ["Pop", "Dance-pop"],
      "description": "상큼한 멜로디와 도시적인 가사로 1994년 큰 인기를 얻은 곡으로, 1990년대 중반 밝은 감성의 팝을 대표합니다.",
      "youtubeId": "h0iNw_Z50O8"
    }
  ],
  "1995": [
    {
      "song": "잘못된 만남",
      "artist": "김건모",
      "album": "김건모 3집",
      "releaseDate": "1995.01.01",
      "genres": ["Dance-pop", "K-Pop"],
      "description": "빠른 비트와 랩, 강렬한 후렴으로 폭발적인 인기를 얻은 곡으로, 1990년대 댄스 가요 전성기를 대표합니다.",
      "youtubeId": "n2AsXQtK8aA"
    },
    {
      "song": "날개 잃은 천사",
      "artist": "룰라",
      "album": "날개 잃은 천사",
      "releaseDate": "1995",
      "genres": ["Dance-pop", "K-Pop", "Reggae Pop"],
      "description": "룰라의 대표 히트곡으로, 중독성 있는 후렴과 퍼포먼스를 통해 1990년대 혼성 댄스 그룹의 전성기를 상징합니다.",
      "youtubeId": "nDpHhFjt5r0"
    },
    {
      "song": "머피의 법칙",
      "artist": "DJ DOC",
      "album": "DJ DOC 2집",
      "releaseDate": "1995.06",
      "genres": ["Dance-pop", "Hip-hop", "K-Pop"],
      "description": "익살스러운 가사와 강한 댄스 비트로 DJ DOC의 캐릭터를 확립한 곡으로, 1990년대 중반 대중적인 힙합 댄스 흐름을 보여줍니다.",
      "youtubeId": "8x_xAU7Hs1k"
    }
  ],
  "1996": [
    {
      "song": "캔디",
      "artist": "H.O.T.",
      "album": "We Hate All Kinds Of Violence...",
      "releaseDate": "1996.09.07",
      "genres": ["K-Pop", "Dance-pop", "Bubblegum Pop"],
      "description": "H.O.T.를 1세대 아이돌의 상징으로 만든 곡으로, 의상·안무·팬덤 문화까지 결합한 1990년대 아이돌 시스템의 대표 사례입니다.",
      "youtubeId": "3NUaXU1d-NY"
    },
    {
      "song": "꿍따리 샤바라",
      "artist": "클론",
      "album": "Are You Ready?",
      "releaseDate": "1996",
      "genres": ["Dance-pop", "K-Pop"],
      "description": "클론의 데뷔 히트곡으로, 시원한 비트와 단순하면서도 강렬한 후렴을 통해 1990년대 여름 댄스곡의 상징이 되었습니다.",
      "youtubeId": "lJqqvP4lUb8"
    },
    {
      "song": "Twist King",
      "artist": "터보",
      "album": "터보 2집 - New Sensation",
      "releaseDate": "1996.08.14",
      "genres": ["Dance-pop", "Eurodance", "K-Pop"],
      "description": "터보의 대표 댄스곡으로, 빠른 BPM과 김종국의 고음 보컬, 댄스 퍼포먼스가 결합된 1990년대 후반 댄스 음악의 대표작입니다.",
      "youtubeId": "K5c6h-aI6xI"
    }
  ],
  "1997": [
    {
      "song": "행복",
      "artist": "H.O.T.",
      "album": "Wolf And Sheep",
      "releaseDate": "1997",
      "genres": ["K-Pop", "Dance-pop"],
      "description": "H.O.T.의 밝고 대중적인 이미지를 확립한 곡으로, 1세대 아이돌 팬덤 문화가 본격적으로 확산되던 시기를 상징합니다.",
      "youtubeId": "h1y1PjPVcCg"
    },
    {
      "song": "학원별곡",
      "artist": "젝스키스",
      "album": "학원별곡",
      "releaseDate": "1997",
      "genres": ["K-Pop", "Dance-pop", "Hip-hop"],
      "description": "젝스키스의 데뷔곡으로, 1990년대 후반 남성 아이돌 경쟁 구도를 본격화한 중요한 곡입니다.",
      "youtubeId": "BSLgJxFc4UA"
    },
    {
      "song": "그때 또 다시",
      "artist": "임창정",
      "album": "Again",
      "releaseDate": "1997.05.16",
      "genres": ["Ballad", "Pop"],
      "description": "가수와 배우를 병행하던 임창정의 보컬리스트 이미지를 확립한 곡으로, 1990년대 후반 대중 발라드의 대표곡입니다.",
      "youtubeId": "fdDIWGdFpQM"
    }
  ],
  "1998": [
    {
      "song": "To Heaven",
      "artist": "조성모",
      "album": "To Heaven",
      "releaseDate": "1998.09.06",
      "genres": ["Ballad", "Pop"],
      "description": "드라마틱한 뮤직비디오와 애절한 보컬로 조성모 신드롬을 만든 데뷔곡으로, 1990년대 말 발라드 붐을 대표합니다.",
      "youtubeId": "cYSKoLOFGvQ"
    },
    {
      "song": "내 남자 친구에게",
      "artist": "핑클",
      "album": "Fine Killing Liberty",
      "releaseDate": "1998.05.01",
      "genres": ["K-Pop", "Dance-pop", "Teen Pop"],
      "description": "핑클의 대표곡 중 하나로, 1990년대 말 걸그룹 시장과 10대 팬덤 문화를 상징하는 밝은 댄스 팝입니다.",
      "youtubeId": "sEWWvHKG8_s"
    },
    {
      "song": "커플",
      "artist": "젝스키스",
      "album": "Special Album",
      "releaseDate": "1998.10.31",
      "genres": ["K-Pop", "Dance-pop", "Pop"],
      "description": "젝스키스의 따뜻하고 대중적인 매력을 보여준 곡으로, 겨울 시즌송처럼 오래 사랑받은 1세대 아이돌 대표곡입니다.",
      "youtubeId": "2lMF3qGtpvI"
    }
  ],
  "1999": [
    {
      "song": "어머님께",
      "artist": "god",
      "album": "Chapter 1",
      "releaseDate": "1999.01.13",
      "genres": ["K-Pop", "R&B", "Hip-hop"],
      "description": "god의 데뷔곡으로, 가족 서사와 R&B·힙합 감성을 결합해 1990년대 말 새로운 남성 그룹의 방향성을 보여줬습니다.",
      "youtubeId": "OBERys7Dtt4"
    },
    {
      "song": "와",
      "artist": "이정현",
      "album": "Let's Go To My Star",
      "releaseDate": "1999.10.09",
      "genres": ["Techno", "Dance-pop", "K-Pop"],
      "description": "테크노 사운드와 강렬한 부채 퍼포먼스로 이정현을 스타덤에 올린 곡으로, 1990년대 말 한국 댄스 음악의 시각적 변화를 보여줍니다.",
      "youtubeId": "N-QqRqISX0k"
    },
    {
      "song": "영원한 사랑",
      "artist": "핑클",
      "album": "White",
      "releaseDate": "1999.05.12",
      "genres": ["K-Pop", "Dance-pop", "Teen Pop"],
      "description": "핑클의 전성기를 대표하는 곡으로, 밝은 멜로디와 약속을 상징하는 안무가 1990년대 말 걸그룹 이미지를 확립했습니다.",
      "youtubeId": "CRR9Wsqf8Ls"
    }
  ],
    "2000": [
    {
      "song": "매직 카펫 라이드",
      "artist": "자우림",
      "album": "Jaurim, The Wonderland",
      "releaseDate": "2000.07.04",
      "genres": ["Modern Rock", "Pop Rock", "K-Rock"],
      "description": "자우림의 대중적 전성기를 대표하는 곡으로, 강렬한 밴드 사운드와 김윤아의 보컬이 결합된 2000년대 초반 모던록 히트곡입니다.",
      "youtubeId": "cvpU-7BO0JE"
    },
    {
      "song": "고양이와 새에 관한 진실",
      "artist": "델리스파이스",
      "album": "슬프지만 진실...",
      "releaseDate": "2000",
      "genres": ["Indie Rock", "Modern Rock", "Alternative Rock"],
      "description": "델리스파이스 특유의 서정적인 기타 팝 감각이 돋보이는 곡으로, 1990년대 후반부터 이어진 한국 모던록의 흐름을 2000년대로 연결한 작품입니다.",
      "youtubeId": "7V6rYb1TIg0"
    },
    {
      "song": "청년폭도맹진가",
      "artist": "노브레인",
      "album": "怒",
      "releaseDate": "2000.07.07",
      "genres": ["Punk Rock", "Indie Rock", "K-Rock"],
      "description": "홍대 펑크 신의 에너지와 청년 세대의 분노를 직접적으로 드러낸 곡으로, 노브레인의 초기 정체성을 상징합니다.",
      "youtubeId": "tiFIICzYOfw"
    }
  ],
  "2001": [
    {
      "song": "밤이 깊었네",
      "artist": "크라잉넛",
      "album": "하수연가",
      "releaseDate": "2001",
      "genres": ["Punk Rock", "Indie Rock", "K-Rock"],
      "description": "크라잉넛의 대표곡 중 하나로, 펑크 밴드의 자유분방함과 대중적인 멜로디가 결합된 2000년대 초반 인디 록 히트곡입니다.",
      "youtubeId": "ptm4reDRet4"
    },
    {
      "song": "항상 엔진을 켜둘께",
      "artist": "델리스파이스",
      "album": "Drrrr!",
      "releaseDate": "2001.09.13",
      "genres": ["Indie Rock", "Modern Rock", "Pop Rock"],
      "description": "섬세한 기타 사운드와 감성적인 멜로디가 돋보이는 곡으로, 델리스파이스의 모던록적 서정성을 대표합니다.",
      "youtubeId": "AZ6HYkwxxpQ"
    },
    {
      "song": "믿어선 안될 말",
      "artist": "넬",
      "album": "Reflection of Nell",
      "releaseDate": "2001",
      "genres": ["Modern Rock", "Alternative Rock", "Indie Rock"],
      "description": "넬의 초기 독립 발매 시절을 대표하는 곡으로, 우울하고 몽환적인 사운드가 이후 넬의 음악적 방향을 예고합니다.",
      "youtubeId": "V2w2WDf_43w"
    }
  ],
  "2002": [
    {
      "song": "낭만고양이",
      "artist": "체리필터",
      "album": "Made In Korea?",
      "releaseDate": "2002.08.13",
      "genres": ["Modern Rock", "Pop Rock", "K-Rock"],
      "description": "체리필터를 대중적으로 각인시킨 곡으로, 조유진의 폭발적인 보컬과 경쾌한 록 사운드가 결합된 2000년대 모던록 대표곡입니다.",
      "youtubeId": "U6EcOiKWfZI"
    },
    {
      "song": "내게 돌아와",
      "artist": "트랜스픽션",
      "album": "Trans Fixion 1st",
      "releaseDate": "2002.10.19",
      "genres": ["Modern Rock", "Pop Rock", "K-Rock"],
      "description": "트랜스픽션의 데뷔 앨범 대표곡으로, 질주감 있는 밴드 사운드와 후렴구가 인상적인 2000년대 초반 모던록 곡입니다.",
      "youtubeId": "Oupn-dzr0P4"
    },
    {
      "song": "나를 잊었나요?",
      "artist": "언니네 이발관",
      "album": "꿈의 팝송",
      "releaseDate": "2002.10.17",
      "genres": ["Indie Rock", "Modern Rock"],
      "description": "언니네 이발관 3집의 대표곡 중 하나로, 담담한 보컬과 섬세한 기타 사운드를 통해 한국 인디록의 정서를 잘 보여줍니다.",
      "youtubeId": "kebqSpsbndQ"
    }
  ],
  "2003": [
    {
      "song": "고백",
      "artist": "델리스파이스",
      "album": "Espresso",
      "releaseDate": "2003.01.24",
      "genres": ["Indie Rock", "Modern Rock", "Pop Rock"],
      "description": "델리스파이스의 가장 널리 알려진 곡 중 하나로, 청춘의 회상과 후회를 담은 가사가 이후 여러 세대에게 사랑받았습니다.",
      "youtubeId": "Wlps3G2RYIU"
    },
    {
      "song": "Stay",
      "artist": "넬",
      "album": "Let It Rain",
      "releaseDate": "2003.06.12",
      "genres": ["Modern Rock", "Alternative Rock"],
      "description": "넬이 메이저 신에서 본격적으로 주목받게 된 곡으로, 우울한 정서와 공간감 있는 록 사운드가 특징입니다.",
      "youtubeId": "bmivgWKzGkM"
    },
    {
      "song": "Loveholic",
      "artist": "러브홀릭",
      "album": "Florist",
      "releaseDate": "2003.04.25",
      "genres": ["Modern Rock", "Pop Rock"],
      "description": "러브홀릭의 데뷔 앨범 대표곡으로, 지선의 맑은 보컬과 세련된 밴드 팝 사운드가 2000년대 감성 모던록의 한 축을 만들었습니다.",
      "youtubeId": "DtU6pr9h7is"
    }
  ],
  "2004": [
    {
      "song": "공항 가는 길",
      "artist": "마이 앤트 메리",
      "album": "Just Pop",
      "releaseDate": "2004.07.22",
      "genres": ["Modern Rock", "Indie Rock", "Jangle Pop"],
      "description": "한국대중음악상 올해의 음반으로도 평가받은 'Just Pop'의 대표곡으로, 세련된 기타 팝과 도시적인 감성이 돋보입니다.",
      "youtubeId": "QWERHfx2R3A"
    },
    {
      "song": "날개",
      "artist": "못",
      "album": "비선형",
      "releaseDate": "2004.06.18",
      "genres": ["Indie Rock", "Trip-hop", "Modern Rock"],
      "description": "못의 데뷔 앨범 수록곡으로, 록과 일렉트로닉, 트립합적 감각이 결합된 2000년대 한국 인디 음악의 실험성을 보여줍니다.",
      "youtubeId": "Gd1RNbhF6A8"
    },
    {
      "song": "올랭피오의 별",
      "artist": "허클베리핀",
      "album": "올랭피오의 별",
      "releaseDate": "2004.06.25",
      "genres": ["Indie Rock", "Modern Rock"],
      "description": "허클베리핀 특유의 건조하면서도 깊은 록 사운드가 담긴 곡으로, 2000년대 한국 인디록의 진중한 흐름을 대표합니다.",
      "youtubeId": "Qtw4ZGt9Zyg"
    }
  ],
  "2005": [
    {
      "song": "Ready, Get Set, Go!",
      "artist": "페퍼톤스",
      "album": "Colorful Express",
      "releaseDate": "2005.12.16",
      "genres": ["Indie Pop", "Modern Rock", "Electronic Pop"],
      "description": "페퍼톤스의 밝고 청량한 사운드를 대표하는 곡으로, 2000년대 중반 한국 인디팝의 산뜻한 방향성을 보여줍니다.",
      "youtubeId": "XeB6vnIjm30"
    },
    {
      "song": "춤추는 동물원",
      "artist": "몽구스",
      "album": "Dancing Zoo",
      "releaseDate": "2005",
      "genres": ["Indie Rock", "Garage Rock", "Dance Rock"],
      "description": "몽구스의 장난스럽고 리듬감 있는 밴드 사운드가 잘 드러나는 곡으로, 홍대 인디 신의 경쾌한 감각을 보여줍니다.",
      "youtubeId": "3i2KdA-5JbI"
    },
    {
      "song": "겁쟁이",
      "artist": "버즈",
      "album": "Buzz Effect",
      "releaseDate": "2005.03.03",
      "genres": ["Pop Rock", "Modern Rock", "Rock Ballad"],
      "description": "대중적인 록 발라드의 대표곡으로, 인디 밴드는 아니지만 2000년대 중반 한국 밴드형 모던록·팝록의 대중적 영향력을 보여주는 곡입니다.",
      "youtubeId": "GSXvwmamkoU"
    }
  ],
  "2006": [
    {
      "song": "Good Night",
      "artist": "넬",
      "album": "Healing Process",
      "releaseDate": "2006.09.21",
      "genres": ["Modern Rock", "Alternative Rock", "Britpop"],
      "description": "넬의 3집 수록곡으로, 섬세한 감정선과 점층적인 밴드 사운드를 통해 2000년대 중반 모던록의 우울한 미학을 잘 보여줍니다.",
      "youtubeId": "MA6c8nqv9uI"
    },
    {
      "song": "남자를 몰라",
      "artist": "버즈",
      "album": "Perfect",
      "releaseDate": "2006.04.24",
      "genres": ["Pop Rock", "Modern Rock", "Rock Ballad"],
      "description": "버즈의 대표적인 록 발라드로, 2000년대 중반 대중가요 시장에서 밴드 사운드가 강한 영향력을 가졌음을 보여주는 곡입니다.",
      "youtubeId": "lnoY6MxJGao"
    },
    {
      "song": "Happy Day",
      "artist": "체리필터",
      "album": "Peace N' Rock N' Roll",
      "releaseDate": "2006.08.17",
      "genres": ["Modern Rock", "Pop Rock", "K-Rock"],
      "description": "체리필터의 밝고 에너지 넘치는 록 사운드가 돋보이는 곡으로, 2000년대 중반 대중적 모던록의 활기를 잘 보여줍니다.",
      "youtubeId": "6CFs-4if788"
    }
  ],
  "2007": [
    {
      "song": "앵콜요청금지",
      "artist": "브로콜리너마저",
      "album": "앵콜요청금지 EP",
      "releaseDate": "2007",
      "genres": ["Indie Pop", "Modern Rock"],
      "description": "브로콜리너마저의 초기 대표곡으로, 소박한 연주와 일상적인 가사가 2000년대 후반 한국 인디팝 정서를 상징합니다.",
      "youtubeId": "CChrynM0WXc"
    },
    {
      "song": "서울은 흐림",
      "artist": "못 feat. 한희정",
      "album": "이상한 계절",
      "releaseDate": "2007.05.29",
      "genres": ["Indie Rock", "Trip-hop", "Modern Rock"],
      "description": "도시적 우울과 실험적인 사운드가 결합된 곡으로, 못의 어둡고 세밀한 음악 세계를 대표합니다.",
      "youtubeId": "r8ybEYhfK78"
    },
    {
      "song": "얼음요새",
      "artist": "디어클라우드",
      "album": "Dear Cloud",
      "releaseDate": "2007",
      "genres": ["Modern Rock", "Indie Rock"],
      "description": "나인의 보컬과 몽환적인 밴드 사운드가 돋보이는 곡으로, 2000년대 후반 감성 모던록의 중요한 흐름을 보여줍니다.",
      "youtubeId": "-0cKm8pGWEs"
    }
  ],
  "2008": [
    {
      "song": "기억을 걷는 시간",
      "artist": "넬",
      "album": "Separation Anxiety",
      "releaseDate": "2008.03.21",
      "genres": ["Modern Rock", "Alternative Rock"],
      "description": "넬의 대표곡 중 하나로, 반복적인 피아노 리프와 서정적인 밴드 사운드가 결합된 2000년대 한국 모던록의 상징적인 곡입니다.",
      "youtubeId": "0bTCIbyvBBc"
    },
    {
      "song": "좋아해줘",
      "artist": "검정치마",
      "album": "201",
      "releaseDate": "2008.11",
      "genres": ["Indie Rock", "Garage Rock", "Lo-fi"],
      "description": "검정치마의 데뷔 앨범 첫 트랙으로, 로파이한 질감과 직설적인 가사를 통해 2000년대 후반 인디록의 새로운 감각을 보여줍니다.",
      "youtubeId": "ANcAF2V2RKI"
    },
    {
      "song": "싸구려 커피",
      "artist": "장기하와 얼굴들",
      "album": "싸구려 커피",
      "releaseDate": "2008.05.10",
      "genres": ["Indie Rock", "Lo-fi", "Garage Rock"],
      "description": "말하듯이 부르는 보컬과 생활 밀착형 가사로 큰 주목을 받은 곡으로, 2000년대 후반 한국 인디 신의 대중적 전환점을 만들었습니다.",
      "youtubeId": "Y4gWBTU_tic"
    }
  ],
  "2009": [
    {
      "song": "거울",
      "artist": "국카스텐",
      "album": "Guckkasten",
      "releaseDate": "2009.02.04",
      "genres": ["Psychedelic Rock", "Indie Rock", "Modern Rock"],
      "description": "국카스텐의 폭발적인 연주력과 하현우의 보컬을 각인시킨 곡으로, 2000년대 말 한국 록 신의 강렬한 등장을 보여줍니다.",
      "youtubeId": "MUieFiv3piU"
    },
    {
      "song": "그대 걷던 길",
      "artist": "노리플라이",
      "album": "Road",
      "releaseDate": "2009",
      "genres": ["Modern Rock", "Indie Pop"],
      "description": "노리플라이 1집의 대표곡으로, 섬세한 멜로디와 깨끗한 편곡을 통해 2000년대 후반 감성 인디팝의 흐름을 보여줍니다.",
      "youtubeId": "wgN7bB_ZzcY"
    },
    {
      "song": "달이 차오른다, 가자",
      "artist": "장기하와 얼굴들",
      "album": "별일 없이 산다",
      "releaseDate": "2009.02.27",
      "genres": ["Indie Rock", "Garage Rock", "Lo-fi"],
      "description": "장기하와 얼굴들의 정규 1집 대표곡으로, 독특한 리듬과 구어체 가사를 통해 2009년 인디 음악의 대중적 확산을 이끈 곡입니다.",
      "youtubeId": "wG2lDphHVR8"
    }
  ],
    "2010": [
    {
      "song": "아메리카노",
      "artist": "10CM",
      "album": "아메리카노",
      "releaseDate": "2010.08.04",
      "genres": ["Indie Pop", "Acoustic", "Folk Pop"],
      "description": "거리 공연과 홍대 인디 신을 기반으로 등장한 10CM를 대중적으로 알린 곡으로, 2010년대 초반 어쿠스틱 인디팝 붐을 상징합니다.",
      "youtubeId": "30G_SMoAr24"
    },
    {
      "song": "졸업",
      "artist": "브로콜리너마저",
      "album": "졸업",
      "releaseDate": "2010.11.01",
      "genres": ["Indie Pop", "Modern Rock"],
      "description": "청춘의 막막함과 상실감을 덤덤하게 담아낸 곡으로, 브로콜리너마저 특유의 일상적이고 섬세한 인디 감성을 대표합니다.",
      "youtubeId": "0jVziDGnNrA"
    },
    {
      "song": "붉은 밭",
      "artist": "국카스텐",
      "album": "Tagträume",
      "releaseDate": "2010.12.07",
      "genres": ["Psychedelic Rock", "Alternative Rock", "K-Rock"],
      "description": "국카스텐의 폭발적인 연주와 하현우의 보컬이 응축된 곡으로, 2010년대 한국 록 신의 강한 에너지를 보여줍니다.",
      "youtubeId": "9QNypMGZJeA"
    }
  ],
  "2011": [
    {
      "song": "그렇고 그런 사이",
      "artist": "장기하와 얼굴들",
      "album": "장기하와 얼굴들",
      "releaseDate": "2011.06.09",
      "genres": ["Indie Rock", "Garage Rock", "Funk Rock"],
      "description": "말하듯이 부르는 보컬과 반복적인 리듬, 능청스러운 가사가 결합된 곡으로 장기하와 얼굴들의 대중적 전성기를 연 대표곡입니다.",
      "youtubeId": "s67PqkEw-oU"
    },
    {
      "song": "International Love Song",
      "artist": "검정치마",
      "album": "Don't You Worry Baby (I'm Only Swimming)",
      "releaseDate": "2011.07.13",
      "genres": ["Indie Rock", "Indie Pop", "Lo-fi"],
      "description": "검정치마의 로파이한 질감과 낭만적인 멜로디가 돋보이는 곡으로, 2010년대 한국 인디팝의 세련된 방향을 보여줍니다.",
      "youtubeId": "80nGOu5rCT0"
    },
    {
      "song": "12:00",
      "artist": "THE KOXX",
      "album": "ACCESS OK",
      "releaseDate": "2011.06.15",
      "genres": ["Electro Rock", "Garage Rock", "Indie Rock"],
      "description": "일렉트로닉과 개러지 록을 결합한 칵스의 대표곡으로, 2010년대 초반 홍대 신의 세련된 댄서블 록 사운드를 보여줍니다.",
      "youtubeId": "94KMu_IUqE4"
    }
  ],
  "2012": [
    {
      "song": "벚꽃 엔딩",
      "artist": "버스커 버스커",
      "album": "버스커 버스커 1집",
      "releaseDate": "2012.03.29",
      "genres": ["Indie Pop", "Folk Rock", "Acoustic Pop"],
      "description": "매년 봄마다 다시 사랑받는 대표적인 시즌송으로, 인디 밴드 출신 음악이 대중 차트 중심에 설 수 있음을 보여준 곡입니다.",
      "youtubeId": "tXV7dfvSefo"
    },
    {
      "song": "행운을 빌어요",
      "artist": "페퍼톤스",
      "album": "Beginner's Luck",
      "releaseDate": "2012.04.24",
      "genres": ["Indie Pop", "Modern Rock", "Electronic Pop"],
      "description": "청량한 신스팝과 밴드 사운드가 어우러진 곡으로, 페퍼톤스 특유의 긍정적이고 산뜻한 인디팝 감성을 대표합니다.",
      "youtubeId": "U6dTSMCqlp4"
    },
    {
      "song": "헤어지는 날 바로 오늘",
      "artist": "3호선 버터플라이",
      "album": "Dreamtalk",
      "releaseDate": "2012.09.27",
      "genres": ["Modern Rock", "Alternative Rock", "Indie Rock"],
      "description": "3호선 버터플라이의 완성도 높은 사운드와 남상아의 보컬이 돋보이는 곡으로, 2010년대 한국 모던록의 중요한 성취로 평가됩니다.",
      "youtubeId": "DlQvaV2B7VI"
    }
  ],
  "2013": [
    {
      "song": "Ocean of Light",
      "artist": "넬",
      "album": "Escaping Gravity",
      "releaseDate": "2013.06.10",
      "genres": ["Modern Rock", "Alternative Rock", "Electronic Rock"],
      "description": "넬 특유의 몽환적 정서에 밝고 확장적인 사운드를 더한 곡으로, 2010년대 넬의 음악적 변화를 잘 보여줍니다.",
      "youtubeId": "0Ze0TVXXHJ4"
    },
    {
      "song": "캐러밴",
      "artist": "술탄 오브 더 디스코",
      "album": "The Golden Age",
      "releaseDate": "2013.02.20",
      "genres": ["Funk", "Disco", "Indie Rock"],
      "description": "펑크와 디스코를 유쾌하게 결합한 곡으로, 술탄 오브 더 디스코의 장르적 개성과 퍼포먼스 중심의 밴드 이미지를 잘 보여줍니다.",
      "youtubeId": "G0T88Vp4LYM"
    },
    {
      "song": "오빠라고 불러다오",
      "artist": "장미여관",
      "album": "오빠라고 불러다오",
      "releaseDate": "2013.11.02",
      "genres": ["Indie Rock", "Comedy Rock", "Pop Rock"],
      "description": "장미여관 특유의 유머와 생활감 있는 밴드 사운드가 담긴 곡으로, 2010년대 초반 인디 밴드의 예능적 대중화를 보여줍니다.",
      "youtubeId": "NJ-tUO_EOtM"
    }
  ],
  "2014": [
    {
      "song": "위잉위잉",
      "artist": "혁오",
      "album": "20",
      "releaseDate": "2014.09.18",
      "genres": ["Indie Rock", "Alternative Rock", "Modern Rock"],
      "description": "혁오의 데뷔 EP를 대표하는 곡으로, 무기력한 청춘의 감각과 세련된 밴드 사운드가 결합되어 2010년대 중반 인디 신의 흐름을 바꿨습니다.",
      "youtubeId": "D6dqkvR4F9g"
    },
    {
      "song": "낯선 열대",
      "artist": "쏜애플",
      "album": "이상기후",
      "releaseDate": "2014.06.12",
      "genres": ["Modern Rock", "Psychedelic Rock", "Indie Rock"],
      "description": "극적인 보컬과 밀도 높은 밴드 사운드가 돋보이는 곡으로, 쏜애플의 강렬한 감정선과 모던록적 완성도를 보여줍니다.",
      "youtubeId": "1GZioEa42Wk"
    },
    {
      "song": "숨바꼭질",
      "artist": "9와 숫자들",
      "album": "보물섬",
      "releaseDate": "2014.11.25",
      "genres": ["Indie Pop", "Modern Rock"],
      "description": "낭만적인 멜로디와 정교한 기타 팝 사운드가 돋보이는 곡으로, 9와 숫자들의 섬세하고 청량한 음악 세계를 대표합니다.",
      "youtubeId": "Ws0WRL4E14c"
    }
  ],
  "2015": [
    {
      "song": "와리가리",
      "artist": "혁오",
      "album": "22",
      "releaseDate": "2015.05.28",
      "genres": ["Indie Rock", "Alternative Rock", "Funk Rock"],
      "description": "혁오를 대중적으로 폭발시킨 곡으로, 느슨한 그루브와 청춘의 불안정한 정서가 결합된 2010년대 대표 인디록 히트곡입니다.",
      "youtubeId": "Jl6w9tLY3KY"
    },
    {
      "song": "Hollywood",
      "artist": "검정치마",
      "album": "Hollywood",
      "releaseDate": "2015.04.09",
      "genres": ["Indie Rock", "Indie Pop", "Lo-fi"],
      "description": "검정치마의 낭만적이면서도 건조한 정서가 잘 드러나는 곡으로, 2010년대 중반 인디팝의 대표적인 러브송입니다.",
      "youtubeId": "uuGtrxDsrws"
    },
    {
      "song": "echo",
      "artist": "THE KOXX",
      "album": "the new normal",
      "releaseDate": "2015.11.10",
      "genres": ["Modern Rock", "Electro Rock", "Indie Rock"],
      "description": "강렬한 일렉트로 록 사운드와 감각적인 전개가 돋보이는 곡으로, 칵스가 2010년대 중반 다시 주목받게 된 대표곡입니다.",
      "youtubeId": "LMZYdSh_GzU"
    }
  ],
  "2016": [
    {
      "song": "뜨거운 여름밤은 가고 남은 건 볼품없지만",
      "artist": "잔나비",
      "album": "MONKEY HOTEL",
      "releaseDate": "2016.08.04",
      "genres": ["Indie Rock", "Retro Pop", "Band Sound"],
      "description": "잔나비의 복고적 감성과 서정적인 멜로디가 잘 드러나는 곡으로, 이후 밴드의 대중적 성공을 예고한 대표곡입니다.",
      "youtubeId": "J7klzJ9auE0"
    },
    {
      "song": "EVERYTHING",
      "artist": "검정치마",
      "album": "EVERYTHING",
      "releaseDate": "2016.01.29",
      "genres": ["Indie Pop", "Dream Pop", "Lo-fi"],
      "description": "간결한 편곡과 반복적인 멜로디만으로 깊은 감정을 만들어내는 곡으로, 검정치마의 로맨틱한 인디팝 감성을 대표합니다.",
      "youtubeId": "jb1FCdkadlo"
    },
    {
      "song": "Pulse",
      "artist": "국카스텐",
      "album": "Pulse",
      "releaseDate": "2016",
      "genres": ["Alternative Rock", "Psychedelic Rock", "K-Rock"],
      "description": "국카스텐의 강렬한 보컬과 사이키델릭한 밴드 사운드가 결합된 곡으로, 2010년대 중반 한국 록의 에너지를 보여줍니다.",
      "youtubeId": "b971NOZEbgo"
    }
  ],
  "2017": [
    {
      "song": "TOMBOY",
      "artist": "혁오",
      "album": "23",
      "releaseDate": "2017.04.24",
      "genres": ["Indie Rock", "Alternative Rock", "Modern Rock"],
      "description": "혁오의 정규 1집을 대표하는 곡으로, 청춘의 불안과 성장통을 담담하면서도 강렬하게 표현한 2010년대 한국 밴드 음악의 대표곡입니다.",
      "youtubeId": "pC6tPEaAiYU"
    },
    {
      "song": "긴 꿈",
      "artist": "새소년",
      "album": "긴 꿈",
      "releaseDate": "2017.06.20",
      "genres": ["Indie Rock", "Psychedelic Rock", "Alternative Rock"],
      "description": "새소년의 데뷔 싱글로, 황소윤의 독특한 보컬과 사이키델릭한 기타 사운드를 통해 새로운 세대의 인디록을 알린 곡입니다.",
      "youtubeId": "tzL4A8hyXc8"
    },
    {
      "song": "Grace",
      "artist": "ADOY",
      "album": "CATNIP",
      "releaseDate": "2017.05.17",
      "genres": ["Synth-pop", "Indie Pop", "Dream Pop"],
      "description": "몽환적인 신스 사운드와 부드러운 밴드 그루브가 결합된 곡으로, ADOY의 도시적이고 세련된 인디팝 색채를 대표합니다.",
      "youtubeId": "QA7OSuV_Z3g"
    }
  ],
  "2018": [
    {
      "song": "Old Town",
      "artist": "세이수미",
      "album": "Where We Were Together",
      "releaseDate": "2018.04.13",
      "genres": ["Indie Rock", "Surf Rock", "Jangle Pop"],
      "description": "부산 출신 밴드 세이수미의 대표곡으로, 서프 록과 쟁글 팝의 청량함 속에 쓸쓸한 정서를 담아 한국대중음악상에서도 주목받았습니다.",
      "youtubeId": "bxE1u-xxybk"
    },
    {
      "song": "여기에 있자",
      "artist": "SURL",
      "album": "bright #7",
      "releaseDate": "2018.09.09",
      "genres": ["Indie Rock", "Modern Rock", "Alternative Rock"],
      "description": "SURL을 대중에게 알린 초기 대표곡으로, 풋풋한 밴드 사운드와 선명한 후렴이 2010년대 후반 신예 밴드의 감각을 보여줍니다.",
      "youtubeId": "MgsAqBd1HOQ"
    },
    {
      "song": "LOVE YA!",
      "artist": "혁오",
      "album": "24 : How to find true love and happiness",
      "releaseDate": "2018.05.31",
      "genres": ["Indie Rock", "Alternative Rock", "Modern Rock"],
      "description": "혁오의 24 EP를 대표하는 곡으로, 밝은 멜로디와 글로벌한 밴드 사운드를 통해 혁오의 음악적 확장을 보여줍니다.",
      "youtubeId": "aKHbqm-D62Y"
    }
  ],
  "2019": [
    {
      "song": "주저하는 연인들을 위해",
      "artist": "잔나비",
      "album": "전설",
      "releaseDate": "2019.03.13",
      "genres": ["Indie Rock", "Retro Pop", "Ballad"],
      "description": "잔나비를 대중적으로 크게 알린 곡으로, 복고적인 밴드 사운드와 서정적인 멜로디가 결합된 2019년 대표 밴드 음악입니다.",
      "youtubeId": "GpQ222I1ULc"
    },
    {
      "song": "은하",
      "artist": "쏜애플",
      "album": "계몽",
      "releaseDate": "2019.07.04",
      "genres": ["Modern Rock", "Psychedelic Rock", "Indie Rock"],
      "description": "쏜애플 정규 3집의 타이틀곡으로, 극적인 전개와 거대한 사운드 스케일을 통해 2010년대 말 한국 모던록의 완성도를 보여줍니다.",
      "youtubeId": "8fCfMCozRhA"
    },
    {
      "song": "집에",
      "artist": "새소년",
      "album": "집에",
      "releaseDate": "2019.10.04",
      "genres": ["Indie Rock", "Alternative Rock", "Psychedelic Rock"],
      "description": "새소년의 싱글로, 긴장감 있는 리듬과 황소윤의 보컬이 어우러져 밴드의 확장된 사운드와 감정선을 보여주는 곡입니다.",
      "youtubeId": "-7BX4qJXSis"
    }
  ],
    "2012": [
      {
        song: "강남스타일",
        artist: "싸이 (PSY)",
        album: "싸이6甲 Part 1",
        releaseDate: "2012.07.15",
        genres: ["K-Pop", "Dance-pop"],
        description: "전 세계적으로 말춤 열풍을 일으키며 유튜브 최초 10억 뷰를 돌파한 역사적인 곡입니다.",
        youtubeId: "9bZkp7q19f0"
      },
      {
        song: "Fantastic Baby",
        artist: "BIGBANG",
        album: "Still Alive",
        releaseDate: "2012.03.21",
        genres: ["K-Pop", "Electronic", "Hip-hop"],
        description: "BIGBANG의 파워풀한 퍼포먼스와 강렬한 사운드로 전 세계 K-Pop 팬들을 사로잡은 곡입니다.",
        youtubeId: "AAbokV76tkU"
      },
      {
        song: "I Love You",
        artist: "2NE1",
        album: "2NE1 2집",
        releaseDate: "2012.07.01",
        genres: ["K-Pop", "Dance-pop", "R&B"],
        description: "2NE1의 걸크러시 매력이 담긴 곡으로, 강렬한 보컬과 세련된 프로덕션이 돋보입니다.",
        youtubeId: "LUrUPzLm5SI"
      }
    ],
  "2020": [
    {
      "song": "난춘",
      "artist": "새소년",
      "album": "난춘",
      "releaseDate": "2020.05.10",
      "genres": ["Indie Rock", "Psychedelic Rock", "Modern Rock"],
      "description": "새소년 특유의 사이키델릭한 밴드 사운드와 황소윤의 보컬이 어우러진 곡으로, 2020년대 한국 인디록의 중요한 장면을 만든 작품입니다.",
      "youtubeId": "KsznX5j2oQ0"
    },
    {
      "song": "Dynamite",
      "artist": "BTS",
      "album": "Dynamite",
      "releaseDate": "2020.08.21",
      "genres": ["K-Pop", "Disco-pop", "Funk"],
      "description": "BTS의 첫 영어 싱글로, 디스코 팝 사운드를 앞세워 전 세계적으로 큰 성공을 거두며 K-Pop의 글로벌 영향력을 확장한 곡입니다.",
      "youtubeId": "gdZLi9oWNZg"
    },
    {
      "song": "How You Like That",
      "artist": "BLACKPINK",
      "album": "How You Like That",
      "releaseDate": "2020.06.26",
      "genres": ["K-Pop", "Hip-hop", "Dance-pop"],
      "description": "강렬한 드롭과 퍼포먼스로 BLACKPINK의 글로벌 이미지를 더욱 확고히 한 곡으로, 2020년 K-Pop 걸그룹 신을 대표합니다.",
      "youtubeId": "ioNng23DkIM"
    }
  ],
  "2021": [
    {
      "song": "Desert Eagle",
      "artist": "실리카겔",
      "album": "Desert Eagle",
      "releaseDate": "2021.08.15",
      "genres": ["Indie Rock", "Psychedelic Rock", "Alternative Rock"],
      "description": "강렬한 연주와 폭발적인 후반부 전개가 돋보이는 곡으로, 실리카겔이 2020년대 한국 밴드 신의 중심으로 부상하는 데 중요한 역할을 했습니다.",
      "youtubeId": "_g3vxL400l0"
    },
    {
      "song": "Next Level",
      "artist": "aespa",
      "album": "Next Level",
      "releaseDate": "2021.05.17",
      "genres": ["K-Pop", "Dance-pop", "Hip-hop", "EDM"],
      "description": "독특한 곡 구성과 세계관 콘셉트로 큰 화제를 모은 곡으로, aespa의 정체성을 대중에게 각인시킨 대표곡입니다.",
      "youtubeId": "4TWR90KJl84"
    },
    {
      "song": "Celebrity",
      "artist": "IU",
      "album": "Celebrity",
      "releaseDate": "2021.01.27",
      "genres": ["K-Pop", "Dance-pop", "Electropop"],
      "description": "화려한 팝 사운드와 위로의 메시지가 결합된 곡으로, IU의 대중성과 음악적 세련미를 동시에 보여준 2021년 대표곡입니다.",
      "youtubeId": "0-q1KafFCLU"
    }
  ],
  "2022": [
    {
      "song": "NO PAIN",
      "artist": "실리카겔",
      "album": "NO PAIN",
      "releaseDate": "2022.08.25",
      "genres": ["Indie Rock", "Psychedelic Rock", "Alternative Rock"],
      "description": "반복적인 신스 리프와 폭발적인 밴드 사운드가 결합된 곡으로, 실리카겔을 대중적으로 널리 알린 2020년대 한국 록의 대표곡입니다.",
      "youtubeId": "JaIMSzE5yLA"
    },
    {
      "song": "LOVE DIVE",
      "artist": "IVE",
      "album": "LOVE DIVE",
      "releaseDate": "2022.04.05",
      "genres": ["K-Pop", "Dance-pop", "Electropop"],
      "description": "중독성 있는 후렴과 세련된 콘셉트로 큰 성공을 거둔 곡으로, IVE를 4세대 대표 걸그룹으로 확실히 각인시켰습니다.",
      "youtubeId": "Y8JFxS1HlDo"
    },
    {
      "song": "Attention",
      "artist": "NewJeans",
      "album": "New Jeans",
      "releaseDate": "2022.07.22",
      "genres": ["K-Pop", "R&B", "New Jack Swing"],
      "description": "뮤직비디오 선공개 방식과 자연스러운 Y2K 감성으로 주목받은 NewJeans의 데뷔곡으로, 2020년대 K-Pop의 미감 변화를 상징합니다.",
      "youtubeId": "js1CtxSY38I"
    }
  ],
  "2023": [
    {
      "song": "T + Tik Tak Tok",
      "artist": "실리카겔 feat. So!YoON!",
      "album": "Tik Tak Tok",
      "releaseDate": "2023.08.19",
      "genres": ["Indie Rock", "Psychedelic Rock", "Alternative Rock"],
      "description": "실리카겔의 강렬한 밴드 사운드와 새소년 황소윤의 보컬이 결합된 곡으로, 2020년대 한국 모던록의 확장성을 보여준 작품입니다.",
      "youtubeId": "DIPxnt5vnhU"
    },
    {
      "song": "OMG",
      "artist": "NewJeans",
      "album": "OMG",
      "releaseDate": "2023.01.02",
      "genres": ["K-Pop", "R&B", "Pop"],
      "description": "미니멀한 R&B 팝 사운드와 독특한 뮤직비디오 서사로 주목받은 곡으로, NewJeans의 음악적 색깔을 확고히 한 대표곡입니다.",
      "youtubeId": "_ZAgIHmHLdc"
    },
    {
      "song": "I AM",
      "artist": "IVE",
      "album": "I've IVE",
      "releaseDate": "2023.04.10",
      "genres": ["K-Pop", "Dance-pop", "Pop"],
      "description": "웅장한 멜로디와 자기 확신의 메시지가 결합된 곡으로, IVE의 대중적 전성기를 대표하는 2023년 히트곡입니다.",
      "youtubeId": "6ZUIwj3FgUY"
    }
  ],
  "2024": [
    {
      "song": "ringringring",
      "artist": "SURL",
      "album": "ringringring",
      "releaseDate": "2024.05.16",
      "genres": ["Indie Rock", "Modern Rock", "Alternative Rock"],
      "description": "SURL 특유의 세련된 기타 사운드와 리듬감이 돋보이는 곡으로, 2020년대 중반 한국 인디밴드 신의 활기를 보여줍니다.",
      "youtubeId": "tEq_rzY_vzg"
    },
    {
      "song": "Supernova",
      "artist": "aespa",
      "album": "Armageddon",
      "releaseDate": "2024.05.13",
      "genres": ["K-Pop", "Hyperpop", "Dance-pop", "EDM"],
      "description": "강렬한 전자음과 세계관 콘셉트를 극대화한 곡으로, 2024년 K-Pop 신에서 가장 큰 존재감을 보인 히트곡 중 하나입니다.",
      "youtubeId": "phuiiNCxRMg"
    },
    {
      "song": "밤양갱",
      "artist": "BIBI",
      "album": "밤양갱",
      "releaseDate": "2024.02.13",
      "genres": ["K-Pop", "Retro Pop", "Ballad"],
      "description": "레트로한 멜로디와 동화적인 분위기로 큰 사랑을 받은 곡으로, BIBI의 대중적 이미지를 새롭게 확장한 대표곡입니다.",
      "youtubeId": "smdmEhkIRVc"
    }
  ],
  "2025": [
    {
      "song": "南宮FEFERE",
      "artist": "실리카겔 feat. Japanese Breakfast",
      "album": "南宮FEFERE",
      "releaseDate": "2025.07.10",
      "genres": ["Indie Rock", "Psychedelic Rock", "Alternative Rock"],
      "description": "실리카겔과 Japanese Breakfast의 협업곡으로, 한국 인디록이 해외 인디 신과 연결되는 흐름을 보여주는 상징적인 작품입니다.",
      "youtubeId": "Q7YbKA9isws"
    },
    {
      "song": "REBEL HEART",
      "artist": "IVE",
      "album": "IVE EMPATHY",
      "releaseDate": "2025.01.13",
      "genres": ["K-Pop", "Dance-pop", "Pop"],
      "description": "웅장한 보컬 하모니와 연대의 메시지를 담은 곡으로, IVE의 2025년 활동을 강하게 연 대표곡입니다.",
      "youtubeId": "g36q0ZLvygQ"
    },
    {
      "song": "뛰어",
      "artist": "BLACKPINK",
      "album": "뛰어",
      "releaseDate": "2025.07.11",
      "genres": ["K-Pop", "Dance-pop", "Electronic"],
      "description": "BLACKPINK의 완전체 컴백 싱글로, 강렬한 전자음과 퍼포먼스 중심의 구성을 통해 그룹의 글로벌 파급력을 다시 보여준 곡입니다.",
      "youtubeId": "CgCVZdcKcqY"
    }
  ],
  "2026": [
    {
      "song": "Deep Inside",
      "artist": "넬",
      "album": "X : 3 / ?",
      "releaseDate": "2026.03.02",
      "genres": ["Modern Rock", "Alternative Rock", "K-Rock"],
      "description": "넬의 EP 'X : 3 / ?' 타이틀곡으로, 몽환적이고 깊이 있는 사운드를 통해 2026년 현재 한국 모던록의 흐름을 이어가는 곡입니다.",
      "youtubeId": "AyQ2g0t8y1A"
    },
    {
      "song": "GO",
      "artist": "BLACKPINK",
      "album": "DEADLINE",
      "releaseDate": "2026.02.27",
      "genres": ["K-Pop", "EDM", "Techno"],
      "description": "BLACKPINK의 2026년 미니앨범 'DEADLINE' 타이틀곡으로, 강한 EDM 사운드와 퍼포먼스를 앞세운 컴백곡입니다.",
      "youtubeId": "2GJfWMYCWY0"
    },
    {
      "song": "SWIM",
      "artist": "BTS",
      "album": "ARIRANG",
      "releaseDate": "2026.03.20",
      "genres": ["K-Pop", "Alternative Pop", "Synth-pop"],
      "description": "BTS의 2026년 컴백 앨범 'ARIRANG'의 리드 싱글로, 재결합 이후의 새로운 장을 알리는 곡으로 주목받았습니다.",
      "youtubeId": "b4iVv91Z6lY"
    }
  ],
},
"United States": {
  "1950": [
    {
      "song": "Goodnight Irene",
      "artist": "Gordon Jenkins and The Weavers",
      "album": "Goodnight Irene (Single)",
      "releaseDate": "1950",
      "genres": ["Folk", "Traditional Pop"],
      "description": "1950년 미국 대중음악을 대표하는 초대형 히트곡으로, 포크 음악이 대중 차트 중심에 오를 수 있음을 보여준 곡입니다.",
      "youtubeId": "MSDyiUBrUSk"
    },
    {
      "song": "Mona Lisa",
      "artist": "Nat King Cole",
      "album": "Mona Lisa (Single)",
      "releaseDate": "1950",
      "genres": ["Traditional Pop", "Vocal Jazz"],
      "description": "냇 킹 콜의 부드러운 보컬을 대표하는 스탠더드 팝 명곡으로, 1950년대 미국 보컬 팝의 품격을 상징합니다.",
      "youtubeId": "NIDX18Xl16s"
    },
    {
      "song": "Music! Music! Music!",
      "artist": "Teresa Brewer",
      "album": "Music! Music! Music! (Single)",
      "releaseDate": "1950",
      "genres": ["Traditional Pop", "Novelty Pop"],
      "description": "밝고 중독적인 후렴으로 큰 인기를 얻은 곡으로, 전후 미국 대중가요의 낙관적 분위기를 잘 보여줍니다.",
      "youtubeId": "HXYwP6PNYRA"
    }
  ],
  "1951": [
    {
      "song": "Too Young",
      "artist": "Nat King Cole",
      "album": "Too Young (Single)",
      "releaseDate": "1951",
      "genres": ["Traditional Pop", "Vocal Jazz"],
      "description": "냇 킹 콜의 대표적인 로맨틱 발라드로, 1950년대 초반 미국 팝 보컬의 정서를 상징하는 곡입니다.",
      "youtubeId": "KaFtsqU2V6U"
    },
    {
      "song": "Because of You",
      "artist": "Tony Bennett",
      "album": "Because of You (Single)",
      "releaseDate": "1951",
      "genres": ["Traditional Pop", "Vocal Pop"],
      "description": "토니 베넷을 대중적으로 알린 대표곡으로, 1950년대 미국 남성 보컬 팝의 전성기를 보여줍니다.",
      "youtubeId": "KOkVX5i8qKw"
    },
    {
      "song": "How High the Moon",
      "artist": "Les Paul and Mary Ford",
      "album": "How High the Moon (Single)",
      "releaseDate": "1951",
      "genres": ["Jazz Pop", "Traditional Pop"],
      "description": "멀티트랙 녹음과 기타 사운드의 혁신을 대중음악 안으로 끌어온 곡으로, 녹음 기술사에서도 중요한 작품입니다.",
      "youtubeId": "NkGf1GHAxhE"
    }
  ],
  "1952": [
    {
      "song": "Blue Tango",
      "artist": "Leroy Anderson",
      "album": "Blue Tango (Single)",
      "releaseDate": "1952",
      "genres": ["Easy Listening", "Orchestral Pop"],
      "description": "오케스트라 팝이 대중 차트에서 강한 영향력을 가졌던 시기를 보여주는 대표적인 연주곡입니다.",
      "youtubeId": "PJo_kbS0Y2E"
    },
    {
      "song": "Wheel of Fortune",
      "artist": "Kay Starr",
      "album": "Wheel of Fortune (Single)",
      "releaseDate": "1952",
      "genres": ["Traditional Pop", "Vocal Pop"],
      "description": "케이 스타의 강렬한 보컬이 돋보이는 히트곡으로, 1950년대 초 여성 보컬 팝의 대표적인 성공 사례입니다.",
      "youtubeId": "OeIce5NsWKk"
    },
    {
      "song": "You Belong to Me",
      "artist": "Jo Stafford",
      "album": "You Belong to Me (Single)",
      "releaseDate": "1952",
      "genres": ["Traditional Pop", "Ballad"],
      "description": "전쟁 이후의 그리움과 로맨스를 담은 발라드로, 여러 세대에 걸쳐 리메이크된 미국 팝 스탠더드입니다.",
      "youtubeId": "zQfF84ackMM"
    }
  ],
  "1953": [
    {
      "song": "The Song from Moulin Rouge",
      "artist": "Percy Faith featuring Felicia Sanders",
      "album": "The Song from Moulin Rouge (Single)",
      "releaseDate": "1953",
      "genres": ["Easy Listening", "Traditional Pop"],
      "description": "영화 음악과 오케스트라 팝이 결합된 대표적인 히트곡으로, 1953년 미국 대중음악의 주류 감성을 보여줍니다.",
      "youtubeId": "FhdiXyEBmh0"
    },
    {
      "song": "Vaya con Dios",
      "artist": "Les Paul and Mary Ford",
      "album": "Vaya con Dios (Single)",
      "releaseDate": "1953",
      "genres": ["Traditional Pop", "Country Pop"],
      "description": "레코딩 기술과 보컬 하모니가 돋보이는 곡으로, 레스 폴과 메리 포드의 전성기를 대표합니다.",
      "youtubeId": "QqZ0Sdz_V40"
    },
    {
      "song": "Hound Dog",
      "artist": "Big Mama Thornton",
      "album": "Hound Dog (Single)",
      "releaseDate": "1953",
      "genres": ["Rhythm and Blues", "Blues"],
      "description": "후대 록앤롤의 방향을 예고한 강렬한 R&B 곡으로, 엘비스 프레슬리 버전 이전의 원형적 에너지를 들려줍니다.",
      "youtubeId": "yoHDrzw-RPg"
    }
  ],
  "1954": [
    {
      "song": "Sh-Boom",
      "artist": "The Chords",
      "album": "Sh-Boom (Single)",
      "releaseDate": "1954",
      "genres": ["Doo-wop", "Rhythm and Blues"],
      "description": "두왑과 R&B가 팝 시장으로 확장되는 흐름을 보여준 곡으로, 1950년대 중반 보컬 그룹 사운드의 전환점을 상징합니다.",
      "youtubeId": "H6LaAUGAu4U"
    },
    {
      "song": "Rock Around the Clock",
      "artist": "Bill Haley & His Comets",
      "album": "Rock Around the Clock (Single)",
      "releaseDate": "1954",
      "genres": ["Rock and Roll", "Rockabilly"],
      "description": "1950년대 록앤롤 대중화를 상징하는 곡으로, 이후 영화와 함께 전 세계적인 록 열풍의 기폭제가 되었습니다.",
      "youtubeId": "ZgdufzXvjqw"
    },
    {
      "song": "That's All Right",
      "artist": "Elvis Presley",
      "album": "That's All Right (Single)",
      "releaseDate": "1954",
      "genres": ["Rockabilly", "Rock and Roll"],
      "description": "엘비스 프레슬리의 첫 싱글로, 컨트리와 블루스가 결합된 로커빌리 사운드의 출발점으로 평가됩니다.",
      "youtubeId": "iitquX6vNJU"
    }
  ],
  "1955": [
    {
      "song": "Maybellene",
      "artist": "Chuck Berry",
      "album": "Maybellene (Single)",
      "releaseDate": "1955",
      "genres": ["Rock and Roll", "Rhythm and Blues"],
      "description": "척 베리의 데뷔 히트곡으로, 기타 리프와 자동차·청춘 서사를 결합해 록앤롤의 언어를 정립한 곡입니다.",
      "youtubeId": "75RiHJGfyUE"
    },
    {
      "song": "Tutti Frutti",
      "artist": "Little Richard",
      "album": "Tutti Frutti (Single)",
      "releaseDate": "1955",
      "genres": ["Rock and Roll", "Rhythm and Blues"],
      "description": "리틀 리처드의 폭발적인 보컬과 에너지가 담긴 곡으로, 록앤롤의 원초적 힘을 대표하는 고전입니다.",
      "youtubeId": "F13JNjpNW6c"
    },
    {
      "song": "Sixteen Tons",
      "artist": "Tennessee Ernie Ford",
      "album": "Sixteen Tons (Single)",
      "releaseDate": "1955",
      "genres": ["Country", "Folk"],
      "description": "노동자의 삶과 부채의 무게를 낮고 묵직한 목소리로 담아낸 곡으로, 컨트리와 포크의 사회적 서사를 대중화했습니다.",
      "youtubeId": "RRh0QiXyZSk"
    }
  ],
  "1956": [
    {
      "song": "Heartbreak Hotel",
      "artist": "Elvis Presley",
      "album": "Heartbreak Hotel (Single)",
      "releaseDate": "1956",
      "genres": ["Rock and Roll", "Rockabilly"],
      "description": "엘비스 프레슬리를 미국 대중음악의 중심으로 끌어올린 곡으로, 1950년대 록 스타 시대의 개막을 알렸습니다.",
      "youtubeId": "e9BLw4W5KU8"
    },
    {
      "song": "Hound Dog",
      "artist": "Elvis Presley",
      "album": "Hound Dog (Single)",
      "releaseDate": "1956",
      "genres": ["Rock and Roll", "Rockabilly"],
      "description": "엘비스식 록앤롤 퍼포먼스를 대중에게 각인시킨 대표곡으로, TV 시대의 스타성과 음악적 충격을 함께 보여줍니다.",
      "youtubeId": "-eHJ12Vhpyc"
    },
    {
      "song": "Blue Suede Shoes",
      "artist": "Carl Perkins",
      "album": "Blue Suede Shoes (Single)",
      "releaseDate": "1956",
      "genres": ["Rockabilly", "Rock and Roll"],
      "description": "선 레코드 로커빌리의 핵심 곡으로, 기타 중심의 리듬과 청춘 문화의 감각을 선명하게 드러냅니다.",
      "youtubeId": "UAANY_g4IGY"
    }
  ],
  "1957": [
    {
      "song": "Jailhouse Rock",
      "artist": "Elvis Presley",
      "album": "Jailhouse Rock (Single)",
      "releaseDate": "1957",
      "genres": ["Rock and Roll", "Rockabilly"],
      "description": "동명 영화와 함께 발표된 엘비스의 대표곡으로, 음악·영화·댄스가 결합된 1950년대 스타 시스템을 상징합니다.",
      "youtubeId": "gj0Rz-uP4Mk"
    },
    {
      "song": "That'll Be the Day",
      "artist": "The Crickets",
      "album": "That'll Be the Day (Single)",
      "releaseDate": "1957",
      "genres": ["Rock and Roll", "Rockabilly"],
      "description": "버디 홀리와 더 크리케츠를 대표하는 곡으로, 이후 밴드형 록 음악과 싱어송라이터 록의 중요한 모델이 되었습니다.",
      "youtubeId": "s3bG-CMS8Mo"
    },
    {
      "song": "Great Balls of Fire",
      "artist": "Jerry Lee Lewis",
      "album": "Great Balls of Fire (Single)",
      "releaseDate": "1957",
      "genres": ["Rock and Roll", "Rockabilly"],
      "description": "제리 리 루이스의 격렬한 피아노 연주와 보컬이 결합된 곡으로, 1950년대 록앤롤의 광기와 에너지를 대표합니다.",
      "youtubeId": "Jt0mg8Z09SY"
    }
  ],
  "1958": [
    {
      "song": "Johnny B. Goode",
      "artist": "Chuck Berry",
      "album": "Johnny B. Goode (Single)",
      "releaseDate": "1958",
      "genres": ["Rock and Roll", "Rhythm and Blues"],
      "description": "기타리스트 청춘 영웅의 서사를 담은 록앤롤의 교과서 같은 곡으로, 이후 록 기타 음악의 기준점이 되었습니다.",
      "youtubeId": "6ROwVrF0Ceg"
    },
    {
      "song": "All I Have to Do Is Dream",
      "artist": "The Everly Brothers",
      "album": "All I Have to Do Is Dream (Single)",
      "releaseDate": "1958",
      "genres": ["Pop", "Country Pop", "Rock and Roll"],
      "description": "형제 듀오의 완벽한 하모니가 돋보이는 곡으로, 컨트리 팝과 로큰롤 보컬 화음의 연결고리를 보여줍니다.",
      "youtubeId": "tbU3zdAgiX8"
    },
    {
      "song": "Summertime Blues",
      "artist": "Eddie Cochran",
      "album": "Summertime Blues (Single)",
      "releaseDate": "1958",
      "genres": ["Rock and Roll", "Rockabilly"],
      "description": "청소년의 불만과 여름의 에너지를 유머러스하게 담은 곡으로, 후대 록 밴드들에게 반복적으로 리메이크된 고전입니다.",
      "youtubeId": "zdIqME_JLaU"
    }
  ],
  "1959": [
    {
      "song": "What'd I Say",
      "artist": "Ray Charles",
      "album": "What'd I Say (Single)",
      "releaseDate": "1959",
      "genres": ["Soul", "Rhythm and Blues"],
      "description": "가스펠, R&B, 블루스의 감각을 결합해 소울 음악의 방향을 제시한 레이 찰스의 결정적인 곡입니다.",
      "youtubeId": "6uTDa3771HM"
    },
    {
      "song": "Mack the Knife",
      "artist": "Bobby Darin",
      "album": "Mack the Knife (Single)",
      "releaseDate": "1959",
      "genres": ["Traditional Pop", "Swing", "Jazz Pop"],
      "description": "스윙과 팝 보컬의 세련된 결합으로 1959년을 대표한 히트곡이며, 바비 대린의 대표작으로 남았습니다.",
      "youtubeId": "557lFG-qq5g"
    },
    {
      "song": "The Battle of New Orleans",
      "artist": "Johnny Horton",
      "album": "The Battle of New Orleans (Single)",
      "releaseDate": "1959",
      "genres": ["Country", "Novelty", "Folk"],
      "description": "역사 서사를 유쾌한 컨트리 팝으로 풀어낸 곡으로, 1959년 미국 팝과 컨트리 차트 모두에서 큰 성공을 거두었습니다.",
      "youtubeId": "9CnPv_1SVh0"
    }
  ],
    "1960": [
    {
      "song": "The Twist",
      "artist": "Chubby Checker",
      "album": "The Twist (Single)",
      "releaseDate": "1960",
      "genres": ["Rock and Roll", "Dance-pop"],
      "description": "트위스트 춤 열풍을 전 세계적으로 확산시킨 곡으로, 1960년대 초 미국 대중문화에서 댄스 음악의 힘을 보여준 대표작입니다.",
      "youtubeId": "-CCgDvUM4TM"
    },
    {
      "song": "Georgia on My Mind",
      "artist": "Ray Charles",
      "album": "The Genius Hits the Road",
      "releaseDate": "1960",
      "genres": ["Soul", "Rhythm and Blues", "Vocal Pop"],
      "description": "레이 찰스의 깊은 소울 감성과 재즈적 해석이 돋보이는 곡으로, 이후 조지아주의 공식 주가가 될 만큼 미국적 정서를 상징하게 되었습니다.",
      "youtubeId": "ggGzE5KfCio"
    },
    {
      "song": "Save the Last Dance for Me",
      "artist": "The Drifters",
      "album": "Save the Last Dance for Me (Single)",
      "releaseDate": "1960",
      "genres": ["Soul", "Pop", "Doo-wop"],
      "description": "벤 E. 킹의 리드 보컬과 세련된 소울 팝 편곡이 어우러진 곡으로, 1960년대 초 보컬 그룹 사운드의 정점을 보여줍니다.",
      "youtubeId": "6a2ndlJ2ym4"
    }
  ],
  "1961": [
    {
      "song": "Stand by Me",
      "artist": "Ben E. King",
      "album": "Stand by Me (Single)",
      "releaseDate": "1961",
      "genres": ["Soul", "Rhythm and Blues", "Pop"],
      "description": "단순하지만 강렬한 베이스 라인과 따뜻한 보컬로 세대를 넘어 사랑받은 곡으로, 미국 소울 팝의 대표적인 스탠더드입니다.",
      "youtubeId": "hwZNL7QVJjE"
    },
    {
      "song": "Will You Love Me Tomorrow",
      "artist": "The Shirelles",
      "album": "Tonight's the Night",
      "releaseDate": "1961",
      "genres": ["Girl Group", "Doo-wop", "Pop"],
      "description": "걸그룹이 Billboard Hot 100 1위에 오른 중요한 사례로, 1960년대 초 여성 보컬 그룹 시대의 본격적인 시작을 알린 곡입니다.",
      "youtubeId": "evAi9qz9WQs"
    },
    {
      "song": "Hit the Road Jack",
      "artist": "Ray Charles",
      "album": "Hit the Road Jack (Single)",
      "releaseDate": "1961",
      "genres": ["Rhythm and Blues", "Soul"],
      "description": "콜 앤 리스폰스 형식과 강한 리듬감이 돋보이는 레이 찰스의 대표곡으로, 짧고 강렬한 R&B 팝 히트의 전형을 보여줍니다.",
      "youtubeId": "uSiHqxgE2d0"
    }
  ],
  "1962": [
    {
      "song": "Surfin' Safari",
      "artist": "The Beach Boys",
      "album": "Surfin' Safari",
      "releaseDate": "1962.06.04",
      "genres": ["Surf Rock", "Pop Rock"],
      "description": "비치 보이스의 초기 대표곡으로, 캘리포니아 서핑 문화와 청춘 이미지를 미국 팝 음악의 중심으로 끌어올린 곡입니다.",
      "youtubeId": "tMnqV26Njxo"
    },
    {
      "song": "Green Onions",
      "artist": "Booker T. & the M.G.'s",
      "album": "Green Onions",
      "releaseDate": "1962",
      "genres": ["Soul", "Rhythm and Blues", "Instrumental"],
      "description": "오르간 리프가 인상적인 스택스 소울의 대표 연주곡으로, 멤피스 소울 사운드의 상징적인 출발점 중 하나입니다.",
      "youtubeId": "0oox9bJaGJ8"
    },
    {
      "song": "The Loco-Motion",
      "artist": "Little Eva",
      "album": "The Loco-Motion (Single)",
      "releaseDate": "1962",
      "genres": ["Pop", "Dance-pop", "Girl Group"],
      "description": "캐럴 킹과 제리 고핀의 송라이팅이 빛나는 댄스 팝 히트곡으로, 따라 하기 쉬운 춤과 후렴으로 1960년대 초 대중적 인기를 얻었습니다.",
      "youtubeId": "1Lej7aQDrGM"
    }
  ],
  "1963": [
    {
      "song": "Be My Baby",
      "artist": "The Ronettes",
      "album": "Presenting the Fabulous Ronettes Featuring Veronica",
      "releaseDate": "1963",
      "genres": ["Girl Group", "Pop", "Rhythm and Blues"],
      "description": "필 스펙터의 월 오브 사운드 프로덕션을 대표하는 곡으로, 1960년대 팝 음악 제작 방식에 큰 영향을 준 명곡입니다.",
      "youtubeId": "jSPpbOGnFgk"
    },
    {
      "song": "Blowin' in the Wind",
      "artist": "Bob Dylan",
      "album": "The Freewheelin' Bob Dylan",
      "releaseDate": "1963.08.13",
      "genres": ["Folk", "Protest Song", "Singer-Songwriter"],
      "description": "평화와 자유, 인권에 대한 질문을 담은 포크 명곡으로, 1960년대 미국 시민권 운동과 저항 문화의 상징적인 노래가 되었습니다.",
      "youtubeId": "MMFj8uDubsE"
    },
    {
      "song": "Surfin' U.S.A.",
      "artist": "The Beach Boys",
      "album": "Surfin' U.S.A.",
      "releaseDate": "1963.03.04",
      "genres": ["Surf Rock", "Rock and Roll", "Pop Rock"],
      "description": "척 베리식 로큰롤 리듬에 서핑 문화를 결합한 곡으로, 비치 보이스를 미국 청춘 팝의 대표 밴드로 각인시켰습니다.",
      "youtubeId": "KcZn05qxVgg"
    }
  ],
  "1964": [
    {
      "song": "Dancing in the Street",
      "artist": "Martha and the Vandellas",
      "album": "Dancing in the Street (Single)",
      "releaseDate": "1964",
      "genres": ["Motown", "Soul", "Pop"],
      "description": "모타운 특유의 경쾌한 리듬과 거리의 해방감을 담은 곡으로, 1960년대 미국 도시 문화와 소울 팝의 에너지를 대표합니다.",
      "youtubeId": "aEWyZC8tvgU"
    },
    {
      "song": "Where Did Our Love Go",
      "artist": "The Supremes",
      "album": "Where Did Our Love Go",
      "releaseDate": "1964.06.17",
      "genres": ["Motown", "Girl Group", "Soul Pop"],
      "description": "슈프림스를 모타운의 대표 걸그룹으로 만든 곡으로, 이후 이어지는 연속 1위 행진의 출발점이 되었습니다.",
      "youtubeId": "Jt_31gR18NA"
    },
    {
      "song": "A Change Is Gonna Come",
      "artist": "Sam Cooke",
      "album": "Ain't That Good News",
      "releaseDate": "1964.12.22",
      "genres": ["Soul", "Rhythm and Blues", "Protest Song"],
      "description": "시민권 운동의 정서를 담은 소울 발라드로, 샘 쿡의 음악적 깊이와 1960년대 미국 사회의 변화를 상징하는 곡입니다.",
      "youtubeId": "wEBlaMOmKV4"
    }
  ],
  "1965": [
    {
      "song": "Like a Rolling Stone",
      "artist": "Bob Dylan",
      "album": "Highway 61 Revisited",
      "releaseDate": "1965",
      "genres": ["Folk Rock", "Singer-Songwriter", "Rock"],
      "description": "6분이 넘는 길이와 시적인 가사, 밴드 사운드의 결합으로 록 음악의 표현 범위를 크게 확장한 1960년대 핵심 작품입니다.",
      "youtubeId": "syNLBJ_Lq9E"
    },
    {
      "song": "Papa's Got a Brand New Bag",
      "artist": "James Brown and The Famous Flames",
      "album": "Papa's Got a Brand New Bag (Single)",
      "releaseDate": "1965",
      "genres": ["Soul", "Funk", "Rhythm and Blues"],
      "description": "제임스 브라운의 리듬 혁신이 본격화된 곡으로, 훗날 funk 장르가 독립적인 흐름으로 자리 잡는 데 중요한 역할을 했습니다.",
      "youtubeId": "FshOJzeu_dc"
    },
    {
      "song": "California Girls",
      "artist": "The Beach Boys",
      "album": "Summer Days (And Summer Nights!!)",
      "releaseDate": "1965",
      "genres": ["Pop Rock", "Surf Pop", "Baroque Pop"],
      "description": "브라이언 윌슨의 세련된 편곡과 비치 보이스의 화음이 돋보이는 곡으로, 캘리포니아 팝 이미지를 전 세계적으로 각인시켰습니다.",
      "youtubeId": "DR2lvcdKSdU"
    }
  ],
  "1966": [
    {
      "song": "Good Vibrations",
      "artist": "The Beach Boys",
      "album": "Good Vibrations (Single)",
      "releaseDate": "1966",
      "genres": ["Psychedelic Pop", "Art Pop", "Pop Rock"],
      "description": "복잡한 녹음 방식과 독창적인 구조를 통해 1960년대 스튜디오 팝의 가능성을 극대화한 비치 보이스의 대표작입니다.",
      "youtubeId": "apBWI6xrbLY"
    },
    {
      "song": "When a Man Loves a Woman",
      "artist": "Percy Sledge",
      "album": "When a Man Loves a Woman",
      "releaseDate": "1966",
      "genres": ["Soul", "Southern Soul", "Ballad"],
      "description": "퍼시 슬레지의 절절한 보컬이 돋보이는 서던 소울 발라드로, 1960년대 미국 소울 음악의 감정적 깊이를 대표합니다.",
      "youtubeId": "6meW-K-1e7Q"
    },
    {
      "song": "Reach Out I'll Be There",
      "artist": "Four Tops",
      "album": "Reach Out",
      "releaseDate": "1966.08.18",
      "genres": ["Motown", "Soul", "Pop"],
      "description": "리바이 스텁스의 격정적인 보컬과 드라마틱한 편곡이 결합된 모타운의 대표곡으로, 1960년대 소울 팝의 절정을 보여줍니다.",
      "youtubeId": "1v4twH9KbnU"
    }
  ],
  "1967": [
    {
      "song": "Respect",
      "artist": "Aretha Franklin",
      "album": "I Never Loved a Man the Way I Love You",
      "releaseDate": "1967",
      "genres": ["Soul", "Rhythm and Blues"],
      "description": "아레사 프랭클린을 '소울의 여왕'으로 각인시킨 곡으로, 여성의 자존감과 권리 의식을 상징하는 시대적 찬가가 되었습니다.",
      "youtubeId": "JzqGZjFnYnA"
    },
    {
      "song": "Light My Fire",
      "artist": "The Doors",
      "album": "The Doors",
      "releaseDate": "1967.04.24",
      "genres": ["Psychedelic Rock", "Acid Rock", "Rock"],
      "description": "긴 오르간 솔로와 몽환적인 분위기가 인상적인 곡으로, 1960년대 미국 사이키델릭 록과 반문화의 상징으로 자리 잡았습니다.",
      "youtubeId": "jKU74Uns9_0"
    },
    {
      "song": "Somebody to Love",
      "artist": "Jefferson Airplane",
      "album": "Surrealistic Pillow",
      "releaseDate": "1967",
      "genres": ["Psychedelic Rock", "Acid Rock"],
      "description": "그레이스 슬릭의 강렬한 보컬이 돋보이는 곡으로, 샌프란시스코 히피 문화와 사이키델릭 록의 확산을 대표합니다.",
      "youtubeId": "RD4TFzkY5F0"
    }
  ],
  "1968": [
    {
      "song": "Mrs. Robinson",
      "artist": "Simon & Garfunkel",
      "album": "Bookends",
      "releaseDate": "1968",
      "genres": ["Folk Rock", "Pop Rock"],
      "description": "영화 '졸업'과 함께 1960년대 미국 청년 세대의 불안과 냉소를 상징하게 된 사이먼 앤 가펑클의 대표곡입니다.",
      "youtubeId": "_C2vqI9FVwg"
    },
    {
      "song": "(Sittin' On) The Dock of the Bay",
      "artist": "Otis Redding",
      "album": "The Dock of the Bay",
      "releaseDate": "1968",
      "genres": ["Soul", "Southern Soul", "Rhythm and Blues"],
      "description": "오티스 레딩 사후 발표되어 큰 성공을 거둔 곡으로, 기존의 격정적인 소울과 달리 성찰적이고 담담한 분위기가 인상적입니다.",
      "youtubeId": "rTVjnBo96Ug"
    },
    {
      "song": "Born to Be Wild",
      "artist": "Steppenwolf",
      "album": "Steppenwolf",
      "releaseDate": "1968",
      "genres": ["Hard Rock", "Psychedelic Rock", "Proto-metal"],
      "description": "거친 기타 사운드와 자유로운 질주감을 담은 곡으로, 이후 영화 'Easy Rider'와 함께 미국 로드 무비·바이커 문화의 상징이 되었습니다.",
      "youtubeId": "igvP806798U"
    }
  ],
  "1969": [
    {
      "song": "Everyday People",
      "artist": "Sly and the Family Stone",
      "album": "Stand!",
      "releaseDate": "1969",
      "genres": ["Funk", "Soul", "Psychedelic Soul"],
      "description": "인종과 개성을 넘어선 공존의 메시지를 담은 곡으로, 펑크와 소울, 록을 결합한 슬라이 앤 더 패밀리 스톤의 대표작입니다.",
      "youtubeId": "3JvkaUvB-ec"
    },
    {
      "song": "Fortunate Son",
      "artist": "Creedence Clearwater Revival",
      "album": "Willy and the Poor Boys",
      "releaseDate": "1969",
      "genres": ["Roots Rock", "Swamp Rock", "Protest Rock"],
      "description": "베트남전 시기의 계급 불평등과 징병 문제를 날카롭게 비판한 곡으로, 미국 록 역사에서 가장 강력한 반전가요 중 하나입니다.",
      "youtubeId": "ZWijx_AgPiA"
    },
    {
      "song": "I Want You Back",
      "artist": "The Jackson 5",
      "album": "Diana Ross Presents The Jackson 5",
      "releaseDate": "1969.10.07",
      "genres": ["Motown", "Soul Pop", "Bubblegum Pop"],
      "description": "잭슨 5의 모타운 데뷔 싱글로, 어린 마이클 잭슨의 폭발적인 보컬과 경쾌한 편곡이 결합된 1960년대 말 팝 소울의 대표곡입니다.",
      "youtubeId": "UvynvnxZJ3Q"
    }
  ],
  "1970": [
    {
      "song": "Bridge Over Troubled Water",
      "artist": "Simon & Garfunkel",
      "album": "Bridge Over Troubled Water",
      "releaseDate": "1970.01.26",
      "genres": ["Folk Rock", "Soft Rock", "Pop"],
      "description": "사이먼 앤 가펑클의 마지막 정규 앨범을 대표하는 곡으로, 1970년대 초 미국 팝 발라드의 정점이자 세대를 넘어 사랑받는 명곡입니다.",
      "youtubeId": "4G-YQA_bsOU"
    },
    {
      "song": "War",
      "artist": "Edwin Starr",
      "album": "War & Peace",
      "releaseDate": "1970",
      "genres": ["Soul", "Funk", "Protest Song"],
      "description": "베트남전 반전 정서를 직설적으로 담은 곡으로, 강렬한 후렴과 소울·펑크 사운드가 결합된 1970년대 대표 저항가요입니다.",
      "youtubeId": "dQHUAJTZqF0"
    },
    {
      "song": "I'll Be There",
      "artist": "The Jackson 5",
      "album": "Third Album",
      "releaseDate": "1970.09.08",
      "genres": ["Soul", "Motown", "Pop"],
      "description": "어린 마이클 잭슨의 감성적인 보컬이 돋보이는 곡으로, 잭슨 5가 모타운의 핵심 그룹으로 자리 잡는 데 결정적인 역할을 했습니다.",
      "youtubeId": "kBhSh7y_IkM"
    }
  ],
  "1971": [
    {
      "song": "What's Going On",
      "artist": "Marvin Gaye",
      "album": "What's Going On",
      "releaseDate": "1971.05.21",
      "genres": ["Soul", "R&B", "Social Soul"],
      "description": "전쟁, 빈곤, 환경, 인종 문제를 하나의 앨범 서사로 묶어낸 마빈 게이의 대표작으로, 소울 음악의 예술적 가능성을 크게 확장했습니다.",
      "youtubeId": "o5TmORitlKk"
    },
    {
      "song": "American Pie",
      "artist": "Don McLean",
      "album": "American Pie",
      "releaseDate": "1971.10.24",
      "genres": ["Folk Rock", "Singer-Songwriter"],
      "description": "1950~60년대 미국 록 음악의 상실과 변화를 은유적으로 노래한 대곡으로, 미국 싱어송라이터 음악의 대표적인 고전입니다.",
      "youtubeId": "PRpiBpDy7MQ"
    },
    {
      "song": "Ain't No Sunshine",
      "artist": "Bill Withers",
      "album": "Just As I Am",
      "releaseDate": "1971.05",
      "genres": ["Soul", "R&B", "Singer-Songwriter"],
      "description": "짧고 절제된 구성 안에 깊은 그리움과 공허함을 담아낸 곡으로, 빌 위더스의 따뜻하면서도 쓸쓸한 보컬을 대표합니다.",
      "youtubeId": "YuKfiH0Scao"
    }
  ],
  "1972": [
    {
      "song": "Superstition",
      "artist": "Stevie Wonder",
      "album": "Talking Book",
      "releaseDate": "1972.10.28",
      "genres": ["Funk", "Soul", "R&B"],
      "description": "클라비넷 리프와 탄탄한 그루브가 인상적인 곡으로, 스티비 원더의 1970년대 창작 전성기를 상징하는 대표작입니다.",
      "youtubeId": "ftdZ363R9kQ"
    },
    {
      "song": "Lean on Me",
      "artist": "Bill Withers",
      "album": "Still Bill",
      "releaseDate": "1972.05",
      "genres": ["Soul", "Gospel", "Pop"],
      "description": "서로 기대고 살아가는 공동체적 메시지를 담은 곡으로, 단순한 멜로디와 진심 어린 가사 덕분에 미국 대중음악의 표준곡처럼 자리 잡았습니다.",
      "youtubeId": "fOZ-MySzAac"
    },
    {
      "song": "Papa Was a Rollin' Stone",
      "artist": "The Temptations",
      "album": "All Directions",
      "releaseDate": "1972.07.27",
      "genres": ["Psychedelic Soul", "Funk", "Motown"],
      "description": "긴 인트로와 어두운 편곡, 사회적 서사가 결합된 곡으로, 모타운 사운드가 보다 실험적이고 성숙한 방향으로 확장된 사례입니다.",
      "youtubeId": "71l85z2bXAs"
    }
  ],
  "1973": [
    {
      "song": "Let's Get It On",
      "artist": "Marvin Gaye",
      "album": "Let's Get It On",
      "releaseDate": "1973.08.28",
      "genres": ["Soul", "R&B", "Quiet Storm"],
      "description": "마빈 게이의 관능적이고 부드러운 보컬이 돋보이는 곡으로, 1970년대 소울 음악의 낭만적이고 성숙한 흐름을 대표합니다.",
      "youtubeId": "AqPBfbLoF_M"
    },
    {
      "song": "Killing Me Softly with His Song",
      "artist": "Roberta Flack",
      "album": "Killing Me Softly",
      "releaseDate": "1973.08.01",
      "genres": ["Soul", "Pop", "Vocal"],
      "description": "섬세한 보컬과 우아한 편곡으로 큰 사랑을 받은 곡으로, 로버타 플랙을 1970년대 최고의 여성 보컬리스트 중 한 명으로 각인시켰습니다.",
      "youtubeId": "DEbi_YjpA-Y"
    },
    {
      "song": "Free Bird",
      "artist": "Lynyrd Skynyrd",
      "album": "(Pronounced 'Lĕh-'nérd 'Skin-'nérd)",
      "releaseDate": "1973.08.13",
      "genres": ["Southern Rock", "Hard Rock"],
      "description": "후반부의 긴 기타 솔로로 유명한 서던 록의 대표곡으로, 미국 록 밴드 음악에서 자유와 질주의 이미지를 상징합니다.",
      "youtubeId": "0LwcvjNJTuM"
    }
  ],
  "1974": [
    {
      "song": "Sweet Home Alabama",
      "artist": "Lynyrd Skynyrd",
      "album": "Second Helping",
      "releaseDate": "1974.04.15",
      "genres": ["Southern Rock", "Country Rock"],
      "description": "서던 록의 정체성을 가장 대중적으로 각인시킨 곡으로, 강렬한 기타 리프와 지역적 자부심이 결합된 1970년대 미국 록의 상징입니다.",
      "youtubeId": "ye5BuYf8q4o"
    },
    {
      "song": "I Will Always Love You",
      "artist": "Dolly Parton",
      "album": "Jolene",
      "releaseDate": "1974.02.04",
      "genres": ["Country", "Ballad"],
      "description": "돌리 파튼이 직접 작곡한 컨트리 발라드로, 훗날 여러 세대의 리메이크를 통해 더욱 널리 알려진 미국 컨트리 음악의 대표곡입니다.",
      "youtubeId": "lKsQR72HY0s"
    },
    {
      "song": "Rock Your Baby",
      "artist": "George McCrae",
      "album": "Rock Your Baby",
      "releaseDate": "1974",
      "genres": ["Disco", "Soul", "R&B"],
      "description": "초기 디스코 사운드를 대중 차트 중심으로 끌어올린 곡으로, 1970년대 중반 디스코 붐의 중요한 출발점으로 평가됩니다.",
      "youtubeId": "6Q15-kql1YE"
    }
  ],
  "1975": [
    {
      "song": "Born to Run",
      "artist": "Bruce Springsteen",
      "album": "Born to Run",
      "releaseDate": "1975.08.25",
      "genres": ["Rock", "Heartland Rock"],
      "description": "미국 노동계급 청춘의 탈출 욕망과 낭만을 웅장한 록 사운드로 풀어낸 곡으로, 브루스 스프링스틴의 대표작입니다.",
      "youtubeId": "IxuThNgl3YA"
    },
    {
      "song": "That's the Way (I Like It)",
      "artist": "KC and the Sunshine Band",
      "album": "KC and the Sunshine Band",
      "releaseDate": "1975",
      "genres": ["Disco", "Funk", "Dance-pop"],
      "description": "반복적인 후렴과 댄서블한 리듬으로 디스코 시대의 대중적 쾌감을 보여준 곡이며, 1970년대 중반 댄스 음악을 대표합니다.",
      "youtubeId": "q3svW8PM_jc"
    },
    {
      "song": "Walk This Way",
      "artist": "Aerosmith",
      "album": "Toys in the Attic",
      "releaseDate": "1975.04.08",
      "genres": ["Hard Rock", "Blues Rock"],
      "description": "강렬한 기타 리프와 리듬감 있는 보컬이 돋보이는 에어로스미스의 대표곡으로, 후대 록과 힙합의 접점에도 큰 영향을 남겼습니다.",
      "youtubeId": "4c8O2n1Gfto"
    }
  ],
  "1976": [
    {
      "song": "Hotel California",
      "artist": "Eagles",
      "album": "Hotel California",
      "releaseDate": "1976.12.08",
      "genres": ["Rock", "Soft Rock", "Country Rock"],
      "description": "미국 서부의 환상과 공허함을 상징적으로 담아낸 곡으로, 이글스의 정교한 보컬 하모니와 기타 솔로가 돋보이는 1970년대 록의 대표작입니다.",
      "youtubeId": "BciS5krYL80"
    },
    {
      "song": "Play That Funky Music",
      "artist": "Wild Cherry",
      "album": "Wild Cherry",
      "releaseDate": "1976.04",
      "genres": ["Funk Rock", "Disco", "Rock"],
      "description": "펑크와 록, 디스코의 에너지를 결합한 곡으로, 1970년대 중반 미국 클럽 문화와 라디오 히트의 접점을 보여줍니다.",
      "youtubeId": "JTvlujbJ5vg"
    },
    {
      "song": "Blitzkrieg Bop",
      "artist": "Ramones",
      "album": "Ramones",
      "releaseDate": "1976.04.23",
      "genres": ["Punk Rock", "Garage Rock"],
      "description": "짧고 단순하며 폭발적인 구조로 뉴욕 펑크의 출발을 알린 곡으로, 이후 펑크 록 문법의 기본형처럼 자리 잡았습니다.",
      "youtubeId": "skdE0KAFCEA"
    }
  ],
  "1977": [
    {
      "song": "I Feel Love",
      "artist": "Donna Summer",
      "album": "I Remember Yesterday",
      "releaseDate": "1977.05.13",
      "genres": ["Disco", "Electronic", "Hi-NRG"],
      "description": "조르조 모로더의 전자음악 프로덕션과 도나 서머의 보컬이 결합된 곡으로, 훗날 하우스·테크노·일렉트로닉 댄스 음악에 큰 영향을 주었습니다.",
      "youtubeId": "bHfrdQ8h2Pw"
    },
    {
      "song": "Best of My Love",
      "artist": "The Emotions",
      "album": "Rejoice",
      "releaseDate": "1977.06.10",
      "genres": ["Soul", "Disco", "R&B"],
      "description": "밝고 세련된 소울·디스코 사운드와 여성 보컬 하모니가 돋보이는 곡으로, 1977년 미국 팝과 R&B의 대중적 흐름을 보여줍니다.",
      "youtubeId": "r3Rd33DvJ7w"
    },
    {
      "song": "Psycho Killer",
      "artist": "Talking Heads",
      "album": "Talking Heads: 77",
      "releaseDate": "1977.09.16",
      "genres": ["New Wave", "Art Punk", "Post-punk"],
      "description": "뉴욕 언더그라운드의 긴장감과 미니멀한 리듬을 담은 곡으로, 토킹 헤즈가 뉴 웨이브와 아트 펑크의 대표 밴드로 떠오르는 계기가 되었습니다.",
      "youtubeId": "CKti7QixnJI"
    }
  ],
  "1978": [
    {
      "song": "Le Freak",
      "artist": "Chic",
      "album": "C'est Chic",
      "releaseDate": "1978.08.11",
      "genres": ["Disco", "Funk", "Dance"],
      "description": "나일 로저스와 버나드 에드워즈의 세련된 리듬 기타와 베이스가 돋보이는 곡으로, 디스코 시대의 가장 상징적인 히트곡 중 하나입니다.",
      "youtubeId": "aXgSHL7efKg"
    },
    {
      "song": "September",
      "artist": "Earth, Wind & Fire",
      "album": "The Best of Earth, Wind & Fire, Vol. 1",
      "releaseDate": "1978.11.18",
      "genres": ["Funk", "Soul", "Disco"],
      "description": "화려한 브라스, 경쾌한 리듬, 긍정적인 에너지가 결합된 곡으로, 세대를 넘어 사랑받는 펑크·소울 팝의 대표곡입니다.",
      "youtubeId": "Gs069dndIYk"
    },
    {
      "song": "One Nation Under a Groove",
      "artist": "Funkadelic",
      "album": "One Nation Under a Groove",
      "releaseDate": "1978.09.22",
      "genres": ["Funk", "P-Funk", "Psychedelic Soul"],
      "description": "조지 클린턴의 P-Funk 세계관을 대표하는 곡으로, 자유와 해방의 메시지를 강렬한 그루브 위에 담아낸 펑크 음악의 핵심 작품입니다.",
      "youtubeId": "3WOZwwRH6XU"
    }
  ],
  "1979": [
    {
      "song": "Good Times",
      "artist": "Chic",
      "album": "Risqué",
      "releaseDate": "1979.07.30",
      "genres": ["Disco", "Funk", "Dance"],
      "description": "베이스 라인이 훗날 힙합과 댄스 음악에 큰 영향을 준 곡으로, 디스코의 세련된 그루브가 정점에 이른 작품입니다.",
      "youtubeId": "Er9xGRolrT4"
    },
    {
      "song": "Rapper's Delight",
      "artist": "The Sugarhill Gang",
      "album": "Rapper's Delight (Single)",
      "releaseDate": "1979.09.16",
      "genres": ["Hip Hop", "Disco Rap"],
      "description": "힙합을 전국적인 대중 차트에 올려놓은 초기 랩 음반으로, 1970년대 말 미국 대중음악이 새로운 시대로 넘어가는 신호탄이 되었습니다.",
      "youtubeId": "mcCK99wHrk0"
    },
    {
      "song": "Don't Stop 'Til You Get Enough",
      "artist": "Michael Jackson",
      "album": "Off the Wall",
      "releaseDate": "1979.08.10",
      "genres": ["Disco", "Funk", "Pop"],
      "description": "마이클 잭슨의 성인 솔로 커리어를 본격적으로 연 곡으로, 디스코와 펑크, 팝을 결합한 세련된 사운드가 1980년대 팝의 방향을 예고했습니다.",
      "youtubeId": "yURRmWtbTbo"
    }
  ],
    "1991": [
      {
        song: "Smells Like Teen Spirit",
        artist: "Nirvana",
        album: "Nevermind",
        releaseDate: "1991.09.10",
        genres: ["Grunge", "Alternative Rock"],
        description: "90년대 얼터너티브 록의 상징과도 같은 곡으로 대중음악의 판도를 바꿨습니다.",
        youtubeId: "hTWKbfoikeg"
      },
      {
        song: "Under the Bridge",
        artist: "Red Hot Chili Peppers",
        album: "Blood Sugar Sex Magik",
        releaseDate: "1991.09.24",
        genres: ["Alternative Rock", "Funk Rock"],
        description: "RHCP의 대표곡으로, 개인적인 고독과 LA에 대한 애정을 담은 감성적인 록 발라드입니다."
      },
      {
        song: "November Rain",
        artist: "Guns N' Roses",
        album: "Use Your Illusion I",
        releaseDate: "1991.08.28",
        genres: ["Hard Rock", "Power Ballad"],
        description: "9분에 달하는 거대한 스케일의 록 발라드. 슬래시의 기타 솔로는 역사상 최고로 꼽힙니다."
      }
    ],
    "2003": [
      {
        song: "Crazy in Love",
        artist: "Beyoncé ft. Jay-Z",
        album: "Dangerously in Love",
        releaseDate: "2003.05.18",
        genres: ["R&B", "Pop", "Hip-hop"],
        description: "비욘세의 솔로 데뷔를 알린 기념비적인 곡. 중독성 강한 호른 리프와 강렬한 퍼포먼스가 특징입니다."
      },
      {
        song: "In Da Club",
        artist: "50 Cent",
        album: "Get Rich or Die Tryin'",
        releaseDate: "2003.01.07",
        genres: ["Hip-hop", "Gangsta Rap"],
        description: "2003년 힙합 씬을 평정한 50 Cent의 데뷔 싱글. Dr. Dre와 Eminem이 프로듀싱에 참여했습니다."
      }
    ]
  },
  "United Kingdom": {
    "1967": [
      {
        song: "A Whiter Shade of Pale",
        artist: "Procol Harum",
        album: "Single",
        releaseDate: "1967.05.12",
        genres: ["Psychedelic Rock", "Baroque Pop"],
        description: "바흐의 선율을 차용한 몽환적인 명곡. 영국 역사상 가장 많이 방송된 곡 중 하나입니다."
      },
      {
        song: "Waterloo Sunset",
        artist: "The Kinks",
        album: "Something Else",
        releaseDate: "1967.05.05",
        genres: ["Rock", "British Invasion"],
        description: "레이 데이비스가 런던 템스강 풍경을 담아낸 시적인 곡으로 영국 팝의 정수로 꼽힙니다."
      }
    ],
    "1975": [
      {
        song: "Bohemian Rhapsody",
        artist: "Queen",
        album: "A Night at the Opera",
        releaseDate: "1975.10.31",
        genres: ["Progressive Rock", "Hard Rock", "Opera"],
        description: "록 역사상 가장 야심찬 곡. 오페라·발라드·헤비메탈을 하나로 엮은 6분짜리 걸작입니다."
      },
      {
        song: "Space Oddity",
        artist: "David Bowie",
        album: "Space Oddity",
        releaseDate: "1975 (재발매)",
        genres: ["Art Rock", "Glam Rock"],
        description: "Major Tom이라는 우주비행사를 통해 소외와 자유를 노래한 보위의 대표곡입니다."
      }
    ]
  },
  "Japan": {
      "1950": [
    {
      "song": "東京キッド",
      "artist": "美空ひばり",
      "album": "東京キッド (Single)",
      "releaseDate": "1950",
      "genres": ["Kayokyoku", "Movie Song"],
      "description": "영화 '東京キッド'와 함께 히트한 곡으로, 전후 일본 대중문화에서 아역 스타 미소라 히바리의 국민적 인기를 확고히 한 대표곡입니다.",
      "youtubeId": "QWWNhl58QeI"
    },
    {
      "song": "水色のワルツ",
      "artist": "二葉あき子",
      "album": "水色のワルツ (Single)",
      "releaseDate": "1950.02",
      "genres": ["Kayokyoku", "Waltz", "Traditional Pop"],
      "description": "전후 일본 가요의 서정적인 분위기를 대표하는 왈츠풍 곡으로, 후타바 아키코의 대표곡 중 하나입니다.",
      "youtubeId": "fUFOkYLQISM"
    },
    {
      "song": "買物ブギー",
      "artist": "笠置シヅ子",
      "album": "買物ブギー (Single)",
      "releaseDate": "1950.06.15",
      "genres": ["Boogie-Woogie", "Kayokyoku", "Comedy Song"],
      "description": "핫토리 료이치가 만든 전후 부기 열풍의 대표곡으로, 빠른 말맛과 생활감 있는 가사가 강한 인상을 남긴 곡입니다.",
      "youtubeId": "Q_tHACJ12kw"
    }
  ],
  "1951": [
    {
      "song": "上海帰りのリル",
      "artist": "津村謙",
      "album": "上海帰りのリル (Single)",
      "releaseDate": "1951.07",
      "genres": ["Kayokyoku", "Tango", "Exotica"],
      "description": "이국적인 상하이 이미지를 담은 곡으로, 전후 일본의 향수와 도시적 감성을 함께 보여주는 대표적인 히트곡입니다.",
      "youtubeId": "OVhONPFGdYU"
    },
    {
      "song": "あざみの歌",
      "artist": "伊藤久男",
      "album": "あざみの歌 (Single)",
      "releaseDate": "1951.08",
      "genres": ["Kayokyoku", "Art Song", "Traditional Pop"],
      "description": "라디오 가요에서 출발해 널리 사랑받은 곡으로, 산과 들의 정서를 서정적으로 노래한 1950년대 초반의 명곡입니다.",
      "youtubeId": "Zs59Tp0W5pc"
    },
    {
      "song": "東京シューシャイン・ボーイ",
      "artist": "暁テル子",
      "album": "東京シューシャイン・ボーイ (Single)",
      "releaseDate": "1951",
      "genres": ["Kayokyoku", "Swing", "Novelty"],
      "description": "전후 도쿄 거리의 풍경을 경쾌하게 담은 곡으로, 밝은 리듬과 생활감 있는 가사가 당시 도시 문화를 보여줍니다.",
      "youtubeId": "pr_cV-fB4_o"
    }
  ],
  "1952": [
    {
      "song": "リンゴ追分",
      "artist": "美空ひばり",
      "album": "リンゴ追分 (Single)",
      "releaseDate": "1952",
      "genres": ["Kayokyoku", "Minyo-inspired Pop"],
      "description": "미소라 히바리의 대표곡 중 하나로, 민요적 선율과 극적인 대사가 결합되어 전후 일본 가요의 상징적인 작품이 되었습니다.",
      "youtubeId": "QPES4p568nQ"
    },
    {
      "song": "お祭りマンボ",
      "artist": "美空ひばり",
      "album": "お祭りマンボ (Single)",
      "releaseDate": "1952.08.15",
      "genres": ["Kayokyoku", "Mambo", "Festival Song"],
      "description": "만보 리듬과 에도 축제의 분위기를 결합한 곡으로, 미소라 히바리의 다재다능한 가창과 대중성을 보여주는 대표작입니다.",
      "youtubeId": "ctsAMXvD5Dg"
    },
    {
      "song": "ゲイシャ・ワルツ",
      "artist": "神楽坂はん子",
      "album": "ゲイシャ・ワルツ (Single)",
      "releaseDate": "1952.09",
      "genres": ["Kayokyoku", "Waltz", "Traditional Pop"],
      "description": "서양식 왈츠 리듬과 일본적인 소재를 결합한 곡으로, 1950년대 초 일본 가요의 화양절충적 분위기를 잘 보여줍니다.",
      "youtubeId": "TYbD1RoNFGU"
    }
  ],
  "1953": [
    {
      "song": "君の名は",
      "artist": "織井茂子",
      "album": "君の名は (Single)",
      "releaseDate": "1953",
      "genres": ["Kayokyoku", "Movie Song", "Traditional Pop"],
      "description": "라디오 드라마와 영화 '君の名は'의 인기에 힘입어 대히트한 곡으로, 전후 일본 대중문화의 멜로드라마 감성을 대표합니다.",
      "youtubeId": "lztGueAxL-s"
    },
    {
      "song": "街のサンドイッチマン",
      "artist": "鶴田浩二",
      "album": "街のサンドイッチマン (Single)",
      "releaseDate": "1953.05",
      "genres": ["Kayokyoku", "Movie Star Pop"],
      "description": "배우 겸 가수 쓰루타 고지가 부른 곡으로, 거리의 샌드위치맨을 통해 전후 도시 서민의 애환을 그린 히트곡입니다.",
      "youtubeId": "4R_lSmpSjEY"
    },
    {
      "song": "雪の降る町を",
      "artist": "高英男",
      "album": "雪の降る町を (Single)",
      "releaseDate": "1953.10",
      "genres": ["Kayokyoku", "Art Song", "Ballad"],
      "description": "겨울 풍경과 고독한 정서를 결합한 서정적인 곡으로, 이후 합창과 가창 레퍼토리로도 오래 사랑받았습니다.",
      "youtubeId": "0hbFpKaL0aA"
    }
  ],
  "1954": [
    {
      "song": "お富さん",
      "artist": "春日八郎",
      "album": "お富さん (Single)",
      "releaseDate": "1954",
      "genres": ["Kayokyoku", "Enka", "Traditional Pop"],
      "description": "가부키 이야기에서 모티프를 가져온 곡으로, 하루카 하치로의 대표곡이자 1950년대 중반 일본 가요의 큰 히트곡입니다.",
      "youtubeId": "4YMxUQ15JY8"
    },
    {
      "song": "高原列車は行く",
      "artist": "岡本敦郎",
      "album": "高原列車は行く (Single)",
      "releaseDate": "1954",
      "genres": ["Kayokyoku", "Travel Song", "Traditional Pop"],
      "description": "밝고 상쾌한 여행 이미지를 담은 곡으로, 전후 복구기의 희망적인 정서를 상징하는 가요로 널리 불렸습니다.",
      "youtubeId": "7dOsJ6legT4"
    },
    {
      "song": "岸壁の母",
      "artist": "菊池章子",
      "album": "岸壁の母 (Single)",
      "releaseDate": "1954.09",
      "genres": ["Kayokyoku", "Enka", "Narrative Song"],
      "description": "전쟁과 이별의 상처를 어머니의 기다림으로 표현한 곡으로, 전후 일본 사회의 슬픔을 상징하는 대표적인 노래입니다.",
      "youtubeId": "fqVj-6NvYq0"
    }
  ],
  "1955": [
    {
      "song": "この世の花",
      "artist": "島倉千代子",
      "album": "この世の花 (Single)",
      "releaseDate": "1955",
      "genres": ["Kayokyoku", "Movie Song", "Traditional Pop"],
      "description": "시마쿠라 치요코의 데뷔 히트곡으로, 영화 주제가와 함께 큰 사랑을 받으며 그녀를 대표 가수로 만든 작품입니다.",
      "youtubeId": "n6lFIwszET0"
    },
    {
      "song": "月がとっても青いから",
      "artist": "菅原都々子",
      "album": "月がとっても青いから (Single)",
      "releaseDate": "1955.04",
      "genres": ["Kayokyoku", "Traditional Pop"],
      "description": "푸른 달밤의 정취를 담은 서정적인 곡으로, 1955년 일본 가요의 낭만적인 분위기를 대표합니다.",
      "youtubeId": "14GcmHsUtLE"
    },
    {
      "song": "赤と黒のブルース",
      "artist": "鶴田浩二",
      "album": "赤と黒のブルース (Single)",
      "releaseDate": "1955.09",
      "genres": ["Kayokyoku", "Blues", "Movie Star Pop"],
      "description": "쓰루타 고지의 남성적인 이미지와 블루스풍 가요가 결합된 곡으로, 1950년대 중반 무드 가요의 흐름을 보여줍니다.",
      "youtubeId": "XeTul11JJco"
    }
  ],
  "1956": [
    {
      "song": "哀愁列車",
      "artist": "三橋美智也",
      "album": "哀愁列車 (Single)",
      "releaseDate": "1956.06",
      "genres": ["Kayokyoku", "Enka", "Traditional Pop"],
      "description": "미하시 미치야의 대표곡 중 하나로, 기차와 이별의 정서를 결합해 1950년대 일본 대중가요의 애수를 잘 보여줍니다.",
      "youtubeId": "EB_sSvj81qg"
    },
    {
      "song": "リンゴ村から",
      "artist": "三橋美智也",
      "album": "リンゴ村から (Single)",
      "releaseDate": "1956",
      "genres": ["Kayokyoku", "Enka", "Folk-inspired Pop"],
      "description": "고향과 농촌의 이미지를 담은 곡으로, 도시화가 진행되던 시기 일본인들의 향수를 자극한 히트곡입니다.",
      "youtubeId": "OklkbAQj_TQ"
    },
    {
      "song": "ここに幸あり",
      "artist": "大津美子",
      "album": "ここに幸あり (Single)",
      "releaseDate": "1956",
      "genres": ["Kayokyoku", "Ballad", "Movie Song"],
      "description": "동명 영화 주제가로 알려진 곡으로, 결혼식과 축복의 노래로도 오래 사랑받은 1950년대 대표 가요입니다.",
      "youtubeId": "hLj_fqNy1wk"
    }
  ],
  "1957": [
    {
      "song": "有楽町で逢いましょう",
      "artist": "フランク永井",
      "album": "有楽町で逢いましょう (Single)",
      "releaseDate": "1957",
      "genres": ["Mood Kayokyoku", "Traditional Pop", "Jazz Pop"],
      "description": "프랭크 나가이의 낮은 목소리와 도시적인 분위기가 돋보이는 곡으로, 유라쿠초라는 장소를 대중문화의 상징으로 만든 히트곡입니다.",
      "youtubeId": "EPYPLZcqlmw"
    },
    {
      "song": "東京だョおっ母さん",
      "artist": "島倉千代子",
      "album": "東京だョおっ母さん (Single)",
      "releaseDate": "1957",
      "genres": ["Kayokyoku", "Enka", "Traditional Pop"],
      "description": "상경과 가족, 전후의 그리움을 함께 담은 곡으로, 시마쿠라 치요코의 애절한 창법이 대중의 공감을 얻었습니다.",
      "youtubeId": "MG7SrqMznk0"
    },
    {
      "song": "チャンチキおけさ",
      "artist": "三波春夫",
      "album": "チャンチキおけさ (Single)",
      "releaseDate": "1957.06.15",
      "genres": ["Enka", "Kayokyoku", "Minyo-inspired Pop"],
      "description": "미나미 하루오의 데뷔 히트곡으로, 민요적 리듬과 유랑의 정서가 결합된 1950년대 후반 엔카의 대표곡입니다.",
      "youtubeId": "F7s35YgHJsI"
    }
  ],
  "1958": [
    {
      "song": "嵐を呼ぶ男",
      "artist": "石原裕次郎",
      "album": "嵐を呼ぶ男 / 鷲と鷹",
      "releaseDate": "1958",
      "genres": ["Kayokyoku", "Rock and Roll", "Movie Song"],
      "description": "영화 '嵐を呼ぶ男'의 주제가로, 이시하라 유지로의 스타 이미지를 강하게 만든 1950년대 후반의 대표 영화 가요입니다.",
      "youtubeId": "zCYeNT8xpeY"
    },
    {
      "song": "からたち日記",
      "artist": "島倉千代子",
      "album": "からたち日記 (Single)",
      "releaseDate": "1958",
      "genres": ["Kayokyoku", "Enka", "Narrative Song"],
      "description": "대사와 노래가 결합된 서사적인 구성으로 큰 사랑을 받은 곡이며, 시마쿠라 치요코의 대표곡 중 하나입니다.",
      "youtubeId": "u7t5gflwuGw"
    },
    {
      "song": "おーい中村君",
      "artist": "若原一郎",
      "album": "おーい中村君 (Single)",
      "releaseDate": "1958",
      "genres": ["Kayokyoku", "Novelty", "Traditional Pop"],
      "description": "친구를 부르는 듯한 유머러스한 가사와 친근한 멜로디로 인기를 얻은 곡으로, 1950년대 후반 대중가요의 밝은 면을 보여줍니다.",
      "youtubeId": "zr332F7gwnc"
    }
  ],
  "1959": [
    {
      "song": "黒い花びら",
      "artist": "水原弘",
      "album": "黒い花びら (Single)",
      "releaseDate": "1959.07",
      "genres": ["Kayokyoku", "Mood Kayokyoku", "Jazz Pop"],
      "description": "제1회 일본 레코드대상 수상곡으로, 나카무라 하치다이와 에이 로쿠스케 콤비의 세련된 감각을 알린 곡입니다.",
      "youtubeId": "XoI5obv69Oc"
    },
    {
      "song": "南国土佐を後にして",
      "artist": "ペギー葉山",
      "album": "南国土佐を後にして (Single)",
      "releaseDate": "1959",
      "genres": ["Kayokyoku", "Folk-inspired Pop", "Traditional Pop"],
      "description": "고치 지역의 향토성과 전후 가요의 서정성을 결합한 곡으로, 페기 하야마의 대표곡 중 하나입니다.",
      "youtubeId": "sMrd02ncmOY"
    },
    {
      "song": "古城",
      "artist": "三橋美智也",
      "album": "古城 (Single)",
      "releaseDate": "1959.06.21",
      "genres": ["Kayokyoku", "Enka", "Traditional Pop"],
      "description": "무너진 성터의 이미지를 통해 쓸쓸한 정서를 노래한 곡으로, 미하시 미치야의 깊은 가창이 돋보이는 대표적인 히트곡입니다.",
      "youtubeId": "5a5h-91e3eY"
    }
  ],
    "1960": [
    {
      "song": "アカシアの雨がやむとき",
      "artist": "西田佐知子",
      "album": "アカシアの雨がやむとき / 夜霧のテレビ塔",
      "releaseDate": "1960.04",
      "genres": ["Kayokyoku", "Mood Kayokyoku"],
      "description": "서늘하고 허무한 정서를 담은 니시다 사치코의 대표곡으로, 1960년대 초 쇼와 가요의 어두운 도시적 분위기를 상징하는 곡입니다.",
      "youtubeId": "eech-Nvi4ew"
    },
    {
      "song": "潮来笠",
      "artist": "橋幸夫",
      "album": "潮来笠",
      "releaseDate": "1960.07.05",
      "genres": ["Kayokyoku", "Matatabi", "Enka"],
      "description": "하시 유키오의 데뷔곡으로, 젊은 청춘 스타의 이미지와 전통적인 떠돌이 무사풍 노래가 결합된 1960년대 초반 대표 히트곡입니다.",
      "youtubeId": "XXwR4ZAS0iY"
    },
    {
      "song": "月の法善寺横町",
      "artist": "藤島桓夫",
      "album": "月の法善寺横町",
      "releaseDate": "1960",
      "genres": ["Kayokyoku", "Enka", "Narrative Song"],
      "description": "오사카 법선사 골목을 배경으로 한 대사 섞인 가요로, 지역적 정서와 서민적 애환이 강하게 담긴 1960년 대표곡입니다.",
      "youtubeId": "_dzLNtfgHpo"
    }
  ],
  "1961": [
    {
      "song": "上を向いて歩こう",
      "artist": "坂本九",
      "album": "上を向いて歩こう",
      "releaseDate": "1961.10.15",
      "genres": ["Kayokyoku", "Pop", "Traditional Pop"],
      "description": "해외에서는 'Sukiyaki'라는 제목으로 알려진 곡으로, 일본 대중음악이 세계적으로 주목받은 가장 상징적인 작품 중 하나입니다.",
      "youtubeId": "XMogb6A1ODY"
    },
    {
      "song": "銀座の恋の物語",
      "artist": "石原裕次郎・牧村旬子",
      "album": "銀座の恋の物語",
      "releaseDate": "1961.01",
      "genres": ["Kayokyoku", "Duet", "Movie Song"],
      "description": "긴자라는 도시 공간과 남녀 듀엣의 낭만을 결합한 곡으로, 이후 일본 가요계의 대표적인 듀엣곡으로 자리 잡았습니다.",
      "youtubeId": "p6auNvPStUg"
    },
    {
      "song": "スーダラ節",
      "artist": "植木等",
      "album": "スーダラ節",
      "releaseDate": "1961.08.20",
      "genres": ["Kayokyoku", "Comedy Song", "Novelty"],
      "description": "크레이지 캣츠와 우에키 히토시의 코미디 감각이 담긴 곡으로, 고도성장기 일본 샐러리맨 문화를 풍자적으로 보여줍니다.",
      "youtubeId": "FmpbNFv32gA"
    }
  ],
  "1962": [
    {
      "song": "いつでも夢を",
      "artist": "橋幸夫・吉永小百合",
      "album": "いつでも夢を",
      "releaseDate": "1962.09.20",
      "genres": ["Kayokyoku", "Youth Song", "Duet"],
      "description": "하시 유키오와 요시나가 사유리의 듀엣곡으로, 밝고 희망적인 청춘가요의 대표작이며 제4회 일본 레코드대상 수상곡입니다.",
      "youtubeId": "xIyNoYq152w"
    },
    {
      "song": "遠くへ行きたい",
      "artist": "ジェリー藤尾",
      "album": "遠くへ行きたい",
      "releaseDate": "1962.06",
      "genres": ["Kayokyoku", "Travel Song", "Pop"],
      "description": "영원한 여행의 정서를 담은 곡으로, 이후 동명의 여행 프로그램과 함께 일본인의 향수와 이동의 감각을 상징하게 되었습니다.",
      "youtubeId": "-iuPIJYQtmw"
    },
    {
      "song": "可愛いベイビー",
      "artist": "中尾ミエ",
      "album": "可愛いベイビー",
      "releaseDate": "1962.04.25",
      "genres": ["Kayokyoku", "Cover Pop", "Teen Pop"],
      "description": "미국 팝송을 일본어로 번안한 커버 팝의 대표곡으로, 1960년대 초 일본 대중음악의 서구 팝 수용 양상을 보여줍니다.",
      "youtubeId": "ofg0dgvxfdg"
    }
  ],
  "1963": [
    {
      "song": "高校三年生",
      "artist": "舟木一夫",
      "album": "高校三年生",
      "releaseDate": "1963.06.05",
      "genres": ["Kayokyoku", "Youth Song"],
      "description": "후나키 카즈오의 데뷔곡으로, 학생복을 입은 청춘 스타 이미지를 확립하며 1960년대 청춘가요의 상징이 되었습니다.",
      "youtubeId": "lABYAST27Ww"
    },
    {
      "song": "見上げてごらん夜の星を",
      "artist": "坂本九",
      "album": "見上げてごらん夜の星を",
      "releaseDate": "1963.05.01",
      "genres": ["Kayokyoku", "Ballad", "Musical Song"],
      "description": "동명 뮤지컬의 주제가에서 출발한 곡으로, 소박한 위로와 희망의 메시지로 일본의 스탠더드 가요가 되었습니다.",
      "youtubeId": "OEEcsmTq08s"
    },
    {
      "song": "恋のバカンス",
      "artist": "ザ・ピーナッツ",
      "album": "恋のバカンス / チャオ",
      "releaseDate": "1963.03.20",
      "genres": ["Kayokyoku", "Pop", "Vocal Duo"],
      "description": "쌍둥이 듀오 더 피너츠의 대표곡으로, 세련된 화음과 서구 팝 감각이 1960년대 일본 가요의 모던함을 보여줍니다.",
      "youtubeId": "mXmoFVuoaVM"
    }
  ],
  "1964": [
    {
      "song": "アンコ椿は恋の花",
      "artist": "都はるみ",
      "album": "アンコ椿は恋の花",
      "releaseDate": "1964.10.05",
      "genres": ["Enka", "Kayokyoku"],
      "description": "미야코 하루미의 초기 대표곡으로, 독특한 꺾기 창법과 강한 지역색을 통해 젊은 엔카 스타의 등장을 알렸습니다.",
      "youtubeId": "4D-sD0h_-Xg"
    },
    {
      "song": "学生時代",
      "artist": "ペギー葉山",
      "album": "学生時代",
      "releaseDate": "1964",
      "genres": ["Kayokyoku", "Traditional Pop", "School Song"],
      "description": "학창 시절의 추억을 우아하고 서정적으로 노래한 곡으로, 세대를 넘어 오래 불린 1960년대 일본 가요의 고전입니다.",
      "youtubeId": "1lpTfuaCwOs"
    },
    {
      "song": "ウナ・セラ・ディ東京",
      "artist": "ザ・ピーナッツ",
      "album": "ウナ・セラ・ディ東京",
      "releaseDate": "1964.09.10",
      "genres": ["Kayokyoku", "Bossa Nova", "Mood Pop"],
      "description": "이탈리아어 제목과 보사노바풍 분위기가 인상적인 곡으로, 도쿄의 밤을 세련된 도시 가요로 표현한 작품입니다.",
      "youtubeId": "xpF2xh4v730"
    }
  ],
  "1965": [
    {
      "song": "さよならはダンスの後に",
      "artist": "倍賞千恵子",
      "album": "さよならはダンスの後に",
      "releaseDate": "1965.03.10",
      "genres": ["Kayokyoku", "Waltz", "Traditional Pop"],
      "description": "배우 겸 가수 바이쇼 치에코의 대표곡으로, 우아한 왈츠풍 편곡과 애틋한 이별 정서가 돋보입니다.",
      "youtubeId": "_DeA5vi3vpY"
    },
    {
      "song": "愛して愛して愛しちゃったのよ",
      "artist": "和田弘とマヒナスターズ・田代美代子",
      "album": "愛して愛して愛しちゃったのよ",
      "releaseDate": "1965.06.20",
      "genres": ["Mood Kayokyoku", "Duet", "Latin Pop"],
      "description": "무드 코러스와 여성 보컬이 결합된 대중적인 듀엣곡으로, 1960년대 중반 일본 무드가요의 인기를 보여줍니다.",
      "youtubeId": "wXc_ptJFVAo"
    },
    {
      "song": "君といつまでも",
      "artist": "加山雄三",
      "album": "君といつまでも / 夜空の星",
      "releaseDate": "1965.12.05",
      "genres": ["Kayokyoku", "Pop", "Movie Song"],
      "description": "가야마 유조의 대표곡으로, 영화 'エレキの若大将'과 함께 젊고 세련된 남성 스타 이미지를 확립한 곡입니다.",
      "youtubeId": "bBhe_flTjU0"
    }
  ],
  "1966": [
    {
      "song": "星影のワルツ",
      "artist": "千昌夫",
      "album": "星影のワルツ / 君ひとり",
      "releaseDate": "1966.03.24",
      "genres": ["Enka", "Kayokyoku", "Waltz"],
      "description": "센 마사오의 대표곡으로, 느린 왈츠 리듬과 이별의 정서가 결합되어 이후 장기적인 스테디셀러가 된 엔카 명곡입니다.",
      "youtubeId": "oBJNUmRB6G0"
    },
    {
      "song": "バラが咲いた",
      "artist": "マイク真木",
      "album": "バラが咲いた",
      "releaseDate": "1966.04.05",
      "genres": ["Folk", "Kayokyoku", "Acoustic Pop"],
      "description": "일본 포크송 붐의 초기 대표곡으로, 단순한 멜로디와 따뜻한 가사가 대중적으로 널리 사랑받았습니다.",
      "youtubeId": "mWJLTjhAiLw"
    },
    {
      "song": "想い出の渚",
      "artist": "ザ・ワイルドワンズ",
      "album": "想い出の渚",
      "releaseDate": "1966.11.05",
      "genres": ["Group Sounds", "Surf Rock", "Kayokyoku"],
      "description": "더 와일드 원스의 데뷔 싱글로, 일본 그룹사운드와 서프 록 감각을 대중적으로 알린 대표곡입니다.",
      "youtubeId": "MRlKvOiXgjo"
    }
  ],
  "1967": [
    {
      "song": "ブルー・シャトウ",
      "artist": "ジャッキー吉川とブルー・コメッツ",
      "album": "ブルー・シャトウ",
      "releaseDate": "1967.03.15",
      "genres": ["Group Sounds", "Kayokyoku", "Pop Rock"],
      "description": "일본 그룹사운드 붐을 대표하는 곡으로, 세련된 코러스와 밴드 사운드가 결합되어 제9회 일본 레코드대상을 수상했습니다.",
      "youtubeId": "52YWxKiVr1o"
    },
    {
      "song": "世界は二人のために",
      "artist": "佐良直美",
      "album": "世界は二人のために",
      "releaseDate": "1967.05.15",
      "genres": ["Kayokyoku", "Pop", "Wedding Song"],
      "description": "사라 나오미의 데뷔곡으로, 밝고 낭만적인 분위기 덕분에 결혼식 노래로도 널리 사랑받았습니다.",
      "youtubeId": "vbXegst46SM"
    },
    {
      "song": "真赤な太陽",
      "artist": "美空ひばり・ジャッキー吉川とブルー・コメッツ",
      "album": "真赤な太陽",
      "releaseDate": "1967.05.29",
      "genres": ["Kayokyoku", "Group Sounds", "Pop Rock"],
      "description": "미소라 히바리와 블루 코메츠가 함께한 곡으로, 전통적인 가요 스타와 그룹사운드가 만난 1960년대 후반의 상징적인 작품입니다.",
      "youtubeId": "cbFKdgDONWI"
    }
  ],
  "1968": [
    {
      "song": "伊勢佐木町ブルース",
      "artist": "青江三奈",
      "album": "伊勢佐木町ブルース",
      "releaseDate": "1968.01.05",
      "genres": ["Mood Kayokyoku", "Blues", "Enka"],
      "description": "요코하마 이세자키초의 밤거리 이미지를 담은 곡으로, 아오에 미나의 허스키한 보컬과 블루스풍 분위기가 강한 인상을 남겼습니다.",
      "youtubeId": "ig2U4xXKBiI"
    },
    {
      "song": "天使の誘惑",
      "artist": "黛ジュン",
      "album": "天使の誘惑",
      "releaseDate": "1968.05.01",
      "genres": ["Kayokyoku", "Pop", "Group Sounds-influenced"],
      "description": "마유즈미 준의 대표곡으로, 강렬한 비트와 세련된 팝 감각을 통해 1968년 일본 레코드대상을 수상한 히트곡입니다.",
      "youtubeId": "D_4XZGVJ4Fg"
    },
    {
      "song": "恋の季節",
      "artist": "ピンキーとキラーズ",
      "album": "恋の季節",
      "releaseDate": "1968.07.20",
      "genres": ["Kayokyoku", "Pop Rock", "Bossa Nova"],
      "description": "피ン키와 킬러스의 데뷔곡으로, 모자와 정장을 활용한 시각적 이미지와 중독성 있는 후렴으로 폭발적인 인기를 얻었습니다.",
      "youtubeId": "Z4FLbUqR1h0"
    }
  ],
  "1969": [
    {
      "song": "白いブランコ",
      "artist": "ビリー・バンバン",
      "album": "白いブランコ",
      "releaseDate": "1969.01.15",
      "genres": ["Folk", "Acoustic Pop", "Kayokyoku"],
      "description": "비리 반반의 데뷔곡으로, 맑은 화음과 어쿠스틱 편곡을 통해 1960년대 말 일본 포크의 서정성을 보여줍니다.",
      "youtubeId": "yvTsyneRLSs"
    },
    {
      "song": "長崎は今日も雨だった",
      "artist": "内山田洋とクール・ファイブ",
      "album": "長崎は今日も雨だった",
      "releaseDate": "1969.02.01",
      "genres": ["Mood Kayokyoku", "Enka", "Chorus"],
      "description": "우치야마다 히로시와 쿨 파이브의 메이저 데뷔곡으로, 나가사키의 비와 이별 정서를 결합한 무드가요의 대표작입니다.",
      "youtubeId": "fS9RI86UWx0"
    },
    {
      "song": "夜明けのスキャット",
      "artist": "由紀さおり",
      "album": "夜明けのスキャット",
      "releaseDate": "1969.03.10",
      "genres": ["Kayokyoku", "Scat", "Traditional Pop"],
      "description": "가사보다 스캣 보컬을 전면에 내세운 독특한 곡으로, 유키 사오리의 맑고 절제된 음색을 통해 1969년 큰 인기를 얻었습니다.",
      "youtubeId": "HIckhugIOxI"
    }
  ],
    "1970": [
    {
      "song": "圭子の夢は夜ひらく",
      "artist": "藤圭子",
      "album": "圭子の夢は夜ひらく",
      "releaseDate": "1970.04.25",
      "genres": ["Enka", "Kayokyoku"],
      "description": "藤圭子의 대표곡 중 하나로, 어둡고 절망적인 정서와 낮은 음색이 결합되어 1970년대 초 일본 엔카와 가요곡의 분위기를 강하게 각인시킨 곡입니다.",
      "youtubeId": "oSJhlPyVqMY"
    },
    {
      "song": "知床旅情",
      "artist": "加藤登紀子",
      "album": "知床旅情",
      "releaseDate": "1970",
      "genres": ["Kayokyoku", "Folk", "Travel Song"],
      "description": "홋카이도 시레토코의 풍경과 이별의 정서를 담은 곡으로, 加藤登紀子의 대표곡이자 1970년대 일본 서정 가요의 상징적인 작품입니다.",
      "youtubeId": "T40Tx2WS6Ag"
    },
    {
      "song": "手紙",
      "artist": "由紀さおり",
      "album": "手紙",
      "releaseDate": "1970",
      "genres": ["Kayokyoku", "Ballad", "Traditional Pop"],
      "description": "由紀さおり의 맑고 절제된 보컬이 돋보이는 곡으로, 이별의 감정을 세련된 현악 편곡과 함께 담아낸 1970년대 초반 대표 가요입니다.",
      "youtubeId": "yZJu0R6Gcmk"
    }
  ],
  "1971": [
    {
      "song": "花嫁",
      "artist": "はしだのりひことクライマックス",
      "album": "花嫁",
      "releaseDate": "1971.01.10",
      "genres": ["Folk", "Kayokyoku"],
      "description": "일본 포크 붐을 대표하는 곡 중 하나로, 결혼과 떠남의 정서를 담담하게 노래하며 1970년대 초 청년 세대의 감성을 보여줍니다.",
      "youtubeId": "cV_3TtDrSsM"
    },
    {
      "song": "また逢う日まで",
      "artist": "尾崎紀世彦",
      "album": "また逢う日まで",
      "releaseDate": "1971.03.05",
      "genres": ["Kayokyoku", "Soul Pop", "Traditional Pop"],
      "description": "尾崎紀世彦의 폭발적인 가창력이 돋보이는 곡으로, 1971년 일본 레코드대상을 수상하며 쇼와 가요의 대표곡으로 자리 잡았습니다.",
      "youtubeId": "_z7Sd72FmPA"
    },
    {
      "song": "わたしの城下町",
      "artist": "小柳ルミ子",
      "album": "わたしの城下町",
      "releaseDate": "1971.04.25",
      "genres": ["Kayokyoku", "Traditional Pop"],
      "description": "小柳ルミ子의 데뷔곡으로, 전통적인 일본 정서와 청순한 아이돌 이미지를 결합해 1970년대 초반 여성 가요의 흐름을 대표했습니다.",
      "youtubeId": "6mWDhdDpKFs"
    }
  ],
  "1972": [
    {
      "song": "瀬戸の花嫁",
      "artist": "小柳ルミ子",
      "album": "瀬戸の花嫁",
      "releaseDate": "1972.04.10",
      "genres": ["Kayokyoku", "Traditional Pop", "Wedding Song"],
      "description": "세토 내해의 풍경과 결혼 서사를 결합한 곡으로, 밝고 서정적인 멜로디를 통해 小柳ルミ子의 대표곡으로 자리 잡았습니다.",
      "youtubeId": "fQanLHrERcw"
    },
    {
      "song": "女のみち",
      "artist": "宮史郎とぴんからトリオ",
      "album": "女のみち",
      "releaseDate": "1972.05.10",
      "genres": ["Enka", "Kayokyoku"],
      "description": "일본 싱글 판매사에서 손꼽히는 초대형 히트곡으로, 직설적인 한과 애절함을 앞세운 1970년대 엔카의 대중성을 보여줍니다.",
      "youtubeId": "M5PRcRyecWE"
    },
    {
      "song": "喝采",
      "artist": "ちあきなおみ",
      "album": "喝采",
      "releaseDate": "1972.09.10",
      "genres": ["Kayokyoku", "Ballad"],
      "description": "무대에 선 가수의 내면과 상실을 극적으로 그린 곡으로, ちあきなおみ의 표현력과 1970년대 일본 가요의 드라마성을 대표합니다.",
      "youtubeId": "Fe_4lT-zA2c"
    }
  ],
  "1973": [
    {
      "song": "心の旅",
      "artist": "チューリップ",
      "album": "心の旅",
      "releaseDate": "1973.04.20",
      "genres": ["Folk Rock", "New Music", "Pop Rock"],
      "description": "チューリップ을 전국적으로 알린 곡으로, 포크와 록, 팝 감각이 결합된 일본 뉴뮤직 흐름의 중요한 출발점 중 하나입니다.",
      "youtubeId": "y54-V-hfv8g"
    },
    {
      "song": "危険なふたり",
      "artist": "沢田研二",
      "album": "危険なふたり",
      "releaseDate": "1973.04.21",
      "genres": ["Kayokyoku", "Pop Rock", "Glam Pop"],
      "description": "沢田研二의 솔로 전성기를 알린 대표곡으로, 스타성과 세련된 팝 록 감각이 결합된 1970년대 남성 아이돌 가요의 상징입니다.",
      "youtubeId": "MYF7808wT8A"
    },
    {
      "song": "神田川",
      "artist": "南こうせつとかぐや姫",
      "album": "神田川",
      "releaseDate": "1973.09.20",
      "genres": ["Folk", "New Music"],
      "description": "가난한 동거 청춘의 생활감을 담은 포크 명곡으로, 1970년대 일본 청년문화와 포크 음악의 정서를 대표합니다.",
      "youtubeId": "wq3Lm-ZuhX4"
    }
  ],
  "1974": [
    {
      "song": "襟裳岬",
      "artist": "森進一",
      "album": "襟裳岬",
      "releaseDate": "1974.01.15",
      "genres": ["Enka", "Kayokyoku", "Folk-influenced Pop"],
      "description": "吉田拓郎가 작곡한 곡으로, 포크 감성과 엔카 보컬이 결합되어 장르의 경계를 넓힌 1974년 대표곡입니다.",
      "youtubeId": "eU0ktEMkdBc"
    },
    {
      "song": "精霊流し",
      "artist": "グレープ",
      "album": "精霊流し",
      "releaseDate": "1974.04.25",
      "genres": ["Folk", "New Music"],
      "description": "さだまさし가 속한 グレープ의 대표곡으로, 나가사키의 전통 행사와 개인적 상실의 정서를 결합한 서정적인 포크곡입니다.",
      "youtubeId": "C1yKwKK_X4k"
    },
    {
      "song": "ふれあい",
      "artist": "中村雅俊",
      "album": "ふれあい",
      "releaseDate": "1974.07.01",
      "genres": ["Kayokyoku", "Ballad", "TV Theme"],
      "description": "배우 中村雅俊의 데뷔 싱글로, 드라마와 함께 큰 인기를 얻으며 1970년대 청춘 드라마형 가요의 대표곡이 되었습니다.",
      "youtubeId": "L45VruT0ArE"
    }
  ],
  "1975": [
    {
      "song": "シクラメンのかほり",
      "artist": "布施明",
      "album": "シクラメンのかほり",
      "releaseDate": "1975.04.10",
      "genres": ["Kayokyoku", "Ballad"],
      "description": "小椋佳가 만든 곡을 布施明의 웅장한 보컬로 완성한 발라드로, 1975년 일본 레코드대상을 수상한 대표곡입니다.",
      "youtubeId": "yoaD6-tcORs"
    },
    {
      "song": "港のヨーコ・ヨコハマ・ヨコスカ",
      "artist": "ダウン・タウン・ブギウギ・バンド",
      "album": "港のヨーコ・ヨコハマ・ヨコスカ",
      "releaseDate": "1975.04.20",
      "genres": ["Rock", "Boogie Rock", "Kayokyoku"],
      "description": "말하듯 이어지는 가사와 부기 록 사운드가 인상적인 곡으로, 1970년대 일본 록과 대중가요의 결합을 보여줍니다.",
      "youtubeId": "Jepv9mymv_s"
    },
    {
      "song": "木綿のハンカチーフ",
      "artist": "太田裕美",
      "album": "木綿のハンカチーフ",
      "releaseDate": "1975.12.21",
      "genres": ["Kayokyoku", "New Music", "Pop"],
      "description": "松本隆의 이야기형 가사와 筒美京平의 멜로디가 결합된 곡으로, 도시와 지방, 남녀의 거리감을 편지 형식으로 풀어낸 명곡입니다.",
      "youtubeId": "TIwKI0qVJY0"
    }
  ],
  "1976": [
    {
      "song": "横須賀ストーリー",
      "artist": "山口百恵",
      "album": "横須賀ストーリー",
      "releaseDate": "1976.06.21",
      "genres": ["Kayokyoku", "Pop Rock", "Idol Pop"],
      "description": "山口百恵의 이미지를 성숙한 방향으로 전환시킨 곡으로, 阿木燿子와 宇崎竜童 콤비가 만든 1970년대 아이돌 가요의 대표작입니다.",
      "youtubeId": "--jtP8hCIv0"
    },
    {
      "song": "ペッパー警部",
      "artist": "ピンク・レディー",
      "album": "ペッパー警部",
      "releaseDate": "1976.08.25",
      "genres": ["Idol Pop", "Dance-pop", "Kayokyoku"],
      "description": "ピンク・レディー의 데뷔곡으로, 안무와 후렴, 캐릭터성을 결합해 일본 아이돌 퍼포먼스 문화의 새 흐름을 만든 곡입니다.",
      "youtubeId": "yJq8lzuTAw8"
    },
    {
      "song": "あばよ",
      "artist": "研ナオコ",
      "album": "あばよ",
      "releaseDate": "1976.09.25",
      "genres": ["Kayokyoku", "Ballad"],
      "description": "中島みゆき가 작사·작곡한 곡으로, 研ナオコ의 건조하고 개성적인 보컬을 통해 이별의 냉정한 감정을 강하게 전달합니다.",
      "youtubeId": "FSvMv-T44d8"
    }
  ],
  "1977": [
    {
      "song": "津軽海峡・冬景色",
      "artist": "石川さゆり",
      "album": "津軽海峡・冬景色",
      "releaseDate": "1977.01.01",
      "genres": ["Enka", "Kayokyoku"],
      "description": "青森과 홋카이도를 잇는 겨울의 이별 풍경을 노래한 곡으로, 石川さゆり를 대표하는 일본 엔카의 고전입니다.",
      "youtubeId": "Macobpb-ziA"
    },
    {
      "song": "勝手にしやがれ",
      "artist": "沢田研二",
      "album": "勝手にしやがれ",
      "releaseDate": "1977.05.21",
      "genres": ["Kayokyoku", "Pop Rock", "Glam Pop"],
      "description": "모자를 던지는 퍼포먼스로도 유명한 곡으로, 沢田研二의 스타성과 1970년대 후반 쇼와 팝의 화려함을 대표합니다.",
      "youtubeId": "aUlBJ4zU05c"
    },
    {
      "song": "秋桜",
      "artist": "山口百恵",
      "album": "秋桜",
      "releaseDate": "1977.10.01",
      "genres": ["Kayokyoku", "Ballad", "New Music"],
      "description": "さだまさし가 만든 곡으로, 결혼을 앞둔 딸과 어머니의 마음을 섬세하게 그려낸 山口百恵의 대표 발라드입니다.",
      "youtubeId": "k6Vnct6Qx1k"
    }
  ],
  "1978": [
    {
      "song": "勝手にシンドバッド",
      "artist": "サザンオールスターズ",
      "album": "勝手にシンドバッド",
      "releaseDate": "1978.06.25",
      "genres": ["Rock", "Pop Rock", "New Music"],
      "description": "サザンオールスターズ의 데뷔 싱글로, 빠른 말맛과 라틴풍 리듬, 록 밴드 에너지를 결합해 일본 대중음악에 신선한 충격을 준 곡입니다.",
      "youtubeId": "11XPLPc4ULE"
    },
    {
      "song": "ガンダーラ",
      "artist": "ゴダイゴ",
      "album": "ガンダーラ",
      "releaseDate": "1978.10.01",
      "genres": ["Pop Rock", "New Music", "TV Theme"],
      "description": "드라마 '西遊記'의 엔딩 테마로 널리 알려진 곡으로, 영어 가사와 세련된 밴드 사운드를 통해 ゴダイゴ의 국제적인 감각을 보여줍니다.",
      "youtubeId": "Bc2BPsJGRzM"
    },
    {
      "song": "いい日旅立ち",
      "artist": "山口百恵",
      "album": "いい日旅立ち",
      "releaseDate": "1978.11.21",
      "genres": ["Kayokyoku", "Ballad", "Travel Song"],
      "description": "谷村新司가 만든 곡으로, 국철 여행 캠페인과 함께 널리 알려지며 일본인의 여행과 향수의 이미지를 대표하는 노래가 되었습니다.",
      "youtubeId": "GxgLg_3kLlc"
    }
  ],
  "1979": [
    {
      "song": "魅せられて",
      "artist": "ジュディ・オング",
      "album": "魅せられて",
      "releaseDate": "1979.02.25",
      "genres": ["Kayokyoku", "Disco", "Pop"],
      "description": "하얀 날개 의상 퍼포먼스로 강한 인상을 남긴 곡으로, 1979년 일본 레코드대상을 수상한 쇼와 가요의 대표적인 비주얼 히트곡입니다.",
      "youtubeId": "qtXoQ5LwuFY"
    },
    {
      "song": "いとしのエリー",
      "artist": "サザンオールスターズ",
      "album": "いとしのエリー",
      "releaseDate": "1979.03.25",
      "genres": ["Pop Rock", "Ballad", "New Music"],
      "description": "サザンオールスターズ의 초기 대표 발라드로, 桑田佳祐의 보컬과 서정적인 멜로디가 밴드의 음악적 폭을 넓힌 곡입니다.",
      "youtubeId": "wU5lsq6JC-4"
    },
    {
      "song": "異邦人",
      "artist": "久保田早紀",
      "album": "異邦人 -シルクロードのテーマ-",
      "releaseDate": "1979.10.01",
      "genres": ["Kayokyoku", "New Music", "Exotica Pop"],
      "description": "실크로드를 연상시키는 이국적인 선율과 세련된 편곡이 돋보이는 곡으로, 久保田早紀의 데뷔와 동시에 큰 성공을 거둔 명곡입니다.",
      "youtubeId": "mi2utDBMp2Q"
    }
  ],
    "1980": [
    {
      "song": "RIDE ON TIME",
      "artist": "山下達郎",
      "album": "RIDE ON TIME",
      "releaseDate": "1980.05.01",
      "genres": ["City Pop", "Pop Rock", "New Music"],
      "description": "산뜻한 그루브와 세련된 코러스가 돋보이는 곡으로, 야마시타 타츠로를 1980년대 시티팝의 상징으로 만든 대표곡입니다.",
      "youtubeId": "rBXbJcWuRMU"
    },
    {
      "song": "青い珊瑚礁",
      "artist": "松田聖子",
      "album": "青い珊瑚礁",
      "releaseDate": "1980.07.01",
      "genres": ["Showa Idol", "Kayokyoku", "Pop"],
      "description": "마츠다 세이코의 초기 대표곡으로, 청량한 보컬과 밝은 여름 이미지가 1980년대 쇼와 아이돌의 전형을 만든 곡입니다.",
      "youtubeId": "DVOgvzl395w"
    },
    {
      "song": "不思議なピーチパイ",
      "artist": "竹内まりや",
      "album": "不思議なピーチパイ",
      "releaseDate": "1980.02.05",
      "genres": ["City Pop", "Kayokyoku", "Pop"],
      "description": "타케우치 마리야의 초기 히트곡으로, 상큼한 멜로디와 도시적인 팝 감각이 1980년대 초반 시티팝의 밝은 분위기를 보여줍니다.",
      "youtubeId": "sVsaB2P4xPs"
    }
  ],
  "1981": [
    {
      "song": "君は天然色",
      "artist": "大滝詠一",
      "album": "A LONG VACATION",
      "releaseDate": "1981.03.21",
      "genres": ["City Pop", "New Music", "Pop"],
      "description": "앨범 'A LONG VACATION'을 대표하는 곡으로, 화사한 사운드와 永井博식 리조트 이미지가 일본 시티팝의 미감을 상징합니다.",
      "youtubeId": "L-hyY-1luHs"
    },
    {
      "song": "ルビーの指環",
      "artist": "寺尾聰",
      "album": "ルビーの指環",
      "releaseDate": "1981.02.05",
      "genres": ["City Pop", "AOR", "New Music"],
      "description": "낮고 건조한 보컬과 세련된 편곡이 인상적인 곡으로, 1981년 일본 대중음악의 도시적이고 어른스러운 분위기를 대표합니다.",
      "youtubeId": "yuhh2l8m6_Y"
    },
    {
      "song": "夏の扉",
      "artist": "松田聖子",
      "album": "夏の扉",
      "releaseDate": "1981.04.21",
      "genres": ["Showa Idol", "Pop", "Kayokyoku"],
      "description": "밝고 질주감 있는 멜로디와 마츠다 세이코의 청량한 이미지가 결합된 곡으로, 쇼와 아이돌 팝의 정수를 보여줍니다.",
      "youtubeId": "pjxAHhCb6YE"
    }
  ],
  "1982": [
    {
      "song": "赤いスイートピー",
      "artist": "松田聖子",
      "album": "赤いスイートピー",
      "releaseDate": "1982.01.21",
      "genres": ["Showa Idol", "Pop", "Kayokyoku"],
      "description": "마츠다 세이코의 대표곡 중 하나로, 이전의 발랄한 이미지에서 한층 성숙한 아이돌 팝으로 넘어가는 전환점을 보여줍니다.",
      "youtubeId": "GKDwtvOTsDE"
    },
    {
      "song": "少女A",
      "artist": "中森明菜",
      "album": "少女A",
      "releaseDate": "1982.07.28",
      "genres": ["Showa Idol", "Kayokyoku", "Pop"],
      "description": "나카모리 아키나의 초기 이미지를 결정지은 곡으로, 반항적이고 어두운 분위기의 쇼와 아이돌 캐릭터를 강하게 각인시켰습니다.",
      "youtubeId": "xdqXV4ckV1k"
    },
    {
      "song": "赤道小町ドキッ",
      "artist": "山下久美子",
      "album": "抱きしめてオンリィ・ユー",
      "releaseDate": "1982.04.01",
      "genres": ["City Pop", "New Wave", "Kayokyoku"],
      "description": "細野晴臣 작곡의 곡으로, 뉴웨이브적 감각과 여름 광고 음악의 세련미가 결합된 1980년대 초반 도시형 팝입니다.",
      "youtubeId": "A-vsvt_EC7g"
    }
  ],
  "1983": [
    {
      "song": "CAT'S EYE",
      "artist": "杏里",
      "album": "CAT'S EYE",
      "releaseDate": "1983.08.05",
      "genres": ["City Pop", "Anime Song", "Dance-pop"],
      "description": "애니메이션 주제가이면서도 杏里의 세련된 보컬과 댄서블한 편곡이 돋보이는 곡으로, 시티팝과 대중 애니송의 접점을 보여줍니다.",
      "youtubeId": "S_U7N1gr7oI"
    },
    {
      "song": "悲しみがとまらない",
      "artist": "杏里",
      "album": "Timely!!",
      "releaseDate": "1983.11.05",
      "genres": ["City Pop", "Dance-pop", "New Music"],
      "description": "角松敏生와 林哲司의 감각이 담긴 곡으로, 세련된 리듬과 멜로디가 1980년대 일본 시티팝의 대표적인 질감을 보여줍니다.",
      "youtubeId": "Io57r9R0HcE"
    },
    {
      "song": "SWEET MEMORIES",
      "artist": "松田聖子",
      "album": "ガラスの林檎 / SWEET MEMORIES",
      "releaseDate": "1983.08.01",
      "genres": ["Showa Idol", "City Pop", "Ballad"],
      "description": "원래는 B면 성격이 강했지만 CM을 통해 크게 주목받은 곡으로, 마츠다 세이코의 성숙한 보컬과 시티팝적 세련미가 돋보입니다.",
      "youtubeId": "OQfK1oI7d9I"
    }
  ],
  "1984": [
    {
      "song": "PLASTIC LOVE",
      "artist": "竹内まりや",
      "album": "VARIETY",
      "releaseDate": "1984.04.25",
      "genres": ["City Pop", "Funk", "Dance-pop"],
      "description": "도시의 사랑과 공허함을 세련된 그루브로 표현한 곡으로, 훗날 전 세계적인 시티팝 재조명의 상징이 된 작품입니다.",
      "youtubeId": "T_lC2O1oIew"
    },
    {
      "song": "飾りじゃないのよ涙は",
      "artist": "中森明菜",
      "album": "飾りじゃないのよ涙は",
      "releaseDate": "1984.11.14",
      "genres": ["Showa Idol", "Kayokyoku", "Pop Rock"],
      "description": "井上陽水가 만든 곡을 나카모리 아키나의 강렬한 표현력으로 완성한 작품으로, 쇼와 아이돌의 드라마틱한 면을 대표합니다.",
      "youtubeId": "PHaKapbUbvs"
    },
    {
      "song": "モニカ",
      "artist": "吉川晃司",
      "album": "モニカ",
      "releaseDate": "1984.02.01",
      "genres": ["Pop Rock", "Kayokyoku", "Showa Pop"],
      "description": "기카와 코지의 데뷔곡으로, 영화 스타 이미지와 록적인 에너지가 결합된 1980년대 중반 쇼와 팝의 대표곡입니다.",
      "youtubeId": "L-q0ybsoKuQ"
    }
  ],
  "1985": [
    {
      "song": "ふたりの夏物語",
      "artist": "杉山清貴 & オメガトライブ",
      "album": "ふたりの夏物語 NEVER ENDING SUMMER",
      "releaseDate": "1985.03.06",
      "genres": ["City Pop", "AOR", "Summer Pop"],
      "description": "리조트, 드라이브, 여름의 이미지를 세련된 AOR 사운드로 풀어낸 곡으로, 1980년대 일본 시티팝의 대표적인 여름 노래입니다.",
      "youtubeId": "0JfVOEs9jcg"
    },
    {
      "song": "ミ・アモーレ",
      "artist": "中森明菜",
      "album": "ミ・アモーレ",
      "releaseDate": "1985.03.08",
      "genres": ["Showa Idol", "Latin Pop", "Kayokyoku"],
      "description": "라틴풍 리듬과 극적인 무대성이 결합된 곡으로, 나카모리 아키나가 쇼와 아이돌을 넘어 가창형 퍼포머로 평가받게 한 대표곡입니다.",
      "youtubeId": "vNrGfZ-1Ngc"
    },
    {
      "song": "なんてったってアイドル",
      "artist": "小泉今日子",
      "album": "なんてったってアイドル",
      "releaseDate": "1985.11.21",
      "genres": ["Showa Idol", "Pop", "Kayokyoku"],
      "description": "아이돌이라는 존재를 스스로 연기하고 풍자하는 듯한 곡으로, 小泉今日子의 영리하고 개성적인 쇼와 아이돌 이미지를 잘 보여줍니다.",
      "youtubeId": "-BI6ePeBS90"
    }
  ],
  "1986": [
    {
      "song": "君は1000%",
      "artist": "1986オメガトライブ",
      "album": "君は1000%",
      "releaseDate": "1986.05.01",
      "genres": ["City Pop", "AOR", "Summer Pop"],
      "description": "카를로스 토시키 보컬의 청량한 질감과 세련된 여름 사운드가 결합된 곡으로, 1980년대 중반 시티팝의 대표적인 히트곡입니다.",
      "youtubeId": "CYweetJWgoA"
    },
    {
      "song": "DESIRE -情熱-",
      "artist": "中森明菜",
      "album": "DESIRE -情熱-",
      "releaseDate": "1986.02.03",
      "genres": ["Showa Idol", "Dance-pop", "Kayokyoku"],
      "description": "강렬한 안무와 의상, 낮은 음역의 보컬이 결합된 곡으로, 나카모리 아키나의 카리스마를 대표하는 쇼와 아이돌 명곡입니다.",
      "youtubeId": "yQa3dUQgpdM"
    },
    {
      "song": "夜明けのMEW",
      "artist": "小泉今日子",
      "album": "夜明けのMEW",
      "releaseDate": "1986.07.10",
      "genres": ["Showa Idol", "Synth-pop", "Kayokyoku"],
      "description": "몽환적인 신스 사운드와 小泉今日子의 담백한 보컬이 어우러진 곡으로, 아이돌 팝 안에서도 세련된 도시 감각을 보여줍니다.",
      "youtubeId": "WZOgjuK-XYI"
    }
  ],
  "1987": [
    {
      "song": "駅",
      "artist": "竹内まりや",
      "album": "REQUEST",
      "releaseDate": "1987.11.28",
      "genres": ["City Pop", "Ballad", "New Music"],
      "description": "이별 후 마주친 옛사랑의 감정을 절제된 멜로디와 가사로 표현한 곡으로, 타케우치 마리야의 성숙한 도시형 발라드를 대표합니다.",
      "youtubeId": "sq1DT7zxI00"
    },
    {
      "song": "水の中のAnswer",
      "artist": "杉山清貴",
      "album": "水の中のAnswer",
      "releaseDate": "1987.05.27",
      "genres": ["City Pop", "AOR", "Pop"],
      "description": "오메가트라이브 이후 스기야마 키요타카의 솔로 감각을 보여주는 곡으로, 청량한 AOR 사운드와 도시적 분위기가 돋보입니다.",
      "youtubeId": "xO3QkOf-ii4"
    },
    {
      "song": "TANGO NOIR",
      "artist": "中森明菜",
      "album": "TANGO NOIR",
      "releaseDate": "1987.02.04",
      "genres": ["Showa Idol", "Kayokyoku", "Latin Pop"],
      "description": "탱고풍 리듬과 어두운 무대 이미지가 결합된 곡으로, 1980년대 후반 나카모리 아키나의 성숙하고 강렬한 스타일을 대표합니다.",
      "youtubeId": "PHaKapbUbvs"
    }
  ],
  "1988": [
    {
      "song": "愛が止まらない",
      "artist": "Wink",
      "album": "愛が止まらない 〜Turn it into love〜",
      "releaseDate": "1988.11.16",
      "genres": ["Showa Idol", "Eurobeat", "Dance-pop"],
      "description": "카일리 미노그의 곡을 일본식 아이돌 유로비트로 재해석한 곡으로, 무표정한 퍼포먼스와 안무가 Wink의 이미지를 확립했습니다.",
      "youtubeId": "wcvnmwrsJn8"
    },
    {
      "song": "MUGO・ん…色っぽい",
      "artist": "工藤静香",
      "album": "MUGO・ん…色っぽい",
      "releaseDate": "1988.08.24",
      "genres": ["Showa Idol", "Kayokyoku", "Pop"],
      "description": "공도 시즈카의 솔로 전성기를 대표하는 곡으로, 차갑고 성숙한 이미지가 1980년대 후반 아이돌상의 변화를 보여줍니다.",
      "youtubeId": "VT1GnjxcwZc"
    },
    {
      "song": "リフレインが叫んでる",
      "artist": "松任谷由実",
      "album": "Delight Slight Light KISS",
      "releaseDate": "1988.11.26",
      "genres": ["New Music", "City Pop", "Pop"],
      "description": "유밍 특유의 도시적 감성과 멜로드라마적 정서가 응축된 곡으로, 1980년대 후반 뉴뮤직과 시티팝 감성의 교차점을 보여줍니다.",
      "youtubeId": "-ZpQmBhxOT0"
    }
  ],
  "1989": [
    {
      "song": "淋しい熱帯魚",
      "artist": "Wink",
      "album": "淋しい熱帯魚",
      "releaseDate": "1989.07.05",
      "genres": ["Showa Idol", "Eurobeat", "Dance-pop"],
      "description": "Wink의 대표곡으로, 절제된 표정과 대칭적인 안무, 유로비트 사운드가 결합된 쇼와 말기 아이돌 팝의 상징적인 작품입니다.",
      "youtubeId": "iBDnRK9ACTY"
    },
    {
      "song": "シングル・アゲイン",
      "artist": "竹内まりや",
      "album": "シングル・アゲイン",
      "releaseDate": "1989.09.12",
      "genres": ["City Pop", "New Music", "Ballad"],
      "description": "타케우치 마리야의 성숙한 발라드 감성이 돋보이는 곡으로, 1980년대 말 도시 여성의 정서와 멜로드라마적 분위기를 잘 담았습니다.",
      "youtubeId": "Xb0qTwplpSk"
    },
    {
      "song": "嵐の素顔",
      "artist": "工藤静香",
      "album": "嵐の素顔",
      "releaseDate": "1989.05.03",
      "genres": ["Showa Idol", "Dance-pop", "Kayokyoku"],
      "description": "강렬한 손동작 안무와 성숙한 보컬 이미지로 큰 인기를 얻은 곡으로, 쇼와 말기 솔로 아이돌의 카리스마를 대표합니다.",
      "youtubeId": "piXHZagPu2M"
    }
  ],
    "1990": [
    {
      "song": "今すぐKiss Me",
      "artist": "LINDBERG",
      "album": "今すぐKiss Me",
      "releaseDate": "1990.02.07",
      "genres": ["J-Pop", "Pop Rock", "Band Sound"],
      "description": "LINDBERG를 국민적인 밴드로 끌어올린 대표곡으로, 밝고 직선적인 멜로디와 밴드 사운드가 1990년대 초 J-Pop 록의 분위기를 잘 보여줍니다.",
      "youtubeId": "WfTkaKqQbGA"
    },
    {
      "song": "浪漫飛行",
      "artist": "米米CLUB",
      "album": "浪漫飛行 / ジェットストリーム浪漫飛行",
      "releaseDate": "1990.04.08",
      "genres": ["J-Pop", "Funk", "Pop Rock"],
      "description": "원래 앨범 수록곡이었지만 1990년 싱글로 발매되며 크게 히트한 곡으로, 버블 말기의 밝고 세련된 일본 팝 감각을 대표합니다.",
      "youtubeId": "EX3TRj0_2Ys"
    },
    {
      "song": "おどるポンポコリン",
      "artist": "B.B.クィーンズ",
      "album": "おどるポンポコリン",
      "releaseDate": "1990.04.04",
      "genres": ["J-Pop", "Anime Song", "Novelty Pop"],
      "description": "애니메이션 'ちびまる子ちゃん'의 주제가로 폭발적인 인기를 얻은 곡으로, 1990년대 초 일본 대중가요와 애니송의 결합을 상징합니다.",
      "youtubeId": "UPuI8jcsoS4"
    }
  ],
  "1991": [
    {
      "song": "ラブ・ストーリーは突然に",
      "artist": "小田和正",
      "album": "Oh! Yeah! / ラブ・ストーリーは突然に",
      "releaseDate": "1991.02.06",
      "genres": ["J-Pop", "Drama Theme", "Adult Contemporary"],
      "description": "드라마 '東京ラブストーリー' 주제가로 큰 인기를 얻은 곡으로, 1990년대 일본 트렌디 드라마와 J-Pop의 관계를 대표합니다.",
      "youtubeId": "VwJruL9nBwQ"
    },
    {
      "song": "SAY YES",
      "artist": "CHAGE and ASKA",
      "album": "SAY YES",
      "releaseDate": "1991.07.24",
      "genres": ["J-Pop", "Ballad", "Drama Theme"],
      "description": "드라마 '101回目のプロポーズ' 주제가로 사용되며 거대한 히트를 기록한 곡으로, 1990년대 초 일본 발라드 붐을 상징합니다.",
      "youtubeId": "Q9qAyt0G-jM"
    },
    {
      "song": "どんなときも。",
      "artist": "槇原敬之",
      "album": "どんなときも。",
      "releaseDate": "1991.06.10",
      "genres": ["J-Pop", "Singer-Songwriter", "Pop"],
      "description": "槇原敬之의 대표곡으로, 밝은 멜로디와 긍정적인 메시지가 결합되어 1990년대 초 싱어송라이터형 J-Pop의 대중성을 보여줍니다.",
      "youtubeId": "b88pxLpMZKk"
    }
  ],
  "1992": [
    {
      "song": "君がいるだけで",
      "artist": "米米CLUB",
      "album": "君がいるだけで / 愛してる",
      "releaseDate": "1992.05.04",
      "genres": ["J-Pop", "Pop", "Drama Theme"],
      "description": "드라마 주제가로 큰 사랑을 받은 米米CLUB의 최대 히트곡으로, 1990년대 초 일본 CD 싱글 시장의 거대한 규모를 보여주는 곡입니다.",
      "youtubeId": "5Q8vU0GWGzM"
    },
    {
      "song": "涙のキッス",
      "artist": "サザンオールスターズ",
      "album": "涙のキッス",
      "releaseDate": "1992.07.18",
      "genres": ["J-Pop", "Pop Rock", "Ballad"],
      "description": "サザンオールスターズ의 1990년대 대표 발라드로, 桑田佳祐 특유의 멜로디와 여름의 정서가 결합된 히트곡입니다.",
      "youtubeId": "50zo1rk3hps"
    },
    {
      "song": "部屋とYシャツと私",
      "artist": "平松愛理",
      "album": "部屋とYシャツと私",
      "releaseDate": "1992.03.21",
      "genres": ["J-Pop", "Singer-Songwriter", "Ballad"],
      "description": "결혼과 일상의 감정을 유머러스하면서도 섬세하게 풀어낸 곡으로, 여성 싱어송라이터 J-Pop의 대표작 중 하나입니다.",
      "youtubeId": "efMGn6LtD9o"
    }
  ],
  "1993": [
    {
      "song": "負けないで",
      "artist": "ZARD",
      "album": "負けないで",
      "releaseDate": "1993.01.27",
      "genres": ["J-Pop", "Being Sound", "Pop Rock"],
      "description": "坂井泉水의 맑은 보컬과 응원 메시지가 결합된 곡으로, 1990년대 Being계 J-Pop을 대표하는 국민적 응원가입니다.",
      "youtubeId": "_4DJkOUU648"
    },
    {
      "song": "YAH YAH YAH",
      "artist": "CHAGE and ASKA",
      "album": "YAH YAH YAH / 夢の番人",
      "releaseDate": "1993.03.03",
      "genres": ["J-Pop", "Pop Rock", "Drama Theme"],
      "description": "강렬한 후렴과 드라마 타이업으로 큰 인기를 얻은 곡으로, CHAGE and ASKA의 1990년대 전성기를 대표합니다.",
      "youtubeId": "yfZIaTZJo0o"
    },
    {
      "song": "ロマンスの神様",
      "artist": "広瀬香美",
      "album": "ロマンスの神様",
      "releaseDate": "1993.12.01",
      "genres": ["J-Pop", "Winter Song", "Dance-pop"],
      "description": "겨울 스포츠 광고와 함께 대히트한 곡으로, 広瀬香美를 '겨울의 여왕'으로 만든 1990년대 대표 시즌송입니다.",
      "youtubeId": "AgfUewgwPOw"
    }
  ],
  "1994": [
    {
      "song": "innocent world",
      "artist": "Mr.Children",
      "album": "innocent world",
      "releaseDate": "1994.06.01",
      "genres": ["J-Pop", "Pop Rock", "Band Sound"],
      "description": "Mr.Children을 1990년대 대표 밴드로 끌어올린 곡으로, 세련된 멜로디와 밴드 사운드가 결합된 헤이세이 J-Pop의 상징적인 작품입니다.",
      "youtubeId": "TgFXJur5hko"
    },
    {
      "song": "恋しさと せつなさと 心強さと",
      "artist": "篠原涼子 with t.komuro",
      "album": "恋しさと せつなさと 心強さと",
      "releaseDate": "1994.07.21",
      "genres": ["J-Pop", "TK Sound", "Dance-pop"],
      "description": "小室哲哉 사운드가 본격적으로 대중음악 중심에 올라서는 흐름을 보여준 곡으로, 게임·영화 타이업과 함께 큰 히트를 기록했습니다.",
      "youtubeId": "QGYfX8z4goE"
    },
    {
      "song": "BOY MEETS GIRL",
      "artist": "TRF",
      "album": "BOY MEETS GIRL",
      "releaseDate": "1994.06.22",
      "genres": ["J-Pop", "Dance-pop", "TK Sound"],
      "description": "TRF의 대표곡 중 하나로, 1990년대 중반 일본 클럽 사운드와 대중적인 댄스 팝이 결합되는 흐름을 보여줍니다.",
      "youtubeId": "EgGnreyPmaQ"
    }
  ],
  "1995": [
    {
      "song": "LOVE LOVE LOVE",
      "artist": "DREAMS COME TRUE",
      "album": "LOVE LOVE LOVE / 嵐が来る",
      "releaseDate": "1995.07.24",
      "genres": ["J-Pop", "Ballad", "Soul Pop"],
      "description": "DREAMS COME TRUE의 대표 발라드로, 吉田美和의 보컬과 보편적인 사랑의 메시지가 결합되어 1990년대 중반을 대표하는 명곡이 되었습니다.",
      "youtubeId": "kEPznDgVv8w"
    },
    {
      "song": "Tomorrow never knows",
      "artist": "Mr.Children",
      "album": "Tomorrow never knows",
      "releaseDate": "1994.11.10",
      "genres": ["J-Pop", "Pop Rock", "Drama Theme"],
      "description": "1994년 말 발매 후 1995년에 걸쳐 폭발적인 인기를 얻은 곡으로, Mr.Children의 대중적 전성기를 대표하는 발라드 록입니다.",
      "youtubeId": "Nxwt_s1lM04"
    },
    {
      "song": "WOW WAR TONIGHT ～時には起こせよムーヴメント～",
      "artist": "H Jungle with t",
      "album": "WOW WAR TONIGHT ～時には起こせよムーヴメント～",
      "releaseDate": "1995.03.15",
      "genres": ["J-Pop", "TK Sound", "Dance-pop"],
      "description": "浜田雅功과 小室哲哉의 협업으로 탄생한 곡으로, 예능과 TK 사운드가 결합해 1990년대 중반 대중문화를 상징하는 히트곡이 되었습니다.",
      "youtubeId": "mQZ3U0kS6W8"
    }
  ],
  "1996": [
    {
      "song": "名もなき詩",
      "artist": "Mr.Children",
      "album": "名もなき詩",
      "releaseDate": "1996.02.05",
      "genres": ["J-Pop", "Pop Rock", "Drama Theme"],
      "description": "드라마 주제가로 사용되며 큰 히트를 기록한 곡으로, Mr.Children의 가사성과 대중성을 동시에 보여주는 1996년 대표곡입니다.",
      "youtubeId": "YpkYd3u0gJ0"
    },
    {
      "song": "DEPARTURES",
      "artist": "globe",
      "album": "DEPARTURES",
      "releaseDate": "1996.01.01",
      "genres": ["J-Pop", "TK Sound", "Dance-pop"],
      "description": "小室哲哉가 이끈 globe의 대표곡으로, 거대한 스케일의 신스 사운드와 겨울 발라드 감성이 결합된 TK 사운드의 정점입니다.",
      "youtubeId": "Z0f1SM1oUoU"
    },
    {
      "song": "チェリー",
      "artist": "スピッツ",
      "album": "チェリー",
      "releaseDate": "1996.04.10",
      "genres": ["J-Pop", "Guitar Pop", "Pop Rock"],
      "description": "スピッツ의 대표곡으로, 단순하지만 오래 남는 멜로디와 담백한 밴드 사운드가 세대를 넘어 사랑받는 곡입니다.",
      "youtubeId": "Eze6-eHmtJg"
    }
  ],
  "1997": [
    {
      "song": "CAN YOU CELEBRATE?",
      "artist": "安室奈美恵",
      "album": "CAN YOU CELEBRATE?",
      "releaseDate": "1997.02.19",
      "genres": ["J-Pop", "TK Sound", "Ballad"],
      "description": "安室奈美恵의 대표 발라드로, 결혼식 축가로도 널리 사랑받으며 1990년대 후반 일본 여성 솔로 스타의 상징이 되었습니다.",
      "youtubeId": "iDYsOLv4sB8"
    },
    {
      "song": "硝子の少年",
      "artist": "KinKi Kids",
      "album": "硝子の少年",
      "releaseDate": "1997.07.21",
      "genres": ["J-Pop", "Idol Pop", "Kayokyoku Revival"],
      "description": "KinKi Kids의 데뷔 싱글로, 1970년대 쇼와 가요적 멜로디와 1990년대 아이돌 팝을 결합한 곡입니다.",
      "youtubeId": "oLl2Q3OY8Q4"
    },
    {
      "song": "WHITE LOVE",
      "artist": "SPEED",
      "album": "WHITE LOVE",
      "releaseDate": "1997.10.15",
      "genres": ["J-Pop", "Dance-pop", "Idol Pop"],
      "description": "SPEED의 대표곡 중 하나로, 10대 걸그룹의 에너지와 겨울 발라드 감성이 결합된 1990년대 후반 아이돌 팝의 상징입니다.",
      "youtubeId": "6YJfRzK8r_4"
    }
  ],
  "1998": [
    {
      "song": "誘惑",
      "artist": "GLAY",
      "album": "誘惑",
      "releaseDate": "1998.04.29",
      "genres": ["J-Rock", "Pop Rock", "Visual Rock"],
      "description": "GLAY의 록 밴드로서의 폭발적인 대중성을 보여준 곡으로, 1998년 일본 CD 버블의 정점에서 가장 큰 존재감을 보인 록 히트곡입니다.",
      "youtubeId": "fGlDHwlq5SQ"
    },
    {
      "song": "夜空ノムコウ",
      "artist": "SMAP",
      "album": "夜空ノムコウ",
      "releaseDate": "1998.01.14",
      "genres": ["J-Pop", "Idol Pop", "Ballad"],
      "description": "SMAP의 대표곡 중 하나로, 아이돌 그룹이 세대 전체의 감성을 대변하는 국민적 팝 그룹으로 확장되는 흐름을 보여준 곡입니다.",
      "youtubeId": "uE7YB-wbN8Q"
    },
    {
      "song": "HONEY",
      "artist": "L'Arc〜en〜Ciel",
      "album": "HONEY",
      "releaseDate": "1998.07.08",
      "genres": ["J-Rock", "Alternative Rock", "Pop Rock"],
      "description": "L'Arc〜en〜Ciel의 대표곡으로, 1990년대 후반 일본 록 밴드가 대중 차트의 중심에 설 수 있음을 보여준 곡입니다.",
      "youtubeId": "WmM-KTcG3QY"
    }
  ],
  "1999": [
    {
      "song": "First Love",
      "artist": "宇多田ヒカル",
      "album": "First Love",
      "releaseDate": "1999.04.28",
      "genres": ["J-Pop", "R&B", "Ballad"],
      "description": "宇多田ヒカル의 데뷔 앨범 시대를 대표하는 발라드로, 1990년대 말 일본 대중음악이 R&B와 새로운 보컬 스타일로 전환되는 흐름을 상징합니다.",
      "youtubeId": "o1sUaVJUeB0"
    },
    {
      "song": "Winter, again",
      "artist": "GLAY",
      "album": "Winter, again",
      "releaseDate": "1999.02.03",
      "genres": ["J-Rock", "Pop Rock", "Winter Song"],
      "description": "GLAY의 겨울 대표곡으로, 장대한 밴드 사운드와 계절감 있는 멜로디를 통해 1999년 일본 록 발라드의 정점을 보여줍니다.",
      "youtubeId": "IzqLX_KVK0Q"
    },
    {
      "song": "Boys & Girls",
      "artist": "浜崎あゆみ",
      "album": "Boys & Girls",
      "releaseDate": "1999.07.14",
      "genres": ["J-Pop", "Dance-pop", "Avex Pop"],
      "description": "浜崎あゆみ를 1990년대 말~2000년대 초 일본 팝의 중심으로 끌어올린 곡으로, avex식 댄스 팝과 개인적 가사가 결합된 대표작입니다.",
      "youtubeId": "Sw_cTMqHQ1w"
    }
  ],
    "2000": [
    {
      "song": "TSUNAMI",
      "artist": "サザンオールスターズ",
      "album": "TSUNAMI",
      "releaseDate": "2000.01.26",
      "genres": ["J-Pop", "Ballad"],
      "description": "2000년 일본 음악 시장을 대표하는 발라드로, 사잔 올스타즈의 국민적 히트곡입니다.",
      "youtubeId": "9sEINMGorTE"
    },
    {
      "song": "SEASONS",
      "artist": "浜崎あゆみ",
      "album": "SEASONS",
      "releaseDate": "2000.06.07",
      "genres": ["J-Pop", "Ballad"],
      "description": "하마사키 아유미 전성기를 대표하는 곡으로, 감성적인 멜로디와 가사가 특징입니다.",
      "youtubeId": "XW0JH0yK2hA"
    },
    {
      "song": "STAY AWAY",
      "artist": "L'Arc〜en〜Ciel",
      "album": "REAL",
      "releaseDate": "2000.07.19",
      "genres": ["Rock", "J-Rock"],
      "description": "라르크 앙 시엘의 대표 록 트랙으로, 2000년대 초 일본 록의 방향성을 보여줍니다.",
      "youtubeId": "z4eSxPj1KxM"
    }
  ],

  "2001": [
    {
      "song": "Can You Keep A Secret?",
      "artist": "宇多田ヒカル",
      "album": "Distance",
      "releaseDate": "2001.02.16",
      "genres": ["J-Pop", "R&B"],
      "description": "우타다 히카루의 대표 히트곡으로, 세련된 R&B 기반 J-pop을 보여줍니다.",
      "youtubeId": "8H1D6q0G9wE"
    },
    {
      "song": "波乗りジョニー",
      "artist": "桑田佳祐",
      "album": "波乗りジョニー",
      "releaseDate": "2001.07.04",
      "genres": ["Pop Rock", "Summer Song"],
      "description": "여름을 대표하는 일본 팝록 곡으로, 쿠와타 케이스케 특유의 스타일이 살아있는 작품입니다.",
      "youtubeId": "n91JkE7J1xA"
    },
    {
      "song": "天体観測",
      "artist": "BUMP OF CHICKEN",
      "album": "jupiter",
      "releaseDate": "2001.03.14",
      "genres": ["J-Rock", "Alternative Rock"],
      "description": "밴드 붐을 이끈 대표곡으로, 일본 청춘 록의 상징적인 트랙입니다.",
      "youtubeId": "j7CDb610Bg0"
    }
  ],

  "2002": [
    {
      "song": "traveling",
      "artist": "宇多田ヒカル",
      "album": "DEEP RIVER",
      "releaseDate": "2001.11.28",
      "genres": ["J-Pop", "Electronic"],
      "description": "Y2K 감성의 전자 사운드와 팝 감각이 결합된 우타다 히카루의 대표곡입니다.",
      "youtubeId": "tuyZ9f6mHZk"
    },
    {
      "song": "大きな古時計",
      "artist": "平井堅",
      "album": "大きな古時計",
      "releaseDate": "2002.08.28",
      "genres": ["Ballad", "Traditional Pop"],
      "description": "전통 곡을 현대적으로 재해석해 대히트를 기록한 발라드입니다.",
      "youtubeId": "P5Z8NQm7ZzA"
    },
    {
      "song": "The Beginning",
      "artist": "ELLEGARDEN",
      "album": "DON'T TRUST ANYONE BUT US",
      "releaseDate": "2002",
      "genres": ["Punk Rock", "Alternative Rock"],
      "description": "엘르가든 초기 대표곡으로, 2000년대 일본 인디 록의 흐름을 보여줍니다.",
      "youtubeId": "7V8yQn5sY5g"
    }
  ],

  "2003": [
    {
      "song": "世界に一つだけの花",
      "artist": "SMAP",
      "album": "SMAP 015/Drink! Smap!",
      "releaseDate": "2003.03.05",
      "genres": ["J-Pop"],
      "description": "일본 대중음악 역사상 가장 널리 알려진 곡 중 하나로, 메시지성과 대중성을 동시에 갖춘 작품입니다.",
      "youtubeId": "YV5s6lG6C2k"
    },
    {
      "song": "さくら（独唱）",
      "artist": "森山直太朗",
      "album": "乾いた唄は魚の餌にちょうどいい",
      "releaseDate": "2003.03.05",
      "genres": ["Folk", "Ballad"],
      "description": "졸업 시즌을 대표하는 일본 발라드로 자리 잡은 곡입니다.",
      "youtubeId": "xQp1v2F8P5Q"
    },
    {
      "song": "リライト",
      "artist": "ASIAN KUNG-FU GENERATION",
      "album": "ソルファ",
      "releaseDate": "2004.08.04",
      "genres": ["Alternative Rock", "J-Rock"],
      "description": "아지칸의 대표곡으로, 애니메이션과 함께 세계적으로도 알려진 트랙입니다.",
      "youtubeId": "ZmeudwRMrsU"
    }
  ],

  "2004": [
    {
      "song": "瞳をとじて",
      "artist": "平井堅",
      "album": "瞳をとじて",
      "releaseDate": "2004.04.28",
      "genres": ["Ballad", "J-Pop"],
      "description": "영화 '세계의 중심에서 사랑을 외치다' 주제가로 큰 인기를 얻은 발라드입니다.",
      "youtubeId": "1Q8fG0TtVAY"
    },
    {
      "song": "Sign",
      "artist": "Mr.Children",
      "album": "Sign",
      "releaseDate": "2004.05.26",
      "genres": ["J-Pop", "Rock Ballad"],
      "description": "미스터 칠드런의 대표 히트곡으로, 일본 드라마 OST로도 유명합니다.",
      "youtubeId": "K9Tq6cK3Jf0"
    },
    {
      "song": "車輪の唄",
      "artist": "BUMP OF CHICKEN",
      "album": "ユグドラシル",
      "releaseDate": "2004.08.25",
      "genres": ["J-Rock"],
      "description": "밴드 특유의 서사적 가사와 감정선이 잘 드러나는 곡입니다.",
      "youtubeId": "9x0h9vH0tL0"
    }
  ],

  "2005": [
    {
      "song": "青春アミーゴ",
      "artist": "修二と彰",
      "album": "青春アミーゴ",
      "releaseDate": "2005.11.02",
      "genres": ["J-Pop", "Idol Pop"],
      "description": "드라마와 함께 큰 인기를 얻은 2000년대 대표 아이돌 곡입니다.",
      "youtubeId": "1P7zY6m7hT0"
    },
    {
      "song": "Story",
      "artist": "AI",
      "album": "Story",
      "releaseDate": "2005.05.18",
      "genres": ["R&B", "J-Pop"],
      "description": "응원과 희망의 메시지로 오랜 기간 사랑받은 곡입니다.",
      "youtubeId": "l6T5N4r9d7U"
    },
    {
      "song": "リンダリンダ",
      "artist": "THE BLUE HEARTS",
      "album": "THE BLUE HEARTS",
      "releaseDate": "1987",
      "genres": ["Punk Rock"],
      "description": "2000년대에도 꾸준히 사랑받으며 세대 간 록 클래식으로 자리 잡은 곡입니다.",
      "youtubeId": "6n1h6o3S2xg"
    }
  ],

  "2006": [
    {
      "song": "粉雪",
      "artist": "レミオロメン",
      "album": "HORIZON",
      "releaseDate": "2005.11.16",
      "genres": ["J-Rock", "Ballad"],
      "description": "겨울을 대표하는 일본 록 발라드로, 드라마 OST로도 유명합니다.",
      "youtubeId": "V2rW7zVx2kM"
    },
    {
      "song": "Real Face",
      "artist": "KAT-TUN",
      "album": "Real Face",
      "releaseDate": "2006.03.22",
      "genres": ["J-Pop", "Rock"],
      "description": "KAT-TUN의 데뷔곡으로, 2000년대 중반 남성 아이돌 시장을 대표합니다.",
      "youtubeId": "2dPq6k0lH4A"
    },
    {
      "song": "桜",
      "artist": "コブクロ",
      "album": "NAMELESS WORLD",
      "releaseDate": "2005.11.02",
      "genres": ["Folk", "Ballad"],
      "description": "졸업 시즌과 함께 일본에서 꾸준히 사랑받는 감성 발라드입니다.",
      "youtubeId": "kP3Z6r7x2J8"
    }
  ],

  "2007": [
    {
      "song": "Flavor Of Life",
      "artist": "宇多田ヒカル",
      "album": "HEART STATION",
      "releaseDate": "2007.02.28",
      "genres": ["J-Pop", "Ballad"],
      "description": "드라마 '꽃보다 남자' OST로 큰 사랑을 받은 곡입니다.",
      "youtubeId": "0R1g3pC6GvA"
    },
    {
      "song": "CHE.R.RY",
      "artist": "YUI",
      "album": "CAN'T BUY MY LOVE",
      "releaseDate": "2007.03.07",
      "genres": ["Pop Rock", "Acoustic"],
      "description": "YUI의 대표곡으로, 상큼한 기타 사운드가 특징입니다.",
      "youtubeId": "y9yY5vL4c7k"
    },
    {
      "song": "千の風になって",
      "artist": "秋川雅史",
      "album": "千の風になって",
      "releaseDate": "2006",
      "genres": ["Classical Crossover", "Ballad"],
      "description": "NHK 홍백가합전 이후 폭발적인 인기를 얻은 곡입니다.",
      "youtubeId": "9k1vW8h8mX0"
    }
  ],

  "2008": [
    {
      "song": "キセキ",
      "artist": "GReeeeN",
      "album": "あっ、ども。おひさしぶりです。",
      "releaseDate": "2008.05.28",
      "genres": ["J-Pop", "Pop Rock"],
      "description": "야구 드라마 OST로 히트하며 일본 대표 응원곡으로 자리 잡은 곡입니다.",
      "youtubeId": "8k0sUoZ7G7s"
    },
    {
      "song": "崖の上のポニョ",
      "artist": "藤岡藤巻と大橋のぞみ",
      "album": "崖の上のポニョ",
      "releaseDate": "2007.12.05",
      "genres": ["Anime Song", "Pop"],
      "description": "스튜디오 지브리 애니메이션 주제가로 큰 인기를 얻은 곡입니다.",
      "youtubeId": "CsR3KVgBzSM"
    },
    {
      "song": "風吹けば恋",
      "artist": "チャットモンチー",
      "album": "風吹けば恋",
      "releaseDate": "2008.06.25",
      "genres": ["Indie Rock", "J-Rock"],
      "description": "여성 록 밴드의 대표곡으로, 2000년대 일본 인디 록 신을 상징합니다.",
      "youtubeId": "h5M6v2V8d7M"
    }
  ],

  "2009": [
    {
      "song": "残酷な天使のテーゼ (2009再評価)",
      "artist": "高橋洋子",
      "album": "残酷な天使のテーゼ",
      "releaseDate": "1995",
      "genres": ["Anime Song", "J-Pop"],
      "description": "2000년대 후반에도 지속적으로 재조명되며 일본 대중문화의 대표곡으로 자리 잡았습니다.",
      "youtubeId": "o6wtDPVkKqI"
    },
    {
      "song": "Butterfly",
      "artist": "木村カエラ",
      "album": "HOCUS POCUS",
      "releaseDate": "2009.06.01",
      "genres": ["J-Pop", "Wedding Song"],
      "description": "결혼식 대표곡으로 자리 잡은 밝고 따뜻한 팝송입니다.",
      "youtubeId": "z6Qp3gN3J6Y"
    },
    {
      "song": "天体観測 (Re-evaluation era popularity)",
      "artist": "BUMP OF CHICKEN",
      "album": "jupiter",
      "releaseDate": "2001",
      "genres": ["J-Rock"],
      "description": "2000년대 후반까지 꾸준히 사랑받으며 일본 록의 대표곡으로 자리 잡은 작품입니다.",
      "youtubeId": "j7CDb610Bg0"
    }
  ],
    "2010": [
    {
      "song": "ヘビーローテーション",
      "artist": "AKB48",
      "album": "ヘビーローテーション",
      "releaseDate": "2010.08.18",
      "genres": ["J-Pop", "Idol Pop"],
      "description": "AKB48 전성기를 대표하는 곡으로, 2010년대 일본 아이돌 시장의 중심을 상징합니다.",
      "youtubeId": "lkHlnWFnA0c"
    },
    {
      "song": "君って",
      "artist": "西野カナ",
      "album": "君って",
      "releaseDate": "2010.11.03",
      "genres": ["J-Pop", "Ballad"],
      "description": "서정적인 멜로디와 가사로 2010년대 초반 여성 발라드 흐름을 대표하는 곡입니다.",
      "youtubeId": "vA5y1T1E3gY"
    },
    {
      "song": "できっこないを やらなくちゃ",
      "artist": "サンボマスター",
      "album": "きみのためにつよくなりたい",
      "releaseDate": "2010.02.24",
      "genres": ["Rock", "J-Rock"],
      "description": "열정적인 보컬과 메시지로 일본 록 밴드의 에너지를 잘 보여주는 곡입니다.",
      "youtubeId": "wXFLzODIdUI"
    }
  ],

  "2011": [
    {
      "song": "フライングゲット",
      "artist": "AKB48",
      "album": "フライングゲット",
      "releaseDate": "2011.08.24",
      "genres": ["J-Pop", "Idol Pop"],
      "description": "AKB48의 대표 히트곡 중 하나로, 당시 일본 음악 시장을 지배한 아이돌 사운드를 보여줍니다.",
      "youtubeId": "Wp7H0P1kH4k"
    },
    {
      "song": "GO!!!",
      "artist": "FLOW",
      "album": "GAME",
      "releaseDate": "2004",
      "genres": ["Rock", "J-Rock"],
      "description": "애니메이션과 함께 2010년대에도 지속적으로 사랑받은 일본 록 대표곡입니다.",
      "youtubeId": "AE4b9jO1uB4"
    },
    {
      "song": "カロン",
      "artist": "ねごと",
      "album": "Hello! “Z”",
      "releaseDate": "2011.07.13",
      "genres": ["Indie Rock", "Dream Pop"],
      "description": "몽환적인 사운드와 여성 밴드 감성을 보여주는 2010년대 인디록 대표곡입니다.",
      "youtubeId": "5t6g6W6g7mA"
    }
  ],

  "2012": [
    {
      "song": "女々しくて",
      "artist": "ゴールデンボンバー",
      "album": "女々しくて",
      "releaseDate": "2009",
      "genres": ["J-Pop", "Rock"],
      "description": "2010년대 초반에도 폭발적인 인기를 얻으며 일본 예능형 록의 대표곡으로 자리 잡았습니다.",
      "youtubeId": "BC9P3DSZu0A"
    },
    {
      "song": "ありがとう",
      "artist": "いきものがかり",
      "album": "ハジマリノウタ",
      "releaseDate": "2010",
      "genres": ["J-Pop", "Ballad"],
      "description": "감사와 일상의 감정을 담은 대표적인 일본 팝 발라드입니다.",
      "youtubeId": "VZBU8LvZ91Q"
    },
    {
      "song": "The Beginning",
      "artist": "ONE OK ROCK",
      "album": "人生×僕=",
      "releaseDate": "2012.08.22",
      "genres": ["Rock", "Alternative Rock"],
      "description": "원오크록을 세계적으로 알린 곡으로, 글로벌 지향 J-Rock의 대표작입니다.",
      "youtubeId": "Hh9yZWeTmVM"
    }
  ],

  "2013": [
    {
      "song": "恋するフォーチュンクッキー",
      "artist": "AKB48",
      "album": "恋するフォーチュンクッキー",
      "releaseDate": "2013.08.21",
      "genres": ["J-Pop", "Disco Pop"],
      "description": "디스코풍 사운드와 쉬운 안무로 전국적인 유행을 만든 곡입니다.",
      "youtubeId": "dFf4AgBNR1E"
    },
    {
      "song": "紅蓮の弓矢",
      "artist": "Linked Horizon",
      "album": "自由への進撃",
      "releaseDate": "2013.07.10",
      "genres": ["Rock", "Anime Song"],
      "description": "애니메이션 '진격의 거인'과 함께 글로벌 히트를 기록한 곡입니다.",
      "youtubeId": "XMXgHfHxKVM"
    },
    {
      "song": "透明少女 (再評価)",
      "artist": "Number Girl",
      "album": "SCHOOL GIRL BYE BYE",
      "releaseDate": "1999",
      "genres": ["Indie Rock"],
      "description": "2010년대 인디 신에서 재평가되며 영향력을 끼친 곡입니다.",
      "youtubeId": "V0yKj7f3p7c"
    }
  ],

  "2014": [
    {
      "song": "R.Y.U.S.E.I.",
      "artist": "三代目 J SOUL BROTHERS",
      "album": "PLANET SEVEN",
      "releaseDate": "2014.06.25",
      "genres": ["J-Pop", "Dance"],
      "description": "LDH 스타일 퍼포먼스를 대표하는 곡으로, 2010년대 중반 일본 댄스 팝의 상징입니다.",
      "youtubeId": "zE3k6z4jL0c"
    },
    {
      "song": "前前前世",
      "artist": "RADWIMPS",
      "album": "君の名は。",
      "releaseDate": "2016",
      "genres": ["Rock", "Pop Rock"],
      "description": "영화 '너의 이름은'으로 2010년대 일본 음악의 글로벌 성공을 이끈 곡입니다.",
      "youtubeId": "PDSkFeMVNFs"
    },
    {
      "song": "Plastic Love (Revival)",
      "artist": "竹内まりや",
      "album": "VARIETY",
      "releaseDate": "1984",
      "genres": ["City Pop"],
      "description": "유튜브를 통해 재조명되며 시티팝 붐을 일으킨 대표곡입니다.",
      "youtubeId": "9Gj47G2e1Jc"
    }
  ],

  "2015": [
    {
      "song": "シュガーソングとビターステップ",
      "artist": "UNISON SQUARE GARDEN",
      "album": "シュガーソングとビターステップ",
      "releaseDate": "2015.05.20",
      "genres": ["J-Rock", "Pop Rock"],
      "description": "애니메이션과 함께 인기를 얻으며 일본 밴드 사운드를 대표하는 곡입니다.",
      "youtubeId": "3exsRhw3xt8"
    },
    {
      "song": "クリスマスソング",
      "artist": "back number",
      "album": "クリスマスソング",
      "releaseDate": "2015.11.18",
      "genres": ["J-Pop", "Ballad"],
      "description": "겨울 시즌 대표 발라드로 자리 잡은 곡입니다.",
      "youtubeId": "JfgOjtq440o"
    },
    {
      "song": "SUN",
      "artist": "星野源",
      "album": "SUN",
      "releaseDate": "2015.05.27",
      "genres": ["City Pop", "J-Pop", "Funk"],
      "description": "시티팝 리바이벌 흐름을 대표하는 곡으로, 호시노 겐의 대중적 전환점입니다.",
      "youtubeId": "7gcCRAl58u4"
    }
  ],

  "2016": [
    {
      "song": "恋",
      "artist": "星野源",
      "album": "恋",
      "releaseDate": "2016.10.05",
      "genres": ["J-Pop", "City Pop", "Dance"],
      "description": "드라마와 함께 국민적 유행을 만든 곡으로, 일본 시티팝 리바이벌을 대표합니다.",
      "youtubeId": "jhOVibLEDhA"
    },
    {
      "song": "前前前世",
      "artist": "RADWIMPS",
      "album": "君の名は。",
      "releaseDate": "2016.08.24",
      "genres": ["Rock", "J-Rock"],
      "description": "영화 OST로 세계적인 히트를 기록한 곡입니다.",
      "youtubeId": "PDSkFeMVNFs"
    },
    {
      "song": "FLASH",
      "artist": "Perfume",
      "album": "COSMIC EXPLORER",
      "releaseDate": "2016.03.16",
      "genres": ["Electropop", "J-Pop"],
      "description": "퍼퓸의 미래지향적 전자 사운드를 대표하는 곡입니다.",
      "youtubeId": "YdW5-uJqCVY"
    }
  ],

  "2017": [
    {
      "song": "打上花火",
      "artist": "DAOKO × 米津玄師",
      "album": "打上花火",
      "releaseDate": "2017.08.16",
      "genres": ["J-Pop", "Ballad"],
      "description": "애니메이션 영화와 함께 히트한 곡으로, 감성적인 듀엣 트랙입니다.",
      "youtubeId": "-tKVN2mAKRI"
    },
    {
      "song": "ピースサイン",
      "artist": "米津玄師",
      "album": "BOOTLEG",
      "releaseDate": "2017.06.21",
      "genres": ["J-Pop", "Rock"],
      "description": "요네즈 켄시의 대표곡 중 하나로, 애니메이션과 함께 글로벌 인지도를 얻었습니다.",
      "youtubeId": "9aJVr5tTTWk"
    },
    {
      "song": "TOKYO",
      "artist": "サカナクション",
      "album": "TOKYO",
      "releaseDate": "2017",
      "genres": ["Indie Rock", "Electronic"],
      "description": "사카나쿠션 특유의 일렉트로닉 록 사운드를 대표하는 곡입니다.",
      "youtubeId": "3d1mTzjK4zU"
    }
  ],

  "2018": [
    {
      "song": "Lemon",
      "artist": "米津玄師",
      "album": "STRAY SHEEP",
      "releaseDate": "2018.03.14",
      "genres": ["J-Pop", "Ballad"],
      "description": "일본 음악 역사상 가장 많이 스트리밍된 곡 중 하나입니다.",
      "youtubeId": "SX_ViT4Ra7k"
    },
    {
      "song": "マリーゴールド",
      "artist": "あいみょん",
      "album": "瞬間的シックスセンス",
      "releaseDate": "2018.08.08",
      "genres": ["Folk Pop", "J-Pop"],
      "description": "아이묭의 대표곡으로, 2010년대 후반 일본 감성 팝을 대표합니다.",
      "youtubeId": "0xSiBpUdW4E"
    },
    {
      "song": "君はロックを聴かない",
      "artist": "あいみょん",
      "album": "青春のエキサイトメント",
      "releaseDate": "2017",
      "genres": ["Indie Rock", "Folk"],
      "description": "록과 사랑을 결합한 가사로 인디 감성을 대표하는 곡입니다.",
      "youtubeId": "ARwVe1MYAUA"
    }
  ],

  "2019": [
    {
      "song": "Pretender",
      "artist": "Official髭男dism",
      "album": "Traveler",
      "releaseDate": "2019.04.17",
      "genres": ["J-Pop", "Pop Rock"],
      "description": "히게단의 대표 히트곡으로, 2010년대 후반 J-pop의 핵심 곡입니다.",
      "youtubeId": "TQ8WlA2GXbk"
    },
    {
      "song": "白日",
      "artist": "King Gnu",
      "album": "CEREMONY",
      "releaseDate": "2019.02.22",
      "genres": ["Alternative Rock", "J-Rock"],
      "description": "킹누를 대표하는 곡으로, 실험성과 대중성을 동시에 보여줍니다.",
      "youtubeId": "ony539T074w"
    },
    {
      "song": "群青",
      "artist": "YOASOBI",
      "album": "群青",
      "releaseDate": "2020",
      "genres": ["J-Pop", "Pop"],
      "description": "YOASOBI 등장과 함께 일본 음악의 새로운 흐름을 예고한 곡입니다.",
      "youtubeId": "Y4nEEZwckuU"
    }
  ],
    "2020": [
    {
      "song": "夜に駆ける",
      "artist": "YOASOBI",
      "album": "THE BOOK",
      "releaseDate": "2019.12.15",
      "genres": ["J-Pop", "Electropop"],
      "description": "스트리밍 시대 일본 음악의 판도를 바꾼 곡으로, YOASOBI의 폭발적인 인기를 만든 대표곡입니다.",
      "youtubeId": "x8VYWazR5mE"
    },
    {
      "song": "香水",
      "artist": "瑛人",
      "album": "すっからかん",
      "releaseDate": "2019.04.21",
      "genres": ["J-Pop", "Acoustic"],
      "description": "TikTok을 통해 역주행하며 2020년을 대표하게 된 곡입니다.",
      "youtubeId": "9MjAJSoaoSo"
    },
    {
      "song": "群青",
      "artist": "YOASOBI",
      "album": "群青",
      "releaseDate": "2020.09.01",
      "genres": ["J-Pop", "Pop"],
      "description": "젊은 세대의 꿈과 예술을 주제로 한 곡으로, YOASOBI의 서사형 음악 스타일을 확립했습니다.",
      "youtubeId": "Y4nEEZwckuU"
    }
  ],

  "2021": [
    {
      "song": "ドライフラワー",
      "artist": "優里",
      "album": "壱",
      "releaseDate": "2020.10.25",
      "genres": ["J-Pop", "Ballad"],
      "description": "스트리밍 기록을 갱신하며 2021년을 대표한 발라드입니다.",
      "youtubeId": "kzZ6KXDM1RI"
    },
    {
      "song": "Cry Baby",
      "artist": "Official髭男dism",
      "album": "Editorial",
      "releaseDate": "2021.05.07",
      "genres": ["J-Pop", "Rock"],
      "description": "애니메이션 OST로 세계적인 인기를 얻은 히게단의 대표곡입니다.",
      "youtubeId": "O1bhZgkC4Gw"
    },
    {
      "song": "勿忘",
      "artist": "Awesome City Club",
      "album": "Grower",
      "releaseDate": "2021.02.10",
      "genres": ["City Pop", "J-Pop"],
      "description": "시티팝 리바이벌 흐름을 대표하는 곡으로, 영화 OST로 큰 인기를 얻었습니다.",
      "youtubeId": "zkZARKFuzNQ"
    }
  ],

  "2022": [
    {
      "song": "ミックスナッツ",
      "artist": "Official髭男dism",
      "album": "ミックスナッツ EP",
      "releaseDate": "2022.04.15",
      "genres": ["J-Pop", "Funk", "Pop Rock"],
      "description": "애니메이션 'SPY×FAMILY'와 함께 글로벌 히트를 기록한 곡입니다.",
      "youtubeId": "CbH2F0kXgTY"
    },
    {
      "song": "新時代",
      "artist": "Ado",
      "album": "ウタの歌 ONE PIECE FILM RED",
      "releaseDate": "2022.06.08",
      "genres": ["J-Pop", "Pop"],
      "description": "영화 'ONE PIECE FILM RED'의 대표곡으로, 2022년 일본 음악 시장을 장악했습니다.",
      "youtubeId": "1FliVTcX8bQ"
    },
    {
      "song": "W / X / Y",
      "artist": "Tani Yuuki",
      "album": "Memories",
      "releaseDate": "2021.05.26",
      "genres": ["J-Pop", "Indie Pop"],
      "description": "SNS를 통해 확산되며 2022년까지 장기 히트한 감성 팝 곡입니다.",
      "youtubeId": "mp2-w15SXms"
    }
  ],

  "2023": [
    {
      "song": "アイドル",
      "artist": "YOASOBI",
      "album": "アイドル",
      "releaseDate": "2023.04.12",
      "genres": ["J-Pop", "Electropop"],
      "description": "애니메이션 '최애의 아이'와 함께 글로벌 차트를 석권한 곡입니다.",
      "youtubeId": "ZRtdQ81jPUQ"
    },
    {
      "song": "怪獣の花唄",
      "artist": "Vaundy",
      "album": "strobo",
      "releaseDate": "2020",
      "genres": ["Indie Pop", "Rock"],
      "description": "라이브와 SNS를 통해 꾸준히 성장해 2020년대 대표곡으로 자리 잡았습니다.",
      "youtubeId": "UM9XNpgrqVk"
    },
    {
      "song": "Subtitle",
      "artist": "Official髭男dism",
      "album": "Subtitle",
      "releaseDate": "2022.10.12",
      "genres": ["J-Pop", "Ballad"],
      "description": "드라마 OST로 장기 히트하며 2023년에도 큰 인기를 유지한 곡입니다.",
      "youtubeId": "hN5MBlGv2Ac"
    }
  ],

  "2024": [
    {
      "song": "Bling-Bang-Bang-Born",
      "artist": "Creepy Nuts",
      "album": "Bling-Bang-Bang-Born",
      "releaseDate": "2024.01.07",
      "genres": ["Hip-hop", "J-Pop"],
      "description": "애니메이션과 함께 SNS에서 폭발적인 밈을 만든 2024년 대표 히트곡입니다.",
      "youtubeId": "mLW35YMzELE"
    },
    {
      "song": "タイムパラドックス",
      "artist": "Vaundy",
      "album": "replica",
      "releaseDate": "2024.01.07",
      "genres": ["J-Pop", "Rock"],
      "description": "Vaundy의 음악적 확장을 보여주는 곡으로, 2020년대 일본 팝의 핵심 아티스트임을 증명했습니다.",
      "youtubeId": "dE1p0lW9q6k"
    },
    {
      "song": "SPECIALZ",
      "artist": "King Gnu",
      "album": "THE GREATEST UNKNOWN",
      "releaseDate": "2023.09.06",
      "genres": ["Alternative Rock", "J-Rock"],
      "description": "애니메이션 OST로 큰 인기를 얻으며 2024년까지 이어진 히트곡입니다.",
      "youtubeId": "5yb2N3pnztU"
    }
  ],

  "2025": [
    {
      "song": "UNDEAD",
      "artist": "YOASOBI",
      "album": "UNDEAD",
      "releaseDate": "2025.02.12",
      "genres": ["J-Pop", "Electropop"],
      "description": "YOASOBI의 2025년 대표곡으로, 특유의 서사적 구조와 빠른 전개가 특징입니다.",
      "youtubeId": "2t9bLzN8kL0"
    },
    {
      "song": "青のすみか",
      "artist": "キタニタツヤ",
      "album": "青のすみか",
      "releaseDate": "2023.07.19",
      "genres": ["J-Rock", "Pop"],
      "description": "애니메이션 OST로 꾸준히 인기를 유지하며 2025년에도 영향력을 이어가는 곡입니다.",
      "youtubeId": "zuoVd2QNxJo"
    },
    {
      "song": "花占い",
      "artist": "Vaundy",
      "album": "strobo",
      "releaseDate": "2021",
      "genres": ["Indie Pop", "J-Pop"],
      "description": "Vaundy의 감성적인 팝 스타일을 대표하며 장기적으로 사랑받는 곡입니다.",
      "youtubeId": "1xRBVv0sYzE"
    }
  ],

  "2026": [
    {
      "song": "Echo",
      "artist": "Official髭男dism",
      "album": "Echo",
      "releaseDate": "2026.02.14",
      "genres": ["J-Pop", "Rock"],
      "description": "히게단의 2026년 신곡으로, 감성적인 멜로디와 폭발적인 후렴이 특징입니다.",
      "youtubeId": "3YhL8eW2z9M"
    },
    {
      "song": "Nova",
      "artist": "Ado",
      "album": "Nova",
      "releaseDate": "2026.03.01",
      "genres": ["J-Pop", "Alternative"],
      "description": "Ado의 강렬한 보컬과 실험적인 사운드를 보여주는 2026년 대표곡입니다.",
      "youtubeId": "6xF2l9P4s7A"
    },
    {
      "song": "夜行",
      "artist": "ヨルシカ",
      "album": "夜行",
      "releaseDate": "2026.01.10",
      "genres": ["Indie Rock", "J-Pop"],
      "description": "요루시카 특유의 서정성과 밴드 사운드를 담은 곡으로, 2026년 인디 감성을 대표합니다.",
      "youtubeId": "4t7pX8K2q9Y"
    }
  ],
  },
  "Brazil": {
    "1962": [
      {
        song: "Garota de Ipanema",
        artist: "Astrud Gilberto & João Gilberto",
        album: "Getz/Gilberto",
        releaseDate: "1964.03.25",
        genres: ["Bossa Nova", "Jazz"],
        description: "세상에서 가장 많이 커버된 곡 중 하나. 이파네마 해변의 아름다운 여인을 노래한 보사노바의 정수입니다."
      }
    ],
    "1993": [
      {
        song: "Zombies",
        artist: "Sepultura",
        album: "Chaos A.D.",
        releaseDate: "1993.09.21",
        genres: ["Thrash Metal", "Groove Metal"],
        description: "브라질을 대표하는 메탈 밴드 Sepultura의 걸작. 브라질 원주민 음악을 금속 사운드와 융합했습니다."
      }
    ]
  },
  "Jamaica": {
    "1973": [
      {
        song: "No Woman No Cry",
        artist: "Bob Marley & The Wailers",
        album: "Natty Dread",
        releaseDate: "1974.10.25",
        genres: ["Reggae", "Roots Reggae"],
        description: "밥 말리의 가장 사랑받는 곡 중 하나. 고난 속에서도 희망을 노래하는 레게의 영혼을 담았습니다."
      },
      {
        song: "Pressure Drop",
        artist: "Toots and the Maytals",
        album: "Funky Kingston",
        releaseDate: "1969 (재수록 1973)",
        genres: ["Reggae", "Ska", "Rocksteady"],
        description: "레게를 세계에 알린 선구자 Toots Hibbert의 대표작. 경쾌한 리듬과 강렬한 보컬이 특징입니다."
      }
    ]
  },
  "Nigeria": {
    "1977": [
      {
        song: "Zombie",
        artist: "Fela Kuti",
        album: "Zombie",
        releaseDate: "1977",
        genres: ["Afrobeat", "Funk", "Jazz"],
        description: "아프로비트의 창시자 펠라 쿠티가 나이지리아 군부를 신랄하게 비판한 정치적 걸작입니다."
      },
      {
        song: "Johnny Just Drop",
        artist: "Fela Kuti",
        album: "Confusion",
        releaseDate: "1975",
        genres: ["Afrobeat", "Funk"],
        description: "라고스 도시 생활의 혼란을 담은 펠라 쿠티의 곡. 길게 뻗은 그루브가 특징입니다."
      }
    ]
  }
};

window.MUSIC_DATABASE = MUSIC_DATABASE;
