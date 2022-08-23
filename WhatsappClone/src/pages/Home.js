import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';

function Home(props) {
  const goToChat = () => {
    props.navigation.navigate('ChatScreen');
  }
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Button title="go to ChatScreen" onPress={goToChat} />
      <IconFeather name="edit" size={30} color="blue" />
      <IconFeather name="file" size={30} style={{transform: [{rotateX: '180deg'}]}} />
    </SafeAreaView>
  );
}

export default Home;
