import styled from "styled-components";
import { azulclaro } from '../../../config/colors';
import DraggableItem from '../../../components/DraggableItem';
import DropArea from "../../../components/DragArea";

export const DraggableItemStyled = styled(DraggableItem)`
    background-color: ${azulclaro};
    width: 100%;
    transition: transform 0.3s ease-in-out;
    cursor: grab;
    pointer-events: none;
    :active{
        transform: scale(1.2);
    }
`;


export const DivChamado = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    box-shadow: 1px 1px 3px rgb(0, 0, 0, 0.1);
    margin: 10px;
    padding: 10px;
    background-color: ${azulclaro};
    color: white;
    cursor: pointer;

    #title{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        flex: 1;
    }

    #title div {
        display: flex;
        align-items: end;
        justify-content: end;
        flex-direction: column;
    }

    .contexto {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 5px;

        label{
            white-space: nowrap;        /* Impede que o texto quebre para a próxima linha */
            overflow: hidden;           /* Esconde qualquer texto que ultrapasse a largura máxima */
            text-overflow: ellipsis;    /* Adiciona "..." quando o texto ultrapassar a largura */
            max-width: 120px;           /* Define a largura máxima do rótulo */
            display: inline-block;      /* Permite que o rótulo mantenha seu tamanho máximo */
        }
    }

    .contexto textarea{
        border-radius: 10px;
        border: none;
        width: 100%;
        min-height: 50px;
        padding-top: 10px;
        padding-left: 10px;
        color: black;
        margin-top: 5px;
    }

    .icons {
        display: flex;
        align-items: end;
        justify-content: end;
        width: 100%;

        svg {
            margin-left: 10px;
        }
    }

    :hover{
        border: 1px solid rgb(0, 0, 0, 0.1);
        border-style: inset;
    }
`;

export const Form = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

    input{
        margin: 10px;
        padding-left: 10px;
        border-radius: 5px;
        height: 35px;
        border: 1px solid #ddd;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex: 1;
        width: 100%;
    }

    div#closeedit{
        align-items: flex-end;
    }

    #linha1{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
    }

    #area{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex: 1;
    }

    #descricao{
        padding: 10px;
        margin: 10px;
        border: 1px solid #ddd;
        border-radius: 10px;
    }
`;



export const DivPopUp = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 20px;
    z-index: 4;
    border-radius: 10px;
`;

export const DivOverLay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 3;
`;

export const ContainerEditar = styled.section`
    width: 100%;
    min-width: 700px;
    min-height: 500px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: relative;
    display: flex;
    flex-direction: column;

    #closeedit{
        align-self: flex-end;
    }

    #submit-resp{
        align-self: flex-end;
    }

    #submit{
        align-self: flex-end;
    }
`;

export const FormEditar = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
`;

export const SectionOne = styled.section`
    border: 1px solid black;
    flex: 1;
    display: flex;
    padding: 10px;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    
    #divisao{
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        width: 100%;
        height: max-content;

        div{
            display: flex;
            flex-direction: column;
            width: 100%;
        }

        input{
            border-radius: 10px;
            border: 1px solid black;
            padding: 5px;
            width: 100%;
        }

        select{
            border-radius: 10px;
            border: 1px solid black;
            padding: 5px;
            width: 100%;
        }
    }

    #area{
        textarea{
            resize: vertical;
            width: 100%;
            height: 200px;
            max-height: 200px;
            margin-top: 10px;
            padding: 10px;
            border-radius: 10px;
            overflow: scroll;
            overflow-x: hidden;
            /* Estilizando a barra de rolagem */
            ::-webkit-scrollbar {
            width: 5px; /* Largura da barra de rolagem */
            border-radius: 20px;
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
    }
`;

export const SectionTwo = styled.section`
    border: 1px solid black;
    flex: 1;

    #comentar{
        display: flex;
        flex-direction: column;
        margin: 20px;
        
        input{
            border-radius: 10px;
            border: none;
            padding: 5px;
            width: 100%;
        }

        #inputsubmit{
            border-radius: 10px;
            border: 1px solid black;
            padding: 5px;
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
    }
`;

export const SectionThree = styled.section`
    max-height: 150px;
    overflow: scroll;
    overflow-x: hidden;
    /* Estilizando a barra de rolagem */
    ::-webkit-scrollbar {
    width: 5px; /* Largura da barra de rolagem */
    border-radius: 20px;
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

    .comentario{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        max-width: 350px;
        flex-wrap: wrap;
        padding: 5px;
        border: 1px solid black;
        border-radius: 10px;

        .icons{
            display: flex;
            flex-direction: row;
            align-self: flex-end;
        }

        span{
            overflow-wrap: break-word;
        }
    }
`;


export const SectionFour = styled.section`
    max-height: 150px;
    overflow: scroll;
    overflow-x: hidden;
    /* Estilizando a barra de rolagem */
    ::-webkit-scrollbar {
    width: 5px; /* Largura da barra de rolagem */
    border-radius: 20px;
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
    .arquivo{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        max-width: 350px;
        flex-wrap: wrap;
        padding: 5px;
        border: 1px solid black;
        border-radius: 10px;

        .icons{
            display: flex;
            flex-direction: row;
            align-self: flex-end;
        }

        span{
            overflow-wrap: break-word;
        }
    }
`;

export const Container = styled.section`
    width: 100%;
    min-width: 600px;
    min-height: 400px;
    background: #fff;
    margin: 30px auto;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;


export const TextCalendarStyled = styled.span`
    color: white;
    font-family: Arial;
    font-size: 15px;
    text-align: center;
`;

export const TextDayCalendar = styled.span`
    font-family: Arial;
    font-size: 15px;
    border-bottom-color: rgb(0, 0, 0);
    border-bottom-width: 1px;
    border-bottom-style: solid;
    text-align: center;
    width: 100%;
`;

export const DayContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: black;
    cursor: pointer;
`;

export const TextContainer = styled(DropArea)`
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    border: 0.3px solid black;
    padding-top: 10px;
    width: 200px;
    height: 200px;
    flex-grow: 1;
`;

export const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255)F;
`;

export const ContainerCalendar = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    max-height: 90vh;
    overflow: scroll;
    overflow-x: hidden;
    /* Estilizando a barra de rolagem */
    ::-webkit-scrollbar {
    width: 5px; /* Largura da barra de rolagem */
    border-radius: 20px;
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

export const TitleMain = styled.span`
  color: black;
  font-weight: bold;
  font-size: 22px;
`;

export const ContainerTitle = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: row;
    flex-grow: 1;
    margin: 5px;
    height: fit-content;
`;

export const TextQtdChamado = styled.span`
  color: rgb(0, 0, 0);
  text-align: center;
  font-size: 18px;
`;


export const ContainerChamado = styled.div`
    width: 100%;
    height: fit-content;
    max-height: 100px;
    border: 0.1px solid black;
    padding: 10px;
    span{
        text-align: center;
        color: black;
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
    }
`;

export const ContainerChamados = styled.div`
  display: flex;
  flex-direction: column; /* Define a direção do crescimento para baixo */
  align-items: center; /* Centraliza o conteúdo horizontalmente */
  justify-content: flex-start; /* Alinha o conteúdo no topo */
  border: 1px solid #ccc;
  max-height: 400px; /* Define uma altura máxima para o crescimento */

  /* Adicione um scroll quando o conteúdo exceder a altura máxima */
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 5px; /* Largura da barra de rolagem */
    border-radius: 20px;
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
