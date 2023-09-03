import React from 'react';
import { Button, TextInput } from 'react-native-paper';
import { useStore } from '../configs/store';

// ... rest of the code
const LoginScreen = () => {
  const { login, setLoginForm } = useStore();

  const handleLogin = async () => {};

  return (
    <View>
      <TextInput
        label="Email"
        value={login.email}
        onChangeText={(email) => setLoginForm({ ...login, email })}
      />
      <TextInput
        label="Password"
        value={login.password}
        onChangeText={(password) => setLoginForm({ ...login, password })}
        secureTextEntry
      />
      <Button onPress={handleLogin}>Login</Button>
    </View>
  );
};

export default LoginScreen;
