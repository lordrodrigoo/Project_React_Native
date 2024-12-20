import styled from "styled-components/native";
import { theme } from "../themes/theme";
import { Icon } from "../icon/icon";

interface ContainerInputProps {
    isError?: boolean;
    hasSecureTextEntry?: boolean;
}

export const ContainerInput = styled.TextInput`
    width: 100%;
    height: 48px;
    padding: 16px;
    background-color: ${theme.colors.neutralTheme.white};
    color: ${theme.colors.neutralTheme.black};
    border-radius: 4px;
    padding-right: ${(props: ContainerInputProps) => (props.hasSecureTextEntry ? '52px' : '16px')};
    
    border-width: 1px;
    border-color: ${(props: ContainerInputProps) =>
     props.isError ?
     theme.colors.orangeTheme.orange80 : theme.colors.grayTheme.gray80};
`;

export const IconEye = styled(Icon)`
    position: absolute;
    right: 16px;
    top: 12px;
`