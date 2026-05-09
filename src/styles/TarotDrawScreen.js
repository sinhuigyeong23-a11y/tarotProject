import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from './common';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 54,
    paddingHorizontal: 20,
    paddingBottom: 8,
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: FONTS.gowun,
    fontSize: 24,
    color: COLORS.white,
    textAlign: 'center',
    lineHeight: 34,
  },
  subtitle: {
    fontFamily: FONTS.gowun,
    fontSize: 15,
    color: COLORS.whiteAlpha70,
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 24,
  },
  fanArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  fanContainer: {
    width: 320,
    height: 280,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  cardWrapper: {
    position: 'absolute',
  },
  selectLabel: {
    fontFamily: FONTS.gowun,
    fontSize: 13,
    color: COLORS.whiteAlpha70,
    textAlign: 'center',
    marginTop: 16,
  },
  bottomArea: {
    paddingHorizontal: 20,
    paddingBottom: 32,
    alignItems: 'center',
  },
  resultBtn: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(255,252,252,0.5)',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 12,
  },
  resultBtnInner: {
    paddingVertical: 18,
    alignItems: 'center',
  },
  resultBtnText: {
    fontFamily: FONTS.gowun,
    fontSize: 13,
    color: COLORS.white,
    letterSpacing: 0.5,
  },
  selectedHighlight: {
    position: 'absolute',
    top: -4,
    left: -4,
    right: -4,
    bottom: -4,
    borderWidth: 2,
    borderColor: COLORS.purple,
    borderRadius: 9,
  },
});
