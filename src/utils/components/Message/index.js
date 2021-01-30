import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { styles } from './styles';

const randomTime = () => {
  const hrs = Math.round(Math.random() * 12);
  const mins = Math.round(Math.random() * 60);
  const hFormat = hrs < 10 ? '0' : '';
  const mFormat = mins < 10 ? '0' : '';
  const amPm = hrs < 12 ? 'AM' : 'PM';
  return String(hFormat + hrs + ':' + mFormat + mins + ' ' + amPm);
};

const Message = ({ username, uri, count, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {count > 0 ? (
        <LinearGradient
          colors={['#f26a50', '#f20045', '#f20045']}
          style={styles.gradientStyle}
        >
          <Text style={styles.count}>{count}</Text>
        </LinearGradient>
      ) : null}

      <Image source={{ uri: uri }} style={styles.image} />
      <View style={{ marginLeft: 10 }}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.text}>Hello, how are you</Text>
      </View>
      <Text style={styles.duration}>{randomTime()}</Text>
    </TouchableOpacity>
  );
};

export default Message;
