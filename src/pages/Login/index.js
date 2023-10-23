import React, { useState, useEffect } from 'react';
import './styles.css';
import { ContainerPrincipal, ContainerSection, ImgLogo, InputForm } from './styles';
import { FaUser } from 'react-icons/fa';
import { MdPassword } from 'react-icons/md';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/modules/authReducer/actions';
import { toast } from 'react-toastify';
import history from '../../services/history';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');
  const user = useSelector(state => state.authreducer.user);

  const dispatch = useDispatch();

  const handleLogin = () => {
    if(!username || !password){
        toast.error('Email ou senha vazios');
        return
    }
    dispatch(actions.Login({email: username, password: password}));
  };

  useEffect(() => {
    if(user.token){
        history.push('/Home', user);
    }
  }, [user]);

  return (
    <ContainerPrincipal>
        <ContainerSection>
            <ImgLogo src={require('../assests/Logo-removebg-preview.png')}></ImgLogo>
            <div style={{ backgroundColor: 'darkpurple' }} className='login-page'>
                <span>Login</span>
                <InputForm>
                    <FaUser color='white' size={30}></FaUser>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Usuario"
                    />
                </InputForm>
                <InputForm>
                    <MdPassword color='white' size={30}></MdPassword>
                    <input
                        type={type}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Senha"
                    />
                    {type === 'password' ? 
                    <AiOutlineEye size={30} color='white' onClick={() => setType('text')} cursor={'pointer'}></AiOutlineEye>
                    : 
                    <AiOutlineEyeInvisible size={30} color='white' onClick={() => setType('password')} cursor={'pointer'}></AiOutlineEyeInvisible>
                    }
                </InputForm>
                <a href='#'>Esqueci minha senha</a>
                <button onClick={handleLogin} style={{ color: 'white' }}>
                    Logar
                </button>
            </div>
        </ContainerSection>
    </ContainerPrincipal>
  );
}

export default Login;
