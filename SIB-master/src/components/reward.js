import React, { useState } from 'react';
import "./rewards.css"

const Rewards = () => {
  const showAlert = (message) => {
    alert(message);
  };
  const [selectedButton, setSelectedButton] = useState('');
  const [showButtons, setShowButtons] = useState(true);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
    setShowButtons(false);
  };

  const handleBackClick = () => {
    setShowButtons(true);
    setSelectedButton('');
  };

  return (
    <div className='rewards-main'>
      {showButtons ? (
        <div className="rewards-container">
          <button
            className={`button ${selectedButton === 'cashback' ? 'active' : ''}`}
            onClick={() => handleButtonClick('cashback')}
          >
            Cash Back
          </button>
          <button
            className={`button ${selectedButton === 'vouchers' ? 'active' : ''}`}
            onClick={() => handleButtonClick('vouchers')}
          >
            Vouchers
          </button>
          <button
            className={`button ${selectedButton === 'topup' ? 'active' : ''}`}
            onClick={() => handleButtonClick('topup')}
          >
            Top Up Mobile Phones
          </button>
        </div>
      ) : (
        <button className="back-button" onClick={handleBackClick}>
          Back
        </button>
      )}

      {selectedButton === 'cashback' && !showButtons && (
        <div>
          <label>
            Amount of Points:
            <input type="text" />
          </label>
          <button onClick={()=>showAlert("done")}>Redeem</button>
        </div>
      )}
      {selectedButton === 'vouchers' && !showButtons && (
        <div>
          <h4>Available Vouchers:</h4>
          <ul>
            <li>Voucher 1</li>
            <li>Voucher 2</li>
            <li>Voucher 3</li>
          </ul>
        </div>
      )}
      {selectedButton === 'topup' && !showButtons && (
        <div>
          <label>
            Phone Number:
            <input type="text" />
          </label>
          <br />
          <label>
            Amount:
            <input type="text" />
          </label>
          <button onClick={()=>showAlert("done")}>Redeem</button>
        </div>
      )}
    </div>
  );
};

export default Rewards;

