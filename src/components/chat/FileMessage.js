import React, { useState, memo, useEffect } from 'react';
import { MessageChat, TitleMessage, ContainerMessage, DivSend } from './styled'
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/modules/ChatsReducer/actions';
import { azulclaro, azulescuro } from '../../config/colors';
import { baseURL, SocketPort } from '../../config/appConfig';
import { BsDownload } from 'react-icons/bs';
import { AiOutlineSwap, AiOutlineSwapRight } from 'react-icons/ai';

const FileMessage = ({ user, downloadFile, idVal, idChat, setShowEdit, setSelectMessage, ws }) => {
  const serverUrl = `http://${baseURL}:${SocketPort}/download/`
  const dispatch = useDispatch();

  const chat = useSelector(state => {
    try{
        let mes = state.chatreducer.chat.find(ch => ch['idChat'] === idChat)
        return mes.mensagens
    }catch(err){
        return state.chatreducer.chat
    }
  }) || [];
  const data = chat.find(me => me['id'] === idVal) ?? {};

  if(!data){
    return null
  }

  return (
        <MessageChat myMessage={user.id === data.idUser} idVal={idVal}>
            <TitleMessage myMessage={user.id === data.idUser}>{String(data.username).split(" ")[0]}</TitleMessage>
            <ContainerMessage myMessage={user.id === data.idUser}>
                  <div style={style.file}>
                    <span style={{color: "#fff"}}>{String(data['original_name']).slice(0, 15) + "..."}</span>
                    <div style={style.downloadBubble} onClick={() => {
                        downloadFile(data['file_name'], data['original_name']);
                    }}>
                      <BsDownload size={20} color={"#fff"}></BsDownload> 
                    </div>
                  </div>
                <span style={{color: user.id === data.idUser ? 'black': 'white'}}>{data.texto}</span>
                <DivSend>
                  {data['salvo'] ? 
                  <>
                    <AiOutlineSwap size={20} color={ user.id === data.idUser ? "#000":"#fff"}></AiOutlineSwap>
                    <span style={{color: user.id === data.idUser ? "#000":"#fff"}}>{data['data'] ? new Date(data['data']).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }): ""}</span>
                  </>                  
                  :
                  <>
                    <AiOutlineSwapRight size={20} color="#000"></AiOutlineSwapRight>
                    <span style={{color: user.id === data.idUser ? "#000":"#fff"}}>{data['data'] ? new Date(data['data']).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }): ""}</span>
                  </>} 
                </DivSend>
              </ContainerMessage>
        </MessageChat>
  );
};


const style = {
  popupButtuns: {
    position: 'absolute',
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    left: "50%",
    flexWrap: 'wrap',
    display: 'flex',
    flexDirection: 'row'
  },
  file: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: azulescuro,
    borderRadius: 10,
    padding: 10
  },
  downloadBubble: {
    margin: 5,
    borderColor: 'white',
    borderWidth: 1.5,
    borderRadius: 20,
    padding: 10,
    backgroundColor: azulclaro,
    cursor: 'pointer'
  }
};



export default memo(FileMessage);
