import React from 'react';

import { Text, View } from 'react-native';

export default function Choice({ type }) {
  return (
    <View>
      <Text>{type}</Text>
    </View>
  );
}
