import * as React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {themeColor, backgroundLight, backgroundDark} from '../Theme/color';
import Icon from 'react-native-vector-icons/FontAwesome'; //icon
import {useNavigation} from '@react-navigation/core';

export default function Header({item}) {
  const navigation = useNavigation();
  var avtUrl = '../../assets/images/avatar1.jpg';

  const pressHandlerBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.header}>
      <View
        style={{
          flex: 1,
          marginLeft: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => pressHandlerBack()}>
          <Icon
            style={styles.icon}
            name="long-arrow-left"
            size={25}
            color="#900"
          />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <Image source={require(avtUrl)} style={styles.itemAvatar} />
      </View>
      <View style={{flex: 6, justifyContent: 'center'}}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: themeColor,
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
  },
  title: {
    // textAlign: 'center',
    marginLeft: 10,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: '#bbb',
    borderWidth: 1,
  },
  icon: {
    color: 'white',
  },
});
