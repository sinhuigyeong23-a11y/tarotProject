import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FONTS } from '../styles/common';

export const CARD_WIDTH = 80;
export const CARD_HEIGHT = 112;

const FORTUNE_DESIGNS = {
  love: {
    colors: ['#2d0045', '#7b1fa2', '#d81b9a'],
    symbol: '♡',
    symbolColor: '#ffb3ec',
    label: '연애운',
    dotColor: '#f48fb1',
    accentColor: '#ce93d8',
  },
  money: {
    colors: ['#1a1200', '#4a3500', '#b8860b'],
    symbol: '◈',
    symbolColor: '#ffd700',
    label: '재물운',
    dotColor: '#ffca28',
    accentColor: '#ffe082',
  },
  health: {
    colors: ['#002920', '#00695c', '#00bfa5'],
    symbol: '✿',
    symbolColor: '#80cbc4',
    label: '건강운',
    dotColor: '#a5d6a7',
    accentColor: '#b2dfdb',
  },
  affection: {
    colors: ['#3d0015', '#880e4f', '#c62828'],
    symbol: '❤',
    symbolColor: '#f8bbd0',
    label: '애정운',
    dotColor: '#ef9a9a',
    accentColor: '#ffcdd2',
  },
  etc: {
    colors: ['#000d30', '#1a237e', '#283593'],
    symbol: '✦',
    symbolColor: '#90caf9',
    label: '기타',
    dotColor: '#9fa8da',
    accentColor: '#c5cae9',
  },
};

const CATEGORY_MAP = {
  love_will: 'love', love_something: 'love', love_today: 'love', love_confession: 'love',
  money_today: 'money', money_monthly: 'money', money_invest: 'money', money_job: 'money',
  health_today: 'health', health_weekly: 'health', health_diet: 'health',
  affection_destiny: 'affection', affection_marriage: 'affection', affection_soulmate: 'affection',
  etc_daily: 'etc', etc_weekly: 'etc', etc_newyear: 'etc', etc_study: 'etc',
  etc_travel: 'etc', etc_relationship: 'etc',
};

// Fixed star positions (as fractions of card dimensions) for front face
const FRONT_STARS = [
  { rx: 0.08, ry: 0.10, size: 2, opacity: 0.5 },
  { rx: 0.85, ry: 0.08, size: 2, opacity: 0.4 },
  { rx: 0.92, ry: 0.75, size: 2, opacity: 0.5 },
  { rx: 0.06, ry: 0.80, size: 2, opacity: 0.4 },
  { rx: 0.50, ry: 0.06, size: 1.5, opacity: 0.35 },
  { rx: 0.78, ry: 0.42, size: 1.5, opacity: 0.30 },
  { rx: 0.18, ry: 0.55, size: 1.5, opacity: 0.30 },
];

// Fixed star positions for back face (denser field)
const BACK_STARS = [
  { rx: 0.10, ry: 0.10, size: 2.5, opacity: 0.55 },
  { rx: 0.38, ry: 0.06, size: 2, opacity: 0.45 },
  { rx: 0.65, ry: 0.12, size: 3, opacity: 0.60 },
  { rx: 0.88, ry: 0.08, size: 2, opacity: 0.40 },
  { rx: 0.92, ry: 0.30, size: 1.5, opacity: 0.35 },
  { rx: 0.82, ry: 0.55, size: 2.5, opacity: 0.50 },
  { rx: 0.90, ry: 0.78, size: 2, opacity: 0.45 },
  { rx: 0.62, ry: 0.88, size: 2.5, opacity: 0.55 },
  { rx: 0.35, ry: 0.92, size: 2, opacity: 0.40 },
  { rx: 0.08, ry: 0.85, size: 3, opacity: 0.60 },
  { rx: 0.04, ry: 0.55, size: 2, opacity: 0.40 },
  { rx: 0.12, ry: 0.35, size: 1.5, opacity: 0.35 },
  { rx: 0.50, ry: 0.50, size: 1.5, opacity: 0.20 },
  { rx: 0.28, ry: 0.22, size: 2, opacity: 0.40 },
  { rx: 0.70, ry: 0.68, size: 1.5, opacity: 0.30 },
];

function CardBack({ cardW, cardH }) {
  return (
    <LinearGradient
      colors={['#0a0020', '#12002e', '#08001a']}
      style={styles.card}
    >
      {BACK_STARS.map((s, i) => (
        <View
          key={i}
          style={{
            position: 'absolute',
            left: s.rx * cardW - s.size / 2,
            top: s.ry * cardH - s.size / 2,
            width: s.size,
            height: s.size,
            borderRadius: s.size / 2,
            backgroundColor: i % 3 === 0 ? '#e0d0ff' : '#ffffff',
            opacity: s.opacity,
          }}
        />
      ))}

      {/* Inner border */}
      <View style={[
        styles.innerBorder,
        { borderColor: 'rgba(177,75,255,0.35)' },
      ]} />

      {/* Center moon & logo */}
      <View style={styles.backCenter}>
        <Text style={styles.backMoonSymbol}>☽</Text>
        {cardH >= 140 && (
          <Text style={[styles.backLogoText, { fontFamily: FONTS.gowun }]}>
            달빛들의 예언
          </Text>
        )}
        {cardH < 140 && (
          <View style={styles.backDotRow}>
            {[0, 1, 2].map(i => (
              <View key={i} style={styles.backDot} />
            ))}
          </View>
        )}
      </View>

      {/* Corner ornaments */}
      <Text style={[styles.cornerOrnament, { top: 4, left: 5 }]}>✧</Text>
      <Text style={[styles.cornerOrnament, { top: 4, right: 5 }]}>✧</Text>
      <Text style={[styles.cornerOrnament, { bottom: 4, left: 5 }]}>✧</Text>
      <Text style={[styles.cornerOrnament, { bottom: 4, right: 5 }]}>✧</Text>
    </LinearGradient>
  );
}

