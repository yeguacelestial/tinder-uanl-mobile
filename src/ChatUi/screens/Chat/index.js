import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Animated,
  FlatList,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';

import Profiles from '../../../utils/components/Profiles';

// Styled components
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from '../styledComponents';

const Messages = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../../../../assets/users/user-3.jpg'),
    messageTime: '4 mins ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../../../../assets/users/user-1.jpg'),
    messageTime: '2 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../../../../assets/users/user-4.jpg'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../../../../assets/users/user-6.jpg'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../../../../assets/users/user-7.jpg'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
];

const Chat = (props) => {
  const URL = 'https://api.github.com/users';
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const pan = React.useRef(new Animated.ValueXY()).current;
  const list = React.useRef(new Animated.ValueXY()).current;

  React.useEffect(
    function () {
      const getData = async () => {
        const resp = await fetch(URL);
        const data = await resp.json();
        setData(data);
        setLoading(false);
      };
      getData();

      Animated.timing(pan, {
        toValue: { x: -400, y: 0 },
        delay: 1000,
        useNativeDriver: false,
      }).start();

      Animated.timing(list, {
        toValue: { x: 0, y: -300 },
        delay: 2000,
        useNativeDriver: false,
      }).start();
    },
    [list, pan],
  );

  return (
    <LinearGradient colors={['#ea3372', '#ea3372']} style={styles.gradient}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>El Ganado™ </Text>
      </View>
      <ScrollView
        horizontal
        style={styles.preContainer}
        showsHorizontalScrollIndicator={false}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#FFF" />
        ) : (
          <Animated.View style={[pan.getLayout(), styles.card]}>
            {data.map((item, index) => (
              <Profiles
                key={item.id}
                username={item.login}
                uri={item.avatar_url}
              />
            ))}
          </Animated.View>
        )}
      </ScrollView>

      <View style={styles.ops}>
        <View style={styles.col}>
          <Text style={styles.day}>Mensajes</Text>
        </View>

        <Container>
          <FlatList
            data={Messages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Card
                onPress={() =>
                  props.navigation.navigate('Discussion', {
                    userName: item.userName,
                  })
                }
              >
                <UserInfo>
                  <UserImgWrapper>
                    <UserImg source={item.userImg} />
                  </UserImgWrapper>

                  <TextSection>
                    <UserInfoText>
                      <UserName>{item.userName}</UserName>
                      <PostTime>{item.messageTime}</PostTime>
                    </UserInfoText>

                    <MessageText>{item.messageText}</MessageText>
                  </TextSection>
                </UserInfo>
              </Card>
            )}
          />
        </Container>
      </View>
    </LinearGradient>
  );
};

export default Chat;
