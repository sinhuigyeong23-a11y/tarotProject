import React, { useEffect, useRef, useState, useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StatusBar,
  Dimensions,
} from 'react-native';
import { AuthContext } from '../../App';
import StarBackground from '../components/StarBackground';
import TarotCard, { CARD_WIDTH, CARD_HEIGHT } from '../components/TarotCard';
import { getCardsForFortune } from '../data/tarotCards';
import styles from '../styles/TarotDrawScreen';

const { width: SCREEN_W } = Dimensions.get('window');

const CARD_COUNT = 6;
const FAN_CONFIG = [
  { angle: -48, x: -125, y: -60 },
  { angle: -28, x: -72,  y: -100 },
  { angle: -9,  x: -20,  y: -118 },
  { angle: 9,   x: 28,   y: -118 },
  { angle: 28,  x: 80,   y: -100 },
  { angle: 48,  x: 133,  y: -60 },
];

export default function TarotDrawScreen({ navigation, route }) {
  const { token } = useContext(AuthContext);
  const fortune = route.params?.fortune;
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [canProceed, setCanProceed] = useState(false);

  // Load 6 cards for this fortune
  const fortuneCards = getCardsForFortune(fortune?.id);

  const cardAnims = useRef(
    Array.from({ length: CARD_COUNT }, () => ({
      x: new Animated.Value(0),
      y: new Animated.Value(0),
      rotate: new Animated.Value(0),
      opacity: new Animated.Value(0),
      scale: new Animated.Value(1),
    }))
  ).current;

  useEffect(() => {
    const animations = FAN_CONFIG.map((cfg, i) =>
      Animated.sequence([
        Animated.delay(i * 90),
        Animated.parallel([
          Animated.spring(cardAnims[i].x, {
            toValue: cfg.x,
            friction: 7,
            tension: 60,
            useNativeDriver: true,
          }),
          Animated.spring(cardAnims[i].y, {
            toValue: cfg.y,
            friction: 7,
            tension: 60,
            useNativeDriver: true,
          }),
          Animated.spring(cardAnims[i].rotate, {
            toValue: cfg.angle,
            friction: 8,
            tension: 55,
            useNativeDriver: true,
          }),
          Animated.timing(cardAnims[i].opacity, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }),
        ]),
      ])
    );
    Animated.parallel(animations).start();
  }, []);

  function handleSelectCard(index) {
    if (selectedIndex === index) {
      setSelectedIndex(null);
      setCanProceed(false);
      Animated.spring(cardAnims[index].scale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
      return;
    }
    if (selectedIndex !== null) {
      Animated.spring(cardAnims[selectedIndex].scale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
    setSelectedIndex(index);
    setCanProceed(true);
    Animated.spring(cardAnims[index].scale, {
      toValue: 1.15,
      friction: 5,
      useNativeDriver: true,
    }).start();
  }

  function handleProceed() {
    navigation.navigate('TarotResult', {
      fortune,
      cardIndex: selectedIndex,
      selectedCard: fortuneCards[selectedIndex] || null,
    });
  }

  return (
    <StarBackground>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          달빛들이 만들어준{'\n'}오늘의 운세카드
        </Text>
        <Text style={styles.subtitle}>
          카드는 신중하게 뽑아야해요{'\n'}달빛들이 도와줄거니까 걱정말아요
        </Text>
      </View>

      <View style={styles.fanArea}>
        <View style={styles.fanContainer}>
          {FAN_CONFIG.map((cfg, i) => {
            const rotateInterpolated = cardAnims[i].rotate.interpolate({
              inputRange: [-90, 90],
              outputRange: ['-90deg', '90deg'],
            });

            return (
              <Animated.View
                key={i}
                style={[
                  styles.cardWrapper,
                  {
                    bottom: 0,
                    left: 160 - CARD_WIDTH / 2,
                    transform: [
                      { translateX: cardAnims[i].x },
                      { translateY: cardAnims[i].y },
                      { rotate: rotateInterpolated },
                      { scale: cardAnims[i].scale },
                    ],
                    opacity: cardAnims[i].opacity,
                    zIndex: selectedIndex === i ? 10 : i,
                  },
                ]}
              >
                <TouchableOpacity
                  onPress={() => handleSelectCard(i)}
                  activeOpacity={0.9}
                >
                  <TarotCard
                    type={fortune?.id}
                    faceUp={false}
                    width={CARD_WIDTH}
                    height={CARD_HEIGHT}
                  />
                  {selectedIndex === i && (
                    <View style={styles.selectedHighlight} />
                  )}
                </TouchableOpacity>
              </Animated.View>
            );
          })}
        </View>

        <Text style={styles.selectLabel}>
          {selectedIndex === null ? '타로를 선택해 주세요' : `${selectedIndex + 1}번 카드를 선택했습니다`}
        </Text>
      </View>

      <View style={styles.bottomArea}>
        {canProceed && (
          <TouchableOpacity
            style={styles.resultBtn}
            onPress={handleProceed}
            activeOpacity={0.8}
          >
            <View style={styles.resultBtnInner}>
              <Text style={styles.resultBtnText}>오늘의 운세카드 해설 보러가기</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </StarBackground>
  );
}
