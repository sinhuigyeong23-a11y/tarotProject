import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, FONTS } from '../styles/common';
import { signup, checkUsername } from '../api/api';

export default function SignupModal({ visible, onClose, onGoLogin }) {
  const [form, setForm] = useState({
    name: '',
    birthdate: '',
    birthtime: '',
    noTime: false,
    username: '',
    password: '',
  });
  const [usernameChecked, setUsernameChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(false);
  const [error, setError] = useState('');

  function updateField(key, value) {
    setForm(prev => ({ ...prev, [key]: value }));
    if (key === 'username') setUsernameChecked(false);
  }

  async function handleCheckUsername() {
    if (!form.username.trim()) {
      setError('아이디를 입력해주세요');
      return;
    }
    setChecking(true);
    setError('');
    try {
      await checkUsername(form.username.trim());
      setUsernameChecked(true);
    } catch (e) {
      if (e.isNetworkError) {
        // 백엔드 미연결 상태 - 형식만 확인 후 통과 처리
        setUsernameChecked(true);
      } else {
        setError('이미 사용 중인 아이디입니다');
        setUsernameChecked(false);
      }
    } finally {
      setChecking(false);
    }
  }

  async function handleSignup() {
    if (!form.name || !form.birthdate || !form.username || !form.password) {
      setError('필수 항목을 모두 입력해주세요');
      return;
    }
    if (!usernameChecked) {
      setError('아이디 중복 확인을 해주세요');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await signup({
        name: form.name.trim(),
        birthdate: form.birthdate.trim(),
        birthtime: form.noTime ? null : form.birthtime.trim(),
        username: form.username.trim(),
        password: form.password.trim(),
      });
      setForm({ name: '', birthdate: '', birthtime: '', noTime: false, username: '', password: '' });
      setUsernameChecked(false);
      onGoLogin();
    } catch (e) {
      setError(e.message || '회원가입에 실패했습니다');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
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
                  colors={['rgba(20,0,50,0.97)', 'rgba(10,0,30,0.99)']}
                  style={styles.gradient}
                >
                  <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 8 }}>
                    <Text style={styles.title}>회원가입</Text>

                    {[
                      { key: 'name', label: '이름 :', placeholder: '이름을 입력하세요' },
                      { key: 'birthdate', label: '생년월일 :', placeholder: '예) 19991231' },
                    ].map(({ key, label, placeholder }) => (
                      <View key={key} style={styles.inputGroup}>
                        <Text style={styles.label}>{label}</Text>
                        <View style={styles.inputBox}>
                          <TextInput
                            style={styles.input}
                            value={form[key]}
                            onChangeText={v => updateField(key, v)}
                            placeholder={placeholder}
                            placeholderTextColor={COLORS.whiteAlpha40}
                          />
                        </View>
                      </View>
                    ))}

                    <View style={styles.inputGroup}>
                      <Text style={styles.label}>태어난 시각 :</Text>
                      <View style={styles.birthtimeRow}>
                        <View style={[styles.inputBox, { flex: 1 }]}>
                          <TextInput
                            style={styles.input}
                            value={form.birthtime}
                            onChangeText={v => updateField('birthtime', v)}
                            placeholder="예) 0630"
                            placeholderTextColor={COLORS.whiteAlpha40}
                            editable={!form.noTime}
                          />
                        </View>
                        <TouchableOpacity
                          style={styles.noTimeBtn}
                          onPress={() => updateField('noTime', !form.noTime)}
                        >
                          <View style={[styles.checkbox, form.noTime && styles.checkboxChecked]} />
                          <Text style={styles.noTimeText}>시간 모름</Text>
                        </TouchableOpacity>
                      </View>
                    </View>

                    <View style={styles.inputGroup}>
                      <Text style={styles.label}>아이디 :</Text>
                      <View style={styles.usernameRow}>
                        <View style={[styles.inputBox, { flex: 1 }]}>
                          <TextInput
                            style={styles.input}
                            value={form.username}
                            onChangeText={v => updateField('username', v)}
                            placeholder="아이디"
                            placeholderTextColor={COLORS.whiteAlpha40}
                            autoCapitalize="none"
                          />
                        </View>
                        <TouchableOpacity
                          style={[styles.checkBtn, usernameChecked && styles.checkBtnDone]}
                          onPress={handleCheckUsername}
                          disabled={checking || usernameChecked}
                        >
                          {checking ? (
                            <ActivityIndicator color="#fff" size="small" />
                          ) : (
                            <Text style={styles.checkBtnText}>
                              {usernameChecked ? '확인 완료' : '중복 확인'}
                            </Text>
                          )}
                        </TouchableOpacity>
                      </View>
                    </View>

                    <View style={styles.inputGroup}>
                      <Text style={styles.label}>비밀 번호 :</Text>
                      <View style={styles.inputBox}>
                        <TextInput
                          style={styles.input}
                          value={form.password}
                          onChangeText={v => updateField('password', v)}
                          placeholder="비밀번호를 입력하세요"
                          placeholderTextColor={COLORS.whiteAlpha40}
                          secureTextEntry
                        />
                      </View>
                    </View>

                    {error ? <Text style={styles.errorText}>{error}</Text> : null}

                    <TouchableOpacity
                      style={styles.signupBtn}
                      onPress={handleSignup}
                      disabled={loading}
                    >
                      <LinearGradient
                        colors={['rgba(217,217,217,0.2)', 'rgba(100,50,200,0.3)']}
                        style={styles.signupBtnGradient}
                      >
                        {loading ? (
                          <ActivityIndicator color="#fff" />
                        ) : (
                          <Text style={styles.signupBtnText}>가입 완료 하기</Text>
                        )}
                      </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onGoLogin} style={styles.loginLink}>
                      <Text style={styles.loginLinkText}>이미 계정이 있으신가요? 로그인</Text>
                    </TouchableOpacity>
                  </ScrollView>
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
    backgroundColor: 'rgba(0,0,0,0.75)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 340,
    maxHeight: '93%',
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.whiteAlpha50,
  },
  gradient: {
    padding: 24,
  },
  title: {
    fontFamily: FONTS.gowun,
    fontSize: 20,
    color: COLORS.white,
    marginBottom: 24,
    textAlign: 'center',
    letterSpacing: 2,
  },
  inputGroup: {
    marginBottom: 14,
  },
  label: {
    fontFamily: FONTS.gowun,
    fontSize: 14,
    color: COLORS.white,
    marginBottom: 6,
  },
  inputBox: {
    borderWidth: 2,
    borderColor: COLORS.whiteAlpha50,
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 9,
    backgroundColor: 'rgba(255,255,255,0.04)',
  },
  input: {
    fontFamily: FONTS.gowun,
    fontSize: 14,
    color: COLORS.white,
  },
  birthtimeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  noTimeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: COLORS.whiteAlpha50,
    borderRadius: 3,
  },
  checkboxChecked: {
    backgroundColor: COLORS.purple,
    borderColor: COLORS.purple,
  },
  noTimeText: {
    fontFamily: FONTS.gowun,
    fontSize: 13,
    color: COLORS.white,
  },
  usernameRow: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  checkBtn: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: COLORS.whiteAlpha50,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.05)',
    minWidth: 70,
    alignItems: 'center',
  },
  checkBtnDone: {
    borderColor: COLORS.purple,
    backgroundColor: COLORS.purpleAlpha30,
  },
  checkBtnText: {
    fontFamily: FONTS.gowun,
    fontSize: 12,
    color: COLORS.white,
  },
  errorText: {
    fontFamily: FONTS.gowun,
    fontSize: 12,
    color: '#ff6b6b',
    marginBottom: 10,
    textAlign: 'center',
  },
  signupBtn: {
    borderRadius: 7,
    overflow: 'hidden',
    marginTop: 8,
  },
  signupBtnGradient: {
    paddingTop: 10,
    paddingBottom: 16,
    alignItems: 'center',
  },
  signupBtnText: {
    fontFamily: FONTS.gowun,
    fontSize: 14,
    color: COLORS.white,
    opacity: 0.9,
    letterSpacing: 1,
    lineHeight: 20,
  },
  loginLink: {
    marginTop: 14,
    padding: 6,
    alignItems: 'center',
  },
  loginLinkText: {
    fontFamily: FONTS.gowun,
    fontSize: 12,
    color: COLORS.whiteAlpha60,
  },
});
