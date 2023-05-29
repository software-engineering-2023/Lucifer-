import React from "react";
export const PayModal =(props)=>{
    const{openPayModal,setOpenPayModal}=props;
    const showAlert = (message) => {
        alert(message);
      };
    return(
        <div className="pay-main-container">
            <div className="pay-title">
                {props.data}
            </div>
            {props.data==="PAY BILLS" && <div className="pay-modal-inputs">
                <label for select-option>pay to</label>
                <select className="select-option" >
                    <option>please choose</option>
                    <option>gas</option>
                    <option>electricity</option>
                    <option>water</option>
                    <option>Telephone bills</option>
                </select>
                <label for AMOUNT>AMOUNT</label>
                <input className="AMOUNT" type="number" placeholder="AMOUNT"/>
                <label for describtion>describtion</label>
                <input className="describtion" type="text" placeholder="PAYMENT DESCRIBTION"/>
                <div className="pay-modal-buttons">
                <button className="pay-modal-btn-pay" onClick={() => {setOpenPayModal(!openPayModal);showAlert("done")}}>Pay</button>
                <button className="pay-modal-btn-cancel" onClick={() => setOpenPayModal(!openPayModal)}>Cancel</button>
                </div>
                </div>}
            {props.data==="DONATIONS" &&<div className="pay-modal-inputs">
                <label for pay-to>PAY TO</label>
                <input className="pay-to" type="TEXT" placeholder="ACCOUNT NO."/>
                <label for AMOUNT>AMOUNT</label>
                <input className="AMOUNT" type="number" placeholder="AMOUNT"/>
                <label for describtion>describtion</label>
                <input className="describtion" type="text" placeholder="PAYMENT DESCRIBTION"/>
                <div className="pay-modal-buttons">
                <button className="pay-modal-btn-pay" onClick={() => {setOpenPayModal(!openPayModal);showAlert("transaction done")}}>Pay</button>
                <button className="pay-modal-btn-cancel" onClick={() => setOpenPayModal(!openPayModal)}>Cancel</button>
                </div>
            </div> }
            {props.data==="loan" &&<div className="pay-modal-inputs">
                <label for pay-to>LOAN ID</label>
                <input className="pay-to" type="TEXT" placeholder="LOAN ID"/>
                <label for AMOUNT>AMOUNT</label>
                <input className="AMOUNT" type="number" placeholder="AMOUNT"/>
                <label for describtion>Additional Information (optional)</label>
                <input className="describtion" type="text" placeholder="Additional Information"/>
                <div className="pay-modal-buttons">
                <button className="pay-modal-btn-pay" onClick={() => {setOpenPayModal(!openPayModal);showAlert("loan payment done")}}>Pay</button>
                <button className="pay-modal-btn-cancel" onClick={() => setOpenPayModal(!openPayModal)}>Cancel</button>
                </div>
            </div> }
        </div>
    );
}