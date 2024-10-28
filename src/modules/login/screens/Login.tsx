import { View, Text } from "react-native";


import Input from "../../../shared/components/input/input";
import { ContainerLogin } from "../styles/login.style";
import Button from "../../../shared/components/button/button";

const Login = () => {

    const handleOnPress = () => {
        console.log('Clicou')
    }


    return (
        <View>
            <ContainerLogin>
                <Text>Meu texto  </Text>
                <Input />
                <Button margin="16px" title="Entrar" onPress={handleOnPress} />
            </ContainerLogin>
        </View>
    )
}

export default Login;