import React from "react";

export default function Hero(){
    return(
        <div className="container text-center p-5">
            <img src="/media/homeHero.png" width={1000} className="mb-4"/>
            <h1 className="mt-4">Invest in everything</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button className="btn btn-primary mt-2">Sign up for free</button>
        </div>
        
    );
}