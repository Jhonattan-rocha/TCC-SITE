import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { ContainerAudio, TitleMessage, DivSend, MessageChat } from './styled';
import { AiOutlineSwap, AiOutlineSwapRight } from 'react-icons/ai';
import * as actions from '../../store/modules/ChatsReducer/actions';
import { FaPlay, FaPause } from 'react-icons/fa';

function AudioMessage({idChat, user, downloadFile, idVal, ws}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [audioBlob, setAudioBlob] = useState(null);
    const [audio, setAudio] = useState(new Audio());
    const dispach = useDispatch();

    const chat = useSelector(state => {
        try{
            let mes = state.chatreducer.chat.find(ch => ch['idChat'] === idChat)
            return mes.mensagens
        }catch(err){
            return state.chatreducer.chat
        }
    }) || [];
    const data = chat.find(me => me['id'] === idVal) ?? {};

    const handlePlayPause = async () => {
        if (audio.paused) {
            audio.play();
            setIsPlaying(true);
        } else {
            audio.pause();
            setIsPlaying(false);
        }
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audio.currentTime);
    };

    const handleSeek = (value) => {
        if (audio) {
            audio.currentTime = value;
            setCurrentTime(value);
            if (audio.currentTime === audio.duration) {
                setIsPlaying(false);
            }
        }
    };

    const handleDownloadAudio = () => {
        if(data['file_name']){
            downloadFile(data['file_name'])
            .then((response) => {
                const audioBlobUrl = URL.createObjectURL(response); // Create a Blob URL
                audio.src = audioBlobUrl; // Atualize a fonte do áudio existente
                setAudioBlob(audioBlobUrl);
            })
            .catch((err) => {
                console.log(err);
            });
        }
    };
    

    useEffect(() => {
        handleDownloadAudio();
    }, []);


    return (
        <MessageChat myMessage={user.id === data.idUser} idVal={idVal}>
            <TitleMessage myMessage={user.id === data.idUser}>{String(data.username).split(" ")[0]}</TitleMessage>
            <ContainerAudio myMessage={user.id === data.idUser}>
                <audio
                    src={audioBlob}
                    onTimeUpdate={(e) => {
                        handleTimeUpdate(e)
                    }}
                    onEnded={() => setIsPlaying(false)}
                    onLoadedMetadata={(e) => setDuration(e.target.duration)}
                    onChange={() => setCurrentTime(audio.currentTime)}
                />
                <div style={style.containerAudio}>
                    {isPlaying ? <FaPause size={30} color='#000' onClick={handlePlayPause}></FaPause> : <FaPlay size={30} color='#000' onClick={handlePlayPause}></FaPlay>}
                    <input
                        type="range"
                        min={0}
                        max={duration}
                        value={currentTime}
                        onChange={(e) => handleSeek(parseFloat(e.target.value))}
                    />
                </div>
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
                </ContainerAudio>
        </MessageChat>
    );
}

const style = {
    containerAudio: {display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}
}

export default AudioMessage;
