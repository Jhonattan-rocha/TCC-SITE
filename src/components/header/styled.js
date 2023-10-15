import styled from "styled-components";
import { white } from "../../config/colors";
import { azulclaro, azulescuro } from '../../config/colors';
import { Link } from "react-router-dom";

/*
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    animation: ${props => props.isOpen ? `slideOutAnimation 0.3s forwards` : 'none'};
    transition: transform 0.3s;
*/



export const Nav = styled.nav`
    display: ${props => props.hidden ? 'none': 'flex'};
    align-items: center;
    z-index: 999;
    justify-content: flex-start;
    background-color: ${white};
    width: 60px;
    min-width: 50px;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    transition: .4s;
    overflow: hidden;
    border-right-color: ${azulclaro};
    border-right: 2px;

    :hover{
        width: 250px;
        overflow: hidden;
    }
`;

export const LinkStyled = styled(Link)`
    display: ${props => props.hidden ? 'none': 'flex'};
    color: ${azulescuro};
    font-weight: bold;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    flex: 1;
    overflow: hidden;
    transition: transform 0.3s; /* Adiciona uma transição suave para a animação */

    .active{
        background-color: ${azulclaro};
        cursor: pointer;
        color: white;
        transform: scale(1.1); /* Aumenta o tamanho do elemento em 10% */

        svg path{
            color: white;
        }
        overflow: hidden;
    }

    :hover, label:hover{
        background-color: ${azulclaro};
        cursor: pointer;
        color: white;
        transform: scale(1.1); /* Aumenta o tamanho do elemento em 10% */

        div svg path{
            color: white;
        }
        overflow: hidden;
    }

    div svg {
        margin-right: 30px;
        min-height: 30px;
        min-width: 30px;
        overflow: hidden;
    }
`;

export const DivRotas = styled.div`
    display: ${props => props.hidden ? 'none': 'flex'};
    flex-direction: row;
    align-items: center;
    justify-content: start;
    flex: 1;
    padding-left: 20px;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;  

export const LabelStyled = styled.label`
    overflow: hidden;
`;

