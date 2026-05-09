import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  ScrollView,
  Modal,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import StarBackground from '../components/StarBackground';
import { COLORS, FONTS } from '../styles/common';
import { AuthContext } from '../../App';

export default function MyPageScreen({ navigation }) {
  const { userName } = useContext(AuthContext);
  const [editProfileOpen, setEditProfileOpen] = useState(false);
  const [editForm, setEditForm] = useState({ name: '', birthdate: '', birthtime: '' });

  function openEditProfile() {
    setEditForm({ name: userName ?? '', birthdate: '', birthtime: '' });
    setEditProfileOpen(true);
  }

  function handleDeleteAccount() {
    Alert.alert(
      '회원탈퇴',
      '정말로 탈퇴하시겠어요?\n탈퇴 후 모든 데이터가 삭제됩니다.',
      [
        { text: '취소', style: 'cancel' },
        { text: '탈퇴하기', style: 'destructive', onPress: () => {} },
      ]
    );
  }

  return (
    <StarBackground>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backBtnText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>마이페이지</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* 프로필 */}
        <View style={styles.profileSection}>
          <View style={styles.profileCircle}>
            <Text style={styles.profileDefaultIcon}>☽</Text>
          </View>
          <Text style={styles.profileName}>{userName ?? '비회원'}</Text>
        </View>

        <View style={styles.divider} />

        {/* 내 운세 후기 */}
        <Text style={styles.sectionTitle}>내 운세 후기</Text>

        <Text style={styles.emptyText}>작성한 후기가 없습니다.</Text>

        <View style={[styles.divider, { marginTop: 8 }]} />

        {/* 회원정보 수정 */}
        <TouchableOpacity style={styles.menuItem} onPress={openEditProfile}>
          <Text style={styles.menuItemText}>회원정보 수정</Text>
          <Text style={styles.menuItemArrow}>›</Text>
        </TouchableOpacity>

        <View style={styles.thinDivider} />

        {/* 회원탈퇴 */}
        <TouchableOpacity style={styles.menuItem} onPress={handleDeleteAccount}>
          <Text style={[styles.menuItemText, styles.menuItemDanger]}>회원탈퇴</Text>
          <Text style={[styles.menuItemArrow, styles.menuItemDanger]}>›</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* 회원정보 수정 모달 */}
      <Modal
        visible={editProfileOpen}
        transparent
        animationType="slide"
        onRequestClose={() => setEditProfileOpen(false)}
      >
        <KeyboardAvoidingView
          style={styles.modalOverlay}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View style={styles.formSheet}>
            <View style={styles.formHeader}>
              <Text style={styles.formTitle}>회원정보 수정</Text>
              <TouchableOpacity onPress={() => setEditProfileOpen(false)}>
                <Text style={styles.formClose}>✕</Text>
              </TouchableOpacity>
            </View>

            {[
              { key: 'name', label: '이름', placeholder: '이름을 입력하세요' },
              { key: 'birthdate', label: '생년월일', placeholder: '예) 19991231' },
              { key: 'birthtime', label: '태어난 시각', placeholder: '예) 0630  (모를 경우 공란)' },
            ].map(({ key, label, placeholder }) => (
              <View key={key} style={styles.inputGroup}>
                <Text style={styles.fieldLabel}>{label}</Text>
                <TextInput
                  style={styles.textInput}
                  value={editForm[key]}
                  onChangeText={v => setEditForm(prev => ({ ...prev, [key]: v }))}
                  placeholder={placeholder}
                  placeholderTextColor={COLORS.whiteAlpha40}
                />
              </View>
            ))}

            <TouchableOpacity
              style={styles.submitBtn}
              onPress={() => setEditProfileOpen(false)}
            >
              <Text style={styles.submitBtnText}>수정 완료</Text>
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
    alignItems: 'center',
    paddingTop: 52,
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  backBtn: {
    padding: 8,
    marginRight: 8,
  },
  backBtnText: {
    fontSize: 22,
    color: COLORS.white,
  },
  headerTitle: {
    fontFamily: FONTS.gowun,
    fontSize: 22,
    color: COLORS.white,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 48,
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  profileCircle: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: 'rgba(181,61,255,0.15)',
    borderWidth: 1.5,
    borderColor: 'rgba(181,61,255,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  profileDefaultIcon: {
    fontSize: 38,
    color: COLORS.whiteAlpha70,
  },
  profileName: {
    fontFamily: FONTS.gowunBold,
    fontSize: 18,
    color: COLORS.white,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255,246,246,0.2)',
    marginBottom: 24,
  },
  thinDivider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.07)',
  },
  sectionTitle: {
    fontFamily: FONTS.gowunBold,
    fontSize: 15,
    color: COLORS.whiteAlpha70,
    marginBottom: 14,
    letterSpacing: 1,
  },
  emptyText: {
    fontFamily: FONTS.gowun,
    fontSize: 14,
    color: COLORS.whiteAlpha40,
    textAlign: 'center',
    paddingVertical: 24,
    marginBottom: 12,
  },
  reviewCard: {
    borderWidth: 1,
    borderColor: 'rgba(177,75,255,0.4)',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    backgroundColor: 'rgba(255,255,255,0.03)',
  },
  reviewCardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  reviewFortuneTag: {
    fontFamily: FONTS.gowun,
    fontSize: 13,
    color: 'rgba(181,61,255,0.9)',
  },
  reviewDate: {
    fontFamily: FONTS.gowun,
    fontSize: 12,
    color: COLORS.whiteAlpha40,
  },
  reviewCardName: {
    fontFamily: FONTS.gowun,
    fontSize: 15,
    color: COLORS.white,
    marginBottom: 6,
  },
  reviewStars: {
    fontSize: 16,
    color: '#FFD700',
    marginBottom: 8,
    letterSpacing: 2,
  },
  reviewText: {
    fontFamily: FONTS.gowun,
    fontSize: 14,
    color: COLORS.whiteAlpha70,
    lineHeight: 22,
  },
  reviewActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(177,75,255,0.15)',
    paddingTop: 10,
  },
  editBtn: {
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: 'rgba(181,61,255,0.6)',
    borderRadius: 6,
    backgroundColor: 'rgba(181,61,255,0.1)',
  },
  editBtnText: {
    fontFamily: FONTS.gowun,
    fontSize: 12,
    color: 'rgba(210,140,255,1)',
  },
  deleteBtn: {
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: 'rgba(255,80,80,0.4)',
    borderRadius: 6,
    backgroundColor: 'rgba(255,80,80,0.08)',
  },
  deleteBtnText: {
    fontFamily: FONTS.gowun,
    fontSize: 12,
    color: 'rgba(255,120,120,1)',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
  },
  menuItemText: {
    fontFamily: FONTS.gowun,
    fontSize: 16,
    color: COLORS.white,
  },
  menuItemArrow: {
    fontSize: 20,
    color: COLORS.whiteAlpha40,
  },
  menuItemDanger: {
    color: 'rgba(255,100,100,0.8)',
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
    marginBottom: 24,
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
  inputGroup: {
    marginBottom: 16,
  },
  fieldLabel: {
    fontFamily: FONTS.gowun,
    fontSize: 14,
    color: COLORS.whiteAlpha70,
    marginBottom: 8,
  },
  textInput: {
    fontFamily: FONTS.gowun,
    fontSize: 14,
    color: COLORS.white,
    backgroundColor: 'rgba(217,217,217,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,248,248,0.3)',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 11,
  },
  submitBtn: {
    backgroundColor: 'rgba(181,61,255,0.3)',
    borderWidth: 1,
    borderColor: 'rgba(181,61,255,0.8)',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  submitBtnText: {
    fontFamily: FONTS.gowunBold,
    fontSize: 16,
    color: COLORS.white,
  },
});
