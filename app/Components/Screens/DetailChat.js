import {useRoute} from '@react-navigation/core';
import {IconButton} from 'react-native-paper';
import React, {useCallback, useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {GiftedChat, Bubble, Send} from 'react-native-gifted-chat';
import Header from '../Layout/Header';
// import Fire from '../../../fire';

export default function DetailChat() {
  const route = useRoute();
  const {item} = route.params;

  const [messages, setMessages] = useState([]);

  //change style box chat
  function renderBubble(props) {
    return (
      // Step 3: return the component
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            // Here is the color change
            backgroundColor: '#6646ee',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  }

  //change style icon send
  function renderSend(props) {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <IconButton icon="send-circle" size={32} color="#6646ee" />
        </View>
      </Send>
    );
  }

  //change style scroll
  function scrollToBottomComponent() {
    return (
      <View style={styles.bottomComponentContainer}>
        <IconButton icon="chevron-double-down" size={36} color="#6646ee" />
      </View>
    );
  }

  function renderLoading() {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6646ee" />
      </View>
    );
  }

  const a = {
    // const data = {
    //   _id: 2,
    //   text: 'Xin chao moi nguoi',
    //   createdAt: new Date(),
    //   user: {
    //     _id: 1,
    //     name: 'React Native',
    //     avatar: 'https://placeimg.com/140/140/any',
    //   },
    // };
    // const data2 = {
    //   _id: 1,
    //   text: 'Xin chao',
    //   createdAt: new Date(),
    //   user: {
    //     _id: 2,
    //     name: 'React Native',
    //     avatar: 'https://placeimg.com/140/140/any',
    //   },
    // };
    // const dataArr = [];
    // dataArr.unshift(data2);
    // useEffect(() => {
    //   setMessages(dataArr);
    // }, []);
  };

  useEffect(() => {
    const messagesListener = firestore()
      .collection('Users')
      .doc(item.key)
      .collection('MESSAGES')
      .orderBy('createdAt', 'desc')
      .onSnapshot((querySnapshot) => {
        const messages = querySnapshot.docs.map((doc) => {
          const firebaseData = doc.data();

          const data = {
            _id: doc.id,
            text: '',
            createdAt: new Date().getTime(),
            ...firebaseData,
          };

          if (!firebaseData.system) {
            data.user = {
              ...firebaseData.user,
              name: firebaseData.user.email,
            };
          }

          return data;
        });

        setMessages(messages);
      });

    return () => messagesListener();
  }, []);

  const onSend = useCallback((messages = []) => {
    //them du lieu hien thi len man  hinh
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
    const text = messages[0].text;
    //luu du lieu vao firestore
    firestore()
      .collection('Users')
      .doc(item.key)
      .collection('MESSAGES')
      .add({
        text,
        createdAt: new Date().getTime(),
        user: {
          _id: item.id,
          email: item.email,
          avatar: item.avatar,
        },
      });

    //get last mess
    firestore()
      .collection('Users')
      .doc(item.key)
      .set(
        {
          latestMessage: {
            text,
            createdAt: new Date().getTime(),
          },
        },
        {merge: true},
      );
  }, []);

  return (
    <View style={{flex: 1}}>
      <Header item={item} />
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: item.id,
          name: item.name,
          avatar: item.avatar,
        }}
        renderBubble={renderBubble}
        placeholder="Type your message here..."
        // showUserAvatar
        alwaysShowSend
        renderSend={renderSend}
        scrollToBottomComponent={scrollToBottomComponent}
        renderLoading={renderLoading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sendingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomComponentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
