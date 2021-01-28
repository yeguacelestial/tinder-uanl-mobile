import React from 'react';

import { Text, View } from 'react-native';

import { pets as petsArray } from './data';
import Card from '../Card';

import { styles } from './styles';
import Footer from '../Footer';

export default function Main() {
  const [pets, setPets] = React.useState(petsArray);

  return (
    <View style={styles.container}>
      {pets
        .map(({ name, source }, index) => {
          const isFirst = index === 0;
          return (
            <Card key={name} name={name} source={source} isFirst={isFirst} />
          );
        })
        .reverse()}

      <Footer />
    </View>
  );
}
