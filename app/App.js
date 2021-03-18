import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Animated,
  Dimensions,
  Easing,
  Switch,
} from 'react-native';
import {
  themeColor,
  backgroundLight,
  backgroundDark,
} from './Components/Theme/color';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper'; //thay doi cach goi de tranh trung lap
import Icon from 'react-native-vector-icons/FontAwesome'; //icon

import Home from './Components/Screens/Home';
import DetailChat from './Components/Screens/DetailChat';
import Profile from './Components/Screens/Profile';
import Edit from './Components/Screens/Edit';
import Setting from './Components/Screens/Setting';
import {DrawerContent} from './Components/Item/DrawerContent';

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SettingStack = createStackNavigator();
const ChatStack = createStackNavigator();

function HomeStackScreen({navigation}) {
  const {isDarkTheme, setIsDarkTheme} = React.useState(false);

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: themeColor,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Telegram',
          headerLeft: () => (
            <Icon.Button
              name="bars"
              size={25}
              backgroundColor="#66a3ff"
              onPress={() => {
                navigation.openDrawer();
              }}></Icon.Button>
          ),
          headerRight: () => (
            <Icon.Button
              name="search"
              size={25}
              backgroundColor="#66a3ff"
              onPress={() => {}}></Icon.Button>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
}

function ProfileStackScreen({navigation}) {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#66a3ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          headerLeft: () => (
            <Icon.Button
              name="arrow-left"
              size={25}
              backgroundColor="#66a3ff"
              onPress={() => {
                navigation.goBack();
              }}></Icon.Button>
          ),
        }}
      />
    </ProfileStack.Navigator>
  );
}

function SettingStackScreen({navigation}) {
  return (
    <SettingStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#66a3ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <SettingStack.Screen
        name="Setting"
        component={Setting}
        options={{
          title: 'Profile',
          headerLeft: () => (
            <Icon.Button
              name="arrow-left"
              size={25}
              backgroundColor="#66a3ff"
              onPress={() => {
                navigation.goBack();
              }}></Icon.Button>
          ),
        }}
      />
    </SettingStack.Navigator>
  );
}

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeStackScreen} />
      <Drawer.Screen name="Profile" component={ProfileStackScreen} />
      <Drawer.Screen name="Setting" component={SettingStackScreen} />
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={PaperDarkTheme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Drawer"
            component={DrawerNavigation}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Chat"
            component={DetailChat}
          />
          <Stack.Screen name="Edit" component={Edit} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
