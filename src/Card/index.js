import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, Image, Animated } from 'react-native';

import { styles } from './styles';

import Choice from '../Choice';
import { ACTION_OFFSET } from '../utils/constants';

export default function Card({ name, source, isFirst, swipe, ...rest }) {
  const renderChoice = React.useCallback(() => {
    return (
      <>
        <View style={[styles.choiceContainer, styles.likeContainer]}>
          <Choice type="like" />
        </View>

        <View style={[styles.choiceContainer, styles.nopeContainer]}>
          <Choice type="nope" />
        </View>
      </>
    );
  }, []);

  const rotate = swipe.x.interpolate({
    inputRange: [-ACTION_OFFSET, 0, ACTION_OFFSET],
    outputRange: ['8deg', '0deg', '-8deg'],
  });

  const animatedCardStyle = {
    transform: [...swipe.getTranslateTransform(), { rotate }],
  };

  return (
    <Animated.View
      style={[styles.container, isFirst && animatedCardStyle]}
      {...rest}
    >
      <Image source={source} style={styles.image} />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.9)']}
        style={styles.gradient}
      />
      <Text style={styles.name}>{name}</Text>

      {isFirst && renderChoice()}
    </Animated.View>
  );
}
