import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

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
  flatlistContentContainer: {
    paddingBottom: 100,
  },
  flatlistMainView: {
    width,
    alignItems: 'center',
    padding: 20,
  },
  flatlistImageView: {
    flex: 0.7,
    justifyContent: 'center',
  },
  flatlistImage: {
    width: width / 2,
    height: height / 2,
    resizeMode: 'contain',
  },
  carouselTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 28,
    marginTop: 20,
    marginBottom: 10,
  },
  carouselSubtitle: { color: '#fff', fontWeight: '300' },
  carouselTextView: { flex: 0.3 },
  signupImage: { height: 40, width: 40 },
  indicatorView: { position: 'absolute', bottom: 15, flexDirection: 'row' },
  currentIndicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    margin: 10,
  },
  square: {
    width: height,
    height: height,
    backgroundColor: '#FBC02D',
    borderRadius: 86,
    position: 'absolute',
    top: -height * 0.6,
    left: -height * 0.3,
  },
});
