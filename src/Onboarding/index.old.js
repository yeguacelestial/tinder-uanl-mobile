import React from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import Swiper from 'react-native-swiper';

import AwesomeButtonC137 from 'react-native-really-awesome-button/src/themes/c137';

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

      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>TINDUANL</Text>
        </View>

        <View style={styles.subTitleContainer}>
          <Text style={styles.subtitle}>Alentando la flama del amor</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <AwesomeButtonC137
          type="secondary"
          style={styles.signupContainer}
          width={380}
          height={60}
          borderRadius={15}
        >
          <Image
            source={require('../../assets/uni-logo.jpg')}
            style={{ height: 40, width: 40 }}
          />
          <Text style={styles.signup}>
            Inicia sesión con tu correo universitario
          </Text>
        </AwesomeButtonC137>
      </View>
    </View>
  );
}
