import React from "react";

import './main.css'
import { Form, Container, ButtonAcordion, Legend, InputMask as ReactInputMask, DivLinha, DivColuna, DropDownSetores, DivBotoesFuncionariosNavegacao, FuncionarioItem, DropDownCargos } from "./styles";
import { Painel } from "./styles";
import { FaPlus, FaWindowMinimize } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/modules/funcionarioreducer/actions';
import { toast } from 'react-toastify';
import { create as CreateSetor } from '../Categorizacao/components/criarsetores';
import { edit as EditSetor } from '../Categorizacao/components/editarsetores';
import UploadPhoto from "../../components/UploadPhoto";
import { AiOutlineOrderedList, AiOutlineUserAdd } from "react-icons/ai";
import EditarFuncionario from './components/EditarFuncionario';

export default function CadastroFuncionario(){

    const dispatch = useDispatch();
    const setores = useSelector(state => {
        try{
            return state.funcionarioreducer.setores.result
        }catch(err){
            return []
        }
    });
    const funcionarios = useSelector(state => {
        try{
            return state.funcionarioreducer.funcionarios.result;
        }catch(err){
            return []
        }
    });
    const cargoslist = useSelector(state => {
        try{
            return state.funcionarioreducer.cargos.result;
        }catch(err){
            return [];
        }
    });

    const [departamento, setDepartamento] = React.useState("");
    const [nome, setNome] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [telefone, setTelefone] = React.useState("");
    const [endereco, setEndereco] = React.useState("");
    const [bairro, setBairro] = React.useState("");
    const [status, setStatus] = React.useState("inativo");
    const [password, setPassword] = React.useState("");
    const [confirmpassword, setConfirmpassword] = React.useState("");
    const [cpf, setCPF] = React.useState("");
    const [numero, setNumero] = React.useState("");
    const [cep, setCep] = React.useState("");
    const [cargo, setCargo] = React.useState(cargoslist.length > 0 ? cargoslist[0].id: 0);
    const [nivel, setNivel] = React.useState("");
    const [setor, setSetor] = React.useState(setores.length > 0 ? setores[0].id: 0);

    const [isOpen1, setIsOpen1] = React.useState(false);
    const [isOpen2, setIsOpen2] = React.useState(false);
    const [isOpen3, setIsOpen3] = React.useState(false);

    const [isOpenCreate, setisOpenCreate] = React.useState(false);
    const [isOpenEditar, setisOpenEditar] = React.useState(false);

    const [foto, setFoto] = React.useState(false);
    const user = useSelector(state => state.authreducer);
    const [mostrar, setMostrar] = React.useState("cad");
    const [funcionarioSelecionado, setFuncionarioSelecionado] = React.useState({});

    function handleSubmit(e){
        e.preventDefault();

        if(password !== confirmpassword){
            toast.error("Senhas não conferem")
            return;
        }

        let originalname = foto.name;
        let filename = Date.now() + "_" + user.user.id + "_" + originalname;
        let id_dono = user.user.id;
        let id_empresa_dona = user.user.id_empresa;
        let mime_type = foto.type;
        let dados = {originalname: originalname, filename: filename, id_dono: id_dono, id_empresa_dona:id_empresa_dona, mime_type: mime_type, file: foto};
        if(foto){
            dispatch(actions.FUNCIONARIO_CRIAR_COM_FOTO({departamento: departamento, 
                nome: nome, 
                email: email, 
                telefone: telefone, 
                endereco: `${endereco}`, 
                numero: `${numero}`, 
                bairro: `${bairro}`, 
                cep: `${String(cep).replace(/\D/g, )}`, 
                cpf: cpf,
                password: password,
                id_empresa: user.user.id,
                setor: setor,
                id_cargo: cargo,
                photo: dados}));
        }else{
            dispatch(actions.FUNCIONARIOREQUEST({departamento: departamento, 
                nome: nome, 
                email: email, 
                telefone: telefone, 
                endereco: `${endereco}`, 
                numero: `${numero}`, 
                bairro: `${bairro}`, 
                cep: `${String(cep).replace(/\D/g, )}`, 
                cpf: cpf,
                setor: setor,
                id_cargo: cargo,
                password: password,
                id_empresa: user.user.id}));
        }

        setMostrar('list');      

    }

    return (
            <div className="divContainerPrincipal">
                <DivBotoesFuncionariosNavegacao>
                    <AiOutlineOrderedList size={30} style={{margin: 10}} cursor={'pointer'} onClick={() => setMostrar("list")}></AiOutlineOrderedList>
                    <AiOutlineUserAdd size={30} style={{margin: 10}} cursor={'pointer'} onClick={() => setMostrar("cad")}></AiOutlineUserAdd>
                </DivBotoesFuncionariosNavegacao>
                {mostrar.match('cad') ?
                    <Container>
                    {isOpenCreate ? CreateSetor(setisOpenCreate): null}
                    {isOpenEditar ? EditSetor(setisOpenEditar, setores.find(set => Number(set.id) === Number(setor))): null}

                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Legend>
                            <p>Cadastro de Funcionario</p>  
                        </Legend>
                        <UploadPhoto setImg={setFoto}></UploadPhoto>
                        <ButtonAcordion type="button" className="accordion" onClick={(e) => setIsOpen1(!isOpen1)}>Dados do Funcionario {isOpen1 ? <FaWindowMinimize/>: <FaPlus/>}</ButtonAcordion>
                        {isOpen1 ? <Painel isOpen={isOpen1}>
                            <DivColuna>
                                    <DivLinha>                                    
                                        <div className="element">
                                            <label className="globalLab">Nome: </label>
                                            <ReactInputMask id="labsNomeF" className="nomeF" type="text" placeholder="Digite o nome" value={nome} onChange={(e) => setNome(e.target.value)} required></ReactInputMask>
                                        </div>
                                        <div className="element">
                                            <label className="globalLab">Departamento: </label>
                                            <ReactInputMask id="labdepartamento" className="razaoS" type="text" placeholder="Digite o departamento" value={departamento} onChange={(e) => setDepartamento(e.target.value)} required></ReactInputMask>
                                        </div>
                                        <div>
                                            <label>Cargo</label>
                                            <div>
                                                <DropDownCargos value={cargo} placeholder="Cargo" onChange={(e) => setCargo(e.target.value)}>
                                                    {cargoslist.map(car => (
                                                        <option key={car.id} value={car.id}>{car.nome}</option>
                                                    ))}
                                                </DropDownCargos>
                                            </div>
                                        </div>
                                    </DivLinha>

                                    <DivLinha>
                                        <div className="element">
                                            <label className="globalLab">CPF: </label>
                                            <ReactInputMask id="labsCnpj" mask="999.999.999-99" maskchar="_" className="labCnpj" type="text" placeholder="000.000.000-00" value={cpf} onChange={(e) => setCPF(e.target.value)} required></ReactInputMask>
                                        </div>
                                        <div className="element">
                                            <label className="globalLab">Telefone: </label>
                                            <ReactInputMask id="labsTel" mask="(99) 99999-9999" maskchar="_" className="labTel" type="text" placeholder="(00) 00000-0000" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
                                        </div>

                                    </DivLinha>
                            </DivColuna>
                        </Painel>: null}
                        
                        <ButtonAcordion type="button" className="accordion" onClick={(e) => setIsOpen2(!isOpen2)}>Endereço {isOpen2 ? <FaWindowMinimize/>: <FaPlus/>}</ButtonAcordion>
                        {isOpen2 ? <Painel isOpen={isOpen2}>
                            <div className="dadosEnd">
                                <div id="cep">
                                    <label className="globalLab">CEP:</label>
                                    <ReactInputMask id="labsCep" mask="99999-999" maskchar="_" className="labCep" type="text" placeholder="00000-000" value={cep} onChange={(e) => setCep(e.target.value)} required/>
                                    <i id="pesquisa" className="fa fa-search" ></i>
                                </div>
                                <div>
                                    <label id="endereco" className="globalLab">Endereço:</label>
                                    <ReactInputMask id="respNEnd" className="labrespNEnd" type="text" placeholder="Endereço" value={endereco} onChange={ (e)=> setEndereco(e.target.value)}required/>
                                    <label id="respEnd" className="globalLab">Bairro</label>
                                    <ReactInputMask id="respNBairro" className="labrespNEnd" type="text" placeholder="Bairro" value={bairro} onChange={ (e)=> setBairro(e.target.value)} required/>
                                    <label id="nEnd" className="globalLab">Número do Logradouro:</label>
                                    <ReactInputMask id="respNNumero" className="labrespNEnd" type="text" placeholder="Número do Logradouro" value={numero} onChange={(e) => setNumero(e.target.value)} required/>
                                </div>
                            </div>
                        </Painel>: null}
                        
                        <ButtonAcordion type="button" className="accordion" onClick={(e) => setIsOpen3(!isOpen3)}>Dados de login {isOpen3 ? <FaWindowMinimize/>: <FaPlus/>}</ButtonAcordion>
                        {isOpen3 ? <Painel isOpen={isOpen3}>
                            
                                    <label className="globalLab">E-mail: </label>
                                    <ReactInputMask id="labsEmail" className="labEmail" type="text" placeholder="Digite o seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} required/>

                                    <label className="globalLab">Senha: </label>
                                    <ReactInputMask id="labsSenha" className="labSenha" type="password" placeholder="Digite a senha" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                                
                                    <label className="globalLab">Confirme a Senha: </label>    
                                    <ReactInputMask id="labsConfSenha" className="labConfSenha" type="password" placeholder="Digite a senha" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} required/>
                                    
                                    <label className="globalLab">Nivel: </label>
                                    <ReactInputMask id="labNivel" className="labNivel" type="number" placeholder="Nível do funcionario" value={nivel} onChange={(e) => setNivel(e.target.value)} required/>

                                    <div>
                                        <label>Setor</label>
                                        <div>
                                            <DropDownSetores value={setor} placeholder="Setor do fucionario" onChange={(e) => setSetor(e.target.value)}>
                                                {setores.map(setor => (
                                                    <option key={setor.id} value={setor.id}>{setor.nome}</option>
                                                ))}
                                            </DropDownSetores>
                                        </div>
                                    </div>

                        </Painel>: null}

                        <button type="submit" id="submit" name="submit">Cadastrar</button>
                    </Form>
                </Container>
                : null}
                {mostrar.match('list') ?
                <Container onLoad={() => {
                }}>
                    <Form>
                        {funcionarios.map(fun => {
                            return (
                                <FuncionarioItem onClick={() => {
                                    setFuncionarioSelecionado(fun);
                                    setMostrar('edit')
                                }} key={fun.id}>
                                    <p>{fun.nome}</p>
                                </FuncionarioItem>
                            );
                        })}
                    </Form>
                </Container>
                : null}
                {mostrar.match('edit') ? <EditarFuncionario funcionario={funcionarioSelecionado} close={() => setMostrar('list')}></EditarFuncionario> : null}
            </div>
    );
}

