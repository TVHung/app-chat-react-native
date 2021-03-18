import React from 'react';
import {ChatItemLight, TextDark} from '../Theme/color';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; //icon

export default function ChatItem({item, pressHandler}) {
  var avtName = item.avatar;
  var avtUrl = '../../assets/images/' + 'avatar1' + '.jpg';

  // const [users, setUsers] = useState([]);

  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <View>
          <Image source={require(avtUrl)} style={styles.itemAvatar} />
        </View>
        <View style={styles.itemText}>
          <View style={styles.topName}>
            <Text style={styles.itemName}>{item.name}</Text>
            <View style={styles.timeCheck}>
              <Text>
                <Icon name="check" size={20} color="#13bd27" />
                {/* <Icon style={iconDot} name="circle" size={10} color="#13bd27" /> */}
              </Text>
              <Text>Feb 24</Text>
            </View>
          </View>
          <Text style={styles.itemMess}>Old messages</Text>
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
  topName: {
    flexDirection: 'row',
  },
  itemName: {
    color: TextDark,
    fontWeight: 'bold',
    flex: 8,
  },
  timeCheck: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  itemMess: {
    marginTop: 5,
    color: 'grey',
  },
});
