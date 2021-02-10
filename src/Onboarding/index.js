import * as React from 'react';
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Animated,
  Image,
} from 'react-native';
const { width, height } = Dimensions.get('screen');

// https://www.flaticon.com/packs/retro-wave
// inspiration: https://dribbble.com/shots/11164698-Onboarding-screens-animation

const bgs = ['#A5BBFF', '#DDBEFE', '#FF63ED', '#B98EFF'];
const DATA = [
  {
    key: '3571572',
    title: 'Tinder UANL',
    description: 'Alentando la flama de la verdad...y del amor',
    image: 'https://www.pngrepo.com/png/312184/512/fire.png',
  },
  {
    key: '3571747',
    title: 'Liga de una forma segura',
    description:
      '¿Problemas ligando con gente de otras universidades? Solo las personas con correo universitario UANL pueden accesar a la plataforma.',
    image: 'https://www.pngrepo.com/png/245145/512/love-like.png',
  },
  {
    key: '3571680',
    title: 'Encuentra a tu alma gemela universitari@',
    description:
      'Tinder UANL es inclusivo, para todas las facultades de la universidad.',
    image: 'https://www.pngrepo.com/png/247192/512/couple.png',
  },
  {
    key: '3571603',
    title: 'Monitored global data-warehouse',
    description: 'We need to program the open-source IB interface!',
    image: 'https://www.pngrepo.com/png/289855/512/chat-love-and-romance.png',
  },
];

const Indicator = ({ scrollX }) => {
  return (
    <View style={{ position: 'absolute', bottom: 100, flexDirection: 'row' }}>
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
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: '#fff',
              opacity,
              margin: 10,
              transform: [{ scale }],
            }}
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
      style={{
        width: height,
        height: height,
        backgroundColor: '#fff',
        borderRadius: 86,
        position: 'absolute',
        top: -height * 0.6,
        left: -height * 0.3,
        transform: [
          {
            rotate,
          },
          {
            translateX,
          },
        ],
      }}
    />
  );
};

export default function App() {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <StatusBar hidden />
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
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width,
                alignItems: 'center',
                padding: 20,
              }}
            >
              <View
                style={{
                  flex: 0.7,
                  justifyContent: 'center',
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: width / 2,
                    height: height / 2,
                    resizeMode: 'contain',
                  }}
                />
              </View>

              <View style={{ flex: 0.3 }}>
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 28,
                    marginBottom: 10,
                  }}
                >
                  {item.title}
                </Text>
                <Text style={{ color: '#fff', fontWeight: '300' }}>
                  {item.description}
                </Text>
              </View>
            </View>
          );
        }}
      />

      <Indicator scrollX={scrollX} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
