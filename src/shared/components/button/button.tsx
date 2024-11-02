import { TouchableOpacityProps } from "react-native";

import { ButtonContainer, ButtonSecundary, GradientButton } from "./button.style";
import Text from "../text/Text";
import { theme } from "../themes/theme";
import { textTypes } from "../text/textTypes";





interface ButtonProps extends  TouchableOpacityProps {
    title: string;
    margin?: String;
    type?: string;
} 

const Button = ({title, type,  margin, ...props}: ButtonProps) => {
    switch (type) {
        case theme.buttonsTheme.secondary:
            return (
                <ButtonSecundary margin={margin} {...props}>
                    <Text type={textTypes.BUTTON_BOLD} color={theme.colors.mainTheme.primary}>{title}</Text>
                </ButtonSecundary>
            );
        case theme.buttonsTheme.primary: 
        default:
            return (
                <ButtonContainer margin={margin} {...props}>
                  <GradientButton start={{x: 0.0, y: 0.0}}
                                  end={{x: 1.0, y: 1.0}}
                                  colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}>
                    <Text type={textTypes.BUTTON_BOLD} color={theme.colors.neutralTheme.white}>{title}</Text>
                  </GradientButton>
                </ButtonContainer>
            );
}

   
};

export default Button;  