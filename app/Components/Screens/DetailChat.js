import { useRoute } from '@react-navigation/core';
import * as React from 'react';
import {SafeAreaView, KeyboardAvoidingView, Platform, View, Text} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
// import Fire from '../../../fire';

export default function DetailChat() {
  const route = useRoute();
  const {item} = route.params;
  return <View>
    <Text>{item.name}</Text>
  </View>;
}
