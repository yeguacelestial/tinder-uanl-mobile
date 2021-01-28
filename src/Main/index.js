import React from 'react';

import { View, PanResponder, Animated } from 'react-native';

import { pets as petsArray } from './data';
import Card from '../Card';

import { styles } from './styles';
import Footer from '../Footer';
import { ACTION_OFFSET, CARD } from '../utils/constants';

export default function Main() {
  const [pets, setPets] = React.useState(petsArray);
  const swipe = React.useRef(new Animated.ValueXY()).current;
  const tiltSign = React.useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    if (!pets.length) {
      setPets(petsArray);
    }
  }, [pets.length]);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, { dx, dy, y0, x0 }) => {
      swipe.setValue({ x: dx, y: dy });
      // console.log(x0 > CARD.WIDTH / 2 ? 'NOPE' : 'LIKE');
      tiltSign.setValue(y0 > CARD.HEIGHT / 2 ? 1 : -1);
    },
    onPanResponderRelease: (_, { dx, dy }) => {
      const direction = Math.sign(dx);
      const isActionActive = Math.abs(dx) > ACTION_OFFSET;

      if (isActionActive) {
        Animated.timing(swipe, {
          duration: 200,
          toValue: {
            x: direction * 500,
            y: dy,
          },
          useNativeDriver: true,
        }).start(removeTopCard);
      } else {
        Animated.spring(swipe, {
          toValue: {
            x: 0,
            y: 0,
          },
          useNativeDriver: true,
          friction: 5,
        }).start();
      }
    },
  });

  const removeTopCard = React.useCallback(() => {
    setPets((prevState) => prevState.slice(1));
    swipe.setValue({ x: 0, y: 0 });
  }, [swipe]);

  const handleChoice = React.useCallback(
    (direction) => {
      Animated.timing(swipe.x, {
        toValue: direction * CARD.OUT_OF_SCREEN,
        duration: 10000,
        useNativeDriver: true,
      }).start(removeTopCard);
    },
    [removeTopCard, swipe.x],
  );

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

      <Footer handleChoice={handleChoice} />
    </View>
  );
}
