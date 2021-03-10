import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  ActivityIndicator,
  View,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Animated,
  Dimensions,
  Easing,
  Button,
  Switch,
} from 'react-native';
import {themeColor, backgroundLight, backgroundDark} from '../Theme/color';
import firestore from '@react-native-firebase/firestore';
import ChatItem from '../Item/ChatItem';
import Icon from 'react-native-vector-icons/FontAwesome'; //icon
import DetailChat from './DetailChat';
import Edit from './Edit';
import {Value} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/core';

var {width, height} = Dimensions.get('window');

export default function Home() {
  const value = useState(new Animated.ValueXY({x: 0, y: 0}))[0];
  const navigation = useNavigation();
  const [todos, setTodos] = useState([
    {
      avatar: 'avatar',
      name: 'Truong Hung',
      key: '1',
    },
    {
      avatar: 'avatar1',
      name: 'Tan Sang',
      key: '2',
    },
    {
      avatar: 'avatar',
      name: 'Hoan',
      key: '3',
    },
    {
      avatar: 'avatar1',
      name: 'Truong Hung',
      key: '4',
    },
    {
      avatar: 'avatar',
      name: 'Tan Sang',
      key: '5',
    },
    {
      avatar: 'avatar1',
      name: 'Hoan',
      key: '6',
    },
    {
      avatar: 'avatar1',
      name: 'Truong Hung',
      key: '7',
    },
    {
      avatar: 'avatar',
      name: 'Tan Sang',
      key: '8',
    },
    {
      avatar: 'avatar',
      name: 'Hoan',
      key: '9',
    },
    {
      avatar: 'avatar1',
      name: 'Truong Hung',
      key: '10',
    },
    {
      avatar: 'avatar',
      name: 'Tan Sang',
      key: '11',
    },
    {
      avatar: 'avatar1',
      name: 'Hoan',
      key: '12',
    },
    {
      avatar: 'avatar',
      name: 'Truong Hung',
      key: '13',
    },
    {
      avatar: 'avatar1',
      name: 'Tan Sang',
      key: '14',
    },
    {
      avatar: 'avatar1',
      name: 'Hoan',
      key: '15',
    },
    {
      avatar: 'avatar',
      name: 'Truong Hung',
      key: '16',
    },
    {
      avatar: 'avatar1',
      name: 'Tan Sang',
      key: '17',
    },
    {
      avatar: 'avatar',
      name: 'Hoan',
      key: '18',
    },
    {
      avatar: 'avatar1',
      name: 'Truong Hung',
      key: '19',
    },
    {
      avatar: 'avatar',
      name: 'Tan Sang',
      key: '20',
    },
    {
      avatar: 'avatar1',
      name: 'Hoan',
      key: '21',
    },
    {
      avatar: 'avatar1',
      name: 'Truong Hung',
      key: '22',
    },
    {
      avatar: 'avatar',
      name: 'Tan Sang',
      key: '23',
    },
    {
      avatar: 'avatar',
      name: 'Hoan',
      key: '24',
    },
    {
      avatar: 'avatar1',
      name: 'Truong Hung',
      key: '25',
    },
    {
      avatar: 'avatar',
      name: 'Tan Sang',
      key: '26',
    },
    {
      avatar: 'avatar1',
      name: 'Hoan',
      key: '27',
    },
    {
      avatar: 'avatar',
      name: 'Truong Hung',
      key: '28',
    },
    {
      avatar: 'avatar1',
      name: 'Tan Sang',
      key: '29',
    },
    {
      avatar: 'avatar1',
      name: 'Hoan',
      key: '30',
    },
  ]);

  // doc du lieu tu firestore day vao flatlist
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [users, setUsers] = useState([]); // Initial empty array of users

  useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .onSnapshot((querySnapshot) => {
        const users = [];

        querySnapshot.forEach((documentSnapshot) => {
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        console.log('user', users);
        setUsers(users);
        setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }
  //----------------------------------------------------------------
  const pressHandler = (key, item) => {
    navigation.push('Chat', {item});
    // alert('cham vao item: ' + key);
  };

  const pressHandlerEdit = () => {
    //cham button chinh sua
    navigation.push('Edit');
  };

  var previousOffset = 0; //vị trí cuộn trước đó
  var ShowButton = true;
  const handleScroll = (event) => {
    //kiem tra xem la dang cuon len hay cuon xuong
    var currentOffset = event.nativeEvent.contentOffset.y;
    var direction;
    if (currentOffset === 0) {
      var ShowButton = true;
    }
    if (currentOffset > previousOffset) {
      //so sánh 2 vị trí cũ và hiện tại để xác định đang cuộn lên hay cuộn xuống
      if (currentOffset > 5 && ShowButton != false) {
        Animated.timing(value, {
          toValue: {x: 0, y: 100}, //chạy đến vị trí mới ẩn đi
          duration: 90,
          useNativeDriver: false,
        }).start();
      }

      ShowButton = false;
    } else {
      if (ShowButton != true) {
        Animated.timing(value, {
          toValue: {x: 0, y: 0}, // quay lại vị trí ban đầu xuất hiện
          duration: 90,
          useNativeDriver: false,
        }).start();
      }

      ShowButton = true;
    }
    previousOffset = currentOffset;
  };
  console.log('reder list');
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.list}>
          {/* <FlatList
            onScroll={(event) => {
              handleScroll(event);
            }}
            data={todos}
            renderItem={({item}) => (
              <ChatItem
                item={item}
                pressHandler={(key) => pressHandler(key, item)}
              />
            )}
          /> */}

          <FlatList
            onScroll={(event) => {
              handleScroll(event);
            }}
            data={users}
            renderItem={({item}) => (
              <ChatItem
                item={item}
                pressHandler={(key) => pressHandler(key, item)}
              />
            )}
            extraData={users}
          />
        </View>
      </View>
      <Animated.View style={value.getLayout()}>
        <TouchableOpacity
          style={styles.btnEdit}
          onPress={() => pressHandlerEdit()}>
          <Text>
            <Icon style={styles.icon} name="edit" size={30} color="#900" />
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundLight,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  list: {},
  btnEdit: {
    alignItems: 'center',
    backgroundColor: themeColor,
    position: 'absolute',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 45,
    bottom: 30,
    right: 20,
  },
  icon: {
    color: 'white',
  },
});
