import styled from "styled-components/native";

interface ContainerTextProps {
    color?: string;
    fontSize: string;
    fontFamily: 'Poppins-Bold' | 'Poppins-Light' | 'Poppins-Regular';
}

export const ContainerText = styled.Text<ContainerTextProps>`
    ${(props: ContainerTextProps) => (props.color ? `color: ${props.color};` : '')}

    font-family: ${(props : ContainerTextProps) => props.fontFamily};
    font-size: ${(props: ContainerTextProps) => props.fontSize};
`;

