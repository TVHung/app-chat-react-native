import React, {useState, useContext } from 'react';
import {View, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';
import FormInput from '../Layout/FormInput';
import FormButton from '../Layout/FormButton';
import {themeColor, backgroundLight, backgroundDark} from '../Theme/color';
import { AuthContext, AuthProvider } from '../navigation/AuthProvider';

export default function Login({navigation}) {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <AuthProvider>
      <View style={styles.container}>
        <Title style={styles.titleText}>Welcome to my Chat app</Title>
        <FormInput
          labelName="Email"
          value={email}
          autoCapitalize="none"
          onChangeText={(userEmail) => setEmail(userEmail)}
        />
        <FormInput
          labelName="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={(userPassword) => setPassword(userPassword)}
        />
        <FormButton
          title="Login"
          modeValue="contained"
          labelStyle={styles.loginButtonLabel}
          // onPress={async () => await login(email, password)}

          // onPress={() => console.log(email + " " + password)}
          onPress={() => navigation.navigate('Drawer')}
        />
        <FormButton
          title="New user? Join here"
          modeValue="text"
          uppercase={false}
          labelStyle={styles.navButtonText}
          onPress={() => navigation.navigate('Signup')}
        />
      </View>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: themeColor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
  },
  loginButtonLabel: {
    fontSize: 22,
  },
  navButtonText: {
    fontSize: 16,
  },
});
