import React from 'react';
import { Tooltip, LineChart, Line, XAxis, YAxis, Legend, CartesianGrid } from 'recharts';

export default function LineCharts(props){

    const data = props.data.map(chamado => {
        let qtd = props.data.reduce((acc, chamado2) => {
            if(chamado.date === chamado2.date){
                return acc + 1
            }
            return acc
        }, 0);
        

        return {
          date: `${new Date(chamado.date).getDate()}/${new Date(chamado.date).getMonth()}`, qtd: qtd
        }
    });

    return (
    <LineChart width={500} height={400} data={data} margin={{bottom: 20}}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" label={{ value: 'Data', position: 'insideBottom', offset: -10}} />
      <YAxis label={{ value: 'Quantidade', angle: -90, position: 'insideLeft' }} />
      <Tooltip />
      <Legend verticalAlign="top" height={36} />
      <Line type="monotone" dataKey="qtd" name='Quantidade por dia' stroke="#8884d8" />
    </LineChart>
  );
};
