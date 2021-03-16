import React from 'react';
import { View, Text, Image, Keyboard } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/AntDesign';
import LastWatch from '../../../utils/components/LastWatch';
import Received from '../../../utils/components/Received';
import Sent from '../../../utils/components/Sent';
import Data from '../../../utils/dummy/Data.json';
import Input from '../../../utils/components/Input';

import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';

import { styles } from './styles';

const Discussion = (props) => {
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },

      {
        _id: 2,
        text: 'Hello world',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = React.useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#2e64e5',
          },
          left: {
            backgroundColor: 'black',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
          left: {
            color: '#fff',
          },
        }}
      />
    );
  };

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <MaterialIcons
            name="send"
            size={23}
            color="#2e64e5"
            style={{ marginBottom: 10, marginRight: 10 }}
          />
        </View>
      </Send>
    );
  };

  const scrollToBottomComponent = () => {
    return <FontAwesome name="angle-double-down" size={24} color="#333" />;
  };

  return (
    // <LinearGradient
    //   colors={['#f26a50', '#f26a50', '#f20045']}
    //   style={styles.container}
    // />
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    />
  );
};

export default Discussion;
