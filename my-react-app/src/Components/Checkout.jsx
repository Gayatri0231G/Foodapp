import React from 'react';
import './Checkout.css';
import { RxArrowRight } from "react-icons/rx";

function Checkout() {
  return (
    <div className="checkout-page">
        <div className="food-content">
            <div className="foodcontent-box">
                <div className="contentss">
                    <div className="food-img">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkrghSJQunhp4Zsrs5xQeQksxDpnlnVdYUPIulh9yWevEnHUKc"></img>
                    </div>
                    <div className="chiken">Chicken Salad
                        <div className="olive">Rotiisserie chiken,<br></br>olive oil, avocado</div>
                        <div className="rupayi">$15.00</div>
                    </div>
                    <div className="plus-minus">
                        <div className="plusminus">+
                          <div className="two">2</div>
                          <div className="minus">--</div>  
                        </div>
                    </div>
                </div>
            </div>
            <div className="foodcontent-box">
            <div className="contentss">
                    <div className="food-img">
                      <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRfJFLVbNz7EzXrOv5upgL2JXm3TsGM6eeko7uEV7b6TFaGU6h_"></img>
                    </div>
                    <div className="burger">Beef Burger
                        <div className="olive">Garlic mayo, avocado,<br></br>cheese, lettuce, beef</div>
                        <div className="rupayi">$20.00</div>
                    </div>
                    <div className="plus-minus">
                        <div className="plusminus">+
                          <div className="two">2</div>
                          <div className="minus">--</div>  
                        </div>
                    </div>
                </div>
            </div>
            <div className="foodcontent-box">
            <div className="contentss">
                    <div className="food-img">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Z46P5_imKBw9KMtrrKYGmtZAHfch-o_ZAx0nfdKhVz9FP0kz"></img>
                    </div>
                    <div className="chiken">Seafood Soup
                        <div className="olive">Lump crab meat,<br></br>mushrooms, bellper</div>
                        <div className="rupayi">$20.00</div>
                    </div>
                    <div className="plus-minus">
                        <div className="plusminus">+
                          <div className="two">2</div>
                          <div className="minus">--</div>  
                        </div>
                    </div>
                </div>
            </div>
            <div className="proceed-box">
                <div className="proceed">
                    <div className="proceed-title">Proceed to Checkout</div>
                    <div className="right-icon"><RxArrowRight />
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout;