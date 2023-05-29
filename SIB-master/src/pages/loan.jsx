import React from "react";
import Loans from "../components/loans";
import Navbar from "../components/Navbar";

function Loan() {
    return (
        <div className="Loan">
            <Navbar/>
            <Loans/>  
        </div>
    );
}
export default Loan;