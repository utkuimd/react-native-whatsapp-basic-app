import React from 'react';
import {SafeAreaView, Text, FlatList, StyleSheet, View} from 'react-native';
import SearchBar from '../components/SearchBar';
import ChatPreview from '../components/ChatPreview';
import ChatSeparator from '../components/ChatSeparator';
import chat_data from '../chat-data.json';
import IconFeather from 'react-native-vector-icons/Feather';

function Home(props) {

  const renderChatPreview = ({item}) =>  <ChatPreview chat={item} gotochat={goToChat}/>
  const renderSeparator = () => <ChatSeparator />

  const goToChat = (id) => {
    chat_data.map(chat => {
      if(chat.id === id){
        const chatobject = {
          firstName: chat.firstName,
          lastName: chat.lastName,
          profilePicture: chat.profilePictureURL,
          messages: chat.messages,
        }
        props.navigation.navigate('ChatScreen', {chatObject: chatobject})
      }
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.editChats}>
        <Text style={styles.editChats_text}>Düzenle</Text>
        <IconFeather name="edit" size={25} color="blue" />
      </View>
      <View style={styles.searchChats}>
        <Text style={styles.searchChats_text}>Sohbetler</Text>
        <SearchBar />
      </View>
      <View style={styles.createGroupOrLists}>
        <Text style={styles.createMessageLists}>Toplu Mesaj Listeleri</Text>
        <Text style={styles.createGroup}>Yeni Grup</Text>
      </View>
      <View style={styles.separator}/>
      <FlatList 
        data={chat_data}
        renderItem={renderChatPreview}
        ItemSeparatorComponent={renderSeparator}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  editChats: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    marginBottom: 10,
    justifyContent: 'space-between',
  },

  editChats_text: {
    fontSize: 18,
    color: 'blue',
    textDecorationLine: 'underline',
    alignSelf: 'center',
  },

  searchChats: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },

  searchChats_text: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },

  createGroupOrLists: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'space-between',
  },

  createMessageLists: {
    fontSize: 18,
    color: 'blue',
    textDecorationLine: 'underline',
  },

  createGroup: {
    fontSize: 18,
    color: 'blue',
    textDecorationLine: 'underline',
  },

  separator: {
    borderWidth: 1,
    borderColor: '#dcdcdc',
  },

})

export default Home;
