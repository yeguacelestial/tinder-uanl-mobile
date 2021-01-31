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
          <Text style={styles.title}>YOUR MUSIC.</Text>
        </View>

        <View style={styles.subTitleContainer}>
          <Text style={styles.subtitle}>Tuned to you.</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => Alert.alert('You pressed Sign Up')}>
          <View style={styles.signupContainer}>
            <Text style={styles.signup}>Sign Up</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert('You pressed Sign In')}>
          <View style={styles.loginContainer}>
            <Text style={styles.login}>Log In</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
