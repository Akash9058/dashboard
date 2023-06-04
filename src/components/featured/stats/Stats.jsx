import React from 'react'
import './stats.scss'
import { ArrowUpward } from '@mui/icons-material'
export const Stats = (props) => {
  return (
    <div className="stats" style={{ backgroundColor: props.color }}>
      <div
        className="logo"
        style={{  color: props.iconColor}}
      >
        {props.icon}
      </div>
      <div className="left">
        <div className="title">{props.title}</div>
        <div className="subTitle">{props.subTitle}</div>
        <div className="skillProgress">
          <div className="fill" style={{width:props.width}} ></div>
        </div>
      </div>
      <div
        className="right"
        style={{ backgroundColor: props.tiniColor, color: props.iconColor }}
      >
        <ArrowUpward />
        <div className="count">{props.count}</div>
      </div>
    </div>
  );
}
