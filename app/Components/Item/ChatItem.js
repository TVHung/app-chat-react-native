import React from 'react';
import {
  themeColor,
  backgroundLight,
  backgroundDark,
  ChatItemDark,
  TextLight,
  ChatItemLight,
  TextDark,
} from '../Theme/color';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

export default function ChatItem({item, pressHandler}) {
  var avtName = item.avatar;
  var avtUrl = '../../assets/images/' + 'avatar1' + '.jpg';
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <View>
          <Image source={require(avtUrl)} style={styles.itemAvatar} />
        </View>
        <View style={styles.itemText}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemMess}>Message</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginTop: 2,
    borderColor: '#bbb',
    // borderWidth: 1,
    // borderRadius: 5,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    flex: 10,
    backgroundColor: ChatItemLight,
  },
  itemAvatar: {
    flex: 2,
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: '#bbb',
    borderWidth: 1,
  },
  itemText: {
    flex: 8,
    marginLeft: 10,
  },
  itemName: {
    color: TextDark,
    fontWeight: 'bold',
  },
  itemMess: {
    color: TextDark,
  },
});
