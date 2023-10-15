import React, { useState } from 'react';
import { Dropzone, ImgPreview, UploadContainer } from './styled';
import { AiFillCamera, AiOutlineClose } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { DivOverLay, DivPopUp } from '../../../components/styled';
import axios from 'axios';
import { baseURL, ApiPort } from '../../../config/appConfig';
const UploadPhoto = (props) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [View, setView] = useState(false);
  const user = useSelector(state => state.authreducer);

  const DownLoadFile = () => {
    if(props.filter){
        axios.get(`http://${baseURL}:${ApiPort}/arquivos/?filter=${encodeURIComponent(props.filter)}`, {
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

  React.useEffect(() => {
    DownLoadFile()
  }, [])

  return (
    <UploadContainer>
        {View ? 
            <DivPopUp style={{display: 'flex', alignItems: 'flex-end', flexDirection: 'column'}}>
                <AiOutlineClose onClick={() => setView(false)} cursor={'pointer'} size={30}></AiOutlineClose>
                <img src={uploadedImage} alt="Imagem do usuário" style={{flex: 1, maxWidth: '100%', maxHeight: '100%'}}></img>
            </DivPopUp>
        : null}

        <ImgPreview onClick={() => {
            if(uploadedImage){
                setView(true)
            }
        }}>
            {uploadedImage && <img src={uploadedImage} alt="Imagem do usuário" />}
        </ImgPreview>
        <UploadControl
            accept=".jpeg,.jpg,.doc,.docx,.pdf,.txt,.png"
            onChange={(e) => {
            let files = e.target.files;
            props.setImg(files[0]);
            let blob = new Blob([files[0]], { type: 'application/octet-stream' });
            let imageUrl = URL.createObjectURL(blob); // Converter o Blob em URL

            setUploadedImage(imageUrl); // Definir o URL da imagem
            }}
        >
            <AiFillCamera></AiFillCamera>
        </UploadControl>
    </UploadContainer>
  );
};

export default UploadPhoto;
