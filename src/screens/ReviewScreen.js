import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Modal,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import StarBackground from '../components/StarBackground';
import { COLORS, FONTS } from '../styles/common';

export default function ReviewScreen({ navigation, route }) {
  const [formOpen, setFormOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [commentOpen, setCommentOpen] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (route.params?.openForm) setFormOpen(true);
    fetchReviews();
  }, []);

  async function fetchReviews() {
    // TODO: 백엔드 연동
    // const res = await api.get('/reviews');
    // setReviews(res.data);
  }

  function handleSubmit() {
    if (rating === 0) {
      Alert.alert('알림', '별점을 선택해주세요.');
      return;
    }
    if (!reviewText.trim()) {
      Alert.alert('알림', '후기 내용을 입력해주세요.');
      return;
    }
    closeForm();
    Alert.alert('완료', '후기가 등록되었습니다. ✦');
  }

  function closeForm() {
    setFormOpen(false);
    setRating(0);
    setReviewText('');
  }

  function closeComment() {
    setCommentOpen(false);
    setCommentText('');
  }

  return (
    <StarBackground>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backBtnText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>운세 후기</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {reviews.length === 0 ? (
          <Text style={styles.emptyText}>아직 작성된 후기가 없습니다.</Text>
        ) : (
          reviews.map(review => (
            <View key={review.id} style={styles.reviewCard}>
              <View style={styles.reviewTop}>
                <View style={styles.userRow}>
                  <View style={styles.userIcon}>
                    <Text style={styles.userIconText}>☽</Text>
                  </View>
                  <View>
                    <Text style={styles.userName}>{review.user}</Text>
                    <Text style={styles.fortuneLabel}>{review.fortuneName}</Text>
                  </View>
                </View>
                <View style={styles.ratingRow}>
                  {[1, 2, 3, 4, 5].map(s => (
                    <Text key={s} style={[styles.ratingStar, { color: s <= review.rating ? '#FFD700' : COLORS.whiteAlpha20 }]}>
                      ★
                    </Text>
                  ))}
                </View>
              </View>

              <Text style={styles.reviewText}>{review.text}</Text>

              <View style={styles.reviewActions}>
                <View style={styles.actionBtn}>
                  <Text style={styles.actionIcon}>♥</Text>
                  <Text style={styles.actionLabel}>{review.likes}</Text>
                </View>
                <TouchableOpacity style={styles.actionBtn} onPress={() => setCommentOpen(true)}>
                  <Text style={styles.actionIcon}>✎</Text>
                  <Text style={styles.actionLabel}>댓글</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
      </ScrollView>

      {/* 후기 작성 폼 */}
      <Modal visible={formOpen} transparent animationType="slide" onRequestClose={closeForm}>
        <KeyboardAvoidingView
          style={styles.modalOverlay}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View style={styles.formSheet}>
            <View style={styles.formHeader}>
              <Text style={styles.formTitle}>후기 작성</Text>
              <TouchableOpacity onPress={closeForm}>
                <Text style={styles.formClose}>✕</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.fieldLabel}>별점</Text>
            <View style={styles.starsRow}>
              {[1, 2, 3, 4, 5].map(s => (
                <TouchableOpacity key={s} onPress={() => setRating(s)}>
                  <Text style={[styles.starIcon, { color: s <= rating ? '#FFD700' : COLORS.whiteAlpha40 }]}>
                    ★
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.fieldLabel}>후기 내용</Text>
            <TextInput
              style={styles.textInput}
              multiline
              placeholder="운세는 어떠셨나요?"
              placeholderTextColor={COLORS.whiteAlpha40}
              value={reviewText}
              onChangeText={setReviewText}
              textAlignVertical="top"
            />

            <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
              <Text style={styles.submitBtnText}>등록하기</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Modal>

      {/* 댓글 작성 폼 */}
      <Modal visible={commentOpen} transparent animationType="slide" onRequestClose={closeComment}>
        <KeyboardAvoidingView
          style={styles.modalOverlay}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View style={styles.formSheet}>
            <View style={styles.formHeader}>
              <Text style={styles.formTitle}>댓글 달기</Text>
              <TouchableOpacity onPress={closeComment}>
                <Text style={styles.formClose}>✕</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.fieldLabel}>댓글 내용</Text>
            <TextInput
              style={styles.textInput}
              multiline
              placeholder="댓글을 입력해주세요"
              placeholderTextColor={COLORS.whiteAlpha40}
              value={commentText}
              onChangeText={setCommentText}
              textAlignVertical="top"
            />

            <TouchableOpacity style={styles.submitBtn} onPress={closeComment}>
              <Text style={styles.submitBtnText}>등록하기</Text>
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
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 40,
    gap: 12,
  },
  emptyText: {
    fontFamily: FONTS.gowun,
    fontSize: 14,
    color: COLORS.whiteAlpha40,
    textAlign: 'center',
    paddingVertical: 24,
  },
  reviewCard: {
    borderWidth: 1,
    borderColor: 'rgba(255,250,250,0.15)',
    borderRadius: 10,
    padding: 16,
    backgroundColor: 'rgba(255,255,255,0.03)',
  },
  reviewTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  userIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(181,61,255,0.15)',
    borderWidth: 1,
    borderColor: 'rgba(181,61,255,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userIconText: {
    fontSize: 16,
    color: COLORS.whiteAlpha70,
  },
  userName: {
    fontFamily: FONTS.gowunBold,
    fontSize: 14,
    color: COLORS.white,
    marginBottom: 2,
  },
  fortuneLabel: {
    fontFamily: FONTS.gowun,
    fontSize: 11,
    color: 'rgba(181,61,255,0.8)',
  },
  ratingRow: {
    flexDirection: 'row',
    gap: 2,
  },
  ratingStar: {
    fontSize: 13,
  },
  reviewText: {
    fontFamily: FONTS.gowun,
    fontSize: 14,
    color: COLORS.whiteAlpha70,
    lineHeight: 22,
    marginBottom: 14,
  },
  reviewActions: {
    flexDirection: 'row',
    gap: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.06)',
    paddingTop: 12,
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 2,
    paddingHorizontal: 4,
  },
  actionIcon: {
    fontSize: 16,
    color: COLORS.whiteAlpha40,
  },
  likedIcon: {
    color: 'rgba(255,80,120,0.9)',
  },
  actionLabel: {
    fontFamily: FONTS.gowun,
    fontSize: 13,
    color: COLORS.whiteAlpha40,
  },
  likedLabel: {
    color: 'rgba(255,80,120,0.9)',
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
  fieldLabel: {
    fontFamily: FONTS.gowun,
    fontSize: 14,
    color: COLORS.whiteAlpha70,
    marginBottom: 8,
  },
  starsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 20,
  },
  starIcon: {
    fontSize: 32,
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
    height: 120,
    marginBottom: 20,
  },
  submitBtn: {
    backgroundColor: 'rgba(181,61,255,0.3)',
    borderWidth: 1,
    borderColor: 'rgba(181,61,255,0.8)',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  submitBtnText: {
    fontFamily: FONTS.gowunBold,
    fontSize: 16,
    color: COLORS.white,
  },
});
