import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import {Modal} from './style.js';
import * as actions from '../../store/modules/funcionarioreducer/actions.js';
import { useDispatch } from 'react-redux';

const ModalEdit = ({comentario}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState(comentario.conteudo);
  const dispatch = useDispatch();

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const saveChanges = () => {
    const copy = {...comentario};
    copy.conteudo = inputValue;
    dispatch(actions.COMENTARIO_EDITAR_REQUEST(copy));
    closeModal();
  };

  return (
    <div>
      {isModalOpen && (
          <Modal>
            <h2>Editar</h2>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Digite algo..."
            />
            <button onClick={saveChanges}>Salvar</button>
            <button onClick={closeModal}>Cancelar</button>
          </Modal>
      )}
      <FaEdit onClick={openModal} style={{ cursor: 'pointer' }} />
    </div>
  );
};

export default ModalEdit;
