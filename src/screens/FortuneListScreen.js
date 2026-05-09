import React, { useState, useContext, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Animated,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AuthContext } from '../../App';
import StarBackground from '../components/StarBackground';
import LoginModal from '../components/LoginModal';
import SignupModal from '../components/SignupModal';
import styles from '../styles/FortuneListScreen';
import { COLORS, FONTS, FORTUNE_CHAPTERS } from '../styles/common';
import { DEFAULT_NOTICE } from './AdminDashboardScreen';
// import { getCardRanking } from '../api/api'; // 백엔드 연동 시 주석 해제

const FILTERS = ['전체', '연애운', '재물운', '건강운', '애정운', '기타'];

export default function FortuneListScreen({ navigation }) {
  const { token, userName, logout } = useContext(AuthContext);
  const [activeFilter, setActiveFilter] = useState('전체');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [noticeText, setNoticeText] = useState(DEFAULT_NOTICE);
  const [rankingData, setRankingData] = useState([
    { rank: 1, name: '-', count: '-' },
    { rank: 2, name: '-', count: '-' },
    { rank: 3, name: '-', count: '-' },
  ]);
  const sidebarAnim = useRef(new Animated.Value(-280)).current;

  useEffect(() => {
    // TODO: 백엔드 연동 시 주석 해제
    // async function loadRanking() {
    //   try {
    //     const data = await getCardRanking();
    //     if (data?.length) {
    //       setRankingData(data.map((item, i) => ({
    //         rank: i + 1,
    //         name: item.name,
    //         count: `${item.count}회`,
    //       })));
    //     }
    //   } catch {
    //     // 랭킹 로드 실패 시 플레이스홀더 유지
    //   }
    // }
    // loadRanking();
  }, []);

  function openSidebar() {
    setSidebarOpen(true);
    Animated.timing(sidebarAnim, {
      toValue: 0,
      duration: 260,
      useNativeDriver: true,
    }).start();
  }

  function closeSidebar() {
    Animated.timing(sidebarAnim, {
      toValue: -280,
      duration: 220,
      useNativeDriver: true,
    }).start(() => setSidebarOpen(false));
  }

  function handleFortuneSelect(fortune) {
    if (!token) {
      setShowLogin(true);
      return;
    }
    navigation.navigate('TarotDraw', { fortune });
  }

  const filteredChapters = activeFilter === '전체'
    ? FORTUNE_CHAPTERS
    : FORTUNE_CHAPTERS.filter(c => c.chapter === activeFilter);

  return (
    <StarBackground>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      <View style={styles.leftDots}>
        {[0, 1, 2, 3, 4, 5].map(i => (
          <View key={i} style={styles.dot} />
        ))}
      </View>

      <View style={styles.header}>
        <TouchableOpacity style={styles.menuBtn} onPress={openSidebar}>
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Text style={styles.headerTitle}>달빛들의 예언</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoBox}>
        <View style={styles.infoHeader}>
          <LinearGradient
            colors={['rgba(217,217,217,1)', 'rgba(54,54,255,1)']}
            start={{ x: 0.3, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.infoHeaderGradient}
          >
            <Text style={styles.infoHeaderText}>안내</Text>
          </LinearGradient>
          <Text style={styles.infoStar}>★</Text>
          <Text style={styles.infoBody}>{noticeText}</Text>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterScrollView}
        contentContainerStyle={styles.filterRow}
      >
        {FILTERS.map(f => (
          <TouchableOpacity
            key={f}
            style={[styles.filterChip, activeFilter === f && styles.filterChipActive]}
            onPress={() => setActiveFilter(f)}
          >
            <Text style={styles.filterChipText}>{f}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView
        style={styles.fortuneScroll}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionAccent} />
            <Text style={styles.sectionTitle}>인기 카드 랭킹</Text>
          </View>
          <View style={styles.rankingList}>
            {rankingData.map(item => (
              <View key={item.rank} style={styles.rankingItem}>
                <Text style={[
                  styles.rankNumber,
                  item.rank === 1 && { color: '#FFD700' },
                  item.rank === 2 && { color: '#C0C0C0' },
                  item.rank === 3 && { color: '#CD7F32' },
                ]}>
                  {item.rank}
                </Text>
                <Text style={styles.rankName}>{item.name}</Text>
                <View style={styles.rankBadge}>
                  <Text style={styles.rankBadgeText}>{item.count}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {filteredChapters.map(chapter => (
          <View key={chapter.id} style={styles.section}>
            <View style={styles.sectionHeader}>
              <View style={styles.sectionAccent} />
              <Text style={styles.sectionTitle}>{chapter.chapter}</Text>
            </View>
            <View style={styles.sectionItems}>
              {chapter.items.map(item => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.fortuneCard}
                  onPress={() => handleFortuneSelect(item)}
                  activeOpacity={0.75}
                >
                  <Text style={styles.fortuneCardTitle}>{item.name}</Text>
                  <Text style={[styles.fortuneDescription, { color: COLORS.whiteAlpha70 }]}>
                    {item.description}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>

      {sidebarOpen && (
        <View style={styles.sidebarOverlay}>
          <TouchableWithoutFeedback onPress={closeSidebar}>
            <View style={styles.sidebarBg} />
          </TouchableWithoutFeedback>

          <Animated.View
            style={[styles.sidebarPanel, { transform: [{ translateX: sidebarAnim }] }]}
          >
            <LinearGradient
              colors={['rgba(24,2,52,0.95)', 'rgba(12,0,30,0.98)']}
              style={styles.sidebar}
            >
              <View style={styles.sidebarHeader}>
                <Text style={styles.sidebarTitle}>달빛들의 예언</Text>
                <TouchableOpacity style={styles.closeBtn} onPress={closeSidebar}>
                  <Text style={styles.closeBtnText}>✕</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.sidebarProfile}>
                <View style={styles.profileCircle}>
                  <Text style={styles.profileDefaultIcon}>☽</Text>
                </View>
                <Text style={styles.sidebarUserName}>
                  {userName ?? '로그인이 필요합니다'}
                </Text>
              </View>

              <View style={styles.sidebarDivider} />

              <TouchableOpacity
                style={styles.sidebarItem}
                onPress={() => { closeSidebar(); navigation.navigate('MyPage'); }}
              >
                <Text style={styles.sidebarItemText}>마이페이지</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.sidebarItem}
                onPress={() => { closeSidebar(); navigation.navigate('Review'); }}
              >
                <Text style={styles.sidebarItemText}>운세 후기</Text>
              </TouchableOpacity>

              {token && (
                <>
                  <View style={[styles.sidebarDivider, { marginTop: 20 }]} />
                  <TouchableOpacity
                    style={styles.sidebarItem}
                    onPress={() => {
                      Alert.alert(
                        '로그아웃',
                        '정말 로그아웃 하시겠습니까?',
                        [
                          { text: '취소', style: 'cancel' },
                          {
                            text: '로그아웃',
                            style: 'destructive',
                            onPress: () => {
                              closeSidebar();
                              setTimeout(() => {
                                logout();
                                navigation.navigate('Main');
                              }, 230);
                            },
                          },
                        ]
                      );
                    }}
                  >
                    <Text style={[styles.sidebarItemText, { color: COLORS.whiteAlpha60 }]}>
                      로그아웃하기
                    </Text>
                  </TouchableOpacity>
                </>
              )}
            </LinearGradient>
          </Animated.View>
        </View>
      )}

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
