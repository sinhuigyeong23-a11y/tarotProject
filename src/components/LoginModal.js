import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, FONTS } from '../styles/common';
import { AuthContext, navigationRef } from '../../App';
import { login } from '../api/api';

const ADMIN_ID = 'cathyabcd5878';
const ADMIN_PW = 'abcd2878';

export default function LoginModal({ visible, onClose, onGoSignup }) {
  const { login: saveToken } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleLogin() {
    if (!username.trim() || !password.trim()) {
      setError('아이디와 비밀번호를 입력해주세요');
      return;
    }
    if (username.trim() === ADMIN_ID && password.trim() === ADMIN_PW) {
      setUsername('');
      setPassword('');
      onClose();
      if (navigationRef.isReady()) navigationRef.navigate('AdminDashboard');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const result = await login(username.trim(), password.trim());
      await saveToken(result.token, result.name);
      setUsername('');
      setPassword('');
      onClose();
    } catch (e) {
      setError(e.message || '로그인에 실패했습니다');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
              <View style={styles.container}>
                <LinearGradient
                  colors={['rgba(217,217,217,0.1)', 'rgba(20,0,50,0.95)']}
                  style={styles.gradient}
                >
                  <Text style={styles.title}>로그인</Text>

                  <View style={styles.inputGroup}>
                    <Text style={styles.label}>아이디 :</Text>
                    <View style={styles.inputBox}>
                      <TextInput
                        style={styles.input}
                        value={username}
                        onChangeText={setUsername}
                        placeholder="아이디를 입력하세요"
                        placeholderTextColor={COLORS.whiteAlpha40}
                        autoCapitalize="none"
                        autoCorrect={false}
                      />
                    </View>
                  </View>

                  <View style={styles.inputGroup}>
                    <Text style={styles.label}>비밀번호 :</Text>
                    <View style={styles.inputBox}>
                      <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        placeholder="비밀번호를 입력하세요"
                        placeholderTextColor={COLORS.whiteAlpha40}
                        secureTextEntry
                      />
                    </View>
                  </View>

                  {error ? <Text style={styles.errorText}>{error}</Text> : null}

                  <TouchableOpacity
                    style={styles.loginBtn}
                    onPress={handleLogin}
                    disabled={loading}
                  >
                    <LinearGradient
                      colors={['rgba(181,61,255,0.5)', 'rgba(54,54,255,0.5)']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={styles.loginBtnGradient}
                    >
                      {loading ? (
                        <ActivityIndicator color="#fff" />
                      ) : (
                        <Text style={styles.loginBtnText}>로그인 하기</Text>
                      )}
                    </LinearGradient>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={onGoSignup} style={styles.signupLink}>
                    <Text style={styles.signupLinkText}>계정이 없으신가요? 회원가입</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 320,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.whiteAlpha50,
  },
  gradient: {
    padding: 28,
    alignItems: 'center',
  },
  title: {
    fontFamily: FONTS.gowun,
    fontSize: 22,
    color: COLORS.white,
    marginBottom: 28,
    letterSpacing: 2,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    fontFamily: FONTS.gowun,
    fontSize: 14,
    color: COLORS.white,
    marginBottom: 6,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: COLORS.whiteAlpha50,
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  input: {
    fontFamily: FONTS.gowun,
    fontSize: 14,
    color: COLORS.white,
  },
  errorText: {
    fontFamily: FONTS.gowun,
    fontSize: 12,
    color: '#ff6b6b',
    marginBottom: 12,
    textAlign: 'center',
  },
  loginBtn: {
    width: '100%',
    marginTop: 8,
    borderRadius: 10,
    overflow: 'hidden',
  },
  loginBtnGradient: {
    paddingVertical: 13,
    alignItems: 'center',
  },
  loginBtnText: {
    fontFamily: FONTS.gowun,
    fontSize: 14,
    color: COLORS.white,
    opacity: 0.9,
    letterSpacing: 1,
  },
  signupLink: {
    marginTop: 16,
    padding: 8,
  },
  signupLinkText: {
    fontFamily: FONTS.gowun,
    fontSize: 12,
    color: COLORS.whiteAlpha60,
  },
});
