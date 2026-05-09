import React, { useEffect, useRef, useMemo } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../styles/common';

const STAR_COUNT = 100;

function generateStars() {
  return Array.from({ length: STAR_COUNT }, (_, i) => ({
    id: i,
    x: Math.random() * SCREEN_WIDTH,
    y: Math.random() * SCREEN_HEIGHT,
    size: Math.random() * 2.5 + 0.5,
    baseOpacity: Math.random() * 0.5 + 0.2,
    twinkle: i % 3 === 0,
    duration: Math.random() * 1500 + 800,
  }));
}

export default function StarBackground({ children, style }) {
  const stars = useMemo(() => generateStars(), []);
  const animations = useRef(stars.map(s => new Animated.Value(s.baseOpacity))).current;

  useEffect(() => {
    const loops = stars.map((star, i) => {
      if (!star.twinkle) return null;
      return Animated.loop(
        Animated.sequence([
          Animated.timing(animations[i], {
            toValue: star.baseOpacity * 0.15,
            duration: star.duration,
            useNativeDriver: true,
          }),
          Animated.timing(animations[i], {
            toValue: star.baseOpacity,
            duration: star.duration,
            useNativeDriver: true,
          }),
        ])
      );
    });
    loops.forEach(l => l && l.start());
    return () => loops.forEach(l => l && l.stop());
  }, []);

  return (
    <View style={[styles.container, style]}>
      {stars.map((star, i) => (
        <Animated.View
          key={star.id}
          style={[
            styles.star,
            {
              left: star.x,
              top: star.y,
              width: star.size,
              height: star.size,
              borderRadius: star.size / 2,
              opacity: animations[i],
            },
          ]}
        />
      ))}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c001e',
  },
  star: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
  },
});
