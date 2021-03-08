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

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBg,
    alignItems: 'center',
  },
});
