import React from "react";
import { useState } from "react";
import "../components/payCardstyles.css";

function PayCard(){
    const showAlert = (message) => {
        alert(message);
      };
    const [paymentType, setPaymentType] = useState("full");
    const [partialAmount, setPartialAmount] = useState("");
  
    const handlePaymentTypeChange = (event) => {
      setPaymentType(event.target.value);
    };
  
    const handlePartialAmountChange = (event) => {
      setPartialAmount(event.target.value);
    };
  
    return(
        <div className="pay-card">
            <div className="paying">
                <div className="paying-title">
                    Pay credit card
                </div>
                <div className="pay-cc">
                    <form className="ccpform">
                        <div className="full">
                            <p6>Pay Full Amount</p6>
                           <input
                                type="radio"
                                name="paymentType"
                                value="full"
                                checked={paymentType === "full"}
                                onChange={handlePaymentTypeChange}
                            />
                            
                        </div>
                       
                        <br />
                        <div className="partially">
                            <p6>Pay Partial Amount</p6>
                            <input className="pd"
                                type="radio"
                                name="paymentType"
                                value="partial"
                                checked={paymentType === "partial"}
                                onChange={handlePaymentTypeChange}
                            />
                            
                        </div>
               
                        {paymentType === "partial" && (
                            <input
                                type="number"
                                placeholder="Enter partial amount"
                                value={partialAmount}
                                onChange={handlePartialAmountChange}
                            />
                        )}
                        <br />
                        <input type="submit" value="pay" onClick={() => showAlert("credit card payment done")} className="ccpay-button"/>
                    </form>
                </div>
            </div>
            <div className="due">
                <h8> Payment due date<br/><p8>25/7/2023</p8></h8>
            </div>

            <div className="reporting">
                <button onClick={()=>showAlert("done")} className="lost-stolen">Report lost/stolen</button>
            </div>
            
        </div>
    );
}
export default PayCard;