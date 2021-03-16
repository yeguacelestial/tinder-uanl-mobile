import React from 'react';
import { View, Text } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import {
  Bubble,
  GiftedChat,
  Send,
  InputToolbar,
  Composer,
} from 'react-native-gifted-chat';

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
            backgroundColor: '#ea3372',
          },
          left: {
            backgroundColor: '#2e64e5',
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
            size={20}
            color="#2e64e5"
            style={{ marginBottom: 10, marginRight: 10 }}
          />
        </View>
      </Send>
    );
  };

  const customInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: '#000',
          borderTopColor: '#2e64e5',
          borderTopWidth: 1,
        }}
      />
    );
  };

  const customComposer = (props) => {
    return (
      <Composer
        {...props}
        placeholder={'Escribe tu mensaje aquí...'}
        textInputStyle={{ color: 'white' }}
      />
    );
  };
  const scrollToBottomComponent = () => {
    return <FontAwesome name="angle-double-down" size={24} color="#2e64e5" />;
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
      renderInputToolbar={customInputToolbar}
      renderComposer={customComposer}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
      messagesContainerStyle={{ backgroundColor: 'black' }}
    />
  );
};

export default Discussion;
