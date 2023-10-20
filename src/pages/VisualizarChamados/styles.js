import styled from "styled-components";
import DropArea from "../../components/DragArea";


export const Forms = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    overflow: hidden;
    z-index: 0;
    padding-left: 60px;
`;

export const Legend = styled.legend`
    text-align: center;
    margin: auto;
    color: #050A30;
    margin-top: 7px;
    font-weight: bolder;
    font-size: 1.5em;
    font-size: 30px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

export const liSyled = styled.li`
   	position: relative;
	counter-increment: list;
	max-width: 80%;
	margin: 8px auto;
	padding: 2rem 1rem 1rem;
	box-shadow: 0.1rem 0.1rem 1.5rem rgba(0, 0, 0, 0.3);
	border-radius: 0.25rem;
	overflow: hidden;
`;

export const Container = styled.div`
    width: 100%;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: relative;
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    flex: 1;
    flex-grow: 1;
    flex-direction: column;
    margin: auto;
`;

export const ButtonChamado = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100px;
    border: none;
    border-radius: 4px;
    padding: 20px;
    color: #fff;
    background-color: #050A30;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.9s, box-shadow 0.5s;

    :hover {
        background-color: blue;
        transform: translateY(-5px);
        box-shadow: 0 10px 22px rgba(0, 0, 0, 0.2);
    }

    :active {
        transform: translateY(0);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

`;

export const DivChamadosList = styled.div`
    width: 100%;
    position: relative;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    max-height: 500px;
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


export const DivCrescerBaixo = styled.div`
    width: 100%;
    position: relative;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10rem;
    display: flex;
    align-self: flex-end;
    flex-grow: 1;
    flex-direction: column;
`;

export const DropAreaStyled = styled(DropArea)`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    flex-grow: 1;
    border-radius: 10px;
    margin: 10px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.349);
    height: 100%;
    max-height: 650px;
    overflow-wrap: normal break-word 'anywhere';
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

export const DropAreaCalendarStyled = styled(DropArea)`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    flex-grow: 0;
    border-radius: 10px;
    margin: 10px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.349);
    min-height: 100%;
`;

