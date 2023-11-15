import React from "react";

import './main.css'
import { Form, Container, ButtonAcordion, Legend, InputMask as ReactInputMask, DivLinha, DivColuna } from "./styles";
import { Painel } from "./styles";
import { FaPlus, FaWindowMinimize } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import * as actions from '../../store/modules/empresareducer/actions';
import {toast} from 'react-toastify';

export default function CadastroEmpresa(){

    const [razao_social, setRazao] = React.useState("");
    const [nome, setNome] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [telefone, setTelefone] = React.useState("");
    const [endereco, setEndereco] = React.useState("");
    const [bairro, setBairro] = React.useState("");
    const [status, setStatus] = React.useState("inativo");
    const [password, setPassword] = React.useState("");
    const [confirmpassword, setConfirmpassword] = React.useState("");
    const [cnpj, setCnpj] = React.useState("");
    const [numero, setNumero] = React.useState(0);
    const [cep, setCep] = React.useState("");

    const [isOpen1, setIsOpen1] = React.useState(false);
    const [isOpen2, setIsOpen2] = React.useState(false);
    const [isOpen3, setIsOpen3] = React.useState(false);


    const dispatch = useDispatch();

    function handleSubmit(e){
        e.preventDefault();

        if(password !== confirmpassword){
            toast.error("Senhas não conferem")
            return;
        }

        dispatch(actions.EMPRESA_REQUEST({
            razao_social: razao_social, 
            nome: nome, 
            email: email, 
            telefone: telefone, 
            endereco: `${endereco}`, 
            numero: `${numero}`, 
            bairro: `${bairro}`, 
            cep: `${cep.replace(/\D/g, "")}`, 
            status: status, 
            password: password, 
            cnpj: cnpj}));

    }

    return (
            <Container>
                <div className="divCentralizarEmpresa">
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Legend>
                        <p>Cadastro Empresa</p> 
                    </Legend>
                    <ButtonAcordion type="button" className="accordion" onClick={(e) => setIsOpen1(!isOpen1)}>Dados da Empresa {isOpen1 ? <FaWindowMinimize/>: <FaPlus/>}</ButtonAcordion>
                    <Painel isOpen={isOpen1}>
                        <DivColuna>
                                <DivLinha>
                                    <div className="element">
                                        <label className="globalLab">Razão Social: </label>
                                        <ReactInputMask id="labRazaoS" className="razaoS" type="text" placeholder="Digite a razão social" value={razao_social} onChange={(e) => setRazao(e.target.value)} required></ReactInputMask>
                                    </div>
                                    
                                    <div className="element">
                                        <label className="globalLab">Nome Fantasia: </label>
                                        <ReactInputMask id="labsNomeF" className="nomeF" type="text" placeholder="Digite o nome" value={nome} onChange={(e) => setNome(e.target.value)} required></ReactInputMask>
                                    </div>
                                </DivLinha>

                                <DivLinha>
                                    <div className="element">
                                        <label className="globalLab">CNPJ: </label>
                                        <ReactInputMask id="labsCnpj" mask="99.999.999/9999-99" maskchar="_" className="labCnpj" type="text" placeholder="00.000.000/0000-00" value={cnpj} onChange={(e) => setCnpj(e.target.value)} required></ReactInputMask>
                                    </div>
                                    <div className="element">
                                        <label className="globalLab">E-mail: </label>
                                        <ReactInputMask id="labsEmail" className="labEmail" type="text" placeholder="Digite o seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                                    </div>
                                    <div className="element">
                                        <label className="globalLab">Telefone: </label>
                                        <ReactInputMask id="labsTel" mask="(99) 99999-9999" maskchar="_" className="labTel" type="text" placeholder="(00) 00000-0000" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
                                    </div>
                                </DivLinha>
                        </DivColuna>
                    </Painel>
                    
                    <ButtonAcordion type="button" className="accordion" onClick={(e) => setIsOpen2(!isOpen2)}>Endereço {isOpen2 ? <FaWindowMinimize/>: <FaPlus/>}</ButtonAcordion>
                    <Painel isOpen={isOpen2}>
                        <div className="dadosEnd">
                            <div id="cep">
                                <label className="globalLab">CEP:</label>
                                <ReactInputMask id="labsCep" mask="99999-999" maskchar="_" className="labCep" type="text" placeholder="00000-000" value={cep} onChange={(e) => setCep(e.target.value)} required/>
                                <i id="pesquisa" className="fa fa-search" ></i>
                            </div>
                            <div id="endDesativado">
                                <label id="endereco" className="globalLab">Endereço:</label>
                                <ReactInputMask id="respNEnd" className="labrespNEnd" type="text" placeholder="Endereço" value={endereco} onChange={ (e)=> setEndereco(e.target.value)}required/>
                                <label id="respEnd" className="globalLab">Bairro</label>
                                <ReactInputMask id="respNBairro" className="labrespNEnd" type="text" placeholder="Bairro" value={bairro} onChange={ (e)=> setBairro(e.target.value)} required/>
                                <label id="nEnd" className="globalLab">Número do Logradouro:</label>
                                <ReactInputMask id="respNNumero" className="labrespNEnd" type="text" placeholder="Número do Logradouro" value={numero} onChange={(e) => setNumero(e.target.value)} required/>
                            </div>
                        </div>
                    </Painel>
                    
                    <ButtonAcordion type="button" className="accordion" onClick={(e) => setIsOpen3(!isOpen3)}>Dados de login {isOpen3 ? <FaWindowMinimize/>: <FaPlus/>}</ButtonAcordion>
                    <Painel isOpen={isOpen3}>
                        <div className="dadosLog">
                        
                            <div className="senha">
                                <label className="globalLab">Senha: </label>
                                <ReactInputMask id="labsSenha" className="labSenha" type="password" placeholder="Digite a senha" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                            
                                <label className="globalLab">Confirme a Senha: </label>
                                <ReactInputMask id="labsConfSenha" className="labConfSenha" type="password" placeholder="Digite a senha" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} required/>
                            </div>

                        </div>
                    </Painel>

                    <div id="return">
                        <label id="respostas" hidden></label>
                    </div>

                    <div className="btnCad">
                        <button type="submit" id="submit" name="submit" >Cadastrar</button>
                    </div> 
                </Form>
                </div>
            </Container>
    );
}

