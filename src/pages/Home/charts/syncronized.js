import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function Example(props) {
  
    const resultFirst = Object.entries(
        props.data.reduce((acc, curr) => {
          const { nome, qtd } = curr;
          if (acc[nome]) {
            acc[nome] += qtd;
          } else {
            acc[nome] = qtd;
          }
          return acc;
        }, {})
    ).map(([nome, qtd]) => ({ nome: nome, qtd: qtd }));;
    
    const dataFirst = resultFirst.map(chamado => {
        return {
            name: chamado.nome,
            value: chamado.qtd,
        }
    });

    const dataSecond = props.data.map(chamado => {
        let qtd = props.data.reduce((acc, chamado2) => {
            if(chamado.ModifieDdate === chamado2.ModifieDdate){
                return acc + 1
            }
            return acc
        }, 0);
        
        return {
          date: `${new Date(chamado.ModifieDdate).getDate()}/${new Date(chamado.ModifieDdate).getMonth()}`, qtd: qtd
        }
    });

    const datathird = props.data.map(chamado => {
        let qtd = props.data.reduce((acc, chamado2) => {
            if(chamado2.dtfim !== null){
                return acc + 1
            }
            return acc
        }, 0);
        
        return {
          date: `${new Date(chamado.dtfim).getDate()}/${new Date(chamado.dtfim).getMonth()}`, qtd: qtd
        }
    });

    
  return (
    <div style={{ width: '100%' }}>
      <h4>Status do chamdo por quantidade</h4>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          width={500}
          height={200}
          data={dataFirst}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Brush />
          <Line type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
      <h4>Chamados alterados por dia</h4>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          width={500}
          height={200}
          data={dataSecond}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="qtd" stroke="#82ca9d" fill="#82ca9d" />
          <Brush />
        </LineChart>
      </ResponsiveContainer>

      <h4>Chamados Finalizados por dia</h4>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          width={500}
          height={200}
          data={datathird}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Brush />
          <Area type="monotone" dataKey="qtd" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Example;
