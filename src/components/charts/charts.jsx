import React from 'react'
import { Chart } from './chart/chart'
import './charts.scss'
export const Charts = () => {
  return (
    <div className="charts">
      <div className="chartTitle">Revenue stats</div>
      <Chart />
    </div>
  );
}
