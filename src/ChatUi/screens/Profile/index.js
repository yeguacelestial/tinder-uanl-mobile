import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';

import Header from './components/Header';
import Stats from './components/Stats';
import About from './components/About';
import Location from './components/Location';
import Photos from './components/Photos';

import { styles, gs } from './styles';

const Profile = () => {
  const [userData, setUserData] = React.useState({
    user: {},
    isLoading: true,
  });

  // componentDidMount
  React.useEffect(() => {
    async function fetchRandomData() {
      try {
        let res = await fetch(
          'http://randomuser.me/api/?inc=name,picture,location&noinfo',
        );
        let users = await res.json();

        setUserData({
          user: users.results[0],
          isLoading: false,
        });
      } catch (err) {
        console.log(err);
      }
    }
    fetchRandomData();
  }, []);

  if (userData.isLoading) {
    return (
      <View style={[gs.center, styles.container]}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <ScrollView style={styles.container}>
      <Header user={userData.user} />
      <Stats />
      <About />
      <Location />
      <Photos />
    </ScrollView>
  );
};

export default Profile;
