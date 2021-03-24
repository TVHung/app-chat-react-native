import React, {useState, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Title, IconButton} from 'react-native-paper';
import FormInput from '../Layout/FormInput';
import FormButton from '../Layout/FormButton';
import {themeColor, backgroundLight, backgroundDark} from '../Theme/color';
import { AuthContext } from '../navigation/AuthProvider';

export default function SignupScreen({navigation}) {
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <AuthProvider>
      <View style={styles.container}>
        <Title style={styles.titleText}>Register to chat</Title>
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
          title="Signup"
          modeValue="contained"
          labelStyle={styles.loginButtonLabel}
          // onPress={async () => await register(email, password)}
          onPress={() => navigation.navigate('Drawer')}
        />
        <IconButton
          icon="keyboard-backspace"
          size={30}
          style={styles.navButton}
          color="#6646ee"
          onPress={() => navigation.navigate('Login')}
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
    fontSize: 18,
  },
  navButton: {
    marginTop: 10,
  },
});
