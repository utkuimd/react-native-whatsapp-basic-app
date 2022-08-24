import React from 'react';
import {View ,Text, Image, StyleSheet} from 'react-native';

const ChatPreview = ({chat}) => {
    const lastText = chat.messages[chat.messages.length - 1].text;
    const lastDateTime = new Date(chat.messages[chat.messages.length - 1].datetime);
    const projectDate = new Date("2022-08-24T15:00:00.000Z");
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const handleDate = () => {
        if(projectDate.getFullYear() === lastDateTime.getFullYear() && projectDate.getMonth() === lastDateTime.getMonth() && projectDate.getDate() === lastDateTime.getDate()) {
            return <Text style={styles.date}>{lastDateTime.getUTCHours()}:{lastDateTime.getUTCMinutes()}</Text>
        }
        else if(projectDate.getFullYear() === lastDateTime.getFullYear() && projectDate.getMonth() === lastDateTime.getMonth() && (projectDate.getDate() - lastDateTime.getDate()) < 7){
            return <Text style={styles.date}>{days[lastDateTime.getUTCDay()]}</Text>
        }
        else {
            return <Text style={styles.date}>{lastDateTime.getUTCDate()}.{lastDateTime.getUTCMonth() + 1}.{lastDateTime.getUTCFullYear()}</Text>
        }
    }
    
    return (
        <View style={styles.container}>
            <Image style={styles.profilePicture} source={{uri: chat.profilePictureURL}} />
            <View style={styles.body}>
                <View>
                    <Text style={styles.user}>{chat.firstName} {chat.lastName}</Text>
                    <Text style={styles.lastText}>{lastText}</Text>
                </View>
                {handleDate()}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
    },

    profilePicture: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
    },

    body: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 15,
    },

    user: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },

    lastText: {
        fontSize: 16,
    },

    date:{
        fontSize: 16,
    }

})

export default ChatPreview;