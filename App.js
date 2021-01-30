import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Main from './src/Main';

import ChatUi from './src/ChatUi';

export default function App() {
  return (
    <>
      {/* <Main /> */}
      <ChatUi />
      <StatusBar style="auto" />
    </>
  );
}
