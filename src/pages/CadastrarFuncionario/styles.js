import styled from "styled-components";
import ReactInputMask from "react-input-mask";

export const Form = styled.form`
    margin-top: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    max-width: 700px;
    width: 100%;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.1);
`;


export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    overflow-x: hidden;
    background-color: white;
`;

export const Legend = styled.legend`
    text-align: center;
    margin: auto;
    color: #050A30;
    margin-top: 7px;
    font-weight: bolder;
    font-size: 1.5em;
    font-size: 30px;
`;


export const Button = styled.button`
    width: 25%;
    height: 40px;
    cursor: pointer;
    background-color: #050A30;
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    border:0;
    border-radius: 10px;
    margin-top: 10px;

    :hover{
        cursor: pointer;
        background-color: #233DFF;
    }
`;

export const Input = styled.input`
    border: 1px solid #050A30;
    border-radius: 10px;
    width: 210px;
    height: 25px;
    padding-left: 10px;
`;

export const InputMask = styled(ReactInputMask)`
    width: 100%;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #ccc;
    padding-left: 10px;
    margin-top: 10px; 
`;


export const Label = styled.label`
    color: black;
    min-width: 100%;
    font-weight: bolder;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

export const DivCampos = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    padding: 5px;
`;

export const DivButtons = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Painel = styled.div`
    padding: 0 18px;
    background-color: white;
    display: flex;
    overflow: hidden;
    transition: .4s;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
`;

export const ButtonAcordion = styled.button`
    background-color: #eee;
    color: #444;
    cursor: pointer;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    transition: 0.1s;
`;

export const DivColuna = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
    flex: 1;
`;

export const DivLinha = styled.div`
    display: flex;
    padding: 10px;
    justify-content: space-between;
    flex-direction: column;
    flex: 1;
`;


export const DropDownSetores = styled.select`
    width: 100px;
    border: 1px solid rgba(0,0,0,0.1);
    padding: 3px;
    border-radius: 5px;
`;

export const DropDownCargos = styled.select`
    width: 100px;
    border: 1px solid rgba(0,0,0,0.1);
    padding: 3px;
    border-radius: 5px;
`;

export const DivBotoesFuncionariosNavegacao = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    align-self: center;
`;

export const FuncionarioItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    cursor: pointer;
`;
