import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/card";
import CardHistory from "../components/cardHistory";
import PayCard from "../components/payCard";
import "./creditcardstyles.css";

function CreditCard(){
    return(
        <div className="credit-card">
            <Navbar/>
            <Card/> 
            <CardHistory/>   
            <PayCard/>
        </div>
    );
}
export default CreditCard;