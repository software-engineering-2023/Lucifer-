import React from "react";
import card from "../images/mockup-2.png";
import "../components/cardstyles.css";

function Card(){
    return(
        <div className="card-info">
            <img className="creditcard-img" alt="creditcard-img" src={card}/>
            <div class="vertical-line"></div> 
            <div className="balance">
               <h6> $ -17260<p>Current balance</p></h6>
               <h6> $ -17260<p>Current balance</p></h6>
               <h6> $ -17260<p>Current balance</p></h6>
            </div>
            <div class="meter">
                <span></span>
            </div>
            <div className="monthly-limit">
                <h10>Monthly payment limit</h10>
                <h11>$ 17260/50000</h11>
            </div>
            <div className="switchh">
            <label class="switch">
            <input type="checkbox"/>
            <span class="slider round"></span>
            </label>
            <p5>deactivate card</p5>
            </div>
        </div>
    );
}
export default Card;