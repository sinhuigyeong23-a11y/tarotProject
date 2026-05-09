import React, { useState, useContext, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AuthContext } from '../../App';
import StarBackground from '../components/StarBackground';
import TarotCard from '../components/TarotCard';
import LoginModal from '../components/LoginModal';
import SignupModal from '../components/SignupModal';
import styles from '../styles/MainScreen';

const PREVIEW_CARDS = [
  { type: 'love', label: '연애운' },
  { type: 'money', label: '재물운' },
  { type: 'study', label: '학업운' },
];

export default function MainScreen({ navigation }) {
  const { token } = useContext(AuthContext);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const tapCount = useRef(0);
  const tapTimer = useRef(null);

  function handleTitleTap() {
    tapCount.current += 1;
    clearTimeout(tapTimer.current);
    if (tapCount.current >= 5) {
      tapCount.current = 0;
      navigation.navigate('Admin');
      return;
    }
    tapTimer.current = setTimeout(() => { tapCount.current = 0; }, 2000);
  }

  function handleGoFortune() {
    if (!token) {
      setShowLogin(true);
      return;
    }
    navigation.navigate('FortuneList');
  }

  return (
    <StarBackground>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <View style={styles.leftDots}>
        {[0, 1, 2, 3, 4, 5].map(i => (
          <View key={i} style={styles.dot} />
        ))}
      </View>

      <View style={styles.mainContent}>
        <View>
          <TouchableOpacity activeOpacity={1} onPress={handleTitleTap}>
            <View style={styles.headerArea}>
              <Text style={styles.titleKor}>달빛들의{'\n'}예언</Text>
              <Text style={styles.titleEng}>Tarot of moon * star</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.cardSection}>
            <View style={styles.cardSectionBg}>
              <View style={styles.decorRow}>
                <View style={styles.decorLine} />
                <Text style={styles.decorText}>draw answers</Text>
                <View style={styles.decorLine} />
              </View>

              <Text style={[styles.sectionTitle1, { color: 'rgba(181,61,255,1)' }]}>
                타로카드에서
              </Text>
              <Text style={[styles.sectionTitle2, { color: 'rgba(132,3,255,1)' }]}>
                답을 찾아보세요
              </Text>

              <View style={styles.previewCardsRow}>
                {PREVIEW_CARDS.map(({ type, label }) => (
                  <View key={type} style={styles.previewCardWrap}>
                    <TarotCard type={type} faceUp width={100} height={130} />
                    <Text style={styles.previewCardLabel}>{label}</Text>
                  </View>
                ))}
              </View>

              <View style={styles.hashtagRow}>
                <Text style={styles.hashtagText}>
                  #오늘의 운세  #신년운  #건강운  #다음주 운세
                </Text>
              </View>

              <TouchableOpacity
                style={[styles.ctaButton, { marginTop: 14 }]}
                onPress={handleGoFortune}
                activeOpacity={0.8}
              >
                <LinearGradient
                  colors={['rgba(181,61,255,0.3)', 'rgba(54,54,255,0.3)']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.ctaButtonGradient}
                >
                  <Text style={styles.ctaButtonText}>달빛 예언 받으러가기</Text>
                  <Text style={styles.ctaArrow}>→</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.bottomGroup} />
      </View>

      <LoginModal
        visible={showLogin}
        onClose={() => setShowLogin(false)}
        onGoSignup={() => {
          setShowLogin(false);
          setTimeout(() => setShowSignup(true), 300);
        }}
      />
      <SignupModal
        visible={showSignup}
        onClose={() => setShowSignup(false)}
        onGoLogin={() => {
          setShowSignup(false);
          setTimeout(() => setShowLogin(true), 300);
        }}
      />
    </StarBackground>
  );
}
