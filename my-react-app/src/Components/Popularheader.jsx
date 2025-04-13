import React from 'react';
import './Popularheader.css';
import { BsArrowLeft } from "react-icons/bs";

function Food() {
  return (
    <div className="header">
      <div className="top-icon">
        <div className="back"><BsArrowLeft /></div>
        <div className="menu">:</div>
      </div>
      <div className="popular">Popualr</div>
      <div className="Dishes">Dishes</div>
    </div>
  )
}



export default Food;


