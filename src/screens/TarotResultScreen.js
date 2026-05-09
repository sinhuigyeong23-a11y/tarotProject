import React, { useContext } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import { AuthContext } from '../../App';
import StarBackground from '../components/StarBackground';
import TarotCard from '../components/TarotCard';
import styles from '../styles/TarotResultScreen';

export default function TarotResultScreen({ navigation, route }) {
  const { token } = useContext(AuthContext);
  const fortune = route.params?.fortune;
  const selectedCard = route.params?.selectedCard || null;

  function handleSaveImage() {
    Alert.alert('안내', '이미지 저장 기능은 준비 중입니다 🌙');
  }

  return (
    <StarBackground>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>오늘의 운세</Text>
          {fortune && (
            <Text style={styles.fortuneTypeLabel}>{fortune.name}</Text>
          )}
        </View>

        <View style={styles.mainCard}>
          {/* Tarot card face-up */}
          <View style={styles.tarotImageWrap}>
            <TarotCard
              type={fortune?.id}
              faceUp
              card={selectedCard}
              width={120}
              height={168}
            />
          </View>

          {/* Card name & keywords */}
          {selectedCard && (
            <>
              <Text style={styles.cardName}>{selectedCard.name_kr}</Text>
              <View style={styles.keywordsRow}>
                {selectedCard.keywords.map((kw, i) => (
                  <View key={i} style={styles.keywordChip}>
                    <Text style={styles.keywordText}>{kw}</Text>
                  </View>
                ))}
              </View>
            </>
          )}

          {/* AI reading box */}
          <View style={styles.readingBox}>
            {selectedCard ? (
              <>
                <Text style={styles.readingCardDesc}>{selectedCard.description}</Text>
                <View style={styles.readingDivider} />
                {/* AI 해설 자리 - 백엔드 연동 후 채워질 영역 */}
                <Text style={styles.readingAiLabel}>✦ 달빛들의 해설 ✦</Text>
                <Text style={styles.readingPlaceholder}>
                  달빛들이 카드를 읽고 있어요...{'\n'}
                  곧 AI 해설이 이 자리에 나타날 거예요.
                </Text>
              </>
            ) : (
              <Text style={styles.readingPlaceholder}>
                달빛들이 카드를 읽고 있어요...
              </Text>
            )}
          </View>

          <TouchableOpacity
            style={[
              styles.actionBtn,
              { borderWidth: 1, borderColor: 'rgba(255,255,255,0.5)', marginTop: 16, width: '100%' },
            ]}
            onPress={handleSaveImage}
            activeOpacity={0.8}
          >
            <Text style={styles.actionBtnText}>타로 이미지로 저장하기</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.actionBtn,
              {
                borderWidth: 1,
                borderColor: 'rgba(181,61,255,0.7)',
                backgroundColor: 'rgba(181,61,255,0.1)',
                marginTop: 10,
                width: '100%',
              },
            ]}
            onPress={() =>
              navigation.navigate('Review', {
                openForm: true,
                fortuneName: fortune?.name,
              })
            }
            activeOpacity={0.8}
          >
            <Text style={styles.actionBtnText}>후기 작성하러 가기 ✦</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.homeBtn}
          onPress={() => navigation.navigate('FortuneList')}
          activeOpacity={0.7}
        >
          <Text style={styles.homeBtnArrow}>←</Text>
          <Text style={styles.homeBtnText}>홈으로 돌아가기</Text>
        </TouchableOpacity>
      </ScrollView>
    </StarBackground>
  );
}
