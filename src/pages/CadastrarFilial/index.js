import React from "react";

import { Container } from "../../styles/GlobalStyles";
import { Title } from "./styles";
import { toast } from "react-toastify";
//import { useDispatch } from 'react-redux';

export default function CadastroFilial(){
    // dispara eventos do redux, usa no reducer para fazer alterações no estado de acordo coma a ação
    // se a função passada ter dependentes e eu quero que ela seja executada sempre que os dependentes mudarem, passar a variável no []
    React.useEffect(() => {}, []);

    function handleclick(e){
        toast.success("Funciona o click ");
    }

    return (
        <>
        <Container>
            <Title isRad={false}>Cadastro de Filial</Title>
            <button type="button" onClick={handleclick}>Enviar</button>
        </Container>
        </>
    );
}

