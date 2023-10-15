import React from "react";

import { Form } from "./styles";
import { Login as login } from "../../store/modules/authReducer/actions";
import { useDispatch } from 'react-redux';
import Home from '../Home';
import history from "../../services/history";
import { toast } from "react-toastify";
  
export default function Login(){
    const dispatch = useDispatch();
    // dispara eventos do redux, usa no reducer para fazer alterações no estado de acordo coma a ação
    // se a função passada ter dependentes e eu quero que ela seja executada sempre que os dependentes mudarem, passar a variável no []
    React.useEffect(() => {}, []);

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    function handleSubmit(e){
        e.preventDefault();
        if(!email && !password){
            toast.error("O email e senha não pode ser vazio")
            return false
        }
        dispatch(login({email: email, password: password, type: "e"}));
        history.push('/Home');
        return (
            <>
                <Home></Home>
            </>
        );
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <h3>
                    Login
                </h3>
                <input id="email" type="text" name="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input id="pswd"type="password" name="pass" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input type="submit" name="btnEnviar" value="Entrar"/>
            </Form>
        </>
    );
}

