import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { gs } from '../styles';

const photos = [
  require('../../../../../assets/profile1.jpeg'),
  require('../../../../../assets/profile2.jpeg'),
  require('../../../../../assets/profile3.jpeg'),
  require('../../../../../assets/profile4.jpeg'),
  require('../../../../../assets/profile5.jpeg'),
  require('../../../../../assets/profile6.jpeg'),
];

export default function Photos() {
  return (
    <View style={[gs.sectionContainer, { marginTop: 8 }]}>
      <Text style={gs.sectionTitle}>Mis fotos</Text>

      <View style={styles.photosContainer}>
        {photos.map((photo, index) => {
          return (
            <Image
              source={photo}
              key={index}
              style={[
                styles.photo,
                { marginRight: (index + 1) % 3 === 0 ? 0 : 10 },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  photosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  },
  photo: {
    width: 108,
    height: 108,
    marginBottom: 12,
    borderRadius: 8,
  },
});
