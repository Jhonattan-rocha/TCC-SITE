import React, { useState, useEffect } from "react";
import Chat from "../../components/chat";
import * as actionsChats from '../../store/modules/ChatsReducer/actions';
import { Divhome, DivListaDeChamados, DivDados, DivChat, DivChatTitle, DivSearch, DivInputSearch } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { BsFunnelFill, BsSearch } from "react-icons/bs";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import UploadPhoto from "../../components/UploadPhoto";
import Config from "./Config";

export default function Chats(props) {
  const dispatch = useDispatch();
  const [openConfig, setOpenConfig] = React.useState(false);
  const chats = useSelector(state => state.chatreducer.chats_buscados) ?? [];
  console.log(chats)
  const [chat, setChat] = useState(chats[0] ?? null);
  const [search, setSearch] = useState('');

  const handleUpdate = () => {
    setChat(chats.find(ch => ch.id === chat.id));
  }

  useEffect(() => {
    handleUpdate();
  }, [chats])

  useEffect(() => {
    dispatch(actionsChats.CHATS_BUSCAR_REQUEST());
  }, [])

  return (
      <Divhome>
          {openConfig ? <Config open={openConfig} setClose={setOpenConfig} chat={chat}></Config>:null}
          <DivListaDeChamados>
            <DivSearch>
              <DivInputSearch>  
                  <BsSearch size={20}></BsSearch>
                  <input value={search} onChange={(e) => setSearch(e.target.value)}></input>
                  <AiOutlineClose size={20} onClick={() => setSearch('')} cursor={'pointer'}></AiOutlineClose>
              </DivInputSearch>
              <BsFunnelFill size={30}></BsFunnelFill>
              <AiOutlineBars size={30}></AiOutlineBars>
            </DivSearch>
            <div id="lista">
              {chats.map(chat => {
                  return (
                    <DivDados key={chat.id} style={{width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center'}} onClick={() => {
                        setChat(null);
                        setTimeout(() => {
                          setChat(chat);
                        }, 1);
                      }}>
                      <UploadPhoto preView={false} size={{container: 60, img: 70}} change={false} file_name={(() => {
                        const profile = chat.arquivos.filter(file => file.id === chat.id_foto)[0]
                        try{
                          return profile.file_name;
                        }catch(err){
                          return ''
                        }
                      })()} apiDownload={false} socketDownload={true}></UploadPhoto>
                      <p>{chat.titulo}</p>
                    </DivDados>
                  )
              })}
            </div>
          </DivListaDeChamados>
          {chat ? 
            <DivChat>
              <DivChatTitle onClick={() => setOpenConfig(!openConfig)}>
                <UploadPhoto preView={false} size={{container: 70, img: 120}} change={false} file_name={(() => {
                  try{
                    const profile = chat.arquivos.filter(file => file.id === chat.id_foto)[0]
                    return profile.file_name;
                  }catch(err){
                    return ''
                  }
                })()} apiDownload={false} socketDownload={true}></UploadPhoto>
                <p>{chat.titulo}</p>
              </DivChatTitle>
              <Chat chat={chat} close={setChat}></Chat>
            </DivChat>
          : null}
      </Divhome>
  );
}
