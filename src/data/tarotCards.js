// 120 tarot cards: 20 fortune types × 6 cards each

export const TAROT_CARDS = {
  // ─── 연애운: 그사람과 잘될까? ───────────────────────────────
  love_will: [
    {
      id: 'lw_001', name: 'Moonlit Bond', name_kr: '달빛의 인연',
      category: '연애운', subcategory: '그사람과 잘될까?',
      keywords: ['운명', '연결', '인연'],
      description: '달빛 아래 맺어진 인연, 이어질 운명이 보여요',
      colorTheme: 'love',
    },
    {
      id: 'lw_002', name: 'Star Promise', name_kr: '별의 약속',
      category: '연애운', subcategory: '그사람과 잘될까?',
      keywords: ['약속', '미래', '기대'],
      description: '별들이 속삭이는 미래, 함께할 시간이 기다려요',
      colorTheme: 'love',
    },
    {
      id: 'lw_003', name: 'Twin Flames', name_kr: '쌍둥이 불꽃',
      category: '연애운', subcategory: '그사람과 잘될까?',
      keywords: ['강렬', '열정', '끌림'],
      description: '서로를 향한 강렬한 끌림이 불꽃처럼 타올라요',
      colorTheme: 'love',
    },
    {
      id: 'lw_004', name: 'Red Thread', name_kr: '붉은 실',
      category: '연애운', subcategory: '그사람과 잘될까?',
      keywords: ['운명', '필연', '이어짐'],
      description: '보이지 않는 붉은 실이 두 사람을 이어주고 있어요',
      colorTheme: 'love',
    },
    {
      id: 'lw_005', name: 'Mirror Heart', name_kr: '마음의 거울',
      category: '연애운', subcategory: '그사람과 잘될까?',
      keywords: ['진심', '반영', '감정'],
      description: '서로의 마음이 거울처럼 맞닿아 있는 순간이에요',
      colorTheme: 'love',
    },
    {
      id: 'lw_006', name: "Love's Gate", name_kr: '사랑의 문',
      category: '연애운', subcategory: '그사람과 잘될까?',
      keywords: ['새 시작', '기회', '열림'],
      description: '사랑의 문이 열리고 있어요, 용기를 내보세요',
      colorTheme: 'love',
    },
  ],

  // ─── 연애운: 두근두근 썸씽 ──────────────────────────────────
  love_something: [
    {
      id: 'ls_001', name: 'Pink Dawn', name_kr: '핑크빛 새벽',
      category: '연애운', subcategory: '두근두근 썸씽',
      keywords: ['설렘', '시작', '기대'],
      description: '설레는 감정이 새벽빛처럼 피어오르고 있어요',
      colorTheme: 'love',
    },
    {
      id: 'ls_002', name: 'Shy Star', name_kr: '수줍은 별',
      category: '연애운', subcategory: '두근두근 썸씽',
      keywords: ['수줍음', '내면', '숨겨진 마음'],
      description: '아직 말하지 못한 마음이 별처럼 반짝이고 있어요',
      colorTheme: 'love',
    },
    {
      id: 'ls_003', name: 'Butterfly Kiss', name_kr: '나비의 입맞춤',
      category: '연애운', subcategory: '두근두근 썸씽',
      keywords: ['가벼움', '자유', '순간'],
      description: '나비처럼 가볍고 달콤한 감정이 날아다니고 있어요',
      colorTheme: 'love',
    },
    {
      id: 'ls_004', name: 'Sweet Secret', name_kr: '달콤한 비밀',
      category: '연애운', subcategory: '두근두근 썸씽',
      keywords: ['비밀', '두근거림', '설렘'],
      description: '달콤한 비밀이 가슴 속에서 두근두근 살아나요',
      colorTheme: 'love',
    },
    {
      id: 'ls_005', name: 'Petal Oracle', name_kr: '꽃잎의 신탁',
      category: '연애운', subcategory: '두근두근 썸씽',
      keywords: ['결정', '답', '운명'],
      description: '꽃잎이 하나씩 떨어지며 마음의 답을 알려줘요',
      colorTheme: 'love',
    },
    {
      id: 'ls_006', name: 'Purple Mist', name_kr: '보라빛 안개',
      category: '연애운', subcategory: '두근두근 썸씽',
      keywords: ['신비', '가능성', '불분명'],
      description: '아직 안개 속이지만 아름다운 가능성이 담겨 있어요',
      colorTheme: 'love',
    },
  ],

  // ─── 연애운: 오늘의 연애운 ──────────────────────────────────
  love_today: [
    {
      id: 'lt_001', name: 'Dawn Romance', name_kr: '새벽의 로맨스',
      category: '연애운', subcategory: '오늘의 연애운',
      keywords: ['새로운 만남', '시작', '설렘'],
      description: '오늘 하루 새로운 인연의 기운이 감돌고 있어요',
      colorTheme: 'love',
    },
    {
      id: 'lt_002', name: 'Moon Whisper', name_kr: '달의 속삭임',
      category: '연애운', subcategory: '오늘의 연애운',
      keywords: ['감정', '직감', '마음'],
      description: '달이 속삭이는 오늘의 연애 기운에 귀 기울여요',
      colorTheme: 'love',
    },
    {
      id: 'lt_003', name: 'Rose & Thorn', name_kr: '장미와 가시',
      category: '연애운', subcategory: '오늘의 연애운',
      keywords: ['조심', '주의', '양면성'],
      description: '아름다움 속에 조심해야 할 순간이 있을 수 있어요',
      colorTheme: 'love',
    },
    {
      id: 'lt_004', name: 'Starfall', name_kr: '별의 소나기',
      category: '연애운', subcategory: '오늘의 연애운',
      keywords: ['행운', '풍요', '넘침'],
      description: '별이 쏟아지는 날, 연애 운이 활짝 피어나요',
      colorTheme: 'love',
    },
    {
      id: 'lt_005', name: 'Velvet Night', name_kr: '벨벳 밤',
      category: '연애운', subcategory: '오늘의 연애운',
      keywords: ['로맨틱', '분위기', '감성'],
      description: '벨벳처럼 부드러운 밤이 로맨틱한 기운을 가져다줘요',
      colorTheme: 'love',
    },
    {
      id: 'lt_006', name: 'Crystal Heart', name_kr: '수정 심장',
      category: '연애운', subcategory: '오늘의 연애운',
      keywords: ['순수', '투명', '진실'],
      description: '맑은 수정처럼 순수한 마음이 오늘의 연애를 빛내요',
      colorTheme: 'love',
    },
  ],

  // ─── 연애운: 짝사랑 고백해도 될까? ─────────────────────────
  love_confession: [
    {
      id: 'lc_001', name: 'Brave Heart', name_kr: '용기의 심장',
      category: '연애운', subcategory: '짝사랑 고백해도 될까?',
      keywords: ['용기', '결단', '행동'],
      description: '지금이 바로 용기를 내야 할 순간이에요',
      colorTheme: 'love',
    },
    {
      id: 'lc_002', name: 'Silent Star', name_kr: '침묵의 별',
      category: '연애운', subcategory: '짝사랑 고백해도 될까?',
      keywords: ['기다림', '인내', '때를 기다림'],
      description: '아직은 때가 아닐 수 있어요, 조금 더 기다려봐요',
      colorTheme: 'love',
    },
    {
      id: 'lc_003', name: 'Thunder Kiss', name_kr: '천둥 키스',
      category: '연애운', subcategory: '짝사랑 고백해도 될까?',
      keywords: ['충동', '즉흥', '강렬'],
      description: '번개처럼 지금 바로 마음을 전해보는 건 어떨까요?',
      colorTheme: 'love',
    },
    {
      id: 'lc_004', name: 'Gentle Wind', name_kr: '부드러운 바람',
      category: '연애운', subcategory: '짝사랑 고백해도 될까?',
      keywords: ['부드럽게', '조심스럽게', '천천히'],
      description: '바람처럼 부드럽게, 천천히 마음을 전해보세요',
      colorTheme: 'love',
    },
    {
      id: 'lc_005', name: 'Crossroads Moon', name_kr: '갈림길의 달',
      category: '연애운', subcategory: '짝사랑 고백해도 될까?',
      keywords: ['선택', '기로', '결정'],
      description: '선택의 갈림길에 서 있어요, 마음이 이끄는 길로 가세요',
      colorTheme: 'love',
    },
    {
      id: 'lc_006', name: 'Love Arrow', name_kr: '사랑의 화살',
      category: '연애운', subcategory: '짝사랑 고백해도 될까?',
      keywords: ['직진', '솔직함', '표현'],
      description: '큐피드의 화살처럼 솔직하게 마음을 쏘아보세요',
      colorTheme: 'love',
    },
  ],

  // ─── 재물운: 오늘의 재물운 ──────────────────────────────────
  money_today: [
    {
      id: 'mt_001', name: 'Golden Sun', name_kr: '황금 태양',
      category: '재물운', subcategory: '오늘의 재물운',
      keywords: ['풍요', '성공', '밝음'],
      description: '황금빛 태양이 오늘 재물 운을 환하게 비춰줘요',
      colorTheme: 'money',
    },
    {
      id: 'mt_002', name: 'Coin Tower', name_kr: '동전의 탑',
      category: '재물운', subcategory: '오늘의 재물운',
      keywords: ['축적', '안정', '쌓임'],
      description: '차곡차곡 쌓이는 재물의 기운이 흐르고 있어요',
      colorTheme: 'money',
    },
    {
      id: 'mt_003', name: 'Empty Purse', name_kr: '빈 지갑',
      category: '재물운', subcategory: '오늘의 재물운',
      keywords: ['주의', '절약', '조심'],
      description: '오늘은 지출을 조심하고 절약하는 날이에요',
      colorTheme: 'money',
    },
    {
      id: 'mt_004', name: 'Silver Rain', name_kr: '은빛 비',
      category: '재물운', subcategory: '오늘의 재물운',
      keywords: ['예상치 못한', '행운', '풍요'],
      description: '예상치 못한 곳에서 재물 운이 내려올 수 있어요',
      colorTheme: 'money',
    },
    {
      id: 'mt_005', name: 'Market Star', name_kr: '시장의 별',
      category: '재물운', subcategory: '오늘의 재물운',
      keywords: ['거래', '교환', '활발'],
      description: '활발한 거래와 교환으로 재물이 움직이는 날이에요',
      colorTheme: 'money',
    },
    {
      id: 'mt_006', name: 'Fortune Wheel', name_kr: '운명의 바퀴',
      category: '재물운', subcategory: '오늘의 재물운',
      keywords: ['변화', '순환', '전환'],
      description: '재물 운이 전환점을 맞이하고 있어요',
      colorTheme: 'money',
    },
  ],

  // ─── 재물운: 이번 달 금전운 ─────────────────────────────────
  money_monthly: [
    {
      id: 'mm_001', name: 'Harvest Moon', name_kr: '수확의 달',
      category: '재물운', subcategory: '이번 달 금전운',
      keywords: ['결실', '수확', '보상'],
      description: '이번 달 노력의 결실이 재물로 돌아올 거예요',
      colorTheme: 'money',
    },
    {
      id: 'mm_002', name: 'Tidal Wave', name_kr: '조류의 파도',
      category: '재물운', subcategory: '이번 달 금전운',
      keywords: ['큰 변동', '물결', '흐름'],
      description: '이번 달 금전에 큰 물결이 일어날 수 있어요',
      colorTheme: 'money',
    },
    {
      id: 'mm_003', name: 'Steady Stream', name_kr: '꾸준한 시냇물',
      category: '재물운', subcategory: '이번 달 금전운',
      keywords: ['안정', '꾸준함', '지속'],
      description: '큰 변화는 없지만 꾸준한 재물의 흐름이 이어져요',
      colorTheme: 'money',
    },
    {
      id: 'mm_004', name: 'Diamond Dust', name_kr: '다이아몬드 먼지',
      category: '재물운', subcategory: '이번 달 금전운',
      keywords: ['가능성', '숨겨진 가치', '발견'],
      description: '숨겨진 재물 기회가 빛나고 있어요, 잘 찾아보세요',
      colorTheme: 'money',
    },
    {
      id: 'mm_005', name: 'Red Ledger', name_kr: '붉은 장부',
      category: '재물운', subcategory: '이번 달 금전운',
      keywords: ['조심', '지출', '관리'],
      description: '이번 달은 지출 관리에 특별히 신경 써야 해요',
      colorTheme: 'money',
    },
    {
      id: 'mm_006', name: 'Gold Scales', name_kr: '황금 저울',
      category: '재물운', subcategory: '이번 달 금전운',
      keywords: ['균형', '공정', '판단'],
      description: '수입과 지출의 균형을 잘 맞추는 달이 될 거예요',
      colorTheme: 'money',
    },
  ],

  // ─── 재물운: 투자해도 될까? ─────────────────────────────────
  money_invest: [
    {
      id: 'mi_001', name: 'Rising Phoenix', name_kr: '불사조의 부활',
      category: '재물운', subcategory: '투자해도 될까?',
      keywords: ['기회', '상승', '성장'],
      description: '지금 투자하면 불사조처럼 상승할 기운이 있어요',
      colorTheme: 'money',
    },
    {
      id: 'mi_002', name: 'Frozen Asset', name_kr: '얼어붙은 자산',
      category: '재물운', subcategory: '투자해도 될까?',
      keywords: ['동결', '기다림', '시기 부적절'],
      description: '지금은 투자보다 기다리는 것이 현명할 수 있어요',
      colorTheme: 'money',
    },
    {
      id: 'mi_003', name: 'Sharp Sword', name_kr: '예리한 검',
      category: '재물운', subcategory: '투자해도 될까?',
      keywords: ['신중', '분석', '판단'],
      description: '날카로운 판단력으로 신중하게 결정하세요',
      colorTheme: 'money',
    },
    {
      id: 'mi_004', name: 'Hidden Gem', name_kr: '숨겨진 보석',
      category: '재물운', subcategory: '투자해도 될까?',
      keywords: ['발견', '기회', '통찰'],
      description: '남들이 모르는 투자 기회가 숨어 있을 수 있어요',
      colorTheme: 'money',
    },
    {
      id: 'mi_005', name: 'Storm Warning', name_kr: '폭풍 경보',
      category: '재물운', subcategory: '투자해도 될까?',
      keywords: ['위험', '리스크', '조심'],
      description: '투자에 폭풍이 올 수 있어요, 위험 관리가 중요해요',
      colorTheme: 'money',
    },
    {
      id: 'mi_006', name: 'Fertile Soil', name_kr: '비옥한 땅',
      category: '재물운', subcategory: '투자해도 될까?',
      keywords: ['성장', '씨앗', '미래'],
      description: '지금 심은 투자의 씨앗이 풍요롭게 자랄 거예요',
      colorTheme: 'money',
    },
  ],

  // ─── 재물운: 취업/승진운 ────────────────────────────────────
  money_job: [
    {
      id: 'mj_001', name: 'Crown of Work', name_kr: '일의 왕관',
      category: '재물운', subcategory: '취업/승진운',
      keywords: ['성취', '인정', '승진'],
      description: '당신의 노력이 드디어 인정받는 시기가 왔어요',
      colorTheme: 'money',
    },
    {
      id: 'mj_002', name: 'Open Door', name_kr: '열린 문',
      category: '재물운', subcategory: '취업/승진운',
      keywords: ['기회', '새로운 시작', '취업'],
      description: '새로운 기회의 문이 열리고 있어요, 도전해보세요',
      colorTheme: 'money',
    },
    {
      id: 'mj_003', name: 'Rocky Path', name_kr: '험한 길',
      category: '재물운', subcategory: '취업/승진운',
      keywords: ['어려움', '인내', '과정'],
      description: '지금은 힘들지만 꾸준히 나아가면 길이 보여요',
      colorTheme: 'money',
    },
    {
      id: 'mj_004', name: 'Ladder Star', name_kr: '별빛 사다리',
      category: '재물운', subcategory: '취업/승진운',
      keywords: ['상승', '단계', '성장'],
      description: '한 계단씩 별빛을 밟으며 위로 올라갈 때예요',
      colorTheme: 'money',
    },
    {
      id: 'mj_005', name: 'Eagle Eye', name_kr: '독수리 눈',
      category: '재물운', subcategory: '취업/승진운',
      keywords: ['통찰', '기회 포착', '예리함'],
      description: '독수리처럼 예리하게 기회를 포착하는 능력이 빛나요',
      colorTheme: 'money',
    },
    {
      id: 'mj_006', name: 'Patient Seed', name_kr: '인내의 씨앗',
      category: '재물운', subcategory: '취업/승진운',
      keywords: ['인내', '준비', '시간'],
      description: '지금은 씨앗을 뿌리는 시간, 때가 오면 꽃필 거예요',
      colorTheme: 'money',
    },
  ],

  // ─── 건강운: 오늘의 건강운 ──────────────────────────────────
  health_today: [
    {
      id: 'ht_001', name: 'Vital Flame', name_kr: '생명의 불꽃',
      category: '건강운', subcategory: '오늘의 건강운',
      keywords: ['활기', '에너지', '건강'],
      description: '오늘 생명력이 넘치는 활기찬 하루가 될 거예요',
      colorTheme: 'health',
    },
    {
      id: 'ht_002', name: 'Gentle Rest', name_kr: '포근한 휴식',
      category: '건강운', subcategory: '오늘의 건강운',
      keywords: ['휴식', '회복', '릴렉스'],
      description: '몸과 마음에 부드러운 휴식이 필요한 날이에요',
      colorTheme: 'health',
    },
    {
      id: 'ht_003', name: 'Storm Cloud', name_kr: '먹구름',
      category: '건강운', subcategory: '오늘의 건강운',
      keywords: ['주의', '조심', '몸 상태'],
      description: '오늘은 건강에 특별히 주의가 필요해요',
      colorTheme: 'health',
    },
    {
      id: 'ht_004', name: 'Spring Water', name_kr: '샘물',
      category: '건강운', subcategory: '오늘의 건강운',
      keywords: ['정화', '상쾌함', '청결'],
      description: '맑은 샘물처럼 몸이 정화되고 상쾌해지는 날이에요',
      colorTheme: 'health',
    },
    {
      id: 'ht_005', name: 'Earth Root', name_kr: '땅의 뿌리',
      category: '건강운', subcategory: '오늘의 건강운',
      keywords: ['안정', '균형', '기초'],
      description: '땅에 뿌리를 내린 듯 안정된 건강 상태예요',
      colorTheme: 'health',
    },
    {
      id: 'ht_006', name: 'Moon Herb', name_kr: '달빛 약초',
      category: '건강운', subcategory: '오늘의 건강운',
      keywords: ['치유', '회복', '돌봄'],
      description: '달빛 약초처럼 몸이 치유되는 기운이 흘러요',
      colorTheme: 'health',
    },
  ],

  // ─── 건강운: 이번 주 컨디션 ─────────────────────────────────
  health_weekly: [
    {
      id: 'hw_001', name: 'Rising Energy', name_kr: '상승하는 기운',
      category: '건강운', subcategory: '이번 주 컨디션',
      keywords: ['에너지 상승', '활력', '개선'],
      description: '이번 주 컨디션이 점점 좋아질 거예요',
      colorTheme: 'health',
    },
    {
      id: 'hw_002', name: 'Tired Moon', name_kr: '피곤한 달',
      category: '건강운', subcategory: '이번 주 컨디션',
      keywords: ['피로', '쌓인 스트레스', '충전 필요'],
      description: '이번 주는 충분한 휴식으로 피로를 풀어야 해요',
      colorTheme: 'health',
    },
    {
      id: 'hw_003', name: 'Balance Scale', name_kr: '균형의 저울',
      category: '건강운', subcategory: '이번 주 컨디션',
      keywords: ['균형', '조화', '안정'],
      description: '몸과 마음의 균형이 잘 맞는 한 주가 될 거예요',
      colorTheme: 'health',
    },
    {
      id: 'hw_004', name: 'Green Burst', name_kr: '초록 폭발',
      category: '건강운', subcategory: '이번 주 컨디션',
      keywords: ['폭발적 에너지', '활기', '넘침'],
      description: '초록빛 에너지가 폭발하는 활기찬 한 주예요',
      colorTheme: 'health',
    },
    {
      id: 'hw_005', name: 'Caution Leaf', name_kr: '조심 잎사귀',
      category: '건강운', subcategory: '이번 주 컨디션',
      keywords: ['주의', '신중', '예방'],
      description: '작은 신호를 무시하지 말고 미리 예방하세요',
      colorTheme: 'health',
    },
    {
      id: 'hw_006', name: 'Healing Rain', name_kr: '치유의 비',
      category: '건강운', subcategory: '이번 주 컨디션',
      keywords: ['치유', '회복', '씻어냄'],
      description: '비처럼 축적된 스트레스가 씻겨 내려가는 주예요',
      colorTheme: 'health',
    },
  ],

  // ─── 건강운: 다이어트 성공할까? ─────────────────────────────
  health_diet: [
    {
      id: 'hd_001', name: 'Iron Will', name_kr: '철의 의지',
      category: '건강운', subcategory: '다이어트 성공할까?',
      keywords: ['의지', '결단', '성공'],
      description: '강철 같은 의지로 다이어트에 성공할 기운이 넘쳐요',
      colorTheme: 'health',
    },
    {
      id: 'hd_002', name: 'Temptation', name_kr: '유혹의 사과',
      category: '건강운', subcategory: '다이어트 성공할까?',
      keywords: ['유혹', '흔들림', '주의'],
      description: '맛있는 유혹이 기다리고 있어요, 의지력이 필요해요',
      colorTheme: 'health',
    },
    {
      id: 'hd_003', name: 'Slow Journey', name_kr: '느린 여정',
      category: '건강운', subcategory: '다이어트 성공할까?',
      keywords: ['천천히', '꾸준함', '과정'],
      description: '빠른 변화보다 꾸준한 노력이 더 중요한 때예요',
      colorTheme: 'health',
    },
    {
      id: 'hd_004', name: 'Body Bloom', name_kr: '몸의 꽃',
      category: '건강운', subcategory: '다이어트 성공할까?',
      keywords: ['변화', '변신', '아름다움'],
      description: '꽃이 피듯 아름다운 변화가 시작되고 있어요',
      colorTheme: 'health',
    },
    {
      id: 'hd_005', name: 'Plateau Moon', name_kr: '정체기의 달',
      category: '건강운', subcategory: '다이어트 성공할까?',
      keywords: ['정체', '인내', '극복'],
      description: '지금은 정체기지만 이 고비를 넘기면 빛이 보여요',
      colorTheme: 'health',
    },
    {
      id: 'hd_006', name: 'Bright Mirror', name_kr: '빛나는 거울',
      category: '건강운', subcategory: '다이어트 성공할까?',
      keywords: ['자기 사랑', '긍정', '자신감'],
      description: '거울에 비친 자신을 사랑하며 건강하게 나아가요',
      colorTheme: 'health',
    },
  ],

  // ─── 애정운: 지금 내 인연은? ────────────────────────────────
  affection_destiny: [
    {
      id: 'ad_001', name: 'Destiny Thread', name_kr: '운명의 실',
      category: '애정운', subcategory: '지금 내 인연은?',
      keywords: ['운명', '인연', '이어짐'],
      description: '지금 당신 주변에 운명적 인연의 실이 감겨 있어요',
      colorTheme: 'affection',
    },
    {
      id: 'ad_002', name: 'Hidden Love', name_kr: '숨겨진 사랑',
      category: '애정운', subcategory: '지금 내 인연은?',
      keywords: ['숨겨진', '가까운 곳', '발견'],
      description: '생각지 못한 가까운 곳에 인연이 있을 수 있어요',
      colorTheme: 'affection',
    },
    {
      id: 'ad_003', name: 'Distant Star', name_kr: '먼 별',
      category: '애정운', subcategory: '지금 내 인연은?',
      keywords: ['거리', '기다림', '곧 만남'],
      description: '아직은 조금 멀리 있지만 곧 가까워질 인연이에요',
      colorTheme: 'affection',
    },
    {
      id: 'ad_004', name: 'Lotus Bond', name_kr: '연꽃의 인연',
      category: '애정운', subcategory: '지금 내 인연은?',
      keywords: ['순수', '아름다운 만남', '연꽃'],
      description: '연꽃처럼 순수하고 아름다운 인연이 피어나고 있어요',
      colorTheme: 'affection',
    },
    {
      id: 'ad_005', name: 'Storm Before', name_kr: '嵐 전야',
      category: '애정운', subcategory: '지금 내 인연은?',
      keywords: ['준비', '곧 다가옴', '예고'],
      description: '폭풍 전야처럼 설레는 인연이 곧 찾아올 거예요',
      colorTheme: 'affection',
    },
    {
      id: 'ad_006', name: 'Soul Mirror', name_kr: '영혼의 거울',
      category: '애정운', subcategory: '지금 내 인연은?',
      keywords: ['자기 성장', '먼저 나', '준비'],
      description: '좋은 인연을 만나려면 먼저 자신을 사랑해야 해요',
      colorTheme: 'affection',
    },
  ],

  // ─── 애정운: 올해 결혼운 ────────────────────────────────────
  affection_marriage: [
    {
      id: 'am_001', name: 'Wedding Star', name_kr: '결혼의 별',
      category: '애정운', subcategory: '올해 결혼운',
      keywords: ['결혼', '성사', '좋은 기운'],
      description: '올해 결혼의 별이 환하게 빛나고 있어요',
      colorTheme: 'affection',
    },
    {
      id: 'am_002', name: 'Waiting Moon', name_kr: '기다리는 달',
      category: '애정운', subcategory: '올해 결혼운',
      keywords: ['기다림', '시간 필요', '준비'],
      description: '지금은 준비하는 시간, 때가 되면 자연스럽게 이어져요',
      colorTheme: 'affection',
    },
    {
      id: 'am_003', name: 'Joined Rings', name_kr: '맞닿은 반지',
      category: '애정운', subcategory: '올해 결혼운',
      keywords: ['연결', '약속', '완성'],
      description: '두 반지가 맞닿듯 인연이 완성되는 기운이 흘러요',
      colorTheme: 'affection',
    },
    {
      id: 'am_004', name: 'Rose Arch', name_kr: '장미 아치',
      category: '애정운', subcategory: '올해 결혼운',
      keywords: ['아름다운 결실', '축복', '완성'],
      description: '장미 아치 아래 두 사람의 아름다운 결실이 기다려요',
      colorTheme: 'affection',
    },
    {
      id: 'am_005', name: 'Crosswind', name_kr: '교차하는 바람',
      category: '애정운', subcategory: '올해 결혼운',
      keywords: ['변수', '변화', '유동적'],
      description: '바람처럼 변화가 많아 결혼운이 유동적인 시기예요',
      colorTheme: 'affection',
    },
    {
      id: 'am_006', name: 'New Chapter', name_kr: '새 장',
      category: '애정운', subcategory: '올해 결혼운',
      keywords: ['새 시작', '출발', '변화'],
      description: '결혼이라는 새로운 장을 시작할 기운이 무르익었어요',
      colorTheme: 'affection',
    },
  ],

  // ─── 애정운: 소울메이트 찾기 ────────────────────────────────
  affection_soulmate: [
    {
      id: 'as_001', name: 'Soul Echo', name_kr: '영혼의 울림',
      category: '애정운', subcategory: '소울메이트 찾기',
      keywords: ['깊은 연결', '공명', '이해'],
      description: '영혼 깊이 울리는 특별한 연결이 다가오고 있어요',
      colorTheme: 'affection',
    },
    {
      id: 'as_002', name: 'Mirror World', name_kr: '거울 세계',
      category: '애정운', subcategory: '소울메이트 찾기',
      keywords: ['반영', '나와 닮은', '이해'],
      description: '나를 가장 잘 이해하는 소울메이트가 가까이 있어요',
      colorTheme: 'affection',
    },
    {
      id: 'as_003', name: 'Cosmic Bond', name_kr: '우주의 연결',
      category: '애정운', subcategory: '소울메이트 찾기',
      keywords: ['우주적', '운명', '초월'],
      description: '우주적 차원의 깊은 연결이 맺어질 기운이 있어요',
      colorTheme: 'affection',
    },
    {
      id: 'as_004', name: 'Inner Light', name_kr: '내면의 빛',
      category: '애정운', subcategory: '소울메이트 찾기',
      keywords: ['자기 발견', '성장', '준비'],
      description: '소울메이트를 만나기 전에 내면의 빛을 먼저 발견해요',
      colorTheme: 'affection',
    },
    {
      id: 'as_005', name: 'Two Moons', name_kr: '두 개의 달',
      category: '애정운', subcategory: '소울메이트 찾기',
      keywords: ['조화', '함께', '완전함'],
      description: '두 달이 어우러지듯 완벽한 조화를 이룰 인연이에요',
      colorTheme: 'affection',
    },
    {
      id: 'as_006', name: 'North Star', name_kr: '북극성',
      category: '애정운', subcategory: '소울메이트 찾기',
      keywords: ['방향', '길잡이', '확실함'],
      description: '북극성처럼 변하지 않는 특별한 인연이 기다려요',
      colorTheme: 'affection',
    },
  ],

  // ─── 기타: 오늘의 종합운 ────────────────────────────────────
  etc_daily: [
    {
      id: 'ed_001', name: 'Full Moon', name_kr: '보름달',
      category: '기타', subcategory: '오늘의 종합운',
      keywords: ['충만', '완전', '완성'],
      description: '보름달처럼 모든 것이 충만한 하루가 될 거예요',
      colorTheme: 'etc',
    },
    {
      id: 'ed_002', name: 'New Moon', name_kr: '초승달',
      category: '기타', subcategory: '오늘의 종합운',
      keywords: ['새 시작', '가능성', '출발'],
      description: '새로운 시작의 기운이 넘치는 하루예요',
      colorTheme: 'etc',
    },
    {
      id: 'ed_003', name: 'Five Elements', name_kr: '오행의 조화',
      category: '기타', subcategory: '오늘의 종합운',
      keywords: ['조화', '균형', '안정'],
      description: '모든 기운이 조화롭게 흐르는 평온한 하루예요',
      colorTheme: 'etc',
    },
    {
      id: 'ed_004', name: 'Shooting Star', name_kr: '유성',
      category: '기타', subcategory: '오늘의 종합운',
      keywords: ['행운', '소원', '기회'],
      description: '유성처럼 순간적이지만 빛나는 행운이 찾아와요',
      colorTheme: 'etc',
    },
    {
      id: 'ed_005', name: 'Storm Eye', name_kr: '폭풍의 눈',
      category: '기타', subcategory: '오늘의 종합운',
      keywords: ['고비', '중심 잡기', '집중'],
      description: '오늘은 중심을 잡고 흔들리지 않는 것이 중요해요',
      colorTheme: 'etc',
    },
    {
      id: 'ed_006', name: 'Golden Hour', name_kr: '황금 시간',
      category: '기타', subcategory: '오늘의 종합운',
      keywords: ['최적', '지금', '최고'],
      description: '지금 이 순간이 황금 시간, 최선을 다해보세요',
      colorTheme: 'etc',
    },
  ],

  // ─── 기타: 이번 주 운세 ─────────────────────────────────────
  etc_weekly: [
    {
      id: 'ew_001', name: 'Rising Tide', name_kr: '밀려오는 조류',
      category: '기타', subcategory: '이번 주 운세',
      keywords: ['상승', '흐름', '기세'],
      description: '이번 주 좋은 기세가 밀물처럼 밀려올 거예요',
      colorTheme: 'etc',
    },
    {
      id: 'ew_002', name: 'Quiet Lake', name_kr: '고요한 호수',
      category: '기타', subcategory: '이번 주 운세',
      keywords: ['평온', '안정', '휴식'],
      description: '잔잔한 호수처럼 평온하고 안정적인 한 주예요',
      colorTheme: 'etc',
    },
    {
      id: 'ew_003', name: 'Lightning Week', name_kr: '번개의 주',
      category: '기타', subcategory: '이번 주 운세',
      keywords: ['급변', '돌발', '예상 밖'],
      description: '예상치 못한 급변이 있을 수 있어요, 유연하게 대응하세요',
      colorTheme: 'etc',
    },
    {
      id: 'ew_004', name: 'Compass Star', name_kr: '나침반 별',
      category: '기타', subcategory: '이번 주 운세',
      keywords: ['방향', '결정', '선택'],
      description: '이번 주 중요한 방향을 결정하는 순간이 올 거예요',
      colorTheme: 'etc',
    },
    {
      id: 'ew_005', name: 'Harvest Field', name_kr: '수확의 들판',
      category: '기타', subcategory: '이번 주 운세',
      keywords: ['결실', '보상', '노력의 결과'],
      description: '그동안의 노력이 결실을 맺는 풍요로운 주예요',
      colorTheme: 'etc',
    },
    {
      id: 'ew_006', name: 'Gray Fog', name_kr: '회색 안개',
      category: '기타', subcategory: '이번 주 운세',
      keywords: ['불명확', '기다림', '인내'],
      description: '아직은 안개 속이지만 이내 맑아질 거예요',
      colorTheme: 'etc',
    },
  ],

  // ─── 기타: 신년운 ───────────────────────────────────────────
  etc_newyear: [
    {
      id: 'en_001', name: 'Dawn of Year', name_kr: '해의 여명',
      category: '기타', subcategory: '신년운',
      keywords: ['새해', '시작', '희망'],
      description: '새해의 여명처럼 희망찬 한 해가 시작되고 있어요',
      colorTheme: 'etc',
    },
    {
      id: 'en_002', name: 'Year Cycle', name_kr: '해의 순환',
      category: '기타', subcategory: '신년운',
      keywords: ['순환', '변화', '흐름'],
      description: '한 해의 순환 속에 당신에게 필요한 변화가 찾아와요',
      colorTheme: 'etc',
    },
    {
      id: 'en_003', name: 'Tiger Star', name_kr: '호랑이 별',
      category: '기타', subcategory: '신년운',
      keywords: ['강인함', '용기', '도전'],
      description: '올해는 호랑이처럼 강인하게 도전하는 한 해예요',
      colorTheme: 'etc',
    },
    {
      id: 'en_004', name: 'Seed Year', name_kr: '씨앗의 해',
      category: '기타', subcategory: '신년운',
      keywords: ['씨앗', '준비', '시작'],
      description: '올해 뿌린 씨앗이 내년에 꽃으로 피어날 거예요',
      colorTheme: 'etc',
    },
    {
      id: 'en_005', name: 'Crown Year', name_kr: '왕관의 해',
      category: '기타', subcategory: '신년운',
      keywords: ['성취', '정점', '빛남'],
      description: '올해는 당신의 노력이 왕관처럼 빛나는 해예요',
      colorTheme: 'etc',
    },
    {
      id: 'en_006', name: 'Phoenix Year', name_kr: '불사조의 해',
      category: '기타', subcategory: '신년운',
      keywords: ['재탄생', '변환', '극적 변화'],
      description: '불사조처럼 새롭게 태어나는 극적인 한 해예요',
      colorTheme: 'etc',
    },
  ],

  // ─── 기타: 학업/시험운 ──────────────────────────────────────
  etc_study: [
    {
      id: 'es_001', name: 'Scholar Star', name_kr: '학자의 별',
      category: '기타', subcategory: '학업/시험운',
      keywords: ['학문', '집중', '성취'],
      description: '학자의 별이 빛나는 날, 공부가 잘 되는 날이에요',
      colorTheme: 'etc',
    },
    {
      id: 'es_002', name: 'Empty Page', name_kr: '빈 페이지',
      category: '기타', subcategory: '학업/시험운',
      keywords: ['준비', '시작 전', '기초'],
      description: '아직 빈 페이지, 꾸준히 채워나가는 것이 중요해요',
      colorTheme: 'etc',
    },
    {
      id: 'es_003', name: 'Exam Moon', name_kr: '시험의 달',
      category: '기타', subcategory: '학업/시험운',
      keywords: ['집중', '실력 발휘', '자신감'],
      description: '달빛이 응원하는 시험 날, 실력을 마음껏 펼치세요',
      colorTheme: 'etc',
    },
    {
      id: 'es_004', name: 'Wise Owl', name_kr: '현명한 올빼미',
      category: '기타', subcategory: '학업/시험운',
      keywords: ['지혜', '통찰', '이해'],
      description: '올빼미처럼 깊이 이해하며 공부하는 것이 열쇠예요',
      colorTheme: 'etc',
    },
    {
      id: 'es_005', name: 'Study Storm', name_kr: '공부 폭풍',
      category: '기타', subcategory: '학업/시험운',
      keywords: ['열정', '몰입', '집중'],
      description: '폭풍처럼 공부에 몰입하는 에너지가 넘쳐나요',
      colorTheme: 'etc',
    },
    {
      id: 'es_006', name: 'Lucky Pen', name_kr: '행운의 펜',
      category: '기타', subcategory: '학업/시험운',
      keywords: ['행운', '실력+운', '최선'],
      description: '실력과 운이 만나는 행운의 순간이 찾아와요',
      colorTheme: 'etc',
    },
  ],

  // ─── 기타: 여행운 ───────────────────────────────────────────
  etc_travel: [
    {
      id: 'etr_001', name: 'Adventure Call', name_kr: '모험의 부름',
      category: '기타', subcategory: '여행운',
      keywords: ['모험', '설렘', '새로운 곳'],
      description: '모험이 당신을 부르고 있어요, 떠날 준비를 해보세요',
      colorTheme: 'etc',
    },
    {
      id: 'etr_002', name: 'Safe Harbor', name_kr: '안전한 항구',
      category: '기타', subcategory: '여행운',
      keywords: ['안전', '편안', '좋은 여행'],
      description: '안전하고 편안한 여행이 기다리고 있어요',
      colorTheme: 'etc',
    },
    {
      id: 'etr_003', name: 'Road Mist', name_kr: '길의 안개',
      category: '기타', subcategory: '여행운',
      keywords: ['계획 변경', '예상 밖', '유연함'],
      description: '여행 중 예상치 못한 변화가 있을 수 있어요',
      colorTheme: 'etc',
    },
    {
      id: 'etr_004', name: 'Ocean Moon', name_kr: '바다의 달',
      category: '기타', subcategory: '여행운',
      keywords: ['낭만', '치유', '해방'],
      description: '바다 위 달빛처럼 여행이 당신을 치유해줄 거예요',
      colorTheme: 'etc',
    },
    {
      id: 'etr_005', name: 'Mountain Peak', name_kr: '산의 정상',
      category: '기타', subcategory: '여행운',
      keywords: ['도전', '성취', '정복'],
      description: '도전적인 여행이 당신에게 큰 성취감을 줄 거예요',
      colorTheme: 'etc',
    },
    {
      id: 'etr_006', name: 'New Road', name_kr: '새로운 길',
      category: '기타', subcategory: '여행운',
      keywords: ['발견', '새로운 경험', '확장'],
      description: '이 여행에서 새로운 자신을 발견하게 될 거예요',
      colorTheme: 'etc',
    },
  ],

  // ─── 기타: 대인관계운 ───────────────────────────────────────
  etc_relationship: [
    {
      id: 'er_001', name: 'Social Star', name_kr: '사교의 별',
      category: '기타', subcategory: '대인관계운',
      keywords: ['인기', '좋은 관계', '활발'],
      description: '주변 사람들과 활발하고 좋은 관계가 이어질 거예요',
      colorTheme: 'etc',
    },
    {
      id: 'er_002', name: 'Bridge Card', name_kr: '다리 카드',
      category: '기타', subcategory: '대인관계운',
      keywords: ['화해', '연결', '소통'],
      description: '갈등이 있다면 다리처럼 연결하며 화해할 수 있어요',
      colorTheme: 'etc',
    },
    {
      id: 'er_003', name: 'Fence Star', name_kr: '울타리 별',
      category: '기타', subcategory: '대인관계운',
      keywords: ['경계', '보호', '선 긋기'],
      description: '필요하다면 적절한 경계를 설정하는 것이 중요해요',
      colorTheme: 'etc',
    },
    {
      id: 'er_004', name: 'Mirror People', name_kr: '거울 사람들',
      category: '기타', subcategory: '대인관계운',
      keywords: ['반영', '나의 반영', '자기 이해'],
      description: '주변 사람들은 나를 비추는 거울이에요, 잘 바라봐요',
      colorTheme: 'etc',
    },
    {
      id: 'er_005', name: 'Group Moon', name_kr: '집단의 달',
      category: '기타', subcategory: '대인관계운',
      keywords: ['공동체', '협력', '함께'],
      description: '함께할 때 더 빛나는 달처럼 협력이 열쇠예요',
      colorTheme: 'etc',
    },
    {
      id: 'er_006', name: 'Lone Star', name_kr: '고독한 별',
      category: '기타', subcategory: '대인관계운',
      keywords: ['혼자만의 시간', '성찰', '재정비'],
      description: '잠시 혼자만의 시간을 갖는 것이 관계를 더 좋게 해요',
      colorTheme: 'etc',
    },
  ],
};

export function getCardsForFortune(fortuneId) {
  return TAROT_CARDS[fortuneId] || [];
}
