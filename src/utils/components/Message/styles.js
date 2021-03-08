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
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 30,
  },
  gradientStyle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  count: {
    color: '#fff',
    fontFamily: 'Montserrat_700Bold',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  text: {
    color: colors.lightHl,
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 15,
  },
  duration: {
    color: colors.lightHl,
    fontSize: 15,
    flex: 1,
    marginLeft: 280,
    position: 'absolute',
    fontFamily: 'Montserrat_600SemiBold',
  },
  username: {
    color: 'white',
    fontFamily: 'Montserrat_700Bold',
  },
});
