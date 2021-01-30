import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';

const Profiles = ({ username, uri }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: uri }} style={styles.avatarStyle} />
      <Text style={styles.nameStyle}>{username}</Text>
    </View>
  );
};

export default Profiles;
