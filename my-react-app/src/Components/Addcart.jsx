import React from 'react'
import './Addcart.css'
import { RxArrowRight } from "react-icons/rx";

function Addcart() {
  return (
    <div className="mainconatiner">
      <div className="img">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkrghSJQunhp4Zsrs5xQeQksxDpnlnVdYUPIulh9yWevEnHUKc"></img>
      </div> 
      <div className="chiken-title">Chicken Salad</div>
      <div className="rotisserie">Rotisserie chiken, red onion,<br></br>olive oil, lemon juice, avacado</div>
      <div className="price">$20.00</div>
      <div className="calories-container">
      <div className="chart-circle">
        <svg width="140" height="140">
          <circle cx="70" cy="70" r="50" stroke="#e6e6e6" strokeWidth="10" fill="none" />
          
          <circle
            cx="70"
            cy="70"
            r="50"
            stroke="#9B1973"
            strokeWidth="10"
            fill="none"
            strokeDasharray="144.44 169.56"
            strokeDashoffset="0"
            strokeLinecap="round"
          />
          
          <circle
            cx="70"
            cy="70"
            r="50"
            stroke="#FEC84D"
            strokeWidth="10"
            fill="none"
            strokeDasharray="87.92 226.08"
            strokeDashoffset="-144.44"
            strokeLinecap="round"
          />
          
          <circle
            cx="70"
            cy="70"
            r="50"
            stroke="#7DC355"
            strokeWidth="10"
            fill="none"
            strokeDasharray="81.64 232.36"
            strokeDashoffset="-232.36"
            strokeLinecap="round"
          />
        </svg>

        <div className="center-text">
          <div className="calories">242</div>
          <div className="label">Total Calories</div>
        </div>
      </div>

      <div className="legend">
        <div className="legend-item">
          <span style={{ color: '#7DC355' }}>Protein</span>
          <span style={{ color: '#7DC355', fontWeight: 'bold' }}>26%</span>
        </div>
        <div className="legend-item">
          <span style={{ color: '#FEC84D' }}>Carbohydrate</span>
          <span style={{ color: '#FEC84D', fontWeight: 'bold' }}>28%</span>
        </div>
        <div className="legend-item">
          <span style={{ color: '#9B1973' }}>Fat</span>
          <span style={{ color: '#9B1973', fontWeight: 'bold' }}>46%</span>
        </div>
      </div>
    </div>
    <div className="addcart-box">
      <div className="addcart">
        <div className="addcart-title">Add to Cart</div>
        <div className="right"><RxArrowRight />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Addcart;