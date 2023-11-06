import React from "react";

import { Form, ContainerFuncionario, ButtonAcordion, Legend, InputMask as ReactInputMask, DivLinha, DivColuna, DropDownSetores } from "./styled";
import { Painel } from "./styled";
import { FaEdit, FaPlus, FaTrash, FaWindowMinimize } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/modules/funcionarioreducer/actions';
import * as actionsArquivos from '../../../store/modules/chamadosreducer/actions';
import { create as CreateSetor } from './criarsetores';
import { edit as EditSetor } from './editarsetores';
import UploadPhoto from "../../../components/UploadPhoto";

export default function EditarFuncionario({funcionario = {}, close = () => {}}){

    const [departamento, setDepartamento] = React.useState(funcionario.departamento ?? "");
    const [nome, setNome] = React.useState(funcionario.nome ?? "");
    const [email, setEmail] = React.useState(funcionario.email ?? "");
    const [telefone, setTelefone] = React.useState(funcionario.telefone ?? "");
    const [endereco, setEndereco] = React.useState(funcionario.endereco ?? "");
    const [bairro, setBairro] = React.useState(funcionario.bairro ?? "");
    const [cpf, setCPF] = React.useState(funcionario.cpf);
    const [numero, setNumero] = React.useState(funcionario.numero ?? 0);
    const [cep, setCep] = React.useState(funcionario.cep);
    const [cargo, setCargo] = React.useState(funcionario.cargo ?? "");
    const [nivel, setNivel] = React.useState(funcionario.nivel ?? "");
    const [setor, setSetor] = React.useState(funcionario.setor ?? "");
    const [foto, setFoto] = React.useState(false);

    const [isOpen1, setIsOpen1] = React.useState(false);
    const [isOpen2, setIsOpen2] = React.useState(false);
    const [isOpen3, setIsOpen3] = React.useState(false);

    const [isOpenCreate, setisOpenCreate] = React.useState(false);
    const [isOpenEditar, setisOpenEditar] = React.useState(false);

    const dispatch = useDispatch();
    const user = useSelector(state => state.authreducer);
    const setores = useSelector(state => {
        try{
            return state.funcionarioreducer.setores.result
        }catch(err){
            return []
        }
    });

    function handleSubmit(e){
        e.preventDefault();

        let originalname = foto.name;
        let filename = Date.now() + "_" + user.user.id + "_" + originalname;
        let id_dono = user.user.id;
        let id_empresa_dona = user.user.id_empresa;
        let mime_type = foto.type;
        let dados = {originalname: originalname, filename: filename, id_dono: id_dono, id_empresa_dona:id_empresa_dona, mime_type: mime_type, file: foto};
        if(foto){
            dispatch(actions.FUNCIONARIO_EDITAR_COM_FOTO({departamento: departamento, 
                nome: nome, 
                email: email, 
                telefone: telefone, 
                endereco: `${endereco}`, 
                numero: `${numero}`, 
                bairro: `${bairro}`, 
                cep: `${String(cep).replace(/\D/g, "")}`, 
                cpf: cpf,
                id_empresa: funcionario.id_empresa,
                id: funcionario.id,
                setor:setor,
                photo: dados}));
        }else{
            dispatch(actions.FUNCIONARIO_EDITARREQUEST({departamento: departamento, 
                nome: nome, 
                email: email, 
                telefone: telefone, 
                endereco: `${endereco}`, 
                numero: `${numero}`, 
                bairro: `${bairro}`, 
                cep: `${String(cep).replace(/\D/g, "")}`, 
                cpf: cpf,
                setor:setor,
                id_empresa: funcionario.id_empresa,
                id: funcionario.id})); 
        }

        close();
        
    }

    function handleDelete(e){
        e.preventDefault();
        dispatch(actions.DELETAR_SETORES_REQUEST({id: setor}));
        
    }

    React.useEffect(() => {
        if(setores.length > 0){
            setSetor(setores[0].id)
        }
    }, []);

    return (
            <ContainerFuncionario>
                {isOpenCreate ? CreateSetor(setisOpenCreate): null}
                {isOpenEditar ? EditSetor(setisOpenEditar, setores.find(set => Number(set.id) === Number(setor))): null}
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Legend>
                        <p>Editar de Funcionario</p>  
                    </Legend>
                    <UploadPhoto setImg={setFoto} filter={'id+eq+'+funcionario.id_foto}></UploadPhoto>
                    <ButtonAcordion type="button" className="accordion" onClick={(e) => setIsOpen1(!isOpen1)}>Dados do Funcionario {isOpen1 ? <FaWindowMinimize/>: <FaPlus/>}</ButtonAcordion>
                    {isOpen1 ? <Painel isOpen={isOpen1}>
                        <DivColuna>
                                <DivLinha>                                    
                                    <div className="element">
                                        <label className="globalLab">Nome: </label>
                                        <ReactInputMask id="labsNomeF" className="nomeF" type="text" placeholder="Digite o nome" value={nome} onChange={(e) => setNome(e.target.value)} ></ReactInputMask>
                                    </div>
                                    <div className="element">
                                        <label className="globalLab">Departamento: </label>
                                        <ReactInputMask id="labdepartamento" className="razaoS" type="text" placeholder="Digite o departamento" value={departamento} onChange={(e) => setDepartamento(e.target.value)} ></ReactInputMask>
                                    </div>
                                    <div className="element">
                                        <label className="globalLab">Cargo: </label>
                                        <ReactInputMask id="labcargo" className="razaoS" type="text" placeholder="Digite o cargo" value={cargo} onChange={(e) => setCargo(e.target.value)} ></ReactInputMask>
                                    </div>
                                </DivLinha>

                                <DivLinha>
                                    <div className="element">
                                        <label className="globalLab">CPF: </label>
                                        <ReactInputMask id="labsCnpj" mask="999.999.999-99" maskchar="_" className="labCnpj" type="text" placeholder="000.000.000-00" value={cpf} onChange={(e) => setCPF(e.target.value)} ></ReactInputMask>
                                    </div>
                                    <div className="element">
                                        <label className="globalLab">Telefone: </label>
                                        <ReactInputMask id="labsTel" mask="(99) 99999-9999" maskchar="_" className="labTel" type="text" placeholder="(00) 00000-0000" value={telefone} onChange={(e) => setTelefone(e.target.value)}  />
                                    </div>

                                </DivLinha>
                        </DivColuna>
                    </Painel>: null}
                    
                    <ButtonAcordion type="button" className="accordion" onClick={(e) => setIsOpen2(!isOpen2)}>Endereço {isOpen2 ? <FaWindowMinimize/>: <FaPlus/>}</ButtonAcordion>
                    {isOpen2 ? <Painel isOpen={isOpen2}>
                        <div className="dadosEnd">
                            <div id="cep">
                                <label className="globalLab">CEP:</label>
                                <ReactInputMask id="labsCep" mask="99999-999" maskchar="_" className="labCep" type="text" placeholder="00000-000" value={cep} onChange={(e) => setCep(e.target.value)} />
                                <i id="pesquisa" className="fa fa-search" ></i>
                            </div>
                            <div>
                                <label id="endereco" className="globalLab">Endereço:</label>
                                <ReactInputMask id="respNEnd" className="labrespNEnd" type="text" placeholder="Endereço" value={endereco} onChange={ (e)=> setEndereco(e.target.value)}/>
                                <label id="respEnd" className="globalLab">Bairro</label>
                                <ReactInputMask id="respNBairro" className="labrespNEnd" type="text" placeholder="Bairro" value={bairro} onChange={ (e)=> setBairro(e.target.value)} />
                                <label id="nEnd" className="globalLab">Número do Logradouro:</label>
                                <ReactInputMask id="respNNumero" className="labrespNEnd" type="text" placeholder="Número do Logradouro" value={numero} onChange={(e) => setNumero(e.target.value)} />
                            </div>
                        </div>
                    </Painel>: null}
                    
                    <ButtonAcordion type="button" className="accordion" onClick={(e) => setIsOpen3(!isOpen3)}>Dados de login {isOpen3 ? <FaWindowMinimize/>: <FaPlus/>}</ButtonAcordion>
                    {isOpen3 ? <Painel isOpen={isOpen3}>
                        
                                <label className="globalLab">E-mail: </label>
                                <ReactInputMask id="labsEmail" className="labEmail" type="text" placeholder="Digite o seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
 
                                <label className="globalLab">Nivel: </label>
                                <ReactInputMask id="labNivel" className="labNivel" type="number" placeholder="Nível do funcionario" value={nivel} onChange={(e) => setNivel(e.target.value)} />

                                <div>
                                    <label>Setor</label>
                                    <div>
                                        <DropDownSetores value={setor} placeholder="Setor do fucionario" onChange={(e) => setSetor(e.target.value)}>
                                            {setores.map(setor => (
                                                <option key={setor.id} value={setor.id}>{setor.nome}</option>
                                            ))}
                                        </DropDownSetores>
                                        <FaPlus onClick={(e) => setisOpenCreate(!isOpenCreate)}></FaPlus>
                                        <FaEdit onClick={(e) => setisOpenEditar(!isOpenEditar)}></FaEdit>
                                        <FaTrash onClick={(e) => handleDelete(e)}></FaTrash>
                                    </div>
                                </div>

                    </Painel>: null}

                    <button type="submit" id="submit" name="submit">Editar</button>
                </Form>
            </ContainerFuncionario>
    );
}

