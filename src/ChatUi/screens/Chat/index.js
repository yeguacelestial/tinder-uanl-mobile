import React from 'react';
import { View, Text, ActivityIndicator, Animated } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { LinearGradient } from 'expo-linear-gradient';
import Entypo from '@expo/vector-icons/Entypo';
import Icon from '@expo/vector-icons/MaterialIcons';

import { styles } from './styles';

import Profiles from '../../../utils/components/Profiles';
import Message from '../../../utils/components/Message';

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

  console.log(data.login);

  return (
    <LinearGradient colors={['#ea3372', '#ea3372']} style={styles.gradient}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Matches</Text>
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
          <Entypo name="dots-three-horizontal" color="#000119" size={30} />
        </View>

        <ScrollView>
          {loading ? (
            <ActivityIndicator size="large" color="#f20042" />
          ) : (
            <Animated.View style={[list.getLayout(), styles.list]}>
              {data.map((item, index) => (
                <Message
                  key={item.id}
                  username={item.login}
                  uri={item.avatar_url}
                  count={Math.floor(Math.random() * 3)}
                  onPress={() => {
                    props.navigation.navigate('Discussion', {
                      itemId: item.id,
                      itemName: item.login,
                      itemPic: item.avatar_url,
                    });
                  }}
                />
              ))}
            </Animated.View>
          )}
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default Chat;
