import React from 'react';
import {SafeAreaView, Text, View, Image, StyleSheet, Dimensions} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import IconSimpleLine from 'react-native-vector-icons/SimpleLineIcons';

function Chats() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userDetailandCall}>
      <IconFeather name="chevron-left" size={35} color="blue" />
        <View style={styles.userDetail}>
          <Image style={styles.profilePicture} source={{uri: 'https://images.unsplash.com/photo-1481214110143-ed630356e1bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}}/>
          <Text style={styles.username}>username</Text>
        </View>
        <View style={styles.callUser}>
          <IconFeather name="video" size={30} color="blue" />
          <IconFeather name="phone" size={30} color="blue" />
        </View>
      </View>
      <IconFeather name="file" size={30} style={{transform: [{rotateX: '180deg'}]}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  userDetailandCall: {
    width: '100%',
    height: Dimensions.get('window').height / 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
  },

  userDetail: {
    flex: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  callUser: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },

  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },

})

export default Chats;
