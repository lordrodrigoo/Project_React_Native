import { Text,TouchableOpacityProps } from "react-native";
import { ButtonContainer } from "./button.style";
import { Stringifier } from "styled-components/dist/types";


interface ButtonProps extends  TouchableOpacityProps {
    title: string;
    margin?: String;
} 

const Button = ({title, margin, ...props}: ButtonProps) => {
    return (
        <ButtonContainer margin={margin} {...props}>
            <Text>{title}</Text>
        </ButtonContainer>
    );
};

export default Button;  