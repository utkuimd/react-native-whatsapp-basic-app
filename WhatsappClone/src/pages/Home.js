import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

function Home(props) {
  const goToChat = () => {
    props.navigation.navigate('ChatScreen');
  }
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Button title="go to ChatScreen" onPress={goToChat}/>
    </SafeAreaView>
  );
}

export default Home;
