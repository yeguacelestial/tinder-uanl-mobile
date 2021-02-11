import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupContainer: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signup: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 12,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 60,
    width: 370,
    height: 70,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
