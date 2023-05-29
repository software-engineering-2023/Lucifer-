import React from "react";
import { Link } from "react-router-dom";
import "./bankerstyles.css"

function Banker() {
  return (
    <div className="banker">
      <h1>Welcome, Banker!</h1>

      <section className="loan-requests">
        <h2>Loan Requests</h2>
        <Link to="/loanRequests">View Loan Requests</Link>
      </section>

      <section className="card-requests">
        <h2>Credit Card Requests</h2>
        <Link to="/cardRequests">View Credit Card Requests</Link>
      </section>

      <section className="account-managment"> 
        <h2>Accounts Management</h2>
        <Link to="/manageAccounts">Manage Accounts</Link>
      </section>
    </div>
  )
}
export default Banker;