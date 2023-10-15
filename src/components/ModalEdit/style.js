import styled from "styled-components";

export const Modal = styled.div`
  background: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  z-index: 9999; /* Aumente o valor do z-index */
  position: absolute; /* Adicione esta propriedade */
  top: 50%; /* Adicione estas propriedades para centralizar verticalmente */
  left: 50%;
  transform: translate(-12%, -59%);
`;
