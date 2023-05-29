import React from "react";
import card from "../images/mockup-2 small.png";
import "../components/yourcardstyles.css";
import { Link } from "react-router-dom";

function YourCard(){
    return(
        <div className="your-card">
            <pp>Your card</pp>
            <img className="yourcreditcard-img" alt="creditcard-img" src={card}/>
            <Link className="cc-manage" to="/creditcard">Mange</Link>
        </div>
    );
}
export default YourCard;