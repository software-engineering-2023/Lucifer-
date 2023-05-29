import React from "react";
import { useState } from "react";
import "./loansstyle.css";
import { LoanModal } from "./loanMoadal";

function Loans() {
    const [OpenLoanModal, setOpenLoanModal] = useState(false);
    return(
        <div className="Loans">
            <div className="loanss">
                <div className="loanTitle">
                    <h4>Personal loan</h4>
                </div>
                <div className="loan-info">
                    <h3>Loan tenor up to: <p2>10</p2> years </h3>
                    <h3>Reach up to: <p2>3,000,000</p2> EGP </h3>
                    <h3>Interest rate <p2>7</p2> % </h3>
                </div>
                <button className="loan-apply" onClick={()=>{setOpenLoanModal(true);}}>Apply now</button>
            </div>
            <div className="loanss">
                <div className="loanTitle">
                    <h4>Car loan</h4>
                </div>
                <div className="loan-info">
                    <h3>Loan tenor up to: <p2>7</p2> years </h3>
                    <h3>Reach up to: <p2>1,500,000</p2> EGP </h3>
                    <h3>Interest rate <p2>3.5</p2> % </h3>
                </div>
                <button className="loan-apply" onClick={()=>{setOpenLoanModal(true);}}>Apply now</button>
            </div>
           {OpenLoanModal && <LoanModal OpenLoanModal={OpenLoanModal} setOpenLoanModal={setOpenLoanModal}/>}
        </div>
    );
}
export default Loans;