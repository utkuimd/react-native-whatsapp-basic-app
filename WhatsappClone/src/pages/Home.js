import React from 'react';
import {SafeAreaView, Text, FlatList, StyleSheet, View} from 'react-native';
import ChatPreview from '../components/ChatPreview';
import ChatSeparator from '../components/ChatSeparator';
import FlatlistHeader from '../components/FlatlistHeader';
import chat_data from '../chat-data.json';
import IconFeather from 'react-native-vector-icons/Feather';

function Home(props) {
  const renderChatPreview = ({item}) => (
    <ChatPreview chat={item} gotochat={goToChat} />
  );

  const renderSeparator = () => <ChatSeparator />;

  const goToChat = id => {
    chat_data.map(chat => {
      if (chat.id === id) {
        const chatobject = {
          firstName: chat.firstName,
          lastName: chat.lastName,
          profilePicture: chat.profilePictureURL,
          messages: chat.messages,
        };
        props.navigation.navigate('ChatScreen', {chatObject: chatobject});
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.editChats}>
        <Text style={styles.editChats_text}>Düzenle</Text>
        <IconFeather name="edit" size={25} color="blue" />
      </View>
      <FlatList
        ListHeaderComponent={() => <FlatlistHeader />}
        data={chat_data}
        renderItem={renderChatPreview}
        ItemSeparatorComponent={renderSeparator}
        bounces={true}
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
});

export default Home;
