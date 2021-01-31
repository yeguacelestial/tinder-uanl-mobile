import React from 'react';
import { Text, View, StatusBar, Image } from 'react-native';

import Swiper from 'react-native-swiper';

import { styles } from './styles';

export default function Onboarding() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <Swiper autoplay={true}>
        <View style={styles.slide}>
          <Image
            source={require('../../assets/onboarding1.jpg')}
            style={styles.image}
          />
        </View>

        <View style={styles.slide}>
          <Image
            source={require('../../assets/onboarding2.jpg')}
            style={styles.image}
          />
        </View>

        <View style={styles.slide}>
          <Image
            source={require('../../assets/onboarding3.jpg')}
            style={styles.image}
          />
        </View>
      </Swiper>
    </View>
  );
}
