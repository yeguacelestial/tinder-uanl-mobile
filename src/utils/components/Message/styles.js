import { StyleSheet } from 'react-native';

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
    color: '#b6b6b6',
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 11,
  },
  duration: {
    color: '#000119',
    fontSize: 12,
    flex: 1,
    marginLeft: 280,
    position: 'absolute',
    fontFamily: 'Montserrat_600SemiBold',
  },
  username: {
    color: '#000119',
    fontFamily: 'Montserrat_700Bold',
  },
});
