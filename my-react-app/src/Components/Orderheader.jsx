import React from 'react'
import './Orderheader.css'
import { BsArrowLeft } from "react-icons/bs";

function Orderheader() {
  return (
    <div className="header-part">
          <div className="top-icon">
                  <div className="back"><BsArrowLeft /></div>
                  <div className="menu">:</div>
                </div>
                <div className="myyy">
                <div className="popular">My</div>
                <div className="items">3 items</div>
                </div>
                <div className="dollar-symbol">
                <div className="Dishes">Order</div>
                <div className="five">$55</div>
                </div>  
        </div>
  )
}

export default Orderheader;