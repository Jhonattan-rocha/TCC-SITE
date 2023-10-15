import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Header from "../components/header";
import Protected from './Protected';
import Login from "../pages/Login";
import NoPage from "../pages/NoPage";
import CadastroEmpresa from "../pages/CadastrarEmpresa";
import CadastroFilial from "../pages/CadastrarFilial";
import CadastroFuncionario from "../pages/CadastrarFuncionario";
import VisualizarChamados from "../pages/VisualizarChamados";
import CriarChamados from '../pages/CriarChamado';
import Chats from '../pages/Chats';


export default function Rotas(){
    return (
        <>
            <Header></Header>
                <Routes>
                    <Route path="/Login" element={<Login></Login>}/>
                    <Route path="/" element={ 
                        <Protected component={Home} isClosed={true}>
                            <Home></Home>
                        </Protected>
                    }/>
                    <Route index path="/Home" element={
                        <Protected component={Home} isClosed={true}>
                            <Home></Home>
                        </Protected>
                    }/>
                    <Route path="/CadastroEmpresa" element={
                        <Protected component={CadastroEmpresa} isClosed={true}>
                            <CadastroEmpresa></CadastroEmpresa>
                        </Protected>
                    }/>
                    <Route path="/CadastroFilial" element={
                        <Protected component={CadastroFilial} isClosed={true}>
                            <CadastroFilial></CadastroFilial>
                        </Protected>
                    }/>
                    <Route path="/CadastroFuncionario" element={
                        <Protected component={CadastroFuncionario} isClosed={true}>
                            <CadastroFuncionario></CadastroFuncionario>
                        </Protected>
                    }/>
                    <Route path="/VisualizarChamados" element={
                        <Protected component={VisualizarChamados} isClosed={true}>
                            <VisualizarChamados></VisualizarChamados>
                        </Protected>
                    }/>
                    <Route path="/CriarChamados" element={
                        <Protected component={CriarChamados} isClosed={true}>
                            <CriarChamados></CriarChamados>
                        </Protected>
                    }/>
                    <Route path="/Chats" element={
                        <Protected component={Chats} isClosed={true}>
                            <Chats></Chats>
                        </Protected>
                    }/>
                    <Route path="*" element={<NoPage/>}/>
                </Routes>
        </>
    );
};
