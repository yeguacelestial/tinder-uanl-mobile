import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { gs, colors } from '../styles';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={gs.sectionTitle}>ABOUT ME</Text>
      <Text style={styles.about}>
        May I have your attention, please?. Will the real Slim Shady please
        stand up?. I repeat, will the real Slim Shady please stand up?. We're
        gonna have a problem here. Y'all act like you never seen a white person
        before.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  about: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.darkHl,
    marginTop: 8,
    lineHeight: 22,
  },
});

export default About;
