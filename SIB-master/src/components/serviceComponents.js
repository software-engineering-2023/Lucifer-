import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./serviceComponentsSyles.css";
import {PayModal} from "./payModal";
import {ReminderModal} from "./reminderModal"
import { CreditCardModal } from "./creditCardModal";

 
function ServiceComponents() {
    const[openPayModal,setOpenPayModal]=useState(false);
    const[openReminderModal,setOpenReminderModal]=useState(false);
    const[OpenCreditCardModal,setOpenCreditCardModal]=useState(false);
    const[data,setData]=useState(null);
   
    return(
        <div className="servicePage">
           <div className="servicesComponents">
           <div className="servicess">
                <i3 class="fa-regular fa-credit-card"></i3>
                <Link className="services-links" to='/creditCard'>Credit Card</Link>
                <p>Manage all you credit cards clearily in one place</p>
                <div className="options">
                <button className="pay-button" onClick={()=>{setOpenCreditCardModal(true);}}>Apply for a new credit Card</button>
                    <Link className="options-links" to="/creditcard">Mange credit cards</Link>
                </div>
            </div>

            <div className="servicess">
                <i3 class="fa-solid fa-sack-dollar"></i3>
                <Link className="services-links" to="/loan">Loans</Link>
                <p>This panel enables users track loans and apply for new ones instantly</p>
                <div className="options">
                    <Link className="options-links" to="/loan">Apply for loan</Link>
                    <button className="pay-button" onClick={()=>{setOpenPayModal(true);setData("loan")}}>Pay loan</button>
                </div>

            </div>
            
            <div className="servicess">
                <i3 class="fa-solid fa-certificate"></i3>
                <Link className="services-links" to="/certificate">Certificates</Link>
                <p>Manage all you credit cards clearily in one place</p>
                <div className="options">
                    <Link className="options-links" to="/certificate">Apply for Certificate</Link>
                </div>
            </div>
            
            <div className="servicess">
                <i3 class="fa-solid fa-money-bill"></i3>
                <Link className="services-links" to="/bills">Bills</Link>
                <p>Manage all you credit cards clearily in one place</p>
                <div className="options">
                    <button className="pay-button" onClick={()=>{setOpenPayModal(true);setData("PAY BILLS")}}>Pay bill</button>
                </div>
            </div>
            <div className="servicess">
                <i3 class="fa-solid fa-bell"></i3>
                <Link className="services-links" to="/reminders">Reminders</Link>
                <p>Manage all you credit cards clearily in one place</p>
                <div className="options">
                <button className="set-button" onClick={()=>{setOpenReminderModal(true);}}>Set reminder</button>
                </div>
            </div>
            <div className="servicess">
            <i3 class="fa-solid fa-hand-holding-dollar"></i3>
                <Link className="services-links" to="/reminders">Donating</Link>
                <p>Manage all you credit cards clearily in one place</p>
                <div className="options">
                <button className="pay-button" onClick={()=>{setOpenPayModal(true);setData("DONATIONS")}}>Donate</button>
                </div>
            </div>
           </div>
            {openPayModal && <PayModal data={data} openPayModal={openPayModal} setOpenPayModal={setOpenPayModal}/>}
            {openReminderModal && <ReminderModal openReminderModal={openReminderModal} setOpenReminderModal={setOpenReminderModal}/>}
            {OpenCreditCardModal && <CreditCardModal OpenCreditCardModal={OpenCreditCardModal}  setOpenCreditCardModal={setOpenCreditCardModal}/>}
        </div>
    );
 }
 export default ServiceComponents;