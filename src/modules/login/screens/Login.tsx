import { View, Text } from "react-native";


import Input from "../../../shared/components/input/input";
import { ContainerLogin } from "../styles/login.style";

const Login = () => {
    return (
        <View>
            <ContainerLogin>
                <Text>Meu texto  </Text>
                <Input />
            </ContainerLogin>
        </View>
    )
}

export default Login;