import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

const LastWatch = ({ checkedOn }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{checkedOn}</Text>
    </View>
  );
};

export default LastWatch;
