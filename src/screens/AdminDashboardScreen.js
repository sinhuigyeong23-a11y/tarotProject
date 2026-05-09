import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  ScrollView,
  Modal,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StarBackground from '../components/StarBackground';
import { COLORS, FONTS } from '../styles/common';

export const NOTICE_STORAGE_KEY = 'admin_notice_text';
export const DEFAULT_NOTICE = '타로는 신중하게 뽑아주세요';

export default function AdminDashboardScreen({ navigation }) {
  const [currentNotice, setCurrentNotice] = useState(DEFAULT_NOTICE);
  const [editOpen, setEditOpen] = useState(false);
  const [editText, setEditText] = useState('');

  function openEdit() {
    setEditText(currentNotice);
    setEditOpen(true);
  }

  function handleSave() {
    const trimmed = editText.trim();
    if (!trimmed) {
      Alert.alert('알림', '공지사항 내용을 입력해주세요.');
      return;
    }
    // TODO: 백엔드 연동 시 API 호출로 교체
    setCurrentNotice(trimmed);
    setEditOpen(false);
    Alert.alert('완료', '공지사항이 수정되었습니다. ✦');
  }

  function handleReset() {
    Alert.alert('초기화', '공지사항을 기본값으로 되돌릴까요?', [
      { text: '취소', style: 'cancel' },
      {
        text: '초기화',
        style: 'destructive',
        onPress: () => {
          // TODO: 백엔드 연동 시 API 호출로 교체
          setCurrentNotice(DEFAULT_NOTICE);
          setEditOpen(false);
        },
      },
    ]);
  }

  function handleLogout() {
    Alert.alert('로그아웃', '관리자 페이지에서 나가시겠습니까?', [
      { text: '취소', style: 'cancel' },
      {
        text: '나가기',
        onPress: () => navigation.replace('Main'),
      },
    ]);
  }

  return (
    <StarBackground>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>관리자 대시보드</Text>
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutBtnText}>나가기</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.welcomeBox}>
          <Text style={styles.welcomeSymbol}>★</Text>
          <Text style={styles.welcomeText}>관리자로 로그인되었습니다</Text>
        </View>

        {/* 공지사항 관리 */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionAccent} />
            <Text style={styles.sectionTitle}>공지사항 관리</Text>
          </View>

          <Text style={styles.fieldLabel}>현재 공지사항</Text>
          <View style={styles.noticePreview}>
            <Text style={styles.noticePreviewText}>{currentNotice}</Text>
          </View>

          <TouchableOpacity style={styles.editBtn} onPress={openEdit} activeOpacity={0.8}>
            <LinearGradient
              colors={['rgba(181,61,255,0.35)', 'rgba(54,54,255,0.35)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.editBtnGradient}
            >
              <Text style={styles.editBtnText}>✎  공지사항 수정</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* 공지사항 수정 모달 */}
      <Modal visible={editOpen} transparent animationType="slide" onRequestClose={() => setEditOpen(false)}>
        <KeyboardAvoidingView
          style={styles.modalOverlay}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View style={styles.formSheet}>
            <View style={styles.formHeader}>
              <Text style={styles.formTitle}>공지사항 수정</Text>
              <TouchableOpacity onPress={() => setEditOpen(false)}>
                <Text style={styles.formClose}>✕</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.fieldLabel}>공지 내용</Text>
            <TextInput
              style={styles.textInput}
              multiline
              value={editText}
              onChangeText={setEditText}
              placeholder="공지사항을 입력하세요"
              placeholderTextColor={COLORS.whiteAlpha40}
              textAlignVertical="top"
            />

            <TouchableOpacity style={styles.saveBtn} onPress={handleSave} activeOpacity={0.8}>
              <LinearGradient
                colors={['rgba(181,61,255,0.4)', 'rgba(54,54,255,0.4)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.saveBtnGradient}
              >
                <Text style={styles.saveBtnText}>저장하기</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={styles.resetBtn} onPress={handleReset}>
              <Text style={styles.resetBtnText}>기본값으로 초기화</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </StarBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 52,
    paddingHorizontal: 20,
    paddingBottom: 12,
  },
  headerTitle: {
    fontFamily: FONTS.gowunBold,
    fontSize: 20,
    color: COLORS.white,
  },
  logoutBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    borderRadius: 6,
  },
  logoutBtnText: {
    fontFamily: FONTS.gowun,
    fontSize: 13,
    color: COLORS.whiteAlpha60,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 48,
    gap: 16,
  },
  welcomeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(181,61,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(181,61,255,0.25)',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  welcomeSymbol: {
    fontSize: 16,
    color: 'rgba(181,61,255,0.8)',
  },
  welcomeText: {
    fontFamily: FONTS.gowun,
    fontSize: 14,
    color: COLORS.whiteAlpha70,
  },
  sectionCard: {
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderWidth: 1,
    borderColor: 'rgba(255,250,250,0.12)',
    borderRadius: 12,
    padding: 18,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 18,
  },
  sectionAccent: {
    width: 3,
    height: 18,
    backgroundColor: COLORS.purple,
    borderRadius: 2,
  },
  sectionTitle: {
    fontFamily: FONTS.gowunBold,
    fontSize: 16,
    color: COLORS.white,
  },
  fieldLabel: {
    fontFamily: FONTS.gowun,
    fontSize: 13,
    color: COLORS.whiteAlpha60,
    marginBottom: 8,
  },
  noticePreview: {
    backgroundColor: 'rgba(217,217,217,0.06)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 16,
  },
  noticePreviewText: {
    fontFamily: FONTS.gowun,
    fontSize: 14,
    color: COLORS.whiteAlpha70,
    lineHeight: 22,
  },
  editBtn: {
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(181,61,255,0.5)',
  },
  editBtnGradient: {
    paddingVertical: 13,
    alignItems: 'center',
  },
  editBtnText: {
    fontFamily: FONTS.gowun,
    fontSize: 15,
    color: COLORS.white,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  formSheet: {
    backgroundColor: '#180235',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(181,61,255,0.5)',
    padding: 24,
    paddingBottom: 40,
  },
  formHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  formTitle: {
    fontFamily: FONTS.gowunBold,
    fontSize: 18,
    color: COLORS.white,
  },
  formClose: {
    fontSize: 20,
    color: COLORS.whiteAlpha60,
    padding: 4,
  },
  textInput: {
    fontFamily: FONTS.gowun,
    fontSize: 14,
    color: COLORS.white,
    backgroundColor: 'rgba(217,217,217,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,248,248,0.3)',
    borderRadius: 8,
    padding: 12,
    height: 100,
    marginBottom: 16,
  },
  saveBtn: {
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(181,61,255,0.7)',
    marginBottom: 12,
  },
  saveBtnGradient: {
    paddingVertical: 14,
    alignItems: 'center',
  },
  saveBtnText: {
    fontFamily: FONTS.gowunBold,
    fontSize: 16,
    color: COLORS.white,
  },
  resetBtn: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  resetBtnText: {
    fontFamily: FONTS.gowun,
    fontSize: 13,
    color: COLORS.whiteAlpha40,
  },
});
