import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MessageChat, TitleMessage, ContainerMessageText, DivSend, DivMesBody } from './styled';
import * as actions from '../../store/modules/ChatsReducer/actions';
import { AiOutlineSwap, AiOutlineSwapRight } from 'react-icons/ai';


const Message = ({ user, idVal, setShowEdit, setSelectMessage, idChat, ws }) => {
  const chat = useSelector(state => {
      try{
          let mes = state.chatreducer.chat.find(ch => ch['idChat'] === idChat)
          return mes.mensagens
      }catch(err){
          return state.chatreducer.chat
      }
  }) || [];
  const mes = chat.find(me => me['id'] === idVal);
  const dispatch = useDispatch()

  const handleDeleteMessage = () => {
    ws.emit("deletemes", mes);
    dispatch(actions.DELETE_MESSAGE_CHAT_SUCCESS({idChat: idChat, message: mes}));
  }

  if(!mes){
    return null
  }

  return (
        <MessageChat  myMessage={user.id === mes.idUser}  idVal={idVal}>
            <TitleMessage myMessage={user.id === mes.idUser}>{String(mes.username).split(" ")[0]}</TitleMessage>
            <ContainerMessageText myMessage={user.id === mes.idUser}>
                <DivMesBody>
                  <span style={{color: user.id === mes.idUser ? 'black': 'white', overflowWrap: 'anywhere'}}>{mes.texto}</span>
                  <DivSend>
                    {mes['salvo'] ? 
                    <>
                      <AiOutlineSwap size={20} color={ user.id === mes.idUser ? "#000":"#fff"}></AiOutlineSwap>
                      <span style={{color: user.id === mes.idUser ? "#000":"#fff"}}>{mes['data'] ? new Date(mes['data']).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }): ""}</span>
                    </>                  
                    :
                    <>
                      <AiOutlineSwapRight size={20} color="#000"></AiOutlineSwapRight>
                      <span style={{color: user.id === mes.idUser ? "#000":"#fff"}}>{mes['data'] ? new Date(mes['data']).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }): ""}</span>
                    </>} 
                  </DivSend>
                </DivMesBody>
              </ContainerMessageText>
          </MessageChat>
  );
};

export default memo(Message);
