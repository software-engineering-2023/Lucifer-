import React from "react";

export const ReminderModal=({openReminderModal,setOpenReminderModal})=>{
    const showAlert = (message) => {
        alert(message);
      };
    return(
        <div className="reminder-container">
            <div className="reminder-title">
                Reminder
            </div>
            <div className="reminder-inputs">
                <label for reminder-select>REMINDER FOR</label>
                <select className="reminder-select">
                    <option>PLEASE CHOOSE</option>
                    <option>Loan payment</option>
                    <option>Credit card payment</option>
                    <optgroup label="Bills">
                    <option>electricity</option>
                    <option>gas</option>
                    <option>water</option>
                    <option>Telephone bill</option>
                    </optgroup>
                </select>
                <label for reminder-date>DATE</label>
                <input className="reminder-date" type="date"/>
                <label for desc>DESCREBTION</label>
                <input className="desc" type="text" placeholder="DESCREBTION(OPTIONAL)"/>
                <div className="reminder-modal-buttons">
                <button className="reminder-modal-btn-set" onClick={() => {setOpenReminderModal(!openReminderModal);showAlert("reminder done")}}>set</button>
                <button className="reminder-modal-btn-cancel" onClick={() => setOpenReminderModal(!openReminderModal)}>Cancel</button>
                </div>
            </div>
        </div>
    );
}