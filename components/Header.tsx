import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View
        style={{
          gap: 100,
          alignItems: 'center',
        }}
      >
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={{
            width: '100%',
            height: 300,
          }}

        />
        <Text
          style={{
            marginBottom: 45,
            fontSize: 24,
            padding: 5,
            backgroundColor: 'black',
            color: 'white',
            textAlign: 'center',
            borderRadius: 5,
          }}
        >
          Hello World Welcome to my life!
      </Text>
    </View>
  );
}
export default Header;