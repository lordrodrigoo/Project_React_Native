import { View } from "react-native";


import Input from "../../../shared/components/input/Input";
import { ContainerLogin } from "../styles/login.style";
import Button from "../../../shared/components/button/Button";


const Login = () => {
    const handleOnPress = () => {
        console.log('Clicou')
    };

    return (
        <View>
            <ContainerLogin>
                <Input />
                <Button margin="16px" title="Entrar" onPress={handleOnPress} />
            </ContainerLogin>
        </View>
    )
}

export default Login;