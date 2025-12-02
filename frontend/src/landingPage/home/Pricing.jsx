import React from "react";

export default function Pricing(){
    return(
        <div className="container">
            <div className="row mt-5">
                <div className="col-6">
                    <h4>Unbeatabel pricing</h4>
                    <p className="mt-4">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>

                </div>
                
                    
                        <div className="col-1"><img src="/media/pricing0.svg" width={100} alt="zero image"></img></div>
                        
                        <div className="col-1 mt-4">
                            <p style={{fontSize:11}}>Free account opening</p>
                        </div>
                        
                    
                    <div className="col-1">
                        <img src="/media/pricingMF.svg" width={100} alt="zero image"></img>

                    </div>
                    <div className="col-1 mt-4">
                        <p style={{fontSize:11}}>Free equity delivery
and direct mutual funds</p>
                    </div>
                    <div className="col-1">
                        <img src="/media/pricing20.jpg" width={100} alt="zero image"></img>
                        
                    </div>
                    <div className="col-1 mt-4">
                        <p style={{fontSize:11}}>Intraday and F&O</p>
                    </div>

                
            </div>
        </div>
    );
}