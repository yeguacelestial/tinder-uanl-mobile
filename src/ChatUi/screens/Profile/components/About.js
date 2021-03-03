import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { gs, colors } from '../styles';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={gs.sectionTitle}>Acerca de mí</Text>
      <Text style={styles.about}>
        His palms are sweaty, knees weak, arms are heavy. There's vomit on his
        sweater already: Mom's spaghetti. He's nervous, but on the surface he
        looks calm and ready, To drop.
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
