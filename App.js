import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Onboarding from './src/Onboarding';
import ChatUi from './src/ChatUi';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar style="light" translucent />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* <Stack.Screen name="Onboarding" component={Onboarding} /> */}
          <Stack.Screen name="ChatUi" component={ChatUi} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
