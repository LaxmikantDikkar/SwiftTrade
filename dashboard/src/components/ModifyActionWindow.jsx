import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { useContext } from 'react';
import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const ModifyActionWindow = ({ uid }) => {
  const generalContext = useContext(GeneralContext);  
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [holdingData, setHoldingData] = useState([]);
  
  useEffect(()=>{
    axios.get(`http://localhost:3000/newModifyOrder/${uid}`).then((res)=>{
        setStockPrice(res.data.price);
        setStockQuantity(res.data.qty);
    }).catch((err)=>{
        console.log(err.message);
    });
  },[]);
    
   
// useEffect(()=>{
//     console.log(holdingData);
// })
  const handleModifyClick = ()=>{
    axios.patch(`http://localhost:3000/newModify/${uid}`, {
      qty: stockQuantity,
      price: stockPrice
    });
    GeneralContext.closeModifyWindow();
  }
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
          <Link className="btn btn-blue" onClick={handleModifyClick}>
            Modify
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModifyActionWindow;