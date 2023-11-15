import styled from "styled-components";


export const Container = styled.section`
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    overflow: scroll;
    overflow-x: hidden;
`;

export const SectionOne = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
    width: 70%;
    max-width: 90%;
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

export const SectionFive = styled.div`
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

    #setores{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`;


export const SectionSix = styled.div`
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

    #cargos{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
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

export const DivListItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    width: 30%;
`;
