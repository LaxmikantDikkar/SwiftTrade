import React from "react";

export default function Pricing(){
    return(
        <div style={{backgroundColor: "lightgray"}}>
        <div className="container">
            <div className="row between pt-5">
                <div className="col">
                    <h1 className="">Support Portal</h1>
                    
                </div>
                <div className="col">
                    <button className="btn btn-primary" style={{marginLeft: "400px"}}>My tickets</button>
                </div>
               
            </div>
             <br></br> <br></br>
             <input className="" style={{height:"70px", width:"1000px", fontSize:"20px", backgroundColor: "white"}} placeholder="Eg: How do I open my account, How do i activate F&O..."></input>
        </div>
        </div>
    )
}