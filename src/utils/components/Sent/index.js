import React from 'react';
import { View, Text } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';

const Sent = ({ message }) => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#f26a50', '#f20045']} style={styles.gradient}>
        <Text style={styles.text}>{message}</Text>
      </LinearGradient>
      <Text style={styles.duration}>12:34 AM</Text>
    </View>
  );
};

export default Sent;
