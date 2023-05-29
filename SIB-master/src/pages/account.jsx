import React from "react";
import Navbar from "../components/Navbar";
import YourCard from "../components/yourcard";
import YourLoan from "../components/yourloan";
import AccTransactions from "../components/accTransactions";
import AccountMain from "../components/accountMain";
import "./accountstyles.css";
function Account() {
  return(
    <div className="account-page" >
      <Navbar/>
      <YourCard/>
      <YourLoan/>
      <AccTransactions/>
      <AccountMain/>
    </div>
  );
}
export default Account;