function CardFront({ type = 'etc', card, cardW, cardH }) {
  const category = CATEGORY_MAP[type] || type;
  const design = FORTUNE_DESIGNS[category] || FORTUNE_DESIGNS.etc;
  const isLarge = cardH >= 140;

  return (
    <LinearGradient colors={design.colors} style={styles.card}>
      {/* Background star dots */}
      {FRONT_STARS.map((s, i) => (
        <View
          key={i}
          style={{
            position: 'absolute',
            left: s.rx * cardW - s.size / 2,
            top: s.ry * cardH - s.size / 2,
            width: s.size,
            height: s.size,
            borderRadius: s.size / 2,
            backgroundColor: design.dotColor,
            opacity: s.opacity,
          }}
        />
      ))}

      {/* Inner border */}
      <View style={[styles.innerBorder, { borderColor: design.dotColor + '55' }]} />

      {/* Corner ornaments */}
      <Text style={[styles.cornerOrnament, { top: 5, left: 5, color: design.accentColor }]}>✧</Text>
      <Text style={[styles.cornerOrnament, { top: 5, right: 5, color: design.accentColor }]}>✧</Text>
      <Text style={[styles.cornerOrnament, { bottom: 5, left: 5, color: design.accentColor }]}>✧</Text>
      <Text style={[styles.cornerOrnament, { bottom: 5, right: 5, color: design.accentColor }]}>✧</Text>

      <View style={styles.frontContent}>
        {/* Top ornament row */}
        <View style={styles.ornamentRow}>
          <Text style={[styles.ornamentDot, { color: design.dotColor }]}>✦</Text>
          <View style={[styles.thinLine, { backgroundColor: design.dotColor + '50', width: cardW * 0.22 }]} />
          <Text style={[styles.ornamentDot, { color: design.dotColor }]}>✦</Text>
        </View>

        {/* Main symbol */}
        <Text style={[
          styles.symbol,
          {
            color: design.symbolColor,
            fontSize: isLarge ? 36 : 26,
            textShadowColor: design.symbolColor + '80',
            textShadowRadius: isLarge ? 12 : 8,
          },
        ]}>
          {design.symbol}
        </Text>

        {/* Divider */}
        <View style={[styles.divider, { backgroundColor: design.dotColor + '60', width: cardW * 0.52 }]} />

        {/* Card name or category label */}
        {card ? (
          <Text
            style={[styles.cardName, { fontFamily: FONTS.gowun, color: design.symbolColor, fontSize: isLarge ? 10 : 7.5 }]}
            numberOfLines={2}
            adjustsFontSizeToFit
          >
            {card.name_kr}
          </Text>
        ) : (
          <Text style={[styles.categoryLabel, { fontFamily: FONTS.gowun, color: design.symbolColor, fontSize: isLarge ? 10 : 8 }]}>
            {design.label}
          </Text>
        )}

        {/* Bottom dot row */}
        <View style={styles.bottomDotRow}>
          {[0, 1, 2].map(i => (
            <View key={i} style={[styles.frontDot, { backgroundColor: design.dotColor, opacity: 0.5 - i * 0.1 }]} />
          ))}
        </View>
      </View>
    </LinearGradient>
  );
}

export default function TarotCard({ type, faceUp = false, card, width, height, style }) {
  const cardW = width || CARD_WIDTH;
  const cardH = height || CARD_HEIGHT;

  return (
    <View style={[{ width: cardW, height: cardH, borderRadius: 8, overflow: 'hidden' }, style]}>
      {faceUp
        ? <CardFront type={type} card={card} cardW={cardW} cardH={cardH} />
        : <CardBack cardW={cardW} cardH={cardH} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
  },
  innerBorder: {
    position: 'absolute',
    top: 5,
    left: 5,
    right: 5,
    bottom: 5,
    borderWidth: 0.8,
    borderRadius: 5,
  },
  cornerOrnament: {
    position: 'absolute',
    fontSize: 8,
    color: 'rgba(255,255,255,0.45)',
  },
  frontContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  ornamentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 8,
  },
  ornamentDot: {
    fontSize: 7,
  },
  thinLine: {
    height: 0.5,
  },
  symbol: {
    textShadowOffset: { width: 0, height: 0 },
  },
  divider: {
    height: 0.7,
    marginVertical: 6,
  },
  cardName: {
    textAlign: 'center',
    letterSpacing: 0.3,
    lineHeight: 14,
  },
  categoryLabel: {
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  bottomDotRow: {
    flexDirection: 'row',
    gap: 3,
    marginTop: 6,
  },
  frontDot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
  },
  backCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  backMoonSymbol: {
    fontSize: 26,
    color: 'rgba(220,200,255,0.60)',
    textShadowColor: 'rgba(177,75,255,0.5)',
    textShadowRadius: 10,
    textShadowOffset: { width: 0, height: 0 },
  },
  backLogoText: {
    fontSize: 7.5,
    color: 'rgba(200,180,255,0.50)',
    marginTop: 5,
    letterSpacing: 0.8,
  },
  backDotRow: {
    flexDirection: 'row',
    gap: 3,
    marginTop: 4,
  },
  backDot: {
    width: 2.5,
    height: 2.5,
    borderRadius: 1.25,
    backgroundColor: 'rgba(177,75,255,0.4)',
  },
});
