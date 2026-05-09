import AsyncStorage from '@react-native-async-storage/async-storage';

const USERS_KEY = 'local_users';

async function getUsers() {
  const data = await AsyncStorage.getItem(USERS_KEY);
  return data ? JSON.parse(data) : [];
}

export async function localCheckUsername(username) {
  const users = await getUsers();
  if (users.some(u => u.username === username)) {
    throw new Error('이미 사용 중인 아이디입니다');
  }
}

export async function localSignup({ name, birthdate, birthtime, username, password }) {
  const users = await getUsers();
  if (users.some(u => u.username === username)) {
    throw new Error('이미 사용 중인 아이디입니다');
  }
  users.push({ name, birthdate, birthtime, username, password });
  await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export async function localLogin(username, password) {
  const users = await getUsers();
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) throw new Error('아이디 또는 비밀번호가 올바르지 않습니다');
  return { token: `local_${username}`, name: user.name };
}
