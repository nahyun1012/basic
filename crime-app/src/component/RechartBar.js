import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function RechartBar({ countPerCity }) {

  const data = [];

  for (let key in countPerCity) {
    // console.log(key, countPerCity[key])

    data.push({
      name: key,
      사고건수: countPerCity[key],
    })
  }

  // console.log(data)

  return (
    <div style={{ height: "400px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="사고건수" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
