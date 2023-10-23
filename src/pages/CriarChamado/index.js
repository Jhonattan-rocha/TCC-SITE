import React, { useState } from "react";
import './styles.css';

function CriarChamado() {
  const [form, setForm] = useState({
    titulo: "",
    comentario: "",
    setor: "",
    responsavel: "",
    categoria: "",
    status: "",
    descricao: ""
  });

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <form onSubmit={handleSubmit}>
        <input type="text" name="titulo" onChange={handleChange} placeholder="Título" />
        <textarea name="comentario" onChange={handleChange} placeholder="Comentário"></textarea>
        <select name="setor" onChange={handleChange}>
            <option value="">Selecione o Setor</option>
            {/* Adicione suas opções aqui /}
        </select>
        <select name="responsavel" onChange={handleChange}>
            <option value="">Selecione o Responsável</option>
            {/ Adicione suas opções aqui /}
        </select>
        <select name="categoria" onChange={handleChange}>
            <option value="">Selecione a Categoria</option>
            {/ Adicione suas opções aqui /}
        </select>
        <select name="status" onChange={handleChange}>
            <option value="">Selecione o Status</option>
            {/ Adicione suas opções aqui */}
        </select>
        <textarea name="descricao" onChange={handleChange} placeholder="Descrição"></textarea>
        <button type="submit">Enviar</button>
        </form>
    </div>
  );
}

export default CriarChamado;