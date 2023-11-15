import styled from "styled-components";
import { azulclaro } from '../../../config/colors';
import DraggableItem from '../../../components/DraggableItem';
import DropArea from "../../../components/DragArea";
import { memo } from "react";

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
            white-space: nowrap;        
            overflow: hidden;         
            text-overflow: ellipsis;   
            max-width: 120px;         
            display: inline-block;    
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


export const FormPopup = styled.form`
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 999;

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
    }

    #linha1, #linha2, #linha3{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        margin: 10px;   
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
    font-size: 25px;
    text-align: center;
    width: 100%;
`;

export const DayContainer = memo(styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: black;
    cursor: pointer;
`);

export const TextContainer = styled(DropArea)`
    background-color: ${props => props.press ? 'rgb(0,0,0,.1)': 'rgb(255, 255, 255)'};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 0.3px solid black;
    border-radius: 40%;
    margin: 5px;
    width: 80px;
    height: 80px;

    box-shadow: ${props => props.press ? 'inset': ''} 1px 1px 1px 1px rgba(0,0,0,0.7);
`;

export const ContainerPrincipalCalendario = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 100%;
  height: 100%;
  max-height: 600px;
  overflow: scroll;
  overflow-x: hidden;
  background-color: rgb(255, 255, 255);
`;

export const ContainerCalendar = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    width: 600px;
    min-width: 30%;
    height: 80%;
`;

export const TitleMonth = styled.span`
  color: black;
  font-weight: bold;
  font-size: 22px;
`;

export const ContainerTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-grow: 1;
    max-height: 60px;
`;

export const ContainerCalendarChamados = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
`;

export const ContainerChamados = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-width: 450px;
    max-width: 700px;
    max-height: 550px;
    border-radius: 10px;
    overflow: scroll;
    overflow-x: hidden;
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
