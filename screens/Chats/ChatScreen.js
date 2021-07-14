import React, { useCallback, useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';

import {  GiftedChat, Send } from 'react-native-gifted-chat';


export default function ChatScreen() {
  
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
        _id: 2,
        text: 'Hello ',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  },

    [])
  
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <Image
          source={require('../../assests/images/send.png')}
          style={{width:30,height:30,marginHorizontal:10}}
          />
        </View>
      </Send>
    )
  }

  //  const renderBubble=(props)=>{
  //    return(
  //    <Bubble
  //    {...props}
  //    wrapperStyle={{
  //      right:{
  //        backgroundColor:'#2e64e5'
  //      }
  //    }}
  //    textStyle={{
  //      right:{
  //        color:'#fff'
  //      }
  //    }}
  //    />
  //    )
  //  }
  const scrollToBottomComponent = (props) => {
    return (
      <FontAwesome name='angle-double-down' size={22} color='#333' />
    );
  }
  return(
  <GiftedChat
    messages={messages}
    onSend={messages => onSend(messages)}
    // user={{
    //   _id: 1,
    //   renderBubble={renderBubble}
    // }}
    alwaysShowSend
    renderSend={renderSend}
    scrollToBottom
    scrollToBottomComponent={scrollToBottomComponent}
  />
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
