import axios from "axios";
import { useState } from "react";
import { NativeSyntheticEvent, TextInputFocusEventData } from "react-native";

export const UseLogin = () => {
    const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleOnPress = async () => {
    setLoading(true);
    await axios
      .post('http://172.18.96.1:8080/auth', {
        email,
        password,
      })
      .catch(() => {
        setErrorMessage('Usuário ou senha inválidos.');
      });
    setLoading(false);
    console.log('Clicou');
  };

  const handleOnChangeEmail = (
    event: NativeSyntheticEvent<TextInputFocusEventData>,
  ) => {
    setErrorMessage('');
    setEmail(event.nativeEvent.text);
  };
  const handleOnChangePassword = (
    event: NativeSyntheticEvent<TextInputFocusEventData>,
  ) => {
    setErrorMessage('');
    setPassword(event.nativeEvent.text);
  };

  return {
    email,
    password,
    loading,
    errorMessage,
    handleOnPress,
    handleOnChangeEmail,
    handleOnChangePassword,
  }
}