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

export const SectionOne = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    min-width: 100%;
    min-height: 300px;
    flex-wrap: wrap;

    .plus-icon{
        align-self: flex-end;
    }
`;

export const SectionTwo = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 300px;
    max-width: 300px;
    height: 100%;
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;

    #categoria{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`;

export const SectionThree = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 300px;
    max-width: 300px;
    height: 100%;
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;

    #subcategoria{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`;

export const SectionFour = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 300px;
    max-width: 300px;
    height: 100%;
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;

    #status{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
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
