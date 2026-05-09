import { localLogin, localSignup, localCheckUsername } from './localAuth';

// 실제 서버 주소로 바꾸면 자동으로 서버 연결로 전환됩니다
const BASE_URL = 'https://api.example.com';
const USE_LOCAL = BASE_URL === 'https://api.example.com';

async function request(endpoint, options = {}) {
  let response;
  try {
    response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });
  } catch {
    const err = new Error('서버에 연결할 수 없습니다');
    err.isNetworkError = true;
    throw err;
  }
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || '서버 오류가 발생했습니다');
  }
  return response.json();
}

export function login(username, password) {
  if (USE_LOCAL) return localLogin(username, password);
  return request('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  });
}

export function signup({ name, birthdate, birthtime, username, password }) {
  if (USE_LOCAL) return localSignup({ name, birthdate, birthtime, username, password });
  return request('/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ name, birthdate, birthtime, username, password }),
  });
}

export function checkUsername(username) {
  if (USE_LOCAL) return localCheckUsername(username);
  return request(`/auth/check-username?username=${encodeURIComponent(username)}`);
}

export function getFortuneList(token) {
  return request('/fortunes', {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export function drawTarot(token, fortuneType) {
  return request('/tarot/draw', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: JSON.stringify({ fortuneType }),
  });
}

export function getTarotReading(token, cardId, fortuneType) {
  return request('/tarot/reading', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: JSON.stringify({ cardId, fortuneType }),
  });
}

// TODO: 백엔드 연동 시 주석 해제 후 App.js setupPushNotifications()에서 호출
// export function registerPushToken(pushToken, authToken) {
//   return request('/users/push-token', {
//     method: 'POST',
//     headers: { Authorization: `Bearer ${authToken}` },
//     body: JSON.stringify({ pushToken }),
//   });
// }

// ── 인기 카드 랭킹 API (백엔드 연동 시 주석 해제) ────────────────────
// export function getCardRanking() {
//   return request('/cards/ranking');
// }

// ── 공지사항 API (백엔드 연동 시 주석 해제) ──────────────────────────
// export function getNotice(adminToken) {
//   return request('/admin/notice', {
//     headers: { Authorization: `Bearer ${adminToken}` },
//   });
// }
//
// export function createNotice(adminToken, text) {
//   return request('/admin/notice', {
//     method: 'POST',
//     headers: { Authorization: `Bearer ${adminToken}` },
//     body: JSON.stringify({ text }),
//   });
// }
//
// export function updateNotice(adminToken, id, text) {
//   return request(`/admin/notice/${id}`, {
//     method: 'PUT',
//     headers: { Authorization: `Bearer ${adminToken}` },
//     body: JSON.stringify({ text }),
//   });
// }
