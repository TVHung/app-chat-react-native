import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
  Text,
  Button,
  TextInput
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import ChatItem from '../Item/ChatItem';
import Header from '../Layout/Header';
import {
  themeColor,
  backgroundLight,
  backgroundDark,
  ChatItemLight,
  TextDark,
} from '../Theme/color';
import { Title } from 'react-native-paper';

function addUsers(name, email) {
  firestore()
    .collection('Users')
    .add({
      avatar: "",
      email: email,
      id: 0,
      latestMessage: {
        createAt: "",
        text: ""
      },
      name: name
    })
    .then(() => {
      console.log('User added!');
    });
  
    const test = {
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
      //   .collection('Users')
      //   .doc('4')
      //   .collection('MESSAGES')
      //   .add({
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

}

export default function Edit() {
  //doc du lieu tu firestore day vao flatlist
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [users, setUsers] = useState([]); // Initial empty array of users
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

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
    <View >
      <Header item = {Title}/>
      <View style={styles.comtainer}>
        <View style={styles.textInput}>
          <TextInput 
            style={{height: 40}}
            placeholder="Enter name"
            onChangeText={name => setName(name)}
            defaultValue={name}
          />
        </View>
        
        <View style={styles.textInput}>
          <TextInput 
            style={{height: 40}}
            placeholder="Enter email"
            onChangeText={email => setEmail(email)}
            defaultValue={email}
          />
        </View>
        <Button title="Add user" onPress={() => 
          addUsers(name, email)
        } />
      </View>
  

      {/* <FlatList
        data={users}
        renderItem={({item}) => (
          <ChatItem
            item={item}
            pressHandler={(key) => pressHandler(key, item)}
          />
        )}
      /> */}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },

  textInput: {
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: themeColor,
  }
});
