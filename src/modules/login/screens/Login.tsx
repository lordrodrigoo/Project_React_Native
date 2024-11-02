import { View } from "react-native";


import Input from "../../../shared/components/input/Input";
import { ContainerLogin } from "../styles/login.style";
import Button from "../../../shared/components/button/Button";
import { theme } from "../../../shared/components/themes/theme";


const Login = () => {
    const handleOnPress = () => {
        console.log('Clicou')
    };

    return (
        <View>
            <ContainerLogin>
                <Input />
                <Button
                type={theme.buttonsTheme.primary}
                margin="16px"
                title="ENTRAR"
                onPress={handleOnPress} />
            </ContainerLogin>
        </View>
    )
}

export default Login;