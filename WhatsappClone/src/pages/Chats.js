import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';

function Chats() {
  return (
    <SafeAreaView>
      <Text>ChatScreen</Text>
      <IconFeather name="file" size={30} style={{transform: [{rotateX: '180deg'}]}} />
    </SafeAreaView>
  );
}

export default Chats;
