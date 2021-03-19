import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import ChatItem from '../Item/ChatItem';
import {
  themeColor,
  backgroundLight,
  backgroundDark,
  ChatItemLight,
  TextDark,
} from '../Theme/color';

function getUsers() {
  //read
  // firestore()
  //   .collection('Users')
  //   .get()
  //   .then((querySnapshot) => {
  //     console.log('Total users: ', querySnapshot.size);
  //     querySnapshot.forEach((documentSnapshot) => {
  //       console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
  //     });
  //   });
  //write
  // firestore()
  //   .collection('ChatTest')
  //   .add({
  //     name: 'Truong Tan Sang',
  //     _id: 2,
  //     _id_receive: 1,
  //     create_at: '',
  //     name_receive: 'Tan',
  //     text: 'Xin chao tat ca cac ban, toi la react native',
  //   })
  //   .then(() => {
  //     console.log('User added!');
  //   });
  // firestore()
  //   .collection('Messages')
  //   .get()
  //   .then((querySnapshot) => {
  //     console.log('Total users: ', querySnapshot.size);
  //     querySnapshot.forEach((documentSnapshot) => {
  //       console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
  //     });
  //   });
  // firestore().collection('Users').add({
  //   id: 1,
  //   name: 'Truong Hung',
  //   email: 'a@gmail.com',
  //   avatar: 'https://placeimg.com/140/140/nature',
  // });
}

export default function Edit() {
  //doc du lieu tu firestore day vao flatlist
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [users, setUsers] = useState([]); // Initial empty array of users

  useEffect(() => {
    const subscriber = firestore()
      .collection('Users')
      .onSnapshot((querySnapshot) => {
        const users = [];

        querySnapshot.forEach((documentSnapshot) => {
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setUsers(users);
        setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  const pressHandler = (key, item) => {
    alert('cham vao item: ' + item.name);
  };

  return (
    <View>
      <Button title="Press me" onPress={() => getUsers()} />
      <FlatList
        data={users}
        renderItem={({item}) => (
          <ChatItem
            item={item}
            pressHandler={(key) => pressHandler(key, item)}
          />
        )}
      />
    </View>
  );
}
