import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const CARD = {
  WIDTH: width * 0.85,
  HEIGHT: height * 0.75,
  BORDER_RADIUS: 20,
};
