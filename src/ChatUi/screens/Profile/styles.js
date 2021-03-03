import { StyleSheet } from 'react-native';

export const colors = {
  darkBg: '#222',
  lightBg: '#333',
  darkHl: '#888',
  lightHl: '#999',
  pink: '#ea3372',
  text: '#fff',
  textSec: '#aaa',
  orange: '#F97878',
};

export const gs = StyleSheet.create({
  sectionContainer: {
    paddingVertical: 24,
    paddingHorizontal: 32,
    marginBottom: 8,
    backgroundColor: colors.lightBg,
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

  divider: {
    borderBottomColor: '#444',
    borderBottomWidth: 1,
    marginVertical: 24,
  },

  title: {
    color: colors.text,
    fontSize: 30,
  },

  subTitle: {
    fontWeight: '600',
    textTransform: 'uppercase',
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 15,
    letterSpacing: 1,
    textAlign: 'center',
    marginHorizontal: 70,
  },

  smallText: {
    fontSize: 12,
    fontWeight: '800',
    color: colors.text,
  },

  absoluteFull: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.pink,
    borderRadius: 100,
  },
});

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkBg,
  },
});
