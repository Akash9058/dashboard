import React from 'react'
import './chart.scss';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ArrowUpward } from '@mui/icons-material';


const data = [
  {
    name: "0",
    
  },
  {
    name: "Sun",
    total: 50000,
  },
  {
    name: "Mon",
    total: 70000,
  },
  {
    name: "Tue ",
    total: 65000,
  },
  {
    name: "Wed",
    total: 55080,
  },
  {
    name: "Thu",
    total: 70000,
  },
  {
    name: "Fri",
    total: 60900,
  },
  {
    name: "Sat",
    total: 78645,
  },
];

export const Chart = () => {
  return (
    <div className="chart">
      <div className="header">
        <div className="title">
          <h1>$2,78,864k total revenue</h1>
          <p>(This week)</p>
        </div>
        <div className="bottom">
          <div className="icons">
            <ArrowUpward />
            <p>27.8%</p>
          </div>
          <p>vs. Previous Week</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" aspect={3/ 1}>
        <AreaChart
          width={0}
          height={60}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="grey" />
          <YAxis  ></YAxis>
          <CartesianGrid strokeDasharray="6 6" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total"
            stroke="blue"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
