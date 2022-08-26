import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Message = ({message}) => {
  const date = new Date(message.datetime);
  return (
    <View style={styles.container}>
      <View style={styles.comingMessage}>
        <Text style={styles.messageText}>{message.text}</Text>
        <Text
          style={
            message.text.length > 32
              ? styles.messageDate_mutiple
              : styles.messageDate_single
          }>
          {date.getUTCHours()}:{date.getUTCMinutes()}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 20,
  },

  comingMessage: {
    backgroundColor: 'white',
    borderRadius: 15,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 7,
    paddingBottom: 5,
    maxWidth: '80%',
    flexDirection: 'row',
  },

  messageText: {
    fontSize: 18,
    color: 'black',
  },

  messageDate_single: {
    alignSelf: 'flex-end',
    marginLeft: 10,
    marginTop: 10,
  },

  messageDate_mutiple: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
});

export default Message;
