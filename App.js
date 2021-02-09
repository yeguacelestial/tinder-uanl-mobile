import { StatusBar } from 'expo-status-bar';
import React from 'react';

import ChatUi from './src/ChatUi';
import Onboarding from './src/Onboarding';
import AzureAuth from './src/AzureAuth';

export default function App() {
  return (
    <>
      {/* {<AzureAuth />} */}
      <Onboarding />
      {/* <ChatUi /> */}
      <StatusBar style="auto" />
    </>
  );
}
