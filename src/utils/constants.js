import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const CARD = {
  WIDTH: width * 0.9,
  HEIGHT: height * 0.65,
  BORDER_RADIUS: 20,
  OUT_OF_SCREEN: width * 1.5,
};

export const COLORS = {
  like: '#00eda6',
  nope: '#ff006f',
};

export const ACTION_OFFSET = 100;
