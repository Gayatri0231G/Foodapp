import React from 'react'
import './DescriptionHeader.css'
import { BsArrowLeft } from "react-icons/bs";

function Descriptionheader() {
  return (
    <div className="header-part">
      <div className="top-icon">
              <div className="back"><BsArrowLeft /></div>
              <div className="menu">:</div>
            </div>
            <div className="popular">Dish</div>
            <div className="Dishes">Description</div>  
    </div>
  )
}

export default Descriptionheader;