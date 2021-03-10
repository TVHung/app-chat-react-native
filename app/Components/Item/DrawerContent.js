import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  themeColor,
  backgroundLight,
  backgroundDark,
  TextLight,
} from '../Theme/color';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props) {
  const paperTheme = useTheme();

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View
              style={{
                marginTop: 15,
              }}>
              <Avatar.Image
                source={{
                  uri: '../../assets/images/avatar1.jpg',
                }}
                size={50}
              />
              <View style={{flexDirection: 'column'}}>
                <Title style={styles.title}>Truong Hung</Title>
                <Caption style={styles.caption}>+84 383621309</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name="account-multiple-plus-outline"
                  color={color}
                  size={size}
                />
              )}
              label="New group"
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Contact"
              onPress={() => {
                // props.navigation.navigate('');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="phone-outline" color={color} size={size} />
              )}
              label="Calls"
              onPress={() => {
                // props.navigation.navigate('');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-group-outline" color={color} size={size} />
              )}
              label="People Nearby"
              onPress={() => {
                // props.navigation.navigate('');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="bookmark-outline" color={color} size={size} />
              )}
              label="Saved Message"
              onPress={() => {
                // props.navigation.navigate('');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="cog-outline" color={color} size={size} />
              )}
              label="Settings"
              onPress={() => {
                // props.navigation.navigate('');
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                // toggleTheme();
              }}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            // signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    marginTop: -5,
  },
  userInfoSection: {
    paddingLeft: 20,
    backgroundColor: themeColor,
    paddingBottom: 10,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    color: TextLight,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: TextLight,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
