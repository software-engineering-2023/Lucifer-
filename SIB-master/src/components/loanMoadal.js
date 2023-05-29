import React from "react";

export const LoanModal = ({ OpenLoanModal, setOpenLoanModal }) => {
    const showAlert = (message) => {
        alert(message);
      };
    return (
        <div className="loan-main-container">
            <div className="loan-modal-inputs">
                <label>NAME</label>
                <input type="text"  placeholder="Name" />
                <label>MOBILE NUMBER</label>
                <input type="text"  placeholder="MOBILE NUMBER" />
                <label>NATIONAL ID</label>
                <input type="text"  placeholder="NATIONAL ID" />
                <label>SALARY</label>
                <input type="number"  placeholder="SALARY" />
                <label>LOAN AMOUNT</label>
                <input type="number"  placeholder="LOAN AMOUNT" />
                <label>LOAN DURATION</label>
                <input type="number"  placeholder="LOAN DURATION" />
            </div>
            <div className="loan-modal-buttons">
            <button  className="loan-modal-btn-apply" onClick={() => {setOpenLoanModal(!OpenLoanModal);showAlert("form submitted")}}>Apply</button>
            <button className="loan-modal-btn-cancel" onClick={() => setOpenLoanModal(!OpenLoanModal)}>Cancel</button>
            </div>
        </div>
    );
}