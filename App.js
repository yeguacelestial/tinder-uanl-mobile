import { StatusBar } from 'expo-status-bar';
import React from 'react';

import ChatUi from './src/ChatUi';

export default function App() {
  return (
    <>
      <ChatUi />
      <StatusBar style="auto" />
    </>
  );
}
