import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InfoBox = ({name}) => {
    return (
        <View style={{
            padding: 10,
            borderRadius: 10,
            width: '80%',
            
        }}>
            <Text style={{
                fontSize: 16,
            }}>
                Hello: {name}
            </Text>
        </View>
    );
}
export default InfoBox;