import React from 'react';
import { Button, TextInput } from 'react-native-paper';
import { useStore } from '../configs/store';

// ... rest of the code
const RegisterScreen = () => {
  const { register, setRegisterForm } = useStore();

  const handleRegister = async () => {};

  return (
    <View>
      <TextInput
        label="Email"
        value={register.email}
        onChangeText={(email) => setRegisterForm({ ...register, email })}
      />
      <TextInput
        label="Password"
        value={register.password}
        onChangeText={(password) => setRegisterForm({ ...register, password })}
        secureTextEntry
      />
      <Button onPress={handleRegister}>Register</Button>
    </View>
  );
};

export default RegisterScreen;
