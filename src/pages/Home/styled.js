import styled from "styled-components";

export const Divhome = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    background-color: white;
    width: 100%;
    height: 100%;
`;

export const DivCharts = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    
    overflow: scroll;
    overflow-x: hidden;

    #coluna1{
        display: flex;
        align-items: center;
        padding: 10px;
        justify-content: center;
        flex-direction: column;
        margin-left: 50px;
    }

`;



