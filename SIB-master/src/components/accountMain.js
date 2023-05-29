import React from "react";
import "./accountMainstyles.css"
import { useState } from "react";
function AccountMain(){
    const [selectedOption, setSelectedOption] = useState('');
    const [showBankName, setShowBankName] = useState(false);
    const [showCountry, setShowCountry] = useState(false);
  
    const handleOptionChange = (e) => {
      const selectedValue = e.target.value;
      setSelectedOption(selectedValue);
  
      if (selectedValue === 'domestic') {
        setShowBankName(true);
        setShowCountry(false);
      } else if (selectedValue === 'international') {
        setShowBankName(true);
        setShowCountry(true);
      } else {
        setShowBankName(false);
        setShowCountry(false);
      }
    };
    return(
        <div className="account-main">
            <div className="accbalance">
                <i class="fa-sharp fa-solid fa-sack-dollar"></i>
                <label for i>Savings</label>
                <hh>Account ID: <br/> <pp2>1234 5678 8911 4576</pp2> </hh>
                <br/>
                <hh>Balance:<br/> <pp2>$ 5,000,000</pp2> </hh>
                <button className="closeAcc"> Close account</button>
            </div>
            <div className="transfer">
                <div className="main-accTitle">
                    Transfer money
                </div>
                <div className="radios">
                <ppp>Internal</ppp>
                <input
                type="radio"
                value="internal"
                checked={selectedOption === 'internal'}
                onChange={handleOptionChange}
                />
                <br />
                <ppp>Domestic</ppp>
                <input
                type="radio"
                value="domestic"
                checked={selectedOption === 'domestic'}
                onChange={handleOptionChange}
                />
                
                {showBankName && (
                    <div className="tttt">
                        Bank Name:
                        <input className="tttt2" type="text" />
                    </div>
                )}
                <br />
                <ppp>International</ppp>
                <input
                    type="radio"
                    value="international"
                    checked={selectedOption === 'international'}
                    onChange={handleOptionChange}
                />
                </div>
            
                {showBankName && showCountry && (
                    <div className="tttt">
                        Bank Name:
                        <input className="tttt2" type="text" />
                        <br />
                        Country:
                        <input className="tttt3" type="text" />
                    </div>
                )}
                <br />
                <div className="tt">
                Amount:
                <input className="ttt2" type="text" />
                <br />
                Account ID:
                <input className="ttt" type="text" />
                </div>
                <button className="transferr">Transfer</button>
            </div>
        </div>
    );
}
export default AccountMain;