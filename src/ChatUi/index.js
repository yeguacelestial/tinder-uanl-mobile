import React from 'react';
import ChatStackNavigator from './ChatStackNavigator';
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

const ChatUi = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <ChatStackNavigator />;
};

export default ChatUi;
