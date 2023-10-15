import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ContainerCalendar, ContainerChamado, ContainerChamados, ContainerPrincipal, ContainerTitle, DayContainer, TextContainer, TextDayCalendar, TextQtdChamado, TitleMain } from "./styled";
import { AiOutlineStepBackward, AiOutlineStepForward } from "react-icons/ai";
import * as actions from '../../../store/modules/chamadosreducer/actions';
import Chamado from "./chamado";

function CalendarComponent(props) {
  const currentDate = new Date(); // Obtenha a data atual
  const [monthMain, setMonth] = React.useState(currentDate.getMonth())
  const daysInMonth = new Date(currentDate.getFullYear(), monthMain+1, 0).getDate(); // Obtenha o número de dias no mês atual
  
  const user = useSelector(state => state.authreducer);
  const dispatch = useDispatch();
  const chamadoslist = useSelector(state => state.chamadosreducer.chamados.result) || [];
  const statuslist = useSelector(state => state.chamadosreducer.status.result || []);


  const handleDrop = (event, data) => {
    event.preventDefault();
    let dados = event.dataTransfer.getData("application/json");
    dados = JSON.parse(dados)
    dados.agendamento = data;
    
    dispatch(actions.EDITAR_CHAMADOREQUEST(dados))
    // Manipule os dados que foram soltos aqui
  };

  const handleDragOver = (event) => {
      event.preventDefault();
      // O cursor do mouse mudará para indicar que a área é uma área válida de drop
  };


  const handleNextMonth = () => {
    if(monthMain === 11){
      setMonth(0)
      return 
    }
    setMonth(prevMonth => prevMonth + 1);
  };
  
  const handlePreviousMonth = () => {
    if(monthMain === 0){
      setMonth(11)
      return
    }
    setMonth(prevMonth => prevMonth - 1);
  };

  const getMonthName = (monthNumber) => { 
    const months = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ];
  
    return months[monthNumber];
  };

  const renderCalendarDays = () => {
    const calendarDays = [];

     for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentDate.getFullYear(), monthMain, i);
      const day = date.getDate();
      const month = monthMain + 1;
      const year = date.getFullYear();

      const chamadosfiltrados = chamadoslist.filter(chamados => {
        const data = new Date(chamados.agendamento);
        const dia = data.getDate();
        const mes = data.getMonth() + 1;
        const ano = data.getFullYear();

        if(Number(dia) === Number(day) && Number(mes) === Number(month) && Number(ano) === Number(year)){
            return chamados
        }
      }) || []

      calendarDays.push(
        <DayContainer key={i}>
          <TextContainer handleDrop={(e) => handleDrop(e, date)} handleDragOver={handleDragOver}>
              <TextDayCalendar>{day}</TextDayCalendar>
              <TextQtdChamado>{chamadosfiltrados.length}</TextQtdChamado>
              <TextQtdChamado>Chamados</TextQtdChamado>
              <ContainerChamados>
                {chamadosfiltrados.map(ch => (
                    <Chamado chamado={ch} status={statuslist.find(st => st.id === ch.id) ? statuslist.find(st => st.id === ch.id).nome: ""} key={ch.id}></Chamado>
                ))}
              </ContainerChamados>
          </TextContainer>
        </DayContainer>
      );
    }

    return calendarDays;
  };

  return (
    <ContainerPrincipal>
        <ContainerTitle>
          <div onClick={handlePreviousMonth}>
            <AiOutlineStepBackward size={30} color="#000" cursor='pointer'/>
          </div>
          <span style={{color: 'black'}}>{currentDate.getFullYear()} </span>
          <TitleMain>{getMonthName(monthMain)}</TitleMain>
          <div onClick={handleNextMonth}>
            <AiOutlineStepForward size={30} color="#000" cursor='pointer'/>
          </div>
        </ContainerTitle>
        <ContainerCalendar>
          {renderCalendarDays()}
        </ContainerCalendar>
    </ContainerPrincipal>
  );
};

export default CalendarComponent;
