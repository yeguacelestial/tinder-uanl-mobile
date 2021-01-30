import React from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from './styles';

const Input = ({ inputMessage, onSendPress, setMessage }) => {
  return (
    <View style={styles.container}>
      <Entypo name="emoji-happy" color="#fff" size={30} />
      <TextInput
        placeholder="Some text"
        value={inputMessage}
        onChangeText={setMessage}
        style={styles.input}
      />

      <TouchableOpacity onPress={onSendPress}>
        <Ionicons name="ios-send" color="#fff" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default Input;
