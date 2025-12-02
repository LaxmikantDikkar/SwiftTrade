import React from "react";

export default function Awards(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h3 className="mb-5">Trust with confidence</h3>
                    <h5>Customer-first always</h5>
                    <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

                    <h5 className="mt-4">No spam or gimmicks</h5>
                    <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="https://www.google.com">Our philosophies.</a></p>

                    <h5 className="mt-4">The Zerodha universe</h5>
                    <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h5 className="mt-4">Do better with money</h5>
                    <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col-6">
                    <img className="" src="/media/trustImage.png" alt="trustImage" width={500}></img>
                    
                    <a>Explore our products</a>
                </div>
            </div>
            
        </div>
    );
}