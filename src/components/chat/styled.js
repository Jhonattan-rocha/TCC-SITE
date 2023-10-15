import styled from "styled-components";
import * as colors from '../../config/colors';

export const DivChat = styled.div`
    border-radius: 10px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: end;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const ButtonChat = styled.button`
    border: 1px solid black;
    border-radius: 30px;
    width: 60px;
    height: 50px;
    margin: auto;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    width: fit-content;
`;

export const InputChat = styled.textarea`
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    padding: 10px;
    text-decoration: none;
    text-align: start;
    font-size: 12px;
    color: black;
    background-color: azure;
    border-radius: 10px;
    width: 100%;
    height: fit-content;
    margin-right: 10px;
    font-size: 20px;
    resize: none;
    ::-webkit-scrollbar {
    width: 8px; /* Largura da barra de rolagem */
    margin-right: 8px; /* Margem à direita da barra de rolagem */
    }

    /* Estilizando o track da barra de rolagem */
    ::-webkit-scrollbar-track {
    background-color: #f1f1f1; /* Cor de fundo do track */
    }

    /* Estilizando o thumb (alça) da barra de rolagem */
    ::-webkit-scrollbar-thumb {
    background-color: #888; /* Cor do thumb */
    }

    /* Estilizando o thumb ao passar o mouse */
    ::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Cor do thumb ao passar o mouse */
    }
`;



export const DivMessages = styled.div`
    width: 90%;
    min-height: 90%;
    border-style: solid;
    border-width: 1px;
    border-color: ${colors.azulescuro};
    border-radius: 10px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    margin: 10px;
    overflow: scroll;
    overflow-x: hidden;
    padding: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    ::-webkit-scrollbar {
    width: 8px; /* Largura da barra de rolagem */
    margin-right: 8px; /* Margem à direita da barra de rolagem */
    }

    /* Estilizando o track da barra de rolagem */
    ::-webkit-scrollbar-track {
    background-color: #f1f1f1; /* Cor de fundo do track */
    }

    /* Estilizando o thumb (alça) da barra de rolagem */
    ::-webkit-scrollbar-thumb {
    background-color: #888; /* Cor do thumb */
    }

    /* Estilizando o thumb ao passar o mouse */
    ::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Cor do thumb ao passar o mouse */
    }
`;

export const ButtonAttachFile = styled.button`
    border: 1px solid black;
    border-radius: 30px;
    width: 60px;
    height: 50px;
    margin: auto;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    width: fit-content;
    margin-right: 10px;
    cursor: pointer;
`;


export const Messages = styled.div`
    width: 90%;
    height: 60%;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin: 10px;
    overflow: scroll;
    overflow-x: hidden;
    padding: 20px;
`;

export const MessageChat = styled.div`
    color: black;
    padding: 10px;
    display: flex;
    align-items: ${props => !props.myMessage ? 'flex-start' : "flex-end"};
    align-self: ${props => !props.myMessage ? 'flex-start' : "flex-end"};
    justify-content: center;
    flex-direction: column;
    margin: 10px;
    width: 80%;
`;


export const TitleMessage = styled.p`
    border-radius: 20px;
    border-width: 1px;
    border-style: solid;
    border-color: ${colors.azulescuro};
    padding: 10px;
    background-color: ${props => !props.myMessage ? `${colors.azulclaro}`:'white'};
    color: ${props => !props.myMessage ? `white`:'black'};
`;

export const ContainerMessage = styled.div`
    color: black;
    padding: 10px;
    display: flex;
    align-items: flex-end;
    align-self: ${props => !props.myMessage ? 'flex-start' : "flex-end"};
    justify-content: flex-end;
    flex-direction: column;
    flex-wrap: wrap;
    border-style: solid;
    border-width: 1px;
    border-color: ${colors.azulescuro};
    border-radius: 10px;
    margin: 10px;
    width: fit-content;
    background-color: ${props => !props.myMessage ? `${colors.azulclaro}`:'white'};
    color: ${props => !props.myMessage ? `white`:'black'};
`;

export const ContainerMessageText = styled.div`
    color: black;
    padding: 10px;
    display: flex;
    align-items: flex-end;
    align-self: ${props => !props.myMessage ? 'flex-start' : "flex-end"};
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: wrap;
    border-style: solid;
    border-width: 1px;
    border-color: ${colors.azulescuro};
    border-radius: 10px;
    margin: 10px;
    background-color: ${props => !props.myMessage ? `${colors.azulclaro}`:'white'};
    color: ${props => !props.myMessage ? `white`:'black'};
    width: fit-content;
    max-width: 60%;
`;

export const DivSend = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const DivMesBody = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: right;
    flex-direction: column;
`;

export const ContainerAudio = styled.div`
    color: black;
    padding: 10px;
    display: flex;
    align-items: flex-end;
    align-self: ${props => !props.myMessage ? 'flex-start' : "flex-end"};
    justify-content: center;
    flex-direction: column;
    border-style: solid;
    border-width: 1px;
    border-color: ${colors.azulescuro};
    border-radius: 10px;
    margin: 10px;
    width: fit-content;
    background-color: ${props => !props.myMessage ? `${colors.azulclaro}`:'white'};
    color: ${props => !props.myMessage ? `white`:'black'};
`;
