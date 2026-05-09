import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StarBackground from '../components/StarBackground';
import { COLORS, FONTS } from '../styles/common';

const ADMIN_ID = 'cathyabcd5878';
const ADMIN_PW = 'abcd2878';

export default function AdminScreen({ navigation }) {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');

  function handleLogin() {
    if (id === ADMIN_ID && pw === ADMIN_PW) {
      navigation.replace('AdminDashboard');
    } else {
      setError('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  }

  return (
    <StarBackground>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.inner}>
          <Text style={styles.symbol}>☽</Text>
          <Text style={styles.title}>관리자</Text>
          <Text style={styles.subtitle}>Administrator</Text>

          <View style={styles.form}>
            <Text style={styles.label}>아이디</Text>
            <TextInput
              style={styles.input}
              value={id}
              onChangeText={v => { setId(v); setError(''); }}
              placeholder="아이디 입력"
              placeholderTextColor={COLORS.whiteAlpha40}
              autoCapitalize="none"
              autoCorrect={false}
            />

            <Text style={styles.label}>비밀번호</Text>
            <TextInput
              style={styles.input}
              value={pw}
              onChangeText={v => { setPw(v); setError(''); }}
              placeholder="비밀번호 입력"
              placeholderTextColor={COLORS.whiteAlpha40}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
            />

            {!!error && <Text style={styles.errorText}>{error}</Text>}

            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin} activeOpacity={0.8}>
              <LinearGradient
                colors={['rgba(181,61,255,0.4)', 'rgba(54,54,255,0.4)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.loginBtnGradient}
              >
                <Text style={styles.loginBtnText}>로그인</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={styles.backLink} onPress={() => navigation.goBack()}>
              <Text style={styles.backLinkText}>← 돌아가기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </StarBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  symbol: {
    fontSize: 48,
    color: COLORS.whiteAlpha70,
    marginBottom: 8,
  },
  title: {
    fontFamily: FONTS.gowunBold,
    fontSize: 28,
    color: COLORS.white,
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: FONTS.fuggles,
    fontSize: 16,
    color: COLORS.whiteAlpha50,
    marginBottom: 40,
    letterSpacing: 2,
  },
  form: {
    width: '100%',
  },
  label: {
    fontFamily: FONTS.gowun,
    fontSize: 13,
    color: COLORS.whiteAlpha60,
    marginBottom: 6,
  },
  input: {
    fontFamily: FONTS.gowun,
    fontSize: 15,
    color: COLORS.white,
    backgroundColor: COLORS.inputBg,
    borderWidth: 1,
    borderColor: 'rgba(181,61,255,0.4)',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 18,
  },
  errorText: {
    fontFamily: FONTS.gowun,
    fontSize: 13,
    color: 'rgba(255,100,100,0.9)',
    textAlign: 'center',
    marginBottom: 16,
  },
  loginBtn: {
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: 4,
    borderWidth: 1,
    borderColor: 'rgba(181,61,255,0.6)',
  },
  loginBtnGradient: {
    paddingVertical: 14,
    alignItems: 'center',
  },
  loginBtnText: {
    fontFamily: FONTS.gowunBold,
    fontSize: 16,
    color: COLORS.white,
  },
  backLink: {
    marginTop: 20,
    alignItems: 'center',
  },
  backLinkText: {
    fontFamily: FONTS.gowun,
    fontSize: 14,
    color: COLORS.whiteAlpha50,
  },
});
