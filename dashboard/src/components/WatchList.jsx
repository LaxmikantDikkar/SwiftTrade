import React, { useState, useContext, useEffect } from "react";

import GeneralContext from "./GeneralContext";
import axios from "axios";
import {Tooltip, Grow, iconButtonClasses } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';


const WatchList = () => {
  const [data, setData] = new useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3000/watchlist").then((res)=>{
      setData(res.data);
    }).catch((err)=>{
      console.log(err.message);
    })
  },[]);
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {data.length} / 50</span>
      </div>

      <ul className="list">
        {data.map((stock, index) => {
          return <WatchlistItem stock={stock} key={index}/>;
        })}
      </ul>

      
    </div>
  );
};

const WatchlistItem = ({stock})=>{
  let [showWatchListActions, SetShowWatchListActions] = useState(false);

  let handleMouseEnter = ()=>{
    SetShowWatchListActions(true);
  }

  let handleMouseExit = ()=>{
    SetShowWatchListActions(false);
  }
  return(
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
    <div>
      <span className="item"><p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
      
        <div className="itemInfo">
          <span className="percent">
            {stock.percent}
          </span>
          {stock.isDown ? <KeyboardArrowDownIcon className="down"/> : <KeyboardArrowUpIcon className="up"/>}
          <span className="price">{stock.price.$numberDecimal}</span>
        </div>

      
      </span>
    </div>
    {showWatchListActions}<WatchlistActions uid={stock.name}/>
    </li>
  )
}

const WatchlistActions = ({uid})=>{
  
  const generalContext = useContext(GeneralContext);
  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
    
  };

  const handleSellClick = () => {
    generalContext.openSellWindow(uid);
    
  };

  const handleAnalyticsClick = () =>{
    console.log("handel analytics");
    generalContext.openAnalytics();
  }
  return(
      <span className="actions">
        <span>
        <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}><button onClick={handleBuyClick} className="buy">Buy</button></Tooltip>
        <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}><span><button onClick={handleSellClick} className="sell">Sell</button></span></Tooltip>
        <Tooltip title="Analytics" placement="top" arrow TransitionComponent={Grow}><span type="button" onClick={handleAnalyticsClick}><AnalyticsIcon/></span></Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}><span><MoreHorizOutlinedIcon/></span></Tooltip>
        </span>
      </span>
      )
  
}
export default WatchList;


