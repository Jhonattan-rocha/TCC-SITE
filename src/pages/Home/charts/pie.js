import React from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend, } from 'recharts';

function PieCharts(props){
    const COLORS = ["#FFC947", "#45B5AA", "#F47B5A", "#9B59B6", "#4D9DE0", "#FF5E5B", "#FFC947", "#27AE60", "#3498DB", "#F368E0", "#FF9F71", "#FFD670", "#A0C4FF", "#D8B4FE", "#90EE90"];

    const result = Object.entries(
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
    
    const data = result.map(chamado => {
        return {
            name: chamado.nome,
            value: chamado.qtd,
        }
    });
      
    return (
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="value"
          cx={200}
          cy={130}
          name='Quantidade por status'
          innerRadius={80}
          outerRadius={120}
          fill="#8884d8"
          label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
            const radius = innerRadius + (outerRadius - innerRadius) * 0.25;
            const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
            const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
  
            return (
              <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
              >
                {`${(percent * 100).toFixed(0)}%`}
              </text>
            );
          }}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="top" height={36} />
      </PieChart>
    );
  };
  

export default PieCharts;
