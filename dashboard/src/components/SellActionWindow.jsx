import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { useContext } from 'react';
import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const generalContext = useContext(GeneralContext);  
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [holdingData, setHoldingData] = useState([]);  
  const handleSellClick = () => {
        
        axios.get(`http://localhost:3000/newSellOrder/${uid}`,{
          params:{qty: stockQuantity, price: stockPrice}
        }).then((res)=>{
            if(res.data.length <= 0){
                
                alert("You cannot sell this stock because it's not in your portfolio");
                return;
            }
            
            setHoldingData(res.data);
            if(stockQuantity > holdingData[0].qty){
              alert(`You don't have enough stock to sell please change quantity to ${holdingData[0].qty} or less`);
            }
        });
    
    
    generalContext.closeSellWindow();
  };
// useEffect(()=>{
//     console.log(holdingData);
// })
  const handleCancelClick = () => {
    GeneralContext.closeSellWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        {/* <span>Margin required ₹{stockPrice*stockQuantity}</span> */}
        <div>
          <Link className="btn btn-blue" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;