import * as React from 'react';
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Animated,
  Image,
  Alert,
} from 'react-native';

import AwesomeButtonC137 from 'react-native-really-awesome-button/src/themes/c137';

import { styles } from './styles';

import { openAuthSession } from 'azure-ad-graph-expo';
import { azureAdAppProps } from '../utils/config';

import ChatUi from '../ChatUi/index.js';

const { width, height } = Dimensions.get('screen');

const bgs = ['#303F9F', '#FF5252', '#009688', '#512DA8'];
const DATA = [
  {
    key: '3571572',
    title: 'Alentando la flama del amor...',
    description: 'y de la verdad.',
    image: 'https://www.pngrepo.com/png/312184/512/fire.png',
  },
  {
    key: '3571747',
    title: 'Liga con la raza de tu álma mater',
    description:
      'Tu correo se utilizará para verificar que perteneces a la Uni',
    image: 'https://www.pngrepo.com/png/245145/512/love-like.png',
  },
  {
    key: '3571680',
    title: 'Encuentra a tu alma gemela universitari@',
    description: 'Ninguna facultad es discriminada.',
    image: 'https://www.pngrepo.com/png/247192/512/couple.png',
  },
  {
    key: '3571603',
    title: 'Chatea con los matches de tu facultad',
    description: '...y de las otras facultades también.',
    image: 'https://www.pngrepo.com/png/289855/512/chat-love-and-romance.png',
  },
];

const Indicator = ({ scrollX }) => {
  return (
    <View style={styles.indicatorView}>
      {DATA.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.4, 0.9, 0.4],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={`indicator-${i}`}
            style={[
              styles.currentIndicator,
              { opacity, transform: [{ scale }] },
            ]}
          />
        );
      })}
    </View>
  );
};

const Backdrop = ({ scrollX }) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: bgs.map((_, i) => i * width),
    outputRange: bgs.map((bg) => bg),
  });

  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        {
          backgroundColor,
        },
      ]}
    />
  );
};

const Square = ({ scrollX }) => {
  const YOLO = Animated.modulo(
    Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)),
    1,
  );

  const rotate = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['35deg', '0deg', '35deg'],
  });

  const translateX = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -height, 0],
  });

  return (
    <Animated.View
      style={[
        styles.square,
        {
          transform: [
            {
              rotate,
            },
            {
              translateX,
            },
          ],
        },
      ]}
    />
  );
};

export default function Onboarding({ navigation }) {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  // AzureAD Auth
  const [authState, setAuthState] = React.useState({
    result: null,
  });

  const handlePressAsync = async () => {
    // Get session token from Azure AD
    let token = await openAuthSession(azureAdAppProps);

    await postReceivedToken(token);
  };

  async function postReceivedToken(token) {
    try {
      let response = await fetch(
        'https://django-microsoft-auth.herokuapp.com/dj-rest-auth/microsoft/',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_token: token,
          }),
        },
      );
      let responseJson = await response.json();
      setAuthState({
        result: responseJson,
      });
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent />
      <Backdrop scrollX={scrollX} />

      <Square scrollX={scrollX} />
      <Animated.FlatList
        data={DATA}
        keyExtractor={(item) => item.key}
        horizontal
        scrollEventThrottle={32}
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
        contentContainerStyle={styles.flatlistContentContainer}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={styles.flatlistMainView}>
              <View style={styles.flatlistImageView}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.flatlistImage}
                />
              </View>

              {authState.result ? (
                <Text style={{ color: 'white' }}>
                  {authState.result.key
                    ? navigation.navigate('ChatUi')
                    : Alert.alert(
                        'Error al iniciar sesion',
                        JSON.stringify(authState.result),
                      )}
                </Text>
              ) : (
                <Text />
              )}

              <View style={styles.carouselTextView}>
                <Text style={styles.carouselTitle}>{item.title}</Text>
                <Text style={styles.carouselSubtitle}>{item.description}</Text>
              </View>
            </View>
          );
        }}
      />

      <View style={styles.buttonContainer}>
        <AwesomeButtonC137
          type="secondary"
          style={styles.signupContainer}
          width={380}
          height={60}
          borderRadius={15}
          onPress={(next) => {
            handlePressAsync();
            next();
          }}
        >
          <Image
            source={require('../../assets/uni-logo.jpg')}
            style={styles.signupImage}
          />
          <Text style={styles.signup}>
            Inicia sesión con tu correo universitario
          </Text>
        </AwesomeButtonC137>
      </View>

      <Indicator scrollX={scrollX} />
    </View>
  );
}
