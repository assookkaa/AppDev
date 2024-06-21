import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Input = ({ info, setInfo }) => {
    return (
        <View
            style={{
                gap: 10,
                alignItems: 'center',
            }}
        >
            <Text
                style={{
                    fontSize: 16
                }}
            >
                This is what you typed:
            </Text>
            <View style={{
                backgroundColor: 'white',
                padding: 10,
                borderRadius: 10,
                width: '80%',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: 16
                }}>
                    {info}
                </Text>
            </View>

            <TextInput
                placeholder='Please input something here'
                value={info}
                onChangeText={setInfo}
                style={{
                    backgroundColor: 'white',
                    padding: 15,
                    borderRadius: 10,
                    opacity: .5
                }}

            />
        </View>
    );
}
export default Input;