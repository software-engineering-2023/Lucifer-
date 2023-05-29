import React from "react";
import AccTransactions from "./accTransactions";
import card from "../images/mockup-2.png";
import YourLoan from "./yourloan";
import "./searchResultsstyless.css"

function SearchResult(){
    return(
        <div className="search-results">
            <div className="saccbalance">
                <i class="fa-sharp fa-solid fa-sack-dollar"></i>
                <label for i>Savings</label>
                <hh>Account ID: <br/> <pp2>1234 5678 8911 4576</pp2> </hh>
                <br/>
                <hh>Balance:<br/> <pp2>$ 5,000,000</pp2> </hh>
                <button className="closeAcc"> Close account</button>
            </div>
            <div className="scard-info">
            <img className="screditcard-img" alt="creditcard-img" src={card}/>
            <div class="svertical-line"></div> 
            <div className="sbalance">
               <h6> $ -17260<p>Current balance</p></h6>
               <h6> $ -17260<p>Current balance</p></h6>
               <h6> $ -17260<p>Current balance</p></h6>
            </div>
            <div class="smeter">
                <span></span>
            </div>
            <div className="smonthly-limit">
                <h10>Monthly payment limit</h10>
                <h11>$ 17260/50000</h11>
            </div>
            <div className="sswitchh">
            <label class="switch">
            <input type="checkbox"/>
            <span class="slider round"></span>
            </label>
            <p5>deactivate card</p5>
            </div>
        </div>
            <AccTransactions/>
            <div className="looan"><YourLoan/></div>
            
        </div>
    );
}
export default SearchResult;