import styled from "styled-components";
import {azulescuro } from '../../config/colors';

export const Title = styled.h1`
    color: ${props => {return props.isRad? "black": "black"}};
    text-align: center;
    small{
        font-size: 12pt;
        margin-left: 15px;
        color: #BDBDBD;
    }
`;

export const Form = styled.form`
    background-color: white;
    max-width: 500px;
    width: 70%;
    padding: 20px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;

    h3{
    font-size: 30px;
    text-align: center;
    color: #050A30;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    input[type=text],
    input[type=password]{
        width: 100%;
        height: 40px;
        border-radius: 10px;
        border: 1px solid #ccc;
        padding-left: 10px;
        margin-top: 10px;

        :focus{
            border: 1px solid ${azulescuro};
        }
    }
    input[type=submit]{
        width: 100%;
        height: 40px;
        cursor: pointer;
        background-color: #050A30;
        color: white;
        border:0;
        border-radius: 10px;
        margin-top: 10px;
    }
    input[type=submit]:hover{
    background-color: #233DFF;   
    }
`;

