import styled from "styled-components";
import ReactInputMask from "react-input-mask";

export const Title = styled.h1`
    color: ${props => {return props.isRad? "red": "blue"}};
    small{
        font-size: 12pt;
        margin-left: 15px;
        color: #BDBDBD;
    }
`;

export const DivPopUp = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 800px;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 20px;
    z-index: 2;
    border-radius: 10x;
`;

export const Container = styled.section`
    width: 100%;
    min-height: 400px;
    min-width: 600px;
    background-color: white;
    margin: 30px auto;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    flex-direction: column;
`;


export const DivOverLay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
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


export const Form = styled.form`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    max-width: 700px;
    width: 100%;
    padding: 20px;
    border-radius: 20px;
`;


export const ContainerFuncionario = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    overflow-x: hidden;
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

export const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
  margin: 20px;
  align-self: center;

`;

export const Dropzone = styled.div`
  border: 2px dashed #ccc;
  padding: 20px;
  cursor: pointer;
  border-radius: 30px;
`;

export const ImgPreview = styled.div`
    border: 1px dashed black;
    border-radius: 50%;
    height: 150px;
    width: 150px;
    overflow: hidden;
    cursor: pointer;
    img{
        height: 200px;
        width: 200px;
        border-radius: 50%;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;
