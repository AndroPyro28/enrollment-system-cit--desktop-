import useWindowSize from "@/hooks/useWindowSize";
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type SectionChartProps = {
  data: any;
};

export default function SectionChart({ data }: SectionChartProps) {
  

  // 768px
  const windowSize = useWindowSize();
  return (
    <ResponsiveContainer width="100%" height="100%">
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="section 1" fill="#343535"  />
      <Bar dataKey="section 2" fill="#5f5f5f"  />
      <Bar dataKey="section 3" fill="#888888"  />
      <Bar dataKey="section 4" fill="#aaaaaa"  />
    </BarChart>
  </ResponsiveContainer>
  );
}
