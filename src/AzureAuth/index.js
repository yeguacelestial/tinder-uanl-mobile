import React from 'react';
import { View, Text, Button } from 'react-native';
import { openAuthSession } from 'azure-ad-graph-expo';

import { styles } from './styles';
import { azureAdAppProps } from '../utils/config';

export default function AzureAuth() {
  const [authState, setAuthState] = React.useState({
    result: null,
  });

  async function postReceivedToken(token) {
    try {
      let response = await fetch(
        'https://django-microsoft-auth.herokuapp.com/dj-rest-auth/microsoft/',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_token: token,
          }),
        },
      );
      let responseJson = await response.json();
      setAuthState({
        result: responseJson,
      });
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }

  const handlePressAsync = async () => {
    // Get session token from Azure AD
    let token = await openAuthSession(azureAdAppProps);

    await postReceivedToken(token);
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
