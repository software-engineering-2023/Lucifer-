import React from "react";
import "./Herostyles.css";

function Hero(props) {
    return (<>
    <div className={props.cName}>
         <img className="heroImage" alt="heroImage" src={props.heroImage}/>
            <div className="heroText">
                <h1>{props.title}</h1>
                <p>{props.text}</p> 
            </div>
        </div>
    </>
        
    );
}
export default Hero;