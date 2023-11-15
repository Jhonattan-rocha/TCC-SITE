import React from "react";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Home from "../pages/Home";
import Header from "../components/header";
import Protected from './Protected';
import Login from "../pages/Login";
import NoPage from "../pages/NoPage";
import CadastroEmpresa from "../pages/CadastrarEmpresa";
import Categorizacao from "../pages/Categorizacao";
import CadastroFuncionario from "../pages/CadastrarFuncionario";
import VisualizarChamados from "../pages/VisualizarChamados";
import CriarChamados from '../pages/CriarChamado/index2';
import Chats from '../pages/Chats';
import SubHeader from "../components/SubHeader";

export default function Rotas(){

    const location = useLocation();

    return (
        <>
            <Header></Header>
                <Routes>
                    <Route path="/Login" element={<Login></Login>}/>
                    <Route path="/" element={ 
                        <Protected component={Home} isClosed={true}>
                            <SubHeader></SubHeader>
                            <Home></Home>
                        </Protected>
                    }/>
                    <Route index path="/Home" element={
                        <Protected component={Home} isClosed={true}>
                            <SubHeader></SubHeader>
                            <Home></Home>
                        </Protected>
                    }/>
                    <Route path="/CadastroEmpresa" element={
                        <Protected component={CadastroEmpresa} isClosed={false}>
                            <SubHeader></SubHeader>
                            <CadastroEmpresa></CadastroEmpresa>
                        </Protected>
                    }/>
                    <Route path="/Categorizacao" element={
                        <Protected component={Categorizacao} isClosed={true}>
                            <SubHeader></SubHeader>
                            <Categorizacao></Categorizacao>
                        </Protected>
                    }/>
                    <Route path="/CadastroFuncionario" element={
                        <Protected component={CadastroFuncionario} isClosed={true}>
                            <SubHeader></SubHeader>
                            <CadastroFuncionario></CadastroFuncionario>
                        </Protected>
                    }/>
                    <Route path="/VisualizarChamados" element={
                        <Protected component={VisualizarChamados} isClosed={true}>
                            <SubHeader></SubHeader>
                            <VisualizarChamados></VisualizarChamados>
                        </Protected>
                    }/>
                    <Route path="/CriarChamados" element={
                        <Protected component={CriarChamados} isClosed={true}>
                            <SubHeader></SubHeader>
                            <CriarChamados></CriarChamados>
                        </Protected>
                    }/>
                    <Route path="/Chats" element={
                        <Protected component={Chats} isClosed={true}>
                            <SubHeader></SubHeader>
                            <Chats></Chats>
                        </Protected>
                    }/>
                    <Route path="*" element={<NoPage/>}/>
                </Routes>
        </>
    );
};
