import { FaHome, FaSignInAlt, FaUserTie, FaSearch, FaPhoneAlt, FaUser, FaSignOutAlt, FaRocketchat } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Loguot } from "../../store/modules/authReducer/actions";
import { azulescuro } from "../../config/colors";


// pegar dados de uma ação
import { Nav, DivRotas, LinkStyled, LabelStyled } from "./styled";


export default function Header(){
    const isLoggedIn = useSelector(state => {
        return state.authreducer.isLoggedIn;
    });

    const locationuser = useLocation()
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(Loguot())
    }

    const isActiveRoute = (routePath) => {
        return locationuser.pathname === routePath;
      };    


    return (
        <Nav hidden={!isLoggedIn}>
                <LinkStyled to="/Home" hidden={!isLoggedIn}>
                    <DivRotas className={isActiveRoute('/Home') ? 'active' : ''}>
                        <FaHome size={30} color={azulescuro} />
                        <LabelStyled>Home</LabelStyled>
                    </DivRotas>
                </LinkStyled>
                <LinkStyled to="/Chats" hidden={!isLoggedIn}>
                    <DivRotas className={isActiveRoute('/Chats') ? 'active' : ''}>
                        <FaRocketchat size={30} color={azulescuro}></FaRocketchat>
                        <LabelStyled>Chats</LabelStyled>
                    </DivRotas>
                </LinkStyled>
                <LinkStyled to="/Login" hidden={isLoggedIn}>
                    <DivRotas className={isActiveRoute('/Login') ? 'active' : ''}>
                        <FaSignInAlt size={30} color={azulescuro}/>                
                        <LabelStyled>Login</LabelStyled>
                    </DivRotas>
                </LinkStyled>
                <LinkStyled to="/CadastroEmpresa" hidden={!isLoggedIn}>
                    <DivRotas className={isActiveRoute('/CadastroEmpresa') ? 'active' : ''}>
                        <FaUserTie size={30} color={azulescuro}/>
                        <LabelStyled>Empresa</LabelStyled>
                    </DivRotas>
                </LinkStyled>
                <LinkStyled to="/Categorizacao" hidden={!isLoggedIn}>
                    <DivRotas className={isActiveRoute('/Categorizacao') ? 'active' : ''}>
                        <BiCategoryAlt size={30} color={azulescuro}/>
                        <LabelStyled>Categorias</LabelStyled>
                    </DivRotas></LinkStyled>
                <LinkStyled to="/CadastroFuncionario" hidden={!isLoggedIn}>
                    <DivRotas className={isActiveRoute('/CadastroFuncionario') ? 'active' : ''}>
                        <FaUser size={30} color={azulescuro}/>
                        <LabelStyled>Funcionario</LabelStyled>
                    </DivRotas>
                </LinkStyled>
                <LinkStyled to="/VisualizarChamados" hidden={!isLoggedIn}>
                    <DivRotas className={isActiveRoute('/VisualizarChamados') ? 'active' : ''}>
                        <FaSearch size={30} color={azulescuro}/>
                        <LabelStyled>Chamados</LabelStyled>
                    </DivRotas>
                </LinkStyled>
                <LinkStyled to="/CriarChamados" hidden={!isLoggedIn}>
                    <DivRotas className={isActiveRoute('/CriarChamados') ? 'active' : ''}>
                        <FaPhoneAlt size={30} color={azulescuro}/>
                        <LabelStyled>Criar Chamado</LabelStyled>
                    </DivRotas>
                </LinkStyled>
                <LinkStyled onClick={ handleClick } hidden={!isLoggedIn}>
                    <DivRotas >
                        <FaSignOutAlt size={30} color={azulescuro}/>
                        <LabelStyled>Sair</LabelStyled>
                    </DivRotas>
                </LinkStyled>            
        </Nav>
    );
}

