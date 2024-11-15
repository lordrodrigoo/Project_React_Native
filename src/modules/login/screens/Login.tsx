import { View } from "react-native";
import React from "react";


import Input from "../../../shared/components/input/Input";
import { ContainerLogin } from "../styles/login.style";
import Button from "../../../shared/components/button/Button";
import { theme } from "../../../shared/components/themes/theme";
import { Icon } from "../../../shared/components/icon/icon";



const Login = () => {
    const handleOnPress = () => {
        console.log('Clicou')
    };

    return (
        <View>
            <ContainerLogin>
                <Input margin='0px 0px 8px 0px'title='Email:' placeholder="Digite seu email" />
                <Input secureTextEntry title='Senha:' placeholder="Digite sua senha" />

                <Button
                type={theme.buttonsTheme.primary}
                margin="16px"
                title="ENTRAR"
                onPress={handleOnPress} 
                />
            </ContainerLogin>
        </View>
    )
}

export default Login;

