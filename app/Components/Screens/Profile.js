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
} from 'react-native';
import ParsedText from 'react-native-parsed-text';

export default function Profile() {
  // function handleUrlPress(url, matchIndex /*: number*/) {
  //   LinkingIOS.openURL(url);
  // }

  // function handlePhonePress(phone, matchIndex /*: number*/) {
  //   AlertIOS.alert(`${phone} has been pressed!`);
  // }

  // function handleNamePress(name, matchIndex /*: number*/) {
  //   AlertIOS.alert(`Hello ${name}`);
  // }

  // function handleEmailPress(email, matchIndex /*: number*/) {
  //   AlertIOS.alert(`send email to ${email}`);
  // }
  // function renderText(matchingString, matches) {
  //   // matches => ["[@michel:5455345]", "@michel", "5455345"]
  //   let pattern = /\[(@[^:]+):([^\]]+)\]/i;
  //   let match = matchingString.match(pattern);
  //   return `^^${match[1]}^^`;
  // }
  return (
    <View style={styles.container}>
      {/* <ParsedText
        style={styles.text}
        parse={[
          {type: 'url', style: styles.url, onPress: handleUrlPress()},
          {type: 'phone', style: styles.phone, onPress: handlePhonePress()},
          {type: 'email', style: styles.email, onPress: handleEmailPress()},
          {
            pattern: /Bob|David/,
            style: styles.name,
            onPress: this.handleNamePress,
          },
          {
            pattern: /\[(@[^:]+):([^\]]+)\]/i,
            style: styles.username,
            onPress: this.handleNamePress,
            renderText: this.renderText,
          },
          {pattern: /42/, style: styles.magicNumber},
          {pattern: /#(\w+)/, style: styles.hashTag},
        ]}
        childrenProps={{allowFontScaling: false}}>
        Hello this is an example of the ParsedText, links like
        http://www.google.com or http://www.facebook.com are clickable and phone
        number 444-555-6666 can call too. But you can also do more with this
        package, for example Bob will change style and David too. foo@gmail.com
        And the magic number is 42! #react #react-native
      </ParsedText> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  url: {
    color: 'red',
    textDecorationLine: 'underline',
  },

  email: {
    textDecorationLine: 'underline',
  },

  text: {
    color: 'black',
    fontSize: 15,
  },

  phone: {
    color: 'blue',
    textDecorationLine: 'underline',
  },

  name: {
    color: 'red',
  },

  username: {
    color: 'green',
    fontWeight: 'bold',
  },

  magicNumber: {
    fontSize: 42,
    color: 'pink',
  },

  hashTag: {
    fontStyle: 'italic',
  },
});
