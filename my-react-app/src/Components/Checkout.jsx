import React from 'react';
import './Checkout.css';

function Checkout() {
  return (
    <div className="checkout-page">
        <div className="food-content">
            <div className="foodcontent-box">
                <div className="contentss">
                    <div className="food-img"></div>
                    <div className="chiken">Chiken Salad
                        <div className="olive">Rotiisserie chiken,<br></br>olive oil, avocado</div>
                        <div className="rupayi">$15.00</div>
                    </div>
                    <div className="plus-minus">
                        <div className="plusminus">+
                          <div className="two">2</div>
                          <div className="minus">-</div>  
                        </div>
                    </div>
                </div>
            </div>
            <div className="foodcontent-box"></div>
            <div className="foodcontent-box"></div>
        </div>
    </div>
  )
}

export default Checkout;