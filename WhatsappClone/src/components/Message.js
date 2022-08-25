import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Message = ({message}) => {
    const date = new Date(message.datetime);
    return (
        <View style={styles.container}>
            <View style={styles.comingMessage}>
                <Text style={styles.messageText}>{message.text}</Text>
                <Text style={styles.messageDate}>{date.getUTCHours()}:{date.getUTCMinutes()}</Text>
            </View>
            <View style={styles.space}></View>
            
        </View>
    )
}

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
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 7,
        paddingBottom: 5,
        flexDirection: 'row',
    },

    space: {
        flex: 1,
    },

    messageText: {
        fontSize: 18,
        color: 'black',
    },

    messageDate: {
        marginLeft: 10,
        alignSelf: 'flex-end',
        marginTop: 10,
    },

})

export default Message;