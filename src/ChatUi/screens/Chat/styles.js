import { StyleSheet } from 'react-native';

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
    height: 410,
    backgroundColor: '#FFF',
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
    color: '#000119',
    flex: 1,
    fontSize: 20,
  },
});
