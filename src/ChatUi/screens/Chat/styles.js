import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

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
  list: {
    marginTop: 300,
  },
  card: {
    marginLeft: 400,
    width: 400,
    flexDirection: 'row',
  },
  gradient: {
    height: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    fontFamily: 'Montserrat_800ExtraBold',
    color: '#FFF',
    flex: 1,
    fontSize: 24,
  },
  proContainer: {
    marginRight: -20,
    alignSelf: 'center',
  },
  ops: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: height * 0.6,
    backgroundColor: colors.darkBg,
    marginHorizontal: -20,
  },
  col: {
    flexDirection: 'row',
    marginTop: 25,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  day: {
    fontFamily: 'Montserrat_800ExtraBold',
    color: '#fff',
    flex: 1,
    fontSize: 20,
  },
});
