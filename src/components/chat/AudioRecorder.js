import React, { useState } from 'react';
import { BiSolidMicrophone } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/modules/ChatsReducer/actions';

function AudioRecorder(props) {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [name, setName] = useState(`recording_${Math.floor(Date.now() * Math.random())}.mp3`);
  const [press, setPress] = useState(false)
  const dispatch = useDispatch();
  const user = useSelector(state => state.authreducer.user)

  const generateRandomInteger = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const startRecording = () => {
    setPress(true)
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const recorder = new MediaRecorder(stream);

        recorder.ondataavailable = (e) => {
            const audioBlob = new Blob([e.data], { type: "audio/webm" });
            const audioUrl = URL.createObjectURL(audioBlob);
            const num = generateRandomInteger(0, 10000000000);
            console.log(audioBlob)
            dispatch(actions.ADD_MESSAGE_CHAT_SUCCESS({idChat: props.chat, message: {id: num, texto: "audio message", idUser: user.id, username: user.nome, original_name: name, type: 'audio', file: audioUrl}}))
            props.send.emit("message", {id: props.chat, idMes: num, texto: "audio message", idUser: user.id, username: user.nome, original_name: name, file: audioBlob, type: 'audio'})
            props.update()
            // Aqui, você pode fazer algo com o audioUrl, como tocá-lo ou enviá-lo para o servidor
            console.log('URL do áudio:', audioUrl);
            
            setAudioChunks([]);
        };

        setMediaRecorder(recorder);
        recorder.start();
        setIsRecording(true);
      })
      .catch((error) => {
        console.error('Erro ao acessar o microfone:', error);
      });
  };

  const stopRecording = () => {
    if (mediaRecorder) {
        setPress(false);
        mediaRecorder.stop();
        setIsRecording(false);
    }
  };

  return (
      <div onClick={() => {
        if(isRecording){
            stopRecording()
        }else{
            startRecording()
        }
      }} style={styles.botaoAudio}>
        <BiSolidMicrophone color="#fff" size={30}></BiSolidMicrophone>
      </div>
  );
}

const styles = {
    botaoAudio: {
        padding: 10,
        backgroundColor: "#000",
        borderRadius: 30,
        cursor: "pointer"
    },
    botaoAudioPrecionado: {
      transform: [{ scale: 1.3 }]
    }
}

export default AudioRecorder;
