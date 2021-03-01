import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#373737',
  },
});

export const colors = {
  darkBg: '#222',
  lightBg: '#333',
  darkHl: '#666',
  lightHl: '#888',
  pink: '#ea3372',
  text: '#fff',
  textSec: '#aaa',
  orange: '#F97878',
};

export const gs = StyleSheet.create({
  sectionContainer: {
    paddingVertical: 24,
    paddingHorizontal: 32,
    marginBottom: colors.lightBg,
  },

  sectionTitle: {
    fontWeight: '700',
    color: colors.text,
    fontSize: 15,
  },

  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
