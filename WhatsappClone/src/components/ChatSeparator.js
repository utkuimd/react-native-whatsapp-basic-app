import React from 'react';
import {View, StyleSheet} from 'react-native';

const ChatSeparator = () => {
  return (
    <View style={styles.container}>
      <View style={styles.transparent}></View>
      <View style={styles.separator}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },

  transparent: {
    width: 115,
    borderWidth: 1,
    borderColor: 'transparent',
  },

  separator: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#dcdcdc',
  },
});

export default ChatSeparator;
