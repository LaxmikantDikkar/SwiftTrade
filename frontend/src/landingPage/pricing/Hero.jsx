import React from "react";

export default function Pricing(){
    return(
        <>
        <div className="container text-center pt-5">
            <h2 className="">Charges</h2>
            <p style={{fontSize:"30px"}}>List of all charges and taxes</p>
            <div className="row between pt-5">
                <div className="col pt-5 ml-5">
                    <img src="/media/pricing0.svg"></img>
                    <h2>Free equity delivery</h2>
                    <p style={{fontSize:"20px"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col pt-5 ml-5">
                    <img src="/media/pricing20.jpg" width={350}></img>
                    <h2>Intraday and F&O trades</h2>
                    <p style={{fontSize:"20px"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col pt-5 ml-5">
                    <img src="/media/pricing0.svg"></img>
                    <h2>Free direct MF</h2>
                    <p style={{fontSize:"20px"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
        </>
    )
}