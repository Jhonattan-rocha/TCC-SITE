import styled from "styled-components";

export const Form = styled.form`
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    input{
        margin: 10px;
        padding-left: 10px;
        border-radius: 5px;
        height: 35px;
        border: 1px solid #ddd;
    }

    #linha1{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
    }

    #area{
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        width: 500px;
    }

    #descricao{
        padding: 10px;
        margin: 10px 0 10px 0;
        border: 1px solid #ddd;
        border-radius: 10px;
        width: 500px;
        max-height: 200px;
        resize: vertical;
    }
`;

export const Paragrafo = styled.p`
    color: white;
    font-size: 80px;
`;

export const Legend = styled.legend`
    text-align: center;
    color: #050A30;
    margin-top: 7px;
    font-weight: bolder;
    font-size: 1.5em;
    font-size: 30px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

export const Container = styled.section`
    width: 100%;
    height: 100%;
    background: #fff;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: scroll;
    overflow-x: hidden;
`;


export const FormEditar = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    
    flex-direction: row;
    flex-wrap: wrap;
    overflow: scroll;
    overflow-x: hidden;
`;

export const SectionOne = styled.section`
    border: 1px solid black;
    flex: 1;
    min-width: 350px;
    display: flex;
    padding: 10px;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    overflow: scroll;
    overflow-x: hidden;

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
        width: 100%;
        height: 100%;
        textarea{
            resize: vertical;
            width: 100%;
            height: 200px;
            max-height: 280px;
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
    overflow: scroll;
    overflow-x: hidden;
    min-width: 350px;
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
    max-height: 250px;
    overflow: scroll;
    overflow-x: hidden;

    .comentario{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
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
    max-height: 230px;
    overflow: scroll;
    overflow-x: hidden;
    .arquivo{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
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


export const ContainerEditar = styled.section`
    width: 100%;
    height: 100%;
    padding-left: 60px;
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
