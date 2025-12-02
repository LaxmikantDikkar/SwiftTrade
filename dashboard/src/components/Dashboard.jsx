import React from "react";
import { Route, Routes } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import Analytics from "./Analytics";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider> 
      
       <div className="content">
         
        <Routes>
          <Route exact path="/" element={<CookiesProvider defaultSetOptions={{ path: '/' }}>
      <Summary />
    </CookiesProvider>} />
          
          <Route path="/orders" element={<GeneralContextProvider>
        <Orders/>
      </GeneralContextProvider>}/>
          
           <Route path="/holdings" element={<Holdings />} />
           <Route path="/funds" element={<Funds />} />
           <Route path="/apps" element={<Apps />} />
           <Route path="/positions" element={<Positions />} />
          
        </Routes>
        
      </div>
      
    </div>
  );
};

export default Dashboard;