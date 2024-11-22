import { View } from 'react-native';
import Input from '../../../shared/components/input/Input';
import { ContainerLogin, Imagelogo } from '../styles/login.style';
import Button from '../../../shared/components/button/Button';
import { theme } from '../../../shared/components/themes/theme';
import { UseLogin } from '../hooks/useLogin';

const Login = () => {
  const {
    email,
    password,
    loading,
    errorMessage,
    handleOnPress,
    handleOnChangeEmail,
    handleOnChangePassword,
  } = UseLogin();

  return (
    <View>
      <ContainerLogin>
        <Imagelogo
          resizeMode="center"
          source={require('../../../assets/images/transparent_logo.png')}
        />
        <Input
          value={email}
          errorMessage={errorMessage}
          margin="0px 0px 8px 0px"
          title="Email:"
          placeholder="Digite seu email"
          onChange={handleOnChangeEmail}
        />
        <Input
          errorMessage={errorMessage}
          value={password}
          secureTextEntry
          title="Senha:"
          placeholder="Digite sua senha"
          onChange={handleOnChangePassword}
        />

        <Button
          type={theme.buttonsTheme.primary}
          loading={loading}
          margin="16px"
          title="ENTRAR"
          onPress={handleOnPress}
        />
      </ContainerLogin>
    </View>
  );
};

export default Login;
