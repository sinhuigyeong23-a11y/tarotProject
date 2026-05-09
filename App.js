import 'react-native-gesture-handler';
import React, { useState, useEffect, createContext } from 'react';
import { View, ActivityIndicator, Platform } from 'react-native';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts, GowunBatang_400Regular, GowunBatang_700Bold } from '@expo-google-fonts/gowun-batang';
import { Fuggles_400Regular } from '@expo-google-fonts/fuggles';
import * as SecureStore from 'expo-secure-store';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MainScreen from './src/screens/MainScreen';
import FortuneListScreen from './src/screens/FortuneListScreen';
import TarotDrawScreen from './src/screens/TarotDrawScreen';
import TarotResultScreen from './src/screens/TarotResultScreen';
import MyPageScreen from './src/screens/MyPageScreen';
import ReviewScreen from './src/screens/ReviewScreen';
import AdminScreen from './src/screens/AdminScreen';
import AdminDashboardScreen from './src/screens/AdminDashboardScreen';

export const AuthContext = createContext(null);
export const navigationRef = createNavigationContainerRef();

const Stack = createStackNavigator();
const SIX_MONTHS_MS = 6 * 30 * 24 * 60 * 60 * 1000;

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

async function setupPushNotifications() {
  if (!Device.isDevice) return;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: '달빛들의 예언',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#B53DFF',
    });
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== 'granted') return;

  const tokenData = await Notifications.getExpoPushTokenAsync();
  const pushToken = tokenData.data;
  await AsyncStorage.setItem('expo_push_token', pushToken);
  console.log('[푸시토큰]', pushToken);

  // TODO: 백엔드 연동 시 주석 해제
  // await registerPushToken(pushToken);
}

export default function App() {
  const [token, setToken] = useState(null);
  const [userName, setUserName] = useState(null);
  const [authReady, setAuthReady] = useState(false);

  const [fontsLoaded] = useFonts({
    GowunBatang_400Regular,
    GowunBatang_700Bold,
    Fuggles_400Regular,
  });

  useEffect(() => {
    async function restoreSession() {
      try {
        const storedToken = await SecureStore.getItemAsync('auth_token');
        const expiry = await SecureStore.getItemAsync('token_expiry');
        const storedName = await SecureStore.getItemAsync('user_name');
        if (storedToken && expiry && Date.now() < parseInt(expiry)) {
          setToken(storedToken);
          setUserName(storedName);
        } else {
          await SecureStore.deleteItemAsync('auth_token');
          await SecureStore.deleteItemAsync('token_expiry');
          await SecureStore.deleteItemAsync('user_name');
        }
      } catch {
        // SecureStore 오류 시 비로그인 상태로 시작
      }
      setAuthReady(true);
    }
    restoreSession();
  }, []);

  useEffect(() => {
    setupPushNotifications();

    const foregroundSub = Notifications.addNotificationReceivedListener(() => {
      // 포그라운드 알림 수신 — 필요 시 여기서 커스텀 UI 처리
    });

    const responseSub = Notifications.addNotificationResponseReceivedListener(() => {
      if (navigationRef.isReady()) {
        navigationRef.navigate('FortuneList');
      }
    });

    return () => {
      foregroundSub.remove();
      responseSub.remove();
    };
  }, []);

  async function login(newToken, name) {
    setToken(newToken);
    setUserName(name || null);
    try {
      const expiry = (Date.now() + SIX_MONTHS_MS).toString();
      await SecureStore.setItemAsync('auth_token', newToken);
      await SecureStore.setItemAsync('token_expiry', expiry);
      if (name) await SecureStore.setItemAsync('user_name', name);
    } catch {
      // SecureStore 저장 실패 시 세션은 메모리에만 유지
    }
  }

  async function logout() {
    setToken(null);
    setUserName(null);
    try {
      await SecureStore.deleteItemAsync('auth_token');
      await SecureStore.deleteItemAsync('token_expiry');
      await SecureStore.deleteItemAsync('user_name');
    } catch {
      // ignore
    }
  }

  if (!fontsLoaded || !authReady) {
    return (
      <View style={{ flex: 1, backgroundColor: '#0c001e', alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator color="rgba(181,61,255,0.8)" size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={{ token, userName, login, logout }}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#0c001e' },
            animationEnabled: true,
          }}
        >
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="FortuneList" component={FortuneListScreen} />
          <Stack.Screen name="TarotDraw" component={TarotDrawScreen} />
          <Stack.Screen name="TarotResult" component={TarotResultScreen} />
          <Stack.Screen name="MyPage" component={MyPageScreen} />
          <Stack.Screen name="Review" component={ReviewScreen} />
          <Stack.Screen name="Admin" component={AdminScreen} />
          <Stack.Screen name="AdminDashboard" component={AdminDashboardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
