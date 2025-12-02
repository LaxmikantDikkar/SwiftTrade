import React from "react";

export default function LeftSection({imageLink, text, heading}){
    return(
        <div className="container pt-5" >
            
            <div className="row between pt-5">
                <div className="col-7">
                    
                     <img src={imageLink} alt="kite image" />
                    
                </div>
                
                <div className="col-4" style={{padding: "50px"}} ><h4 >{heading}</h4><p>{text}</p></div>
            </div>
            
            
        </div>
        
    );
}