import React, { useState } from 'react'
import "./dropdown.scss"
import { ArrowDropDown } from '@mui/icons-material';
export const Dropdown = () => {
    const [isActive,setIsActive]= useState(false)
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        Last 7 days
        <ArrowDropDown/>
      </div>
      {isActive && (
        <div className="dropdown-content">
          <div className="dropdownItem">Sunday</div>
          <div className="dropdownItem">Monday</div>
          <div className="dropdownItem">Tuesday</div>
          <div className="dropdownItem">Wednesday</div>
          <div className="dropdownItem">Thursday</div>
          <div className="dropdownItem">Friday</div>
          <div className="dropdownItem">Saturday</div>
        </div>
      )}
    </div>
  );
}
