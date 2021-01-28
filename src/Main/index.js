import React from 'react';

import { View, PanResponder, Animated } from 'react-native';

import { pets as petsArray } from './data';
import Card from '../Card';

import { styles } from './styles';
import Footer from '../Footer';

export default function Main() {
  const [pets, setPets] = React.useState(petsArray);
  const swipe = React.useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, { dx, dy }) => {
      swipe.setValue({ x: dx, y: dy });
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
              {...dragHandlers}
            />
          );
        })
        .reverse()}

      <Footer />
    </View>
  );
}
