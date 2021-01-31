import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width,
    height: height,
  },
  textContainer: {
    position: 'absolute',
    bottom: 200,
    marginLeft: 20,
    height: 120,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  titleContainer: {
    width: 300,
    height: 70,
    backgroundColor: '#3B55E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    // fontFamily: 'Helvetica',
    fontSize: 40,
    color: '#FFF',
  },
  subTitleContainer: {
    width: 200,
    height: 50,
    opacity: 0.8,
    backgroundColor: '#3B55E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    // fontFamily: 'Helvetica',
    fontSize: 24,
    color: '#FFF',
  },
  buttonContainer: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 70,
    width: 370,
    height: 70,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  signupContainer: {
    width: 180,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signup: {
    // fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#3B55E6',
  },
  loginContainer: {
    width: 180,
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 2,
  },
  login: {
    // fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#3B55E6',
  },
});
