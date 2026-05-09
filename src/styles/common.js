import { Dimensions } from 'react-native';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export const COLORS = {
  bg: '#0c001e',
  bgOverlay: 'rgba(24,2,52,0.85)',
  white: '#FFFFFF',
  whiteAlpha80: 'rgba(255,255,255,0.8)',
  whiteAlpha70: 'rgba(255,255,255,0.7)',
  whiteAlpha60: 'rgba(255,255,255,0.6)',
  whiteAlpha50: 'rgba(255,255,255,0.5)',
  whiteAlpha40: 'rgba(255,255,255,0.4)',
  whiteAlpha20: 'rgba(255,255,255,0.2)',
  purple: 'rgba(181,61,255,1)',
  purpleDark: 'rgba(132,3,255,1)',
  purpleMid: 'rgba(146,31,255,1)',
  blue: 'rgba(54,54,255,1)',
  purpleAlpha30: 'rgba(181,61,255,0.3)',
  purpleAlpha43: 'rgba(177,75,255,0.43)',
  navyBlue: 'rgba(10,10,173,0.75)',
  cardDark: '#1a0040',
  inputBorder: 'rgba(255,248,248,0.5)',
  inputBg: 'rgba(217,217,217,0.1)',
  grayAlpha20: 'rgba(249,246,255,0.2)',
  highlightBlue: '#061BFF',
};

export const FONTS = {
  gowun: 'GowunBatang_400Regular',
  gowunBold: 'GowunBatang_700Bold',
  fuggles: 'Fuggles_400Regular',
};

export const FORTUNE_CHAPTERS = [
  {
    id: 'love',
    chapter: '연애운',
    items: [
      { id: 'love_will', name: '그 사람과 잘될까?', description: '달빛이 알려주는 그 사람과의 운명' },
      { id: 'love_something', name: '두근두근 썸씽', description: '설레는 썸, 이 마음은 통할까요' },
      { id: 'love_today', name: '오늘의 연애운', description: '오늘 하루 연애에 부는 바람의 방향' },
      { id: 'love_confession', name: '짝사랑 고백해도 될까?', description: '별들이 말해주는 고백의 타이밍' },
    ],
  },
  {
    id: 'money',
    chapter: '재물운',
    items: [
      { id: 'money_today', name: '오늘의 재물운', description: '오늘 내 지갑에 깃드는 금전의 기운' },
      { id: 'money_monthly', name: '이번 달 금전운', description: '이번 달 돈의 흐름과 나의 재물 기운' },
      { id: 'money_invest', name: '투자해도 될까?', description: '지금 투자, 별들은 어떻게 볼까요' },
      { id: 'money_job', name: '취업/승진운', description: '내 커리어에 별빛이 비추는 방향' },
    ],
  },
  {
    id: 'health',
    chapter: '건강운',
    items: [
      { id: 'health_today', name: '오늘의 건강운', description: '오늘 몸과 마음에 깃드는 기운' },
      { id: 'health_weekly', name: '이번 주 컨디션', description: '이번 주 나의 몸 상태와 에너지' },
      { id: 'health_diet', name: '다이어트 성공할까?', description: '별들이 응원하는 나의 다이어트' },
    ],
  },
  {
    id: 'affection',
    chapter: '애정운',
    items: [
      { id: 'affection_destiny', name: '지금 내 인연은?', description: '지금 내 주변에 흐르는 인연의 기운' },
      { id: 'affection_marriage', name: '올해 결혼운', description: '올해 나에게 찾아오는 결혼의 별' },
      { id: 'affection_soulmate', name: '소울메이트 찾기', description: '운명처럼 이어질 소울메이트를 찾아서' },
    ],
  },
  {
    id: 'etc',
    chapter: '기타',
    items: [
      { id: 'etc_daily', name: '오늘의 종합운', description: '오늘 하루 모든 운의 흐름을 담았어요' },
      { id: 'etc_weekly', name: '이번 주 운세', description: '이번 주 달빛이 그리는 나의 운세' },
      { id: 'etc_newyear', name: '신년운', description: '새해의 기운과 한 해의 별자리' },
      { id: 'etc_study', name: '학업/시험운', description: '공부와 시험에 깃드는 달빛의 힘' },
      { id: 'etc_travel', name: '여행운', description: '여행길에 동행하는 별들의 기운' },
      { id: 'etc_relationship', name: '대인관계운', description: '주변 사람들과 나 사이의 기운' },
    ],
  },
];
