import React from "react";

export const Modal = ({ openModal, setOpenModal }) => {
    const showAlert = (message) => {
        alert(message);
      };
    return (
        <div className="main-container">
            <div className="modal-inputs">
                <label>Amount</label>
                <input type="number"  placeholder="0.0" />
            </div>
            <button className="modal-btn-apply" onClick={() => {setOpenModal(!openModal);showAlert("done")}}>Apply</button>
            <button className="modal-btn-cancel" onClick={() => setOpenModal(!openModal)}>Cancel</button>
        </div>
    );
}