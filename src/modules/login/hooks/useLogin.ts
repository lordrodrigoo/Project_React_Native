
import { useState } from "react";
import { NativeSyntheticEvent, TextInputFocusEventData } from "react-native";
import { connectionAPIPost } from "../../../shared/components/functions/connection/connectionAPI";
import { useRequest } from "../../../shared/components/hooks/useRequests";

export const UseLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {authRequest, errorMessage, loading, user, setErrorMessage } = useRequest();

  console.log('user', user);
  const handleOnPress = async () => {
    authRequest ({
      email,
      password,
    })
    
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
    setErrorMessage,
  }
}