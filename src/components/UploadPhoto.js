import React, { useState } from 'react';
import { Dropzone, ImgPreview, UploadContainer } from './styled';
import { AiFillCamera, AiOutlineClose } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { DivOverLay, DivPopUp } from './styled';
import axios from 'axios';
import { baseURL, ApiPort, SocketPort } from '../config/appConfig';


const UploadPhoto = ({filter = "", file_name = "", setImg = () => {}, change = true, apiDownload = true, socketDownload = false, preView = true, size={container: 150, img: 200}}) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [View, setView] = useState(false);
  const user = useSelector(state => state.authreducer);

  const DownLoadFile = () => {
    if(filter){
        axios.get(`http://${baseURL}:${ApiPort}/arquivos/?filter=${encodeURIComponent(filter)}`, {
            method: "get",
            headers: {'Content-Type':'application/json', 'Authorization': `Bearer ${user.token}`}
        }, {
            
        })
        .then(response => {
            console.log(response)
            axios.post(`http://${baseURL}:${ApiPort}/download/`, {
                originalname: response.data.result[0].originalname,
                filename: response.data.result[0].filename,
            }, {
                method: "post",
                headers: {'Content-Type':'application/json', 'Authorization': `Bearer ${user.token}`},
                responseType: 'blob',
            }).then(response => {
                const blob = new Blob([response.data], { type: 'application/octet-stream' });
                const url = URL.createObjectURL(blob)
                setUploadedImage(url)
            })
            .catch(error => console.log(error));
        }).catch(err => console.log(err));
    }
  }

  const DownLoadFileToBlob = async (file_name) => {
    try{
      let response = await axios.get(`http://${baseURL}:${SocketPort}/download/` + file_name, {
        method: "GET",
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${user.token}` },
        responseType: 'blob'
      })

      const blob = new Blob([response.data], { type: 'application/octet-stream' });
      const url = URL.createObjectURL(blob)
      setUploadedImage(url)
    }catch(err){
      console.log(err)
    }
  }

  const UploadControl = ({ children, value, onChange, disabled, accept }) => {
    return (
      <label htmlFor="contained-button-file" style={{ cursor: 'pointer' }}>
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

  const handleChangeImage = () => {
    if(apiDownload){
      DownLoadFile();
    }else{
      if(socketDownload){
        DownLoadFileToBlob(file_name);
      }
    }
  };

  React.useEffect(() => {
    handleChangeImage();
  }, []);

  return (
      <>
        {View && preView ? 
        <DivPopUp style={{display: 'flex', alignItems: 'flex-end', flexDirection: 'column'}}>
            <AiOutlineClose onClick={() => setView(false)} cursor={'pointer'} size={30}></AiOutlineClose>
            <img src={uploadedImage} alt="Imagem do usuário" style={{flex: 1, maxWidth: '100%', maxHeight: '100%'}}></img>
        </DivPopUp>
        : null} 
        <UploadContainer>
            <ImgPreview size={size} onClick={() => {
                if(uploadedImage){
                    setView(true)
                }
            }}>
                {uploadedImage && <img src={uploadedImage} alt="Imagem do usuário" />}
            </ImgPreview>
            {change ?
                <UploadControl
                    accept=".jpeg,.jpg,.doc,.docx,.pdf,.txt,.png"
                    onChange={(e) => {
                    let files = e.target.files;
                    setImg(files[0]);
                    let blob = new Blob([files[0]], { type: 'application/octet-stream' });
                    let imageUrl = URL.createObjectURL(blob); // Converter o Blob em URL
        
                    setUploadedImage(imageUrl); // Definir o URL da imagem
                    }}
                >
                    <AiFillCamera></AiFillCamera>
                </UploadControl>
            : null}
        </UploadContainer>
    </>
  );
};

export default UploadPhoto;
