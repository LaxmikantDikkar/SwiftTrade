import React from "react";

export default function Universe(){
    return(
        <div className="container text-center pt-5">
            <p style={{fontSize: "20px"}}>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
            <h3 className="pt-5">The Zerodha Universe</h3>
            <p className="pt-3">Extend your trading and investment experience even further with our partner platforms</p>
            <div className="row between">
                <div className="col">
                    <img className="pt-3" src="/media/zerodhaFundhouse.png" alt="zerodha fund house" width={"200"}/>
                    <p className="pt-2" style={{fontSize:"10px"}}>Our asset management venture <br></br>that is creating simple and transparent index <br />funds to help you save for your goals.</p>
                </div>
                <div className="col">
                    <img className="pt-3" src="/media/sensibullLogo.svg" alt="zerodha fund house" width={"200"}/>
                    <p style={{fontSize:"10px"}} class="text-12 text-light-grey sensibull-desc pt-2">Options trading platform that lets you <br/>create strategies, analyze positions, and examine <br/>data points like open interest, FII/DII, and more.</p>
                </div>
                <div className="col">
                    <img className="pt-3" src="/media/tijori.svg" alt="zerodha fund house" width={"150"}/>
                    <p style={{fontSize:"10px"}} class="text-12 text-light-grey pt-2">Investment research platform <br/>that offers detailed insights on stocks, <br/>sectors, supply chains, and more.</p>
                </div>
            </div>

            <div className="row between pt-5">
                <div className="col">
                    <img className="pt-3" src="/media/streakLogo.png" alt="zerodha fund house" width={"200"}/>
                    
                    <p style={{fontSize:"10px"}} class="text-5 text-light-grey pt-2">Systematic trading platform <br/>that allows you to create and backtest <br/>strategies without coding.</p>
                </div>
                <div className="col">
                    <img className="pt-3" src="/media/smallcaseLogo.png" alt="zerodha fund house" width={"200"}/>
                    <p style={{fontSize:"10px"}} class="text-12 text-light-grey pt-2">Thematic investing platform <br/>that helps you invest in diversified <br/>baskets of stocks on ETFs.</p>
                </div>
                <div className="col">
                    <img className="pt-3" src="/media/dittoLogo.png" alt="zerodha fund house" width={"140"}/>
                    <p style={{fontSize:"10px"}} class="text-12 text-light-grey pt-2">Personalized advice on life <br/>and health insurance. No spam <br/>and no mis-selling.</p>
                    
                </div>

                
            </div>
            <button className="btn btn-primary mt-5 mb-5">Sign up for free</button>
        </div>
    )
}