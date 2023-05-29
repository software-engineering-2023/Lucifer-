import React from "react";

export const CreditCardModal = ({ OpenCreditCardModal, setOpenCreditCardModal }) => {
    const showAlert = (message) => {
        alert(message);
      };
    return (
        <div className="creditcard-main-container">
            <div className="creditcard-modal-inputs">
                <label>NAME</label>
                <input type="text"  placeholder="Name" />
                <label>MOBILE NUMBER</label>
                <input type="text"  placeholder="MOBILE NUMBER" />
                <label>NATIONAL ID</label>
                <input type="text"  placeholder="NATIONAL ID" />
                <label>SALARY</label>
                <input type="number"  placeholder="SALARY" />
                <label>AGE</label>
                <input type="number"  placeholder="AGE" />
                <label>EMAIL</label>
                <input type="text"  placeholder="EMAIL" />
            </div>
            <div className="creditcard-modal-buttons">
            <button className="creditcard-modal-btn-apply" onClick={() => {setOpenCreditCardModal(!OpenCreditCardModal);showAlert("form submitted")}}>Apply</button>
            <button className="creditcard-modal-btn-cancel" onClick={() => setOpenCreditCardModal(!OpenCreditCardModal)}>Cancel</button>
            </div>
        </div>
    );
}