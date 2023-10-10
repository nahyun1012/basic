import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#4682B4', '#F0FFFF', '#F0E68C', '#32CD32', '#F08080', '#FFFACD', '#DDA0DD', '#E0FFFF', '#FF6347', '#D3D3D3', '#FFB6C1', '#87CEFA', '#ADD8E6', '#FFDAB9', '#F4A460', '#9ACD32', '#F5DEB3'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, entry }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {entry} {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function RechartPie({ countPerCity }) {
  const data = [];

  for (let key in countPerCity) {
    // console.log(key, countPerCity[key])

    data.push({
      name: key,
      value: countPerCity[key],
      entry : key,
    })
  }

  data.sort((a, b) => a.value - b.value)

{/* <Pie label={renderLabel} [ you other properties ]>
[ your content ]
</Pie> */}
  return (
    <div className="h-[450px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={220}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
