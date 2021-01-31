import { StatusBar } from 'expo-status-bar';
import React from 'react';

import ChatUi from './src/ChatUi';
import Onboarding from './src/Onboarding';

export default function App() {
  return (
    <>
      <Onboarding />
      {/* <ChatUi /> */}
      <StatusBar style="auto" />
    </>
  );
}
