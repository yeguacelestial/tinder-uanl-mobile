import React from 'react';
import { View, Text, Button } from 'react-native';
import { openAuthSession } from 'azure-ad-graph-expo';

import { styles } from './styles';
import { azureAdAppProps } from '../utils/config';

export default function AzureAuth() {
  const [authState, setAuthState] = React.useState({
    result: null,
  });

  const handlePressAsync = async () => {
    let result = await openAuthSession(azureAdAppProps);
    setAuthState({
      result: result,
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Login" onPress={handlePressAsync} />

      {authState.result ? (
        <Text>{JSON.stringify(authState.result)}</Text>
      ) : (
        <Text>Nothing to see here.</Text>
      )}
    </View>
  );
}
