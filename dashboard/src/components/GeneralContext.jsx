import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";
import ModifyActionWindow from "./ModifyActionWindow";
import Analytics from "./Analytics";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {},
  closeSellWindow: () => {},
  openModifyWindow: (uid) => {},
  closeModifyWindow: () => {},
  openAnalytics: ()=>{},
  closeAnalytics: ()=>{},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [isModifyWindowOpen, setIsModifyWindowOpen] = useState(false);

  const [isAnalytics, setIsAnalytics] = useState(false);
  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  const handleOpenSellWindow = (uid) => {
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  const handleModifyWindow = (uid) => {
    
    setIsModifyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseModifyWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  const handleAnalytics = ()=>{
    console.log("analytics");
    setIsAnalytics(true);
  }

  const handleCloseAnalytics = ()=>{
    setIsAnalytics(false);
  }
  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
        openModifyWindow: handleModifyWindow,
        openAnalytics: handleAnalytics,
        closeAnalytics: handleCloseAnalytics,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
      {isModifyWindowOpen && <ModifyActionWindow uid={selectedStockUID} />}
      {isAnalytics && <Analytics/>}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;