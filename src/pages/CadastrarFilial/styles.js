import styled from "styled-components";

export const Title = styled.h1`
    color: ${props => {return props.isRad? "red": "blue"}};
    small{
        font-size: 12pt;
        margin-left: 15px;
        color: #BDBDBD;
    }
`;

export const Paragrafo = styled.p`
    color: white;
    font-size: 80px;
`;
