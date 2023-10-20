import styled from "styled-components";
import * as colors from '../../config/colors';

export const Divhome = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
    background-color: white;
    width: 100%;
    height: 85%;
    border-radius: 10px;
    padding-left: 60px;
`;

export const DivListaDeChamados = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    width: 30%;
    min-width: 300px;
    height: 100%;
    border: 1px solid rgba(0,0,0,0.3);
    border-radius: 10px;

    #lista{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        background-color: white;
        flex-grow: 1;
        width: 100%;
        height: 100%;
        margin-top: 10px;
        border: 1px solid rgba(0,0,0,0.3);
        border-radius: 10px;
        overflow: scroll;
        overflow-x: hidden;
        /* Estilizando a barra de rolagem */
        ::-webkit-scrollbar {
            width: 10px; /* Largura da barra de rolagem */
            border-radius: 10px;
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
    }
`;

export const DivChat = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    width: 80%;
    height: 100%;
    border: 1px solid rgba(0,0,0,0.3);
    border-radius: 10px;
    overflow: hidden;
`;

export const DivDados = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;
    width: 100%;
    min-height: 70px;
    max-height: 70px;
    border: 1px solid ${colors.azulescuro};
    border-radius: 10px;
    
    label:hover{
        cursor: pointer;
    }

    :hover{
        transition: all ,2s;
        color: white;
        background-color: ${colors.azulclaro};
        cursor: pointer;
    }
`;

export const DivTitleChat = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: row;
    width: 100%;
    padding: 10px;
`;

export const DivChatTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    padding: 10px;
    justify-self: flex-start;
    cursor: pointer;
    width: 20%;
    margin-bottom: 10px;

    p{
        font-size: 16px;
    }
`;

export const DivSearch = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    width: 100%;
    height: 60px;
    padding: 20px 20px;
`;

export const DivInputSearch = styled.div`
    border-radius: 10px;
    border: 1px solid black;
    padding: 5px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    input{
        border-radius: 10px;
        border: none;
        padding: 5px;
        width: 100%;
    }
`;

export const DivContainerConfig = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const DivCloseConfig = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background-color: #999;

    p{
        font-size: 18px;
        font-family: Arial, Helvetica, sans-serif;
    }
`;

export const TitleChatConfig = styled.p`
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    height: 50px;
    background-color: #999;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;


export const TextInput = styled.p`
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const Input = styled.input`
    border: none;
    background-color: none;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;

    border: 1px solid black;
    border-radius: 10px;
`;

export const TextArea = styled.textarea`
    border: none;
    background-color: none;
    font-size: 20px;
    resize: none;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid black;
    border-radius: 10px;
`;

export const DivArquivos = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    border: 1px solid black;
    width: 80%;
    height: 40%;
    max-height: 50%;
    overflow: scroll;
    overflow-x: hidden;
    align-self: center;
    border-radius: 10px;
    padding: 10px;
`;

export const ListItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 10px;
    padding: 5px;
`;

