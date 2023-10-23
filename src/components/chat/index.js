import React, { useCallback, useEffect, useRef, useState } from "react";
import { DivChat, ButtonChat, InputChat, DivMessages, ButtonAttachFile } from './styled'
import SocketIo from 'socket.io-client';
import axios from "../../services/axios";
import './styles.css';
import { MdSend, MdAttachFile } from 'react-icons/md'
import { useSelector, useDispatch } from "react-redux";
import { baseURL, SocketPort } from "../../config/appConfig"; 
import * as actions from '../../store/modules/ChatsReducer/actions';
import Message from "./Message";
import FileMessage from "./FileMessage";
import AudioRecorder from "./AudioRecorder";
import AudioMessage from "./AudioMessage";

export default function Chat(props) {
    
    const user = useSelector(state => state.authreducer.user);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [idChat, setIdChat] = useState(props.chat.id);
    const messagesRef = useRef(null);
    const scrollDiv = useRef(null);
    const [files, setFiles] = useState([]);
    const dispatch = useDispatch();
    const [ws, setWs] = useState(SocketIo); 
    const chat = useSelector(state => {
        try{
            let mes = state.chatreducer.chat.find(ch => ch['idChat'] === idChat)
            return mes.mensagens
        }catch(err){
            return state.chatreducer.chat
        }
    }) ?? [];

    const validarResposta = (data) => {
        try{
            let value = chat.find(mes => {
                return mes['id'] === data['id']
            }) ?? {}
            
            if(Object.keys(value).length === 0){
                dispatch(actions.ADD_MESSAGE_CHAT_SUCCESS({idChat: idChat, message: data}));
            }
            dispatch(actions.UPDATE_MESSAGE_CHAT_SUCCESS({idChat: idChat, message: data}));
        }catch(err){
            console.log(err)
        }
    } 

    const init = () => {
        const ws = SocketIo(`http://${baseURL}:${SocketPort}/`)

        setWs(ws)

        dispatch(actions.GET_CHAT({id: idChat}))

        ws.connect()

        ws.on("connect", (data) => {
            console.log("conectado com sucesso");
        });

        ws.on("success", (data) => {
            setIdChat(data.id);
        })

        ws.on("error", (data) => {
            console.log("Um erro aconteceu: ", data);
        })

        ws.on("message", (data) => {
            validarResposta(data)
        });

        ws.on("disconnect", (error) => {
            console.log("Desconectado", error);
        })

        ws.on('leave', (data) => {
            console.log('Saiu do chat');
        });

        ws.on('join', (data) => {
            console.log('Entrou do chat');
        });

        ws.on('file_data', (data) => {
            validarResposta(data)
        });

        ws.on('audio_data', (data) => {
            validarResposta(data)
        });

        ws.on("reChat", (data) => {
            validarResposta(data)
        });

        ws.on("delmes", (data) => {
            let value = chat.find(mes => {
                return mes['id'] === data['id'];
            }) ?? {}
            
            if(Object.keys(value).length !== 0){
                dispatch(actions.DELETE_MESSAGE_CHAT_SUCCESS({idChat: idChat, message: data}));
            }
        });

        ws.emit('chat', {id: idChat, titulo: props.chat.titulo, descricao: props.chat.descricao});
        ws.emit('join', {room: idChat});

        try{
            ws.emit('re', {id: idChat, idMes: chat[chat.length - 1].id});
        }catch(err){
            console.log("primeira vez no chat")
        }
 
        
    }

    const close = () => {
        ws.emit('leave', {room: idChat});
        ws.disconnect();
        setMessages([]);
        console.log("Cliente saiu")
    }

    const generateRandomInteger = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleSendMessage = (e) => {
        let data = {}
        const num = generateRandomInteger(0, 10000000000)
        if(files.length > 0){
            files.forEach(file => {
                const num = generateRandomInteger(0, 10000000000)
                data = {idChat: idChat, message: {id: num, texto: message ?? " \x00 ", idUser: user.id, username: user.nome, original_name: file.name, salvo: false, file: null, type: 'file'}};
                ws.emit("message", {id: idChat, idMes: num, texto: message ?? " \x00 ", idUser: user.id, username: user.nome, original_name: file.name, salvo: false, file: file, type: 'file'});
                validarResposta(data);
            });
            setFiles([]);
            setMessage("");
            return
        }else{
            data = {idChat: idChat, message: {id: num, texto: message, idUser: user.id, username: user.nome, salvo: false, original_name: '', file: null, type: 'text'}};
            ws.emit("message", {id: idChat, idMes: num, texto: message, idUser: user.id, username: user.nome, salvo: false, original_name: '', file: null, type: 'text'});
        }
        validarResposta(data);
        updateMessages();
        setFiles([]);
        setMessage("");
    };
    
    const scrollToBottom = () => {
        scrollDiv.current.scrollIntoView({ behavior: 'smooth' });
        if (messagesRef.current) {
            messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
        }
    };

    const DownLoadFile = (file_name, original_name) => {
        axios.get(`http://${baseURL}:${SocketPort}/download/` + file_name, {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },
            responseType: 'blob'
        }).then(response => {
            const blob = new Blob([response.data], { type: 'application/octet-stream' });
            const url = URL.createObjectURL(blob)
            const downloadLink = document.createElement('a');
            downloadLink.href = url;
            downloadLink.download = original_name;
            document.body.appendChild(downloadLink);
            downloadLink.click();
                        
            document.body.removeChild(downloadLink);
            scrollToBottom()
        })
        .catch(error => console.log(error));
    }

    const DownLoadFileToBlob = async (file_name) => {
        let response = await axios.get(`http://${baseURL}:${SocketPort}/download/` + file_name, {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },
            responseType: 'blob'
        })

        const blob = new Blob([response.data], { type: 'application/octet-stream' });
        
        console.log(blob)
        return blob
    }

    const UploadControl = ({ children, value, onChange, disabled, accept }) => {
        return (
          <label htmlFor="contained-button-file" style={{cursor: 'pointer'}}>
            <input
              value={value}
              accept={accept}
              disabled={disabled}
              style={{ display: 'none', cursor: 'pointer' }}
              id="contained-button-file"
              multiple
              type="file"
              onChange={disabled ? () => {} : onChange}
            />
            {children}
          </label>
        );  
      };

      
    useEffect(() => {
        init()
        return close
    }, []);

    const updateMessages = useCallback(() => {
        const updatedMessages = chat.map((mes) => {
            if(!mes['idUser']){

            }else{
                if (String(mes['original_name']).match(/\.(mp3|wav|flac|aac|ogg)$/i)) {
                    return <AudioMessage key={mes['id']} user={user} downloadFile={DownLoadFileToBlob} idVal={mes['id']} idChat={idChat}  ws={ws}></AudioMessage>;
                }else if (mes['original_name']) {
                    return <FileMessage downloadFile={DownLoadFile} user={user} key={mes['id']} idVal={mes['id']} idChat={idChat} ws={ws}></FileMessage>;
                } else {
                    return <Message user={user} key={mes['id']} idVal={mes['id']} idChat={idChat} ws={ws}></Message>;
                }
            }
        });
    
        setMessages(updatedMessages);
        scrollToBottom();
    }, [chat, DownLoadFile, DownLoadFileToBlob, idChat, user, ws]);
    
      // Atualizar o estado local de messages sempre que chat for alterado
    useEffect(() => {
        updateMessages();
        scrollToBottom();
    }, [chat]);


    
    const fun = () => {
        const nSalvos = chat.filter(mes => mes['salvo'] === false)
        let data;
        nSalvos.forEach(mes => {
            let bytes = null
            if(mes['original_name']){
                bytes = mes['file']
            }
            
            data = {id: idChat, idMes: mes['id'], texto: mes['texto'], idUser: mes['idUser'], username: mes['username'], salvo: false, original_name: mes['original_name'], file: bytes, type: mes['type']};
            ws.emit('message', data)
        })
    }

    useEffect(() => {
        try {
          const nSalvos = chat.filter(mes => mes['salvo'] === false) ?? [];
          let inter = null;
      
          if (nSalvos.length > 0) {
            inter = setInterval(fun, 5000);
          } else {
            clearInterval(inter);
          }
      
          return () => {
            clearInterval(inter);
          };
        } catch (err) {
          console.log(err);
        }
      }, [chat]);

    return (
            <div id="container">
                <DivChat>
                    <DivMessages ref={messagesRef}>
                        { messages !== null? messages.map(message => (
                            message
                        )): null}
                        <div ref={scrollDiv}></div>
                    </DivMessages>
                    <div id="botaoChatInput">
                        <ButtonAttachFile type="button">
                            <UploadControl onChange={(e) => {
                                let files = []
                                for(let file of e.target.files){
                                    files.push(file)
                                }
                                setFiles(files);
                            }} accept=".jpeg,.jpg,.doc,.docx,.pdf,.txt,.png">
                                <MdAttachFile size={30}></MdAttachFile>
                            </UploadControl>
                        </ButtonAttachFile>
                        <InputChat value={message} onChange={(e) => setMessage(e.target.value)} id="messageInput"></InputChat>
                        {message.length > 0 || files.length > 0 ? 
                            <ButtonChat name="enviar" type="button" onClick={(e) => handleSendMessage(e)}><MdSend size={30}></MdSend></ButtonChat>
                        : 
                            <AudioRecorder setFiles={setFiles} send={ws} chat={idChat} update={updateMessages}></AudioRecorder>
                        }
                    </div>
                </DivChat>
            </div>
    );
}
