import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-community/masked-view';

import { gs, colors } from '../styles';

const Location = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 60,
          justifyContent: 'center',
          margin: 10,
          marginRight: 12,
        }}
      >
        <MaterialIcons
          name="location-on"
          size={50}
          color="black"
          style={{ flex: 1, color: colors.orange }}
        />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.location}>Mexico</Text>
        <Text style={styles.distance}>227 km away</Text>
      </View>

      <Entypo name="chevron-right" size={24} color={colors.darkHl} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...gs.rowCenter,
    backgroundColor: colors.lightBg,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  location: {
    fontSize: 18,
    color: colors.text,
    fontWeight: 'bold',
  },

  distance: {
    ...gs.smallText,
    color: colors.darkHl,
    marginTop: 4,
    textTransform: 'uppercase',
  },
});

export default Location;
