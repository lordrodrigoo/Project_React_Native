import styled from "styled-components/native";

interface ContainerTextProps {
    color?: string;
    CustomMargin?: string;
    fontSize: string;
    fontFamily: 'Poppins-Bold' | 'Poppins-Light' | 'Poppins-Regular' | 'Poppins-SemiBold';
}

export const ContainerText = styled.Text<ContainerTextProps>`
    ${(props: ContainerTextProps) => (props.color ? `color: ${props.color};` : '')}
    ${(props: ContainerTextProps) => (props.CustomMargin ? `margin: ${props.CustomMargin};` : '')}


    padding-top: 3px;
    font-family: ${(props : ContainerTextProps) => props.fontFamily};
    font-size: ${(props: ContainerTextProps) => props.fontSize};
`;

