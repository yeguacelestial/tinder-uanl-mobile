import React from 'react';
import { View, Text, Image } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/AntDesign';
import LastWatch from '../../../utils/components/LastWatch';
import Received from '../../../utils/components/Received';
import Sent from '../../../utils/components/Sent';
import Data from '../../../utils/dummy/Data.json';
import Input from '../../../utils/components/Input';

import { styles } from './styles';

const Discussion = ({ route, navigation }) => {
  const { itemName, itemPic } = route.params;
  const [inputMessage, setMessage] = React.useState('');

  const send = () => {
    Data.push({ id: inputMessage, message: inputMessage });
    setMessage('');
  };

  let txt = [];
  for (let i = 5; i < Data.length; i++) {
    txt.push(<Sent key={Data[i].id} message={Data[i].message} />);
  }
  console.log(Data);

  return (
    <LinearGradient
      colors={['#f26a50', '#f26a50', '#f20045']}
      style={styles.container}
    >
      <View style={styles.main}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="left" color="#000119" size={24} />
          </TouchableOpacity>
          <Text style={styles.username}>{itemName}</Text>
          <Image source={{ uri: itemPic }} style={styles.avatar} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <LastWatch checkedOn="Yesterday" />
          <Received image={itemPic} message={Data[0].message} />

          <Sent message={Data[1].message} />

          <Received image={itemPic} message={Data[2].message} />

          <Sent message={Data[3].message} />

          <LastWatch checkedOn="Today" />

          <Received image={itemPic} message={Data[4].message} />

          <View>{txt}</View>
        </ScrollView>
      </View>
      <Input
        inputMessage={inputMessage}
        setMessage={(inputMessage) => setMessage(inputMessage)}
        onSendPress={send}
      />
    </LinearGradient>
  );
};

export default Discussion;
