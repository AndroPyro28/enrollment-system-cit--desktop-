import useWindowSize from "@/hooks/useWindowSize";
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type StudentChartProps = {
  data: any;
};

export default function StudentChart({ data }: StudentChartProps) {
  

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
          <Bar dataKey="value" fill="#71A9FD"  />
        </BarChart>
      </ResponsiveContainer>
  );
}
