import {TouchableOpacityProps } from "react-native";

import { ActivityIndicatorButton, ButtonContainer, ButtonDisabled, ButtonSecundary, GradientButton } from "./button.style";
import Text from "../text/Text";
import { theme } from "../themes/theme";
import { textTypes } from "../text/textTypes";




interface ButtonProps extends TouchableOpacityProps {
    title: string;
    margin?: String;
    type?: string;
    disable?: boolean;
    loading?: Boolean;
    onPress?: () => void
}

const Button = ({ title, type, loading, disabled, onPress, margin, ...props }: ButtonProps) => {
    const handleOnPress = () => {
        if (!loading && !disabled && onPress){
            onPress();
        }
    }

    const renderText = (color: string) => (
        <>
        <Text type={textTypes.BUTTON_BOLD} color={color}>
        {title}
        </Text>
        {loading && (<ActivityIndicatorButton color={theme.colors.neutralTheme.white}/>)}
        </>
        
    );

    if (disabled) {
        return (
            <ButtonDisabled {...props} margin={margin} >
                {renderText(theme.colors.neutralTheme.white)}
            </ButtonDisabled>
        )
    }

    switch (type) {
        case theme.buttonsTheme.secondary:
            return (
                <ButtonSecundary {...props} margin={margin} onPress={handleOnPress} >
                    {renderText(theme.colors.mainTheme.primary)}
                </ButtonSecundary>
            );
        case theme.buttonsTheme.primary:
        default:
            return (
                <ButtonContainer margin={margin} {...props} onPress={handleOnPress}>
                    <GradientButton 
                        start={{ x: 0.0, y: 0.0 }}
                        end={{ x: 1.0, y: 1.0 }}
                        colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}>
                        {renderText(theme.colors.neutralTheme.white)}
                    </GradientButton>
                </ButtonContainer>
            );
    }


};

export default Button;  