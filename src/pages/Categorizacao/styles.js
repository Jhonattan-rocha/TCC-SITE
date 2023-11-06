import styled from "styled-components";


export const Container = styled.section`
    width: 100%;
    height: 85%;
    background: #fff;
    display: flex;
    margin-left: 40px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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

