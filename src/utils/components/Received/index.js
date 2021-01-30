import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';

const Received = ({ image, message }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.img} />
      <View>
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.duration}>12: 13 AM</Text>
      </View>
    </View>
  );
};

export default Received;
