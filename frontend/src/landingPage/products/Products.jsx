import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
export default function Navbar(){
    return(
        <>
            <Hero/>
            <hr ></hr>
            <LeftSection imageLink={"/media/kite.png"} text={"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."} heading={"Kite"}/>

            <RightSection imageLink={"/media/console.png"} text={"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."} heading={"Console"}/>

            <LeftSection imageLink={"/media/coin.png"} text={"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."} heading={"Coin"}/>

            <RightSection imageLink={"/media/kiteconnect.png"} text={"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."} heading={"Kite Connect API"}/>

            <LeftSection imageLink={"/media/varsity.png"} text={"An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."} heading={"Varsity mobile"}/>

            <Universe/>
        </>
    );
}