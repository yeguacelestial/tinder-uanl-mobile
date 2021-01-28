import React from 'react';

import { View, PanResponder, Animated } from 'react-native';

import { pets as petsArray } from './data';
import Card from '../Card';

import { styles } from './styles';
import Footer from '../Footer';
import { CARD } from '../utils/constants';

export default function Main() {
  const [pets, setPets] = React.useState(petsArray);
  const swipe = React.useRef(new Animated.ValueXY()).current;
  const tiltSign = React.useRef(new Animated.Value(1)).current;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, { dx, dy, y0, x0 }) => {
      swipe.setValue({ x: dx, y: dy });
      // console.log(x0 > CARD.WIDTH / 2 ? 'NOPE' : 'LIKE');
      tiltSign.setValue(y0 > CARD.HEIGHT / 2 ? 1 : -1);
    },
    onPanResponderRelease: (_, gesture) => {
      Animated.spring(swipe, {
        toValue: {
          x: 0,
          y: 0,
        },
        useNativeDriver: true,
        friction: 5,
      }).start();
    },
  });

  return (
    <View style={styles.container}>
      {pets
        .map(({ name, source }, index) => {
          const isFirst = index === 0;
          const dragHandlers = isFirst ? panResponder.panHandlers : {};

          return (
            <Card
              key={name}
              name={name}
              source={source}
              isFirst={isFirst}
              swipe={swipe}
              tiltSign={tiltSign}
              {...dragHandlers}
            />
          );
        })
        .reverse()}

      <Footer />
    </View>
  );
}
