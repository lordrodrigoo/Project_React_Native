import { View } from 'react-native';
import axios from 'axios';

import Input from '../../../shared/components/input/Input';
import { ContainerLogin, Imagelogo } from '../styles/login.style';
import Button from '../../../shared/components/button/Button';
import { theme } from '../../../shared/components/themes/theme';

const Login = () => {
  const handleOnPress = async () => {
    console.log('Clicou');

    const returnBD = await axios.get(
      'http://172.18.96.1:8080/correios/01029-010',
    );

    console.log('returnBD', returnBD.data);
  };
  return (
    <View>
      <ContainerLogin>
        <Imagelogo
          resizeMode="center"
          source={require('../../../assets/images/transparent_logo.png')}
        />
        <Input
          margin="0px 0px 8px 0px"
          title="Email:"
          placeholder="Digite seu email"
        />
        <Input secureTextEntry title="Senha:" placeholder="Digite sua senha" />

        <Button
          type={theme.buttonsTheme.primary}
          margin="16px"
          title="ENTRAR"
          onPress={handleOnPress}
        />
      </ContainerLogin>
    </View>
  );
};

export default Login;
