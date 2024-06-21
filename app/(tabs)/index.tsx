import React, { useState } from 'react';
import { ScrollView, TextInput, View, Image, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import InfoBox from '@/components/InfoBox';
import Input from '@/components/Input';

const trustMeItsAnApp = () => {

  const [info, setInfo] = useState('');

  console.log(info);

  return (
    <ScrollView>
      <Header />
      <InfoBox name='Sir' />
      <InfoBox name='Christian' />
      <InfoBox name='Franc' />
      <Input info={info} setInfo={setInfo} />
    </ScrollView>
  );
}
export default trustMeItsAnApp